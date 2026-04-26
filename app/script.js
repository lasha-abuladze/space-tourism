`use strict`;

const btnsNavigationContainer = document.querySelector(`.close-open-btns`);
const btnsNavigation = document.querySelectorAll(`.btn--menu`);
const navigation = document.querySelector(`.navigation`);


btnsNavigationContainer.addEventListener(`click`, (e) => {
    btnsNavigation.forEach(el => el.classList.toggle(`display-none`));
    navigation.classList.toggle(`navigation--closed`);
})