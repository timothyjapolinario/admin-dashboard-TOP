let favorite_buttons = document.querySelectorAll(".project-options>:nth-child(1)")


favorite_buttons.forEach(button=>{
    button.addEventListener("click", function(){
        change_heart_style(button);
    })
})
function change_heart_style(button){
    if(button.getAttribute("src") == "./images/heart-outline.svg"){
        button.src="./images/heart.svg"
    }else{
        button.src="./images/heart-outline.svg"
    }
}