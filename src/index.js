
let projects = document.querySelectorAll(".project");

projects.forEach(project=>{
    //heart button
    let heart_button = project.childNodes[5].childNodes[1]
    let share_button = project.childNodes[5].childNodes[3]
    let link = share_button.getAttribute("alt")
    let delete_button = project.childNodes[5].childNodes[5]

    heart_button.addEventListener("click", function(){
        change_heart_style(heart_button);
    })
    share_button.addEventListener("click", function(){
        copy_link_to_clipboard(link);
    })
    delete_button.addEventListener("click", function(){
        delete_project(project);
    })
    
})

function change_heart_style(button){
    if(button.getAttribute("src") == "./images/heart-outline.svg"){
        button.src="./images/heart.svg"
    }else{
        button.src="./images/heart-outline.svg"
    }
}

function copy_link_to_clipboard(link){
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

function delete_project(project){
    project.remove()
}