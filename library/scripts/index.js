document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('winter').checked = true;
  document.getElementById('spring').checked = false;
  document.getElementById('summer').checked = false;
  document.getElementById('autumn').checked = false;

  //consts for burger menu
  const nav = document.querySelector('.header__nav');
  const bodyContent = document.querySelector('.body');
  const headerNavBtn = document.querySelector('.header__nav-btn');

  const hiddenNav = () => {
    headerNavBtn.classList.remove('header__nav-btn_active');
    nav.classList.remove('header__nav_active');
    nav.style.height = '510px';
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
  const logInReqs = document.querySelectorAll('.login-req');
  const registerReqs = document.querySelectorAll('.register-req');
  const buyCardReqs = document.querySelectorAll('.card-req');

  let activeUser;

  const formRemoveError = (validatedField) => {
    validatedField.classList.remove('error');
  };

  const removeError = (fieldsError) => {
    for (let fieldError of fieldsError) {
      formRemoveError(fieldError);
    }
  };

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

  //consts for profile-menu
  const iconInitialsUser = document.querySelector('.header__icon-name');
  const iconImg = document.querySelector('.header__icon-img');
  const profileMenuTitle = document.querySelector('.profile__menu-title');
  const profileMenuCard = document.querySelector('.profile__menu-card');
  const profileMenuLogIn = document.querySelector('.log-in');
  const profileMenuRegister = document.querySelector('.register');
  const profileMenuProfile = document.querySelector('.my-profile');
  const profileMenuLogOut = document.querySelector('.log-out');

  //consts for Digital Library Cards
  const blockGetCard = document.querySelector('.librarycard__get-card');
  const blockVisitProfile = document.querySelector(
    '.librarycard__visit-profile'
  );
  const readersName = document.querySelector('.readers-name');
  const readersCard = document.querySelector('.readers-card');
  const checkCard = document.querySelector('.form-library-card__button');
  const dataActiveUser = document.querySelector('.profile__data');
  const profileVisits = document.querySelector('.profile__score-visits');
  const profileBonuses = document.querySelector('.profile__score-bonuses');
  const profileBooks = document.querySelector('.profile__score-books');

  const showProfileInfo = (user) => {
    readersName.value = `${user.first_name} ${user.last_name}`;
    readersCard.value = `${user.cardNumber}`;
    profileVisits.textContent = user.visits;
    profileBonuses.textContent = user.bonuses;
    profileBooks.textContent = user.books.length;
    checkCard.classList.add('hidden');
    dataActiveUser.classList.remove('hidden');
  };
  const hiddenProfileInfo = () => {
    readersName.value = '';
    readersCard.value = '';
    checkCard.classList.remove('hidden');
    dataActiveUser.classList.add('hidden');
  };
  hiddenProfileInfo();

  //--------
  const resetBookButton = () => {
    [...document.querySelectorAll('.book__button')].map((button) => {
      button.removeAttribute('disabled');
      button.querySelector('.buy').classList.remove('hidden');
      button.querySelector('.own').classList.add('hidden');
    });
  };

  bodyContent.addEventListener('click', (event) => {
    hiddenProfileMenu();

    //burger menu
    if (event.target.closest('.header__nav-btn')) {
      event.preventDefault();
      headerNavBtn.classList.toggle('header__nav-btn_active');
      nav.classList.toggle('header__nav_active');
      if (document.querySelector('.header__nav_active')) {
        if (
          window.innerHeight <
          document.querySelector('.header__nav_active').clientHeight
        ) {
          document.querySelector(' .header__list').style.gap = 0;
          nav.style.height = '320px';
        }
      }
    } else {
      hiddenNav();
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
      (event.target.closest('.book__button') &&
        !document
          .querySelector('.profile__menu-title')
          .classList.contains('hidden'))
    ) {
      modalLogIn.reset();
      removeError(logInReqs);
      openModalLogin();
    }

    //Modal window REGISTER
    if (
      event.target.closest('.register') ||
      event.target.closest('.librarycard__signup-button')
    ) {
      modalRegister.reset();
      removeError(registerReqs);

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

    //Modal window My Profile
    if (
      event.target.classList.contains('my-profile') ||
      event.target.classList.contains('visit-profile')
    ) {
      fixedOverlay.classList.remove('hidden');
      modalProfile.classList.remove('hidden');
      setTimeout(() => {
        fixedOverlay.classList.remove('opacity');
        modalProfile.classList.remove('opacity');
      }, 100);
    }

    //Modal window Buy Card
    if (
      event.target.closest('.book__button') &&
      !iconInitialsUser.classList.contains('hidden') &&
      !iconInitialsUser.classList.contains('buyCardTrue')
    ) {
      modalBuyCard.reset();
      removeError(buyCardReqs);

      fixedOverlay.classList.remove('hidden');
      modalBuyCard.classList.remove('hidden');
      setTimeout(() => {
        fixedOverlay.classList.remove('opacity');
        modalBuyCard.classList.remove('opacity');
      }, 100);
    }

    //closing modal windows
    if (
      event.target.classList.contains('fixed-overlay') ||
      event.target.closest('.close-btn')
    ) {
      closeModalWindows();
    }

    //copy user card
    if (event.target.classList.contains('icon_copy')) {
      let cardNumber = document.querySelector('.card-number').innerHTML;
      navigator.clipboard.writeText(cardNumber);
    }

    //Carousel in the About block (1 stage)
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
      } else if (event.target.closest('.left')) {
        orderNewSlider = orderActiveSlider - 1;
      } else if (event.target.closest('.right')) {
        orderNewSlider = orderActiveSlider + 1;
      } else {
        return;
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
        arrowSliderRight.removeAttribute('disabled');
        arrowSliderLeft.setAttribute('disabled', 'disabled');
      }

      if (orderNewSlider === 5) {
        arrowSliderLeft.removeAttribute('disabled');
        arrowSliderRight.setAttribute('disabled', 'disabled');
      }
    }

    //Slider in Favorites block (1 stage)
    if (
      event.target.id === 'winter' ||
      event.target.id === 'spring' ||
      event.target.id === 'summer' ||
      event.target.id === 'autumn'
    ) {
      document.querySelectorAll('.season_input').forEach((season) => {
        season.checked = false;
      });
      event.target.checked = true;
      const season = event.target.id;
      favoritesBooks.forEach((books) => {
        books.classList.add('opacity');
        setTimeout(() => {
          books.classList.add('hidden');
          document.querySelector(`.${season}`).classList.remove('hidden');
        }, 500);
      });
      setTimeout(() => {
        document.querySelector(`.${season}`).classList.remove('opacity');
      }, 510);
    }

    //buy books
    if (
      event.target.closest('.book__button') &&
      !iconInitialsUser.classList.contains('hidden') &&
      iconInitialsUser.classList.contains('buyCardTrue')
    ) {
      const bookInfo = event.target.closest('.book__info');
      const bookName = bookInfo.querySelector('.book__name').textContent;
      const bookAuthor = bookInfo
        .querySelector('.book__author')
        .textContent.replace('By ', '');

      activeUser.books.push(`${bookName}, ${bookAuthor}`);
      activeUser.booksId.push(
        `${bookInfo.querySelector('.book__button').getAttribute('id')}`
      );
      saveUser(activeUser);
      fillMyProfile(activeUser);
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
      this.booksId = [];
      this.books = [];
      this.visits = 1;
      this.bonuses = 0;
      this.buyCard = false;
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

  //active account
  const activeAccount = (user) => {
    let initialsUser = `${user.first_name[0].toUpperCase()}${user.last_name[0].toUpperCase()}`;

    iconImg.classList.add('hidden');
    iconInitialsUser.textContent = initialsUser;
    iconInitialsUser.setAttribute(
      'title',
      `${user.first_name} ${user.last_name}`
    );
    iconInitialsUser.classList.remove('hidden');

    profileMenuTitle.classList.add('hidden');
    profileMenuLogIn.classList.add('hidden');
    profileMenuRegister.classList.add('hidden');
    profileMenuCard.classList.remove('hidden');
    profileMenuProfile.classList.remove('hidden');
    profileMenuLogOut.classList.remove('hidden');

    showProfileInfo(user);
    blockGetCard.classList.add('hidden');
    blockVisitProfile.classList.remove('hidden');

    fillMyProfile(user);

    logOut(user);

    //buy library card
    modalBuyCard.addEventListener('submit', (event) => {
      event.preventDefault();

      if (formBuyCardValidate() === 0) {
        user.buyCard = true;
        user.bonuses = 1240;
        iconInitialsUser.classList.add('buyCardTrue');
        saveUser(user);
        fillMyProfile(user);
        modalBuyCard.reset();
        closeModalWindows();
      }
    });

    const formBuyCardValidate = () => {
      let error = 0;

      for (let buyCardReq of buyCardReqs) {
        formRemoveError(buyCardReq);
        if (
          buyCardReq.classList.contains('number-card-data') &&
          [...buyCardReq.value].length !== 16
        ) {
          formAddError(buyCardReq);
          error++;
        } else if (
          buyCardReq.classList.contains('expiration-code-data-month') &&
          [...buyCardReq.value].length !== 2
        ) {
          formAddError(buyCardReq);
          error++;
        } else if (
          buyCardReq.classList.contains('expiration-code-data-year') &&
          [...buyCardReq.value].length !== 2
        ) {
          formAddError(buyCardReq);
          error++;
        } else if (
          buyCardReq.classList.contains('cvc-card-data') &&
          [...buyCardReq.value].length !== 3
        ) {
          formAddError(buyCardReq);
          error++;
        } else {
          if (buyCardReq.value === '') {
            formAddError(buyCardReq);
            error++;
          }
        }
      }
      return error;
    };
  };

  //fill My Profile
  const modalProfileInitials = document.querySelector(
    '.modal_profile__initials'
  );
  const modalProfilefullName = document.querySelector(
    '.modal_profile__fullname'
  );
  const modalProfileVisits = document.querySelector(
    '.modal_profile__score-visits'
  );
  const modalProfileBonuses = document.querySelector(
    '.modal_profile__score-bonuses'
  );
  const modalProfileBooks = document.querySelector(
    '.modal_profile__score-books'
  );
  const modalProfileListBooks = document.querySelector('.list-books');
  const modalProfileCardNumber = document.querySelector('.card-number');

  const fillMyProfile = (user) => {
    profileMenuCard.textContent = '';
    profileMenuCard.textContent = `${user.cardNumber}`;
    modalProfileInitials.textContent = `${user.first_name[0].toUpperCase()}${user.last_name[0].toUpperCase()}`;
    modalProfilefullName.textContent = `${user.first_name} ${user.last_name}`;
    modalProfileVisits.textContent = user.visits;
    modalProfileBonuses.textContent = user.bonuses;
    modalProfileBooks.textContent = user.books.length;

    showProfileInfo(user);

    if (user.buyCard) {
      iconInitialsUser.classList.add('buyCardTrue');
    }
    if (user.books.length > 0) {
      modalProfileListBooks.textContent = '';

      user.books.map((item) => {
        let book = document.createElement('li');
        book.textContent = item;
        modalProfileListBooks.append(book);
      });

      user.booksId.map((bookId) => {
        let bookButton = document.getElementById(`${bookId}`);
        bookButton.setAttribute('disabled', 'disabled');
        bookButton.querySelector('.buy').classList.add('hidden');
        bookButton.querySelector('.own').classList.remove('hidden');
      });
    }
    if (user.books.length === 0) {
      modalProfileListBooks.textContent = '';
    }
    modalProfileCardNumber.textContent = user.cardNumber;
  };

  //log out
  const logOut = (user) => {
    profileMenuLogOut.addEventListener('click', (event) => {
      resetBookButton();

      iconImg.classList.remove('hidden');
      iconInitialsUser.textContent = '';
      iconInitialsUser.removeAttribute('title');
      iconInitialsUser.classList.add('hidden');
      iconInitialsUser.classList.remove('buyCardTrue');

      profileMenuTitle.classList.remove('hidden');
      profileMenuLogIn.classList.remove('hidden');
      profileMenuRegister.classList.remove('hidden');
      profileMenuCard.classList.add('hidden');
      profileMenuProfile.classList.add('hidden');
      profileMenuLogOut.classList.add('hidden');

      hiddenProfileInfo();
      blockGetCard.classList.remove('hidden');
      blockVisitProfile.classList.add('hidden');
    });
  };

  //registering (2 stage)
  modalRegister.addEventListener('submit', (event) => {
    event.preventDefault();

    let registeringData = new FormData(modalRegister);

    if (formRegisterValidate() === 0) {
      const user = new User({
        first_name: registeringData.get('register-first-name'),
        last_name: registeringData.get('register-last-name'),
        email: registeringData.get('register-email'),
        password: registeringData.get('register-password'),
      });
      saveUser(user);
      modalRegister.reset();
      closeModalWindows();
      activeAccount(user);
      activeUser = user;
    }
  });

  const formRegisterValidate = () => {
    let error = 0;

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

  //authorization (3 stage)
  modalLogIn.addEventListener('submit', (event) => {
    event.preventDefault();

    let authorizationData = new FormData(modalLogIn);

    if (formLogInValidate() === 0) {
      let emailOrCard = authorizationData.get('login-email-or-card');
      let password = authorizationData.get('login-password');
      let authorizedUser = getUser(emailOrCard);

      if (authorizedUser && authorizedUser.password === password) {
        authorizedUser.visits += 1;
        saveUser(authorizedUser);
        modalLogIn.reset();
        closeModalWindows();
        activeAccount(authorizedUser);
        activeUser = authorizedUser;
      }
    }
  });

  const formLogInValidate = () => {
    let error = 0;

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

  const formAddError = (validatedField) => {
    validatedField.classList.add('error');
  };

  const emailTest = (validatedField) => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
      validatedField.value
    );
  };

  document
    .querySelector('.form-library-card__button')
    .addEventListener('click', (event) => {
      event.preventDefault();

      if (
        readersName.value != '' &&
        readersCard.value != '' &&
        getUser(readersCard.value)
      ) {
        const checkUser = getUser(readersCard.value);
        if (
          readersName.value === `${checkUser.first_name} ${checkUser.last_name}`
        ) {
          showProfileInfo(checkUser);
          setTimeout(() => {
            hiddenProfileInfo();
          }, 10000);
        }
      }
    });
});
