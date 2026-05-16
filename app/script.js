`use strict`;

const btnsNavigationContainer = document.querySelector(`.close-open-btns`);
const btnsNavigation = document.querySelectorAll(`.btn--menu`);
const btnExplore = document.querySelector(`.btn--explore`);


const navigation = document.querySelector(`.navigation`);
const sections = document.querySelectorAll(`.section`);
const navLi = document.querySelectorAll(`.nav-li`);


const planetNameAtags = document.querySelectorAll(`.planet-name--inList`);
planetNameAtags.forEach(el => {
    el.addEventListener(`click`, (e) => {
        e.preventDefault();
    })
})



class App {

    #data;
    #sectionName;
    #dataOBJ;
    #index;

    constructor() {
        this.#getData();
        this.#toggleMenu();
        this.#navigateToSections();

        this.#updatePlanetUI();
    }


    // toggles the navigation menu and button visibility on click
    #toggleMenu() {
        btnsNavigationContainer.addEventListener(`click`, (e) => {
            btnsNavigation.forEach(el => el.classList.toggle(`display-none`));
            navigation.classList.toggle(`navigation--closed`);
        })
    }

    /// gets data from json 
    #getData() {
        fetch(`./app/data.json`).then(res => res.json()).then( d => {
            this.#data = d;
        });
    }

    // updates the page UI to display the selected section
    #navigateToSections() {

        navigation.addEventListener(`click`, (e) => {

            if(!this.#data) alert(`Something went wrong... Try again`);
            
            if(this.#data) {
                if(!e.target.closest(`.nav-a`)) return;

                if(e.target.closest(`.nav-a`)) {

                    this.#sectionName = e.target.closest(`.nav-a`).dataset.sectionTitle;

                    sections.forEach(el => {
                        if(!el.classList.contains(`display-none`)) el.classList.add(`display-none`);
                        if(el.dataset.sectionTitle === this.#sectionName) el.classList.remove(`display-none`);
                    })

                    sections.forEach(el => {
                        if(el.dataset.sectionTitle === this.#sectionName) el.style.height = `${document.documentElement.scrollHeight}px`;
                    })

                    navLi.forEach(el => {
                        if(el.classList.contains(`li-active`)) el.classList.remove(`li-active`);
                    })
                    e.target.closest(`.nav-li`).classList.add(`li-active`);
                }
            }

            this.#dataOBJ = this.#data[this.#sectionName];

        })
    }

    #updatePlanetUI() {
        const planetsList = document.querySelector(`.planets-list`);
        const planetsNameLi = document.querySelectorAll(`.planets-list--li`);
        const planetImgHTML = document.querySelector(`.planet-img`);
        const planetNameHTML = document.querySelector(`.planet-name`);
        const aboutPlanetHTML = document.querySelector(`.about-planet`);
        const distanceHTML = document.querySelector(`.distance`);
        const durationHTML = document.querySelector(`.duration`);


        planetsList.addEventListener(`click`, (e) => {

            if(!e.target.closest(`.planets-list--li`)) return;
            if(e.target.closest(`.planets-list--li`)) {
                this.#index = e.target.closest(`.planets-list--li`).dataset.planetOrder;
            }

            planetsNameLi.forEach(el => {
                if(el.classList.contains(`li-active`)) el.classList.remove(`li-active`)
            })
            planetsNameLi[this.#index].classList.add(`li-active`);

            planetImgHTML.src = `${this.#dataOBJ[this.#index].images.png}`;
            planetNameHTML.textContent = `${this.#dataOBJ[this.#index].name}`;
            aboutPlanetHTML.textContent = `${this.#dataOBJ[this.#index].description}`;
            distanceHTML.textContent = `${this.#dataOBJ[this.#index].distance}`;
            durationHTML.textContent = `${this.#dataOBJ[this.#index].travel}`;

        })

    }


}

const spaceTourism = new App();



sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);

window.addEventListener(`resize`, () => {
    sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);
})



const updateCrewUI = function() {

    const crewslider = document.querySelector(`.slider-dots`);
    const crewHeroImg = document.querySelector(`.hero-img`);
    const crewHeroRole = document.querySelector(`.hero-rank`);
    const crewHeroName = document.querySelector(`.hero-name`);
    const crewHeroBio = document.querySelector(`.about-hero`);
    const sliderDots = document.querySelectorAll(`.slider-dot`);

    let indexOfCrewMember;


    crewslider.addEventListener(`click`, (e) => {

        if(!e.target.closest(`.slider-dot`)) return;
        
        if(e.target.closest(`.slider-dot`)) {
            indexOfCrewMember = e.target.dataset.heroOrder;
            sliderDots.forEach(el => {
                if(el.classList.contains(`li-active`)) el.classList.remove(`li-active`);
            })

            e.target.classList.add(`li-active`);
        }

        crewHeroImg.src = `${dataOBJ[indexOfCrewMember].images.png}`
        crewHeroRole.textContent = `${dataOBJ[indexOfCrewMember].role}`;
        crewHeroName.textContent = `${dataOBJ[indexOfCrewMember].name}`;
        crewHeroBio.textContent = `${dataOBJ[indexOfCrewMember].bio}`;
        sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);
    })


}

const updateTechnologyUI = function() {

    const technologySlider = document.querySelector(`.slider`);
    const technologyImg = document.querySelector(`.technology-img`);
    const technologyName = document.querySelector(`.event-name`);
    const technologyAbout = document.querySelector(`.about-event`);
    const technologySliderLi = document.querySelectorAll(`.technology-slider--li`);

    let indexOfTechnology;


    technologySlider.addEventListener(`click`, (e) => {
        if(!e.target.closest(`.technology-slider--li`)) return;
        if(e.target.closest(`.technology-slider--li`)) {
            indexOfTechnology = e.target.dataset.technologyOrder;
            technologySliderLi.forEach(el => {
                if(el.classList.contains(`li-active`)) el.classList.remove(`li-active`);
            })
            technologySliderLi[indexOfTechnology].classList.add(`li-active`);
        }

        technologyImg.src = `${dataOBJ[indexOfTechnology].images.portrait}`;
        technologyName.textContent = `${dataOBJ[indexOfTechnology].name}`;
        technologyAbout.textContent = `${dataOBJ[indexOfTechnology].description}`;

    })
} 




const updateUI = function() {
    if(sectionName === `destination`) {
        updatePlanetUI();
    }

    if(sectionName === `crew`) {
        updateCrewUI();
    }

    if(sectionName === `technology`) {
        updateTechnologyUI();
    }
}





// btnExplore.addEventListener(`click`, () => {
//     sectionName = `destination`;

//     sections.forEach(el => {
//         if(!el.classList.contains(`display-none`)) el.classList.add(`display-none`);
//         if(el.dataset.sectionTitle === sectionName) el.classList.remove(`display-none`);
//     })
//     sections.forEach(el => el.style.height = `${document.documentElement.scrollHeight}px`);

//     navLi.forEach(el => {
//         if(el.classList.contains(`li-active`)) el.classList.remove(`li-active`);
//         if(el.dataset.sectionTitle === sectionName) el.classList.add(`li-active`);
//     })

//     if(!data) alert(`something went wrong ...  try again`);

//     if(data) {
//         console.log(data)
//         dataOBJ = data.destinations;
//         console.log(dataOBJ)
//     }
// })