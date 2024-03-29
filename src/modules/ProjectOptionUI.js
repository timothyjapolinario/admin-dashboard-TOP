const generateOptionsUI = (parentNode, project) =>{
    let projectOptions = document.createElement('div')
    projectOptions.classList.add('project-options')

    projectOptions.appendChild(generateFavoriteButton(project)) 
    projectOptions.appendChild(generateShareButton(project))
    projectOptions.appendChild(generateDeleteButton(parentNode))

    return projectOptions
}

const generateFavoriteButton = (project) =>{
    let favoriteButton = document.createElement('img')
    if(project.isFavorite){
        favoriteButton.src = "./images/heart.svg"
    }else{
        favoriteButton.src = "./images/heart-outline.svg"
    }

    favoriteButton.addEventListener('click', ()=>{
        changeFavoriteStatus(favoriteButton, project)
    })

    return favoriteButton
}

const generateDeleteButton = (parentNode) =>{
    let deleteButton = document.createElement('img')
    deleteButton.src = "./images/delete.svg"
    deleteButton.addEventListener('click',()=>{
        deleteProject(parentNode)
    })

    return deleteButton
}

const generateShareButton = (project) =>{
    let shareButton = document.createElement('img')
    shareButton.src = "./images/share.svg"
    shareButton.addEventListener('click',()=>{
        copyLinkToClipBoard(project.link)
    })

    return shareButton
}


const copyLinkToClipBoard = (link)=>{
    if(link){
        navigator.clipboard.writeText(link).then(
            function(){
                window.alert("Link Copied!")
            }
        )
    }else{
        window.alert("No link is provided!")
    }
}

const changeFavoriteStatus = (button, project)=>{
    if(project.isFavorite){
        project.isFavorite = false
        button.src = "./images/heart-outline.svg"
        return
    }
    project.isFavorite = true
    button.src = "./images/heart.svg"
}

const deleteProject = (parentNode) =>{
    parentNode.remove()
}


export default generateOptionsUI