`use strict`;

const btnsNavigationContainer = document.querySelector(`.close-open-btns`);
const btnsNavigation = document.querySelectorAll(`.btn--menu`);
const btnExplore = document.querySelector(`.btn--explore`);


const navigation = document.querySelector(`.navigation`);
const sections = document.querySelectorAll(`.section`);
const navLi = document.querySelectorAll(`.nav-li`);


let sectionName;
// let data

// const getData = function() {
//     fetch(`./app/data.json`).then(res => res.json()).then( d => {
//         data = d;
//     });
// }

getData();


sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);

window.addEventListener(`resize`, () => {
    sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);
})

btnsNavigationContainer.addEventListener(`click`, (e) => {
    btnsNavigation.forEach(el => el.classList.toggle(`display-none`));
    navigation.classList.toggle(`navigation--closed`);
})

btnExplore.addEventListener(`click`, () => {
    sectionName = `destination`;

    sections.forEach(el => {
        if(!el.classList.contains(`display-none`)) el.classList.add(`display-none`);
        if(el.dataset.sectionTitle === sectionName) el.classList.remove(`display-none`);
    })

    navLi.forEach(el => {
        if(el.classList.contains(`li-active`)) el.classList.remove(`li-active`);
        if(el.dataset.sectionTitle === sectionName) el.classList.add(`li-active`);
    })

    // if(!data) alert(`something went wrong ...  try again`);
    // if(data) console.log(data);
})




navigation.addEventListener(`click`, (e) => {

    if(!e.target.closest(`.nav-a`)) return;

    if(e.target.closest(`.nav-a`)) {

        sectionName = e.target.closest(`.nav-a`).dataset.sectionTitle;

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


