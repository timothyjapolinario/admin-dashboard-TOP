/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const projectInterface = (state) =>({
    type: "projectInterface"
})
const Project = (title, description, link, isFavorite) => {
    let state = {
        title:title,
        description:description,
        link:link,
        isFavorite:isFavorite,
    }
    let myInterface = Object.create(projectInterface(state))
    console.log(myInterface)
    return Object.assign(myInterface,state)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/modules/ProjectOptionUI.js":
/*!****************************************!*\
  !*** ./src/modules/ProjectOptionUI.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
        console.log(project)
        return
    }
    project.isFavorite = true
    button.src = "./images/heart.svg"
    console.log(project)
}

const deleteProject = (parentNode) =>{
    parent.remove()
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateOptionsUI);

/***/ }),

/***/ "./src/modules/ProjectUI":
/*!*******************************!*\
  !*** ./src/modules/ProjectUI ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectOptionUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectOptionUI */ "./src/modules/ProjectOptionUI.js");


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
    return (0,_ProjectOptionUI__WEBPACK_IMPORTED_MODULE_0__["default"])(parentNode, project)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateProjectUi);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Project.js */ "./src/modules/Project.js");
/* harmony import */ var _modules_ProjectUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ProjectUI */ "./src/modules/ProjectUI");




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

const testUI = ()=>{
    const projectContainer = document.querySelector('.projects-container')
    const myProject = (0,_modules_Project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "Etch-A-Sketch",
        "A drawing web application. This focuses on the use of CSS Grid and Javascript.",
        "https://timothyjapolinario.github.io/etch-a-sketch/",
        true
    )
    const projectUI = (0,_modules_ProjectUI__WEBPACK_IMPORTED_MODULE_1__["default"])(myProject)
    console.log(projectUI)
    projectContainer.appendChild(projectUI)

}
testUI()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDaEJmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUM1RWtDOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsNERBQWlCO0FBQzVCOztBQUVBLGlFQUFlOzs7Ozs7VUM5Q2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDVTs7O0FBR3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsK0RBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4REFBaUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBLFEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL3NyYy9tb2R1bGVzL1Byb2plY3RPcHRpb25VSS5qcyIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0VUkiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgcHJvamVjdEludGVyZmFjZSA9IChzdGF0ZSkgPT4oe1xuICAgIHR5cGU6IFwicHJvamVjdEludGVyZmFjZVwiXG59KVxuY29uc3QgUHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGxpbmssIGlzRmF2b3JpdGUpID0+IHtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIHRpdGxlOnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjpkZXNjcmlwdGlvbixcbiAgICAgICAgbGluazpsaW5rLFxuICAgICAgICBpc0Zhdm9yaXRlOmlzRmF2b3JpdGUsXG4gICAgfVxuICAgIGxldCBteUludGVyZmFjZSA9IE9iamVjdC5jcmVhdGUocHJvamVjdEludGVyZmFjZShzdGF0ZSkpXG4gICAgY29uc29sZS5sb2cobXlJbnRlcmZhY2UpXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obXlJbnRlcmZhY2Usc3RhdGUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCJjb25zdCBnZW5lcmF0ZU9wdGlvbnNVSSA9IChwYXJlbnROb2RlLCBwcm9qZWN0KSA9PntcbiAgICBsZXQgcHJvamVjdE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3B0aW9ucycpXG5cbiAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChnZW5lcmF0ZUZhdm9yaXRlQnV0dG9uKHByb2plY3QpKSBcbiAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChnZW5lcmF0ZVNoYXJlQnV0dG9uKHByb2plY3QpKVxuICAgIHByb2plY3RPcHRpb25zLmFwcGVuZENoaWxkKGdlbmVyYXRlRGVsZXRlQnV0dG9uKHBhcmVudE5vZGUpKVxuXG4gICAgcmV0dXJuIHByb2plY3RPcHRpb25zXG59XG5cbmNvbnN0IGdlbmVyYXRlRmF2b3JpdGVCdXR0b24gPSAocHJvamVjdCkgPT57XG4gICAgbGV0IGZhdm9yaXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpZihwcm9qZWN0LmlzRmF2b3JpdGUpe1xuICAgICAgICBmYXZvcml0ZUJ1dHRvbi5zcmMgPSBcIi4vaW1hZ2VzL2hlYXJ0LnN2Z1wiXG4gICAgfWVsc2V7XG4gICAgICAgIGZhdm9yaXRlQnV0dG9uLnNyYyA9IFwiLi9pbWFnZXMvaGVhcnQtb3V0bGluZS5zdmdcIlxuICAgIH1cblxuICAgIGZhdm9yaXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgY2hhbmdlRmF2b3JpdGVTdGF0dXMoZmF2b3JpdGVCdXR0b24sIHByb2plY3QpXG4gICAgfSlcblxuICAgIHJldHVybiBmYXZvcml0ZUJ1dHRvblxufVxuXG5jb25zdCBnZW5lcmF0ZURlbGV0ZUJ1dHRvbiA9IChwYXJlbnROb2RlKSA9PntcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBkZWxldGVCdXR0b24uc3JjID0gXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCJcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGRlbGV0ZVByb2plY3QocGFyZW50Tm9kZSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIGRlbGV0ZUJ1dHRvblxufVxuXG5jb25zdCBnZW5lcmF0ZVNoYXJlQnV0dG9uID0gKHByb2plY3QpID0+e1xuICAgIGxldCBzaGFyZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgc2hhcmVCdXR0b24uc3JjID0gXCIuL2ltYWdlcy9zaGFyZS5zdmdcIlxuICAgIHNoYXJlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBjb3B5TGlua1RvQ2xpcEJvYXJkKHByb2plY3QubGluaylcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNoYXJlQnV0dG9uXG59XG5cblxuY29uc3QgY29weUxpbmtUb0NsaXBCb2FyZCA9IChsaW5rKT0+e1xuICAgIGlmKGxpbmspe1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChsaW5rKS50aGVuKFxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJMaW5rIENvcGllZCFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1lbHNle1xuICAgICAgICB3aW5kb3cuYWxlcnQoXCJObyBsaW5rIGlzIHByb3ZpZGVkIVwiKVxuICAgIH1cbn1cblxuY29uc3QgY2hhbmdlRmF2b3JpdGVTdGF0dXMgPSAoYnV0dG9uLCBwcm9qZWN0KT0+e1xuICAgIGlmKHByb2plY3QuaXNGYXZvcml0ZSl7XG4gICAgICAgIHByb2plY3QuaXNGYXZvcml0ZSA9IGZhbHNlXG4gICAgICAgIGJ1dHRvbi5zcmMgPSBcIi4vaW1hZ2VzL2hlYXJ0LW91dGxpbmUuc3ZnXCJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdClcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHByb2plY3QuaXNGYXZvcml0ZSA9IHRydWVcbiAgICBidXR0b24uc3JjID0gXCIuL2ltYWdlcy9oZWFydC5zdmdcIlxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG59XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocGFyZW50Tm9kZSkgPT57XG4gICAgcGFyZW50LnJlbW92ZSgpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVPcHRpb25zVUkiLCJpbXBvcnQgZ2VuZXJhdGVPcHRpb25zVUkgZnJvbSBcIi4vUHJvamVjdE9wdGlvblVJXCJcblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0VWkgPSAocHJvamVjdCk9PntcbiAgICBsZXQgcHJvamVjdFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0VUkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG5cbiAgICBwcm9qZWN0VUkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUaXRsZVVJKHByb2plY3QpKVxuICAgIHByb2plY3RVSS5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3REZXNjcmlwdGlvblVJKHByb2plY3QpKVxuICAgIHByb2plY3RVSS5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RPcHRpb25zKHByb2plY3RVSSwgcHJvamVjdCkpXG5cbiAgICByZXR1cm4gcHJvamVjdFVJXG5cbn1cblxuY29uc3QgZ2VuZXJhdGVUaXRsZVVJID0gKHByb2plY3QpID0+e1xuICAgIGxldCB0aXRsZVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZVVJLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKVxuXG4gICAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgcHJvamVjdExpbmsuaHJlZiA9IHByb2plY3QubGlua1xuICAgIHByb2plY3QudGFyZ2V0ID0gXCJfYmxhbmtcIlxuICAgIHByb2plY3RMaW5rLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGUgKyBcIiBcIlxuICAgIFxuICAgIGxldCBvcGVuTGlua0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgb3BlbkxpbmtCdXR0b24uc3JjID0gXCIuL2ltYWdlcy9vcGVuLWluLW5ldy5zdmdcIlxuICAgIG9wZW5MaW5rQnV0dG9uLmFsdCA9XCJcIlxuXG4gICAgcHJvamVjdExpbmsuYXBwZW5kQ2hpbGQob3BlbkxpbmtCdXR0b24pXG4gICAgdGl0bGVVSS5hcHBlbmRDaGlsZChwcm9qZWN0TGluaylcblxuICAgIHJldHVybiB0aXRsZVVJXG59XG5cbmNvbnN0IGdlbmVyYXRlUHJvamVjdERlc2NyaXB0aW9uVUkgPSAocHJvamVjdCk9PntcbiAgICBsZXQgZGVzY3JpcHRpb25VSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb25VSS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZXNjcmlwdGlvblwiKVxuXG4gICAgZGVzY3JpcHRpb25VSS5pbm5lclRleHQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uXG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb25VSVxufVxuXG5jb25zdCBnZW5lcmF0ZVByb2plY3RPcHRpb25zID0gKHBhcmVudE5vZGUsIHByb2plY3QpID0+e1xuICAgIHJldHVybiBnZW5lcmF0ZU9wdGlvbnNVSShwYXJlbnROb2RlLCBwcm9qZWN0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVByb2plY3RVaSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9tb2R1bGVzL1Byb2plY3QuanMnXG5pbXBvcnQgZ2VuZXJhdGVQcm9qZWN0VWkgZnJvbSAnLi9tb2R1bGVzL1Byb2plY3RVSSc7XG5cblxubGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuXG5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3Q9PntcbiAgICAvL2hlYXJ0IGJ1dHRvblxuICAgIGxldCBoZWFydF9idXR0b24gPSBwcm9qZWN0LmNoaWxkTm9kZXNbNV0uY2hpbGROb2Rlc1sxXVxuICAgIGxldCBzaGFyZV9idXR0b24gPSBwcm9qZWN0LmNoaWxkTm9kZXNbNV0uY2hpbGROb2Rlc1szXVxuICAgIGxldCBsaW5rID0gc2hhcmVfYnV0dG9uLmdldEF0dHJpYnV0ZShcImFsdFwiKVxuICAgIGxldCBkZWxldGVfYnV0dG9uID0gcHJvamVjdC5jaGlsZE5vZGVzWzVdLmNoaWxkTm9kZXNbNV1cblxuICAgIGhlYXJ0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgY2hhbmdlX2hlYXJ0X3N0eWxlKGhlYXJ0X2J1dHRvbik7XG4gICAgfSlcbiAgICBzaGFyZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvcHlfbGlua190b19jbGlwYm9hcmQobGluayk7XG4gICAgfSlcbiAgICBkZWxldGVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBkZWxldGVfcHJvamVjdChwcm9qZWN0KTtcbiAgICB9KVxuICAgIFxufSlcblxuZnVuY3Rpb24gY2hhbmdlX2hlYXJ0X3N0eWxlKGJ1dHRvbil7XG4gICAgaWYoYnV0dG9uLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSBcIi4vaW1hZ2VzL2hlYXJ0LW91dGxpbmUuc3ZnXCIpe1xuICAgICAgICBidXR0b24uc3JjPVwiLi9pbWFnZXMvaGVhcnQuc3ZnXCJcbiAgICB9ZWxzZXtcbiAgICAgICAgYnV0dG9uLnNyYz1cIi4vaW1hZ2VzL2hlYXJ0LW91dGxpbmUuc3ZnXCJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvcHlfbGlua190b19jbGlwYm9hcmQobGluayl7XG4gICAgaWYobGluayl7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGxpbmspLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkxpbmsgQ29waWVkIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfWVsc2V7XG4gICAgICAgIHdpbmRvdy5hbGVydChcIk5vIGxpbmsgaXMgcHJvdmlkZWQhXCIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVfcHJvamVjdChwcm9qZWN0KXtcbiAgICBwcm9qZWN0LnJlbW92ZSgpXG59XG5cbmNvbnN0IHRlc3RVSSA9ICgpPT57XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKVxuICAgIGNvbnN0IG15UHJvamVjdCA9IFByb2plY3QoXG4gICAgICAgIFwiRXRjaC1BLVNrZXRjaFwiLFxuICAgICAgICBcIkEgZHJhd2luZyB3ZWIgYXBwbGljYXRpb24uIFRoaXMgZm9jdXNlcyBvbiB0aGUgdXNlIG9mIENTUyBHcmlkIGFuZCBKYXZhc2NyaXB0LlwiLFxuICAgICAgICBcImh0dHBzOi8vdGltb3RoeWphcG9saW5hcmlvLmdpdGh1Yi5pby9ldGNoLWEtc2tldGNoL1wiLFxuICAgICAgICB0cnVlXG4gICAgKVxuICAgIGNvbnN0IHByb2plY3RVSSA9IGdlbmVyYXRlUHJvamVjdFVpKG15UHJvamVjdClcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0VUkpXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VUkpXG5cbn1cbnRlc3RVSSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9