`use strict`;

const btnsNavigationContainer = document.querySelector(`.close-open-btns`);
const btnsNavigation = document.querySelectorAll(`.btn--menu`);
const btnExplore = document.querySelector(`.btn--explore`);


const navigation = document.querySelector(`.navigation`);
const sections = document.querySelectorAll(`.section`);
const navLi = document.querySelectorAll(`.nav-li`);

const planetsList = document.querySelector(`.planets-list`);
const planetsNameLi = document.querySelectorAll(`.planets-list--li`);

const planetNameAtags = document.querySelectorAll(`.planet-name--inList`);
planetNameAtags.forEach(el => {
    el.addEventListener(`click`, (e) => {
        e.preventDefault();
    })
})

const planetImgHTNL = document.querySelector(`.planet-img`);
const planetNameHTML = document.querySelector(`.planet-name`);
const aboutPlanetHTML = document.querySelector(`.about-planet`);
const distanceHTML = document.querySelector(`.distance`);
const durationHTML = document.querySelector(`.duration`);




let sectionName;
let data;
let destinationObj;

const getData = function() {
    fetch(`./app/data.json`).then(res => res.json()).then( d => {
        data = d;
    });
}

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
    sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);

    navLi.forEach(el => {
        if(el.classList.contains(`li-active`)) el.classList.remove(`li-active`);
        if(el.dataset.sectionTitle === sectionName) el.classList.add(`li-active`);
    })

    if(!data) alert(`something went wrong ...  try again`);

    if(data) {
        console.log(data)
        destinationObj = data.destinations;
        console.log(destinationObj)
    }
})



planetsList.addEventListener(`click`, (e) => {

    let planetName

    if(!e.target.closest(`.planet-name--inList`)) return;

    if(e.target.closest(`.planet-name--inList`)) {
        planetName = e.target.closest(`.planet-name--inList`).textContent;
        planetsNameLi.forEach(el => {
            if(el.classList.contains(`li-active`)) el.classList.remove(`li-active`);
        });
        e.target.closest(`.planets-list--li`).classList.add(`li-active`);
    }

    console.log(planetName);

    destinationObj.forEach(el => {

        if(planetName.toUpperCase() === el.name.toUpperCase()) {
            planetImgHTNL.src = `./app/assets/destination/image-${planetName.toLowerCase()}.png`;
            planetNameHTML.textContent = `${el.name}`;
            aboutPlanetHTML.textContent = `${el.description}`;
            distanceHTML.textContent = `${el.distance}`;
            durationHTML.textContent = `${el.travel}`;
        }
    })

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


