`use strict`;

const btnsNavigationContainer = document.querySelector(`.close-open-btns`);
const btnsNavigation = document.querySelectorAll(`.btn--menu`);
const navigation = document.querySelector(`.navigation`);
const sections = document.querySelectorAll(`.section`)

// const mainection = document.querySelector(`.main-section`);

sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);

window.addEventListener(`resize`, () => {
    sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);
})




btnsNavigationContainer.addEventListener(`click`, (e) => {
    btnsNavigation.forEach(el => el.classList.toggle(`display-none`));
    navigation.classList.toggle(`navigation--closed`);
})


// console.log(document.documentElement.scrollHeight)