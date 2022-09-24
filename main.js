/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxubGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuXG5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3Q9PntcbiAgICAvL2hlYXJ0IGJ1dHRvblxuICAgIGxldCBoZWFydF9idXR0b24gPSBwcm9qZWN0LmNoaWxkTm9kZXNbNV0uY2hpbGROb2Rlc1sxXVxuICAgIGxldCBzaGFyZV9idXR0b24gPSBwcm9qZWN0LmNoaWxkTm9kZXNbNV0uY2hpbGROb2Rlc1szXVxuICAgIGxldCBsaW5rID0gc2hhcmVfYnV0dG9uLmdldEF0dHJpYnV0ZShcImFsdFwiKVxuICAgIGxldCBkZWxldGVfYnV0dG9uID0gcHJvamVjdC5jaGlsZE5vZGVzWzVdLmNoaWxkTm9kZXNbNV1cblxuICAgIGhlYXJ0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgY2hhbmdlX2hlYXJ0X3N0eWxlKGhlYXJ0X2J1dHRvbik7XG4gICAgfSlcbiAgICBzaGFyZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvcHlfbGlua190b19jbGlwYm9hcmQobGluayk7XG4gICAgfSlcbiAgICBkZWxldGVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBkZWxldGVfcHJvamVjdChwcm9qZWN0KTtcbiAgICB9KVxuICAgIFxufSlcblxuZnVuY3Rpb24gY2hhbmdlX2hlYXJ0X3N0eWxlKGJ1dHRvbil7XG4gICAgaWYoYnV0dG9uLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSBcIi4vaW1hZ2VzL2hlYXJ0LW91dGxpbmUuc3ZnXCIpe1xuICAgICAgICBidXR0b24uc3JjPVwiLi9pbWFnZXMvaGVhcnQuc3ZnXCJcbiAgICB9ZWxzZXtcbiAgICAgICAgYnV0dG9uLnNyYz1cIi4vaW1hZ2VzL2hlYXJ0LW91dGxpbmUuc3ZnXCJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvcHlfbGlua190b19jbGlwYm9hcmQobGluayl7XG4gICAgaWYobGluayl7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGxpbmspLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkxpbmsgQ29waWVkIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfWVsc2V7XG4gICAgICAgIHdpbmRvdy5hbGVydChcIk5vIGxpbmsgaXMgcHJvdmlkZWQhXCIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVfcHJvamVjdChwcm9qZWN0KXtcbiAgICBwcm9qZWN0LnJlbW92ZSgpXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9