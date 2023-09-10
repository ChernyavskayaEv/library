document.addEventListener('DOMContentLoaded', () => {
  //consts for burger menu
  const nav = document.querySelector('.header__nav');
  const bodyContent = document.querySelector('.body');
  const headerNavBtn = document.querySelector('.header__nav-btn');

  const hiddenNav = () => {
    headerNavBtn.classList.remove('header__nav-btn_active');
    nav.classList.remove('header__nav_active');
  };

  //const for authorization menu
  const profileMenu = document.querySelector('.profile__menu');

  const hiddenProfileMenu = () => {
    profileMenu.classList.remove('profile__menu_active');
  };

  //const for window LOG IN, REGISTER, Profile, buy-card
  const fixedOverlay = document.querySelector('.fixed-overlay');
  const modalLogIn = document.querySelector('.modal__login');
  const modalRegister = document.querySelector('.modal__register');
  const modalProfile = document.querySelector('.modal_profile');
  const modalBuyCard = document.querySelector('.modal__buy-card');

  const openModalLogin = () => {
    fixedOverlay.classList.remove('hidden');
    modalLogIn.classList.remove('hidden');
    setTimeout(() => {
      fixedOverlay.classList.remove('opacity');
      modalLogIn.classList.remove('opacity');
    }, 100);
  };

  const openModalRegister = () => {
    fixedOverlay.classList.remove('hidden');
    modalRegister.classList.remove('hidden');
    setTimeout(() => {
      fixedOverlay.classList.remove('opacity');
      modalRegister.classList.remove('opacity');
    }, 100);
  };

  const closeModalWindows = () => {
    fixedOverlay.classList.add('opacity');
    modalRegister.classList.add('opacity');
    modalLogIn.classList.add('opacity');
    modalProfile.classList.add('opacity');
    modalBuyCard.classList.add('opacity');
    setTimeout(() => {
      fixedOverlay.classList.add('hidden');
      modalRegister.classList.add('hidden');
      modalLogIn.classList.add('hidden');
      modalProfile.classList.add('hidden');
      modalBuyCard.classList.add('hidden');
    }, 1000);
  };

  //consts for carousel in the About block
  const photoGallerySlider = document.querySelector('.photo-gallery-slider');
  const sliderPaginationItems = photoGallerySlider.querySelectorAll(
    '.about__slider_item'
  );
  const arrowSliderLeft = photoGallerySlider.querySelector('.left');
  const arrowSliderRight = photoGallerySlider.querySelector('.right');

  //consts for slider in Favorites block
  const favoritesBooks = document.querySelectorAll('.favorites__books');

  //--------
  bodyContent.addEventListener('click', (event) => {
    console.log(event.target);

    //burger menu
    if (event.target.closest('.header__nav-btn')) {
      event.preventDefault();
      hiddenProfileMenu();
      headerNavBtn.classList.toggle('header__nav-btn_active');
      nav.classList.toggle('header__nav_active');
    }
    if (
      event.target.closest('.header__link') ||
      event.target.closest('.main') ||
      event.target.closest('.profile__menu-item')
    ) {
      hiddenNav();
      hiddenProfileMenu();
    }

    //Authorization menu when clicking on the user icon
    if (event.target.closest('.header__icon')) {
      event.preventDefault();
      profileMenu.classList.add('profile__menu_active');
      hiddenNav();
    }

    //Modal window LOG IN
    if (
      event.target.closest('.log-in') ||
      event.target.closest('.librarycard__login-button') ||
      event.target.classList.contains('book__button')
    ) {
      openModalLogin();
    }

    //Modal window REGISTER
    if (
      event.target.closest('.register') ||
      event.target.closest('.librarycard__signup-button')
    ) {
      openModalRegister();
    }

    if (event.target.closest('.modal__login_register')) {
      if (event.target.closest('.modal__register')) {
        closeModalWindows();
        setTimeout(() => {
          openModalLogin();
        }, 1100);
      } else {
        closeModalWindows();
        setTimeout(() => {
          openModalRegister();
        }, 1100);
      }
    }

    //closing modal windows
    if (
      event.target.classList.contains('fixed-overlay') ||
      event.target.closest('.close-btn')
    ) {
      closeModalWindows();
    }

    //Carousel in the About block
    if (event.target.closest('.about')) {
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
      let newPositionSliders =
        currentPositionSliders - necessaryShiftSlider * 475;

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
    }

    //Slider in Favorites block
    const season = event.target.id;
    if (season) {
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

  document.addEventListener('keyup', (event) => {
    if (event.code === 'Escape') {
      hiddenNav();
      hiddenProfileMenu();
      closeModalWindows();
    }
  });

  //user data
  const symbols = '0123456789ABCDEF';
  const getCardNumber = () =>
    Array.from(
      new Array(9),
      (x) => symbols[Math.floor(Math.random() * 16)]
    ).join('');

  class User {
    constructor({ first_name, last_name, email, password }) {
      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;
      this.cardNumber = getCardNumber();
      this.password = password;
      this.books = [];
      this.visits = 1;
      this.bonuses = 0;
    }
  }

  const storage = window.localStorage;

  const saveUser = (userData) => {
    const { cardNumber, email } = userData;
    storage.setItem(email, JSON.stringify(userData));
    let cardMapStr = storage.getItem('cardsMapping');
    const cardMap = cardMapStr ? JSON.parse(cardMapStr) : {};
    cardMap[cardNumber] = email;
    storage.setItem('cardsMapping', JSON.stringify(cardMap));
  };

  const getUser = (value) => {
    let userData = storage.getItem(value);
    if (!userData) {
      const cardMapStr = storage.getItem('cardsMapping');
      if (!cardMapStr) return;
      const cardMap = JSON.parse(cardMapStr);
      const email = cardMap[value];
      if (!email) return;
      userData = storage.getItem(email);
    }
    return JSON.parse(userData);
  };

  //registering
  const formRegister = document.querySelector('.modal__register');

  const registering = (event) => {
    event.preventDefault();

    let errorRegister = formRegisterValidate(formRegister);

    let registeringData = new FormData(formRegister);

    if (errorRegister === 0) {
      const user = new User({
        first_name: registeringData.get('register-first-name'),
        last_name: registeringData.get('register-last-name'),
        email: registeringData.get('register-email'),
        password: registeringData.get('register-password'),
      });
      console.log(user);
      saveUser(user);
      formRegister.reset();
      closeModalWindows();
      //дописать то что происходит при авторизации
    }
  };

  const formRegisterValidate = (formRegister) => {
    let error = 0;
    let registerReqs = document.querySelectorAll('.register-req');

    for (let registerReq of registerReqs) {
      formRemoveError(registerReq);

      if (registerReq.classList.contains('register-email')) {
        if (emailTest(registerReq)) {
          formAddError(registerReq);
          error++;
        }
      } else if (
        registerReq.classList.contains('register-password') &&
        [...registerReq.value].length < 8
      ) {
        formAddError(registerReq);
        error++;
      } else {
        if (registerReq.value === '') {
          formAddError(registerReq);
          error++;
        }
      }
    }
    return error;
  };

  formRegister.addEventListener('submit', registering);

  //authorization
  const formLogIn = document.querySelector('.modal__login');

  const authorization = (event) => {
    event.preventDefault();

    let errorAuthorization = formLogInValidate(formLogIn);

    let authorizationData = new FormData(formLogIn);

    if (errorAuthorization === 0) {
      console.log(authorizationData);
      let emailOrCard = authorizationData.get('login-email-or-card');
      let password = authorizationData.get('login-password');
      let authorizedUser = getUser(emailOrCard);

      if (authorizedUser && authorizedUser.password === password) {
        authorizedUser.visits += 1;
        saveUser(authorizedUser);
        formLogIn.reset();
        closeModalWindows();
        //дописать то что происходит при авторизации
      }
    }
  };

  const formLogInValidate = (formLogIn) => {
    let error = 0;
    let logInReqs = document.querySelectorAll('.login-req');

    for (let logInReq of logInReqs) {
      formRemoveError(logInReq);

      if (
        logInReq.classList.contains('login-password') &&
        [...logInReq.value].length < 8
      ) {
        formAddError(logInReq);
        error++;
      } else {
        if (logInReq.value === '') {
          formAddError(logInReq);
          error++;
        }
      }
    }
    return error;
  };

  formLogIn.addEventListener('submit', authorization);

  const formAddError = (validatedField) => {
    validatedField.classList.add('error');
  };

  const formRemoveError = (validatedField) => {
    validatedField.classList.remove('error');
  };

  const emailTest = (validatedField) => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
      validatedField.value
    );
  };

  const form = document.querySelector('.form-library-card');

  form.addEventListener('click', (event) => {
    console.log(event.target);

    event.preventDefault();
  });
});
