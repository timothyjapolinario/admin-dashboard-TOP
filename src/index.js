import Project from './modules/Project.js'
import generateProjectUi from './modules/ProjectUI.js';
import * as Storage from './modules/Storage';
import generateAnnouncementUI from './modules/AnnouncementUI'
import Announcement from './modules/Announcement'
import Trend from './modules/Trend'
import generateTrendUI from './modules/TrendUI'

let projects = document.querySelectorAll(".project");



const initProjects = () =>{
    const projectContainer = document.querySelector('.projects-container')
    let projects = getAllObjectFromLocalStorage("project")
    projects.forEach(project => {
        projectContainer.appendChild(generateProjectUi(project))
    })
}

const initAnnouncement = () =>{
    const announcementContainer = document.querySelector('.sidebar-announcements')
    let announcements = getAllObjectFromLocalStorage("ann")
    announcements.forEach(announcement => {
        announcementContainer.appendChild(generateAnnouncementUI(announcement))
    })
}

const initTrend = () =>{
    const trendContainer = document.querySelector('.sidebar-trendings')
    let trends = getAllObjectFromLocalStorage("trd")
    trends.forEach(trend => {
        trendContainer.appendChild(generateTrendUI(trend))
    })
}

const getAllObjectFromLocalStorage = (identifier) =>{
    return Storage.getAllItem(identifier)
}

const addDummyProjects = () =>{
    const projectOne =  Project(
        "Calculator",
        "A Web based calculator built with HTML, Vanilla CSS and Javascript.",
        "https://timothyjapolinario.github.io/Calculator/",
        true
    )
    Storage.addItem(projectOne.title,"project", projectOne)

    const projectTwo =  Project(
        "Signup Form",
        "A static Signup Form built with HTML and Vanilla CSS.\n This is just a design",
        "https://timothyjapolinario.github.io/sign-up-form-TOP/",
        true
    )
    Storage.addItem(projectTwo.title,"project", projectTwo)

    const projectThree =  Project(
        "Etch-A-Sketch",
        "A drawing web application. This focuses on the use of CSS Grid and Javascript.",
        "https://timothyjapolinario.github.io/etch-a-sketch/",
        true
    )
    Storage.addItem(projectThree.title,"project", projectThree)

    const projectFour =  Project(
        "iTunesMovies",
        "An android application for movie directories. It fetches movies from iTunesAPI built with kotlin and jetpack compose",
        "https://drive.google.com/file/d/1fcAyg3_PWxuzaJzXazo-niAN9DWy2l3x/view?usp=sharing",
        true
    )
    Storage.addItem(projectFour.title,"project", projectFour)
}


const addDummyAnnouncements = () => {
    const ann1 = Announcement(
        'MisterFapoh for Internship!',
        'MisterFapoh is looking for an internship! Do not miss this opportunity!'
    )
    Storage.addItem('ann1', 'ann', ann1)
    const ann2 = Announcement(
        'Porksteak for lunch!',
        'July 24 2022 will have Porksteak for lunch! Ready your stomach for this heavy delicious meal!'
    )
    Storage.addItem('ann2', 'ann', ann2)
    const ann3 = Announcement(
        'Charger died.',
        'My charger broke down. Lasted for only like 3 years'
    )
    Storage.addItem('ann3', 'ann', ann3)
}

const addDummyTrend = () => {
    const trd1 = Trend(
        '@mabzzz',
        './images/mabzzz-icon.png',
        'An upside down building.'
    )

    console.log(trd1)

    Storage.addItem('trd1', 'trd', trd1)
    const trd2 = Trend(
        '@geriri',
        './images/geriri-icon.png',
        'An airport inside a mall.'
    )
    Storage.addItem('trd2', 'trd', trd2)

    const trd3 = Trend(
        '@supahxad',
        './images/jasper-icon.png',
        'SadBoiDrug; A new type of illegal drug.'
    )
    Storage.addItem('trd3', 'trd', trd3)
}

addDummyProjects()
initProjects()

addDummyAnnouncements()
initAnnouncement()

addDummyTrend()
initTrend()
