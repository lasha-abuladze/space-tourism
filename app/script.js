`use strict`;

const btnsNavigationContainer = document.querySelector(`.close-open-btns`);
const btnsNavigation = document.querySelectorAll(`.btn--menu`);
const navigation = document.querySelector(`.navigation`);
const sections = document.querySelectorAll(`.section`);
const navLi = document.querySelectorAll(`.nav-li`);


sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);

window.addEventListener(`resize`, () => {
    sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);
})

btnsNavigationContainer.addEventListener(`click`, (e) => {
    btnsNavigation.forEach(el => el.classList.toggle(`display-none`));
    navigation.classList.toggle(`navigation--closed`);
})




navigation.addEventListener(`click`, (e) => {

    // sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);
    // window.addEventListener(`resize`, () => {
    //     sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);
    // })

    if(!e.target.closest(`.nav-a`)) return;

    if(e.target.closest(`.nav-a`)) {
        // sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);
        // window.addEventListener(`resize`, () => {
        //     sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);
        // })


        const sectionName = e.target.closest(`.nav-a`).dataset.sectionTitle;

        sections.forEach(el => {
            if(!el.classList.contains(`display-none`)) el.classList.add(`display-none`);
            if(el.dataset.sectionTitle === sectionName) el.classList.remove(`display-none`);
        })

        sections.forEach(el => {
            if(el.dataset.sectionTitle === sectionName) el.style.height = `${document.documentElement.scrollHeight}px`;
        })

        navLi.forEach(el => {
            if(el.classList.contains(`li-active`)) el.classList.remove(`li-active`);
        })
        e.target.closest(`.nav-li`).classList.add(`li-active`);
    }
})
