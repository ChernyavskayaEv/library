//Carousel in the About block
const photoGallerySlider = document.querySelector('.photo-gallery-slider');
const sliderPaginationItems = photoGallerySlider.querySelectorAll(
  '.about__slider_item'
);
const arrowSliderLeft = photoGallerySlider.querySelector('.left');
const arrowSliderRight = photoGallerySlider.querySelector('.right');

photoGallerySlider.addEventListener('click', (event) => {
  let activeSlider = document.querySelector('.active');

  let orderActiveSlider =
    [...sliderPaginationItems].findIndex(
      (item) => item == activeSlider.closest('.about__slider_item')
    ) + 1;

  let currentPositionSliders = document
    .querySelector('.about__photo-gallery_items')
    .style.transform.match(/-?\d+/gm)[0];

  let orderNewSlider;

  if (event.target.closest('.about__slider_item')) {
    orderNewSlider =
      [...sliderPaginationItems].findIndex(
        (item) => item == event.target.closest('.about__slider_item')
      ) + 1;
  }

  if (event.target.closest('.left')) {
    orderNewSlider = orderActiveSlider - 1;
  }

  if (event.target.closest('.right')) {
    orderNewSlider = orderActiveSlider + 1;
  }

  let necessaryShiftSlider = orderNewSlider - orderActiveSlider;
  let newPositionSliders = currentPositionSliders - necessaryShiftSlider * 475;

  const moveSlider = () => {
    document.querySelector(
      '.about__photo-gallery_items'
    ).style.transform = `translateX(${newPositionSliders}px)`;
  };

  moveSlider();

  activeSlider.classList.remove('active');
  sliderPaginationItems[orderNewSlider - 1].firstElementChild.classList.add(
    'active'
  );

  if (orderNewSlider > 1 && orderNewSlider < 5) {
    arrowSliderLeft.removeAttribute('disabled');
    arrowSliderRight.removeAttribute('disabled');
  }

  if (orderNewSlider === 1) {
    arrowSliderLeft.setAttribute('disabled', 'disabled');
  }

  if (orderNewSlider === 5) {
    arrowSliderRight.setAttribute('disabled', 'disabled');
  }
});

//Slider in Favorites block
const favoritesSeason = document.querySelector('.favorites__season');
const favoritesBooks = document.querySelectorAll('.favorites__books');

favoritesSeason.addEventListener('click', (event) => {
  const season = event.target.id;
  if (season) {
    console.log(event.target.id);
    favoritesBooks.forEach((books) => {
      books.classList.add('opacity');
      setTimeout(() => {
        books.classList.add('hidden');
        document.querySelector(`.${season}`).classList.remove('hidden');
      }, 1000);
    });
    setTimeout(() => {
      document.querySelector(`.${season}`).classList.remove('opacity');
    }, 1100);
  }
});

const form = document.querySelector('.form');

form.addEventListener('click', (event) => {
  event.preventDefault();
});
