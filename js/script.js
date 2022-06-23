
let projects = document.querySelectorAll(".project");

projects.forEach(project=>{
    //heart button
    let heart_button = project.childNodes[5].childNodes[1]
    let delete_button = project.childNodes[5].childNodes[5]
    console.log(project.childNodes[5].childNodes);

    heart_button.addEventListener("click", function(){
        change_heart_style(heart_button);
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

function delete_project(project){
    project.remove()
}