import Project from './modules/Project.js'
import generateProjectUi from './modules/ProjectUI';
import * as Storage from './modules/Storage';

let projects = document.querySelectorAll(".project");



const initProjects = () =>{
    const projectContainer = document.querySelector('.projects-container')
    let projects = getAllProjects("project", "identifier")
    projects.forEach(project => {
        projectContainer.appendChild(generateProjectUi(project))
    })
}

const getAllProjects = (identifier) =>{
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

addDummyProjects()
initProjects()