import generateOptionsUI from "./ProjectOptionUI"

const generateProjectUi = (project)=>{
    let projectUI = document.createElement('div')
    projectUI.classList.add('project')

    projectUI.appendChild(generateTitleUI(project))
    projectUI.appendChild(generateProjectDescriptionUI(project))
    projectUI.appendChild(generateProjectOptions(projectUI, project))

    return projectUI

}

const generateTitleUI = (project) =>{
    let titleUI = document.createElement('div')
    titleUI.classList.add('project-title')

    let projectLink = document.createElement('a')
    projectLink.href = project.link
    project.target = "_blank"
    projectLink.innerText = project.title + " "
    
    let openLinkButton = document.createElement('img')
    openLinkButton.src = "./images/open-in-new.svg"
    openLinkButton.alt =""

    projectLink.appendChild(openLinkButton)
    titleUI.appendChild(projectLink)

    return titleUI
}

const generateProjectDescriptionUI = (project)=>{
    let descriptionUI = document.createElement('div')
    descriptionUI.classList.add("project-description")

    descriptionUI.innerText = project.description

    return descriptionUI
}

const generateProjectOptions = (parentNode, project) =>{
    return generateOptionsUI(parentNode, project)
}

export default generateProjectUi