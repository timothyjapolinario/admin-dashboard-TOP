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
    parentNode.remove()
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

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addItem": () => (/* binding */ addItem),
/* harmony export */   "getAllItem": () => (/* binding */ getAllItem),
/* harmony export */   "getItem": () => (/* binding */ getItem)
/* harmony export */ });
const addItem = (itemName,identifier = "",item) =>{
    const finalName = identifier+"_"+itemName
    localStorage.setItem(finalName, JSON.stringify(item))
    console.log(JSON.stringify(item))
}

const getItem = (itemName) =>{
    const item = JSON.parse(localStorage.getItem(itemName));
    return item;
}

const getAllItem = (identifier) =>{
    let keys =Object.keys(localStorage);
    const itemList = []
    keys.forEach((key) => {
        console.log(key)
        if(key.includes(identifier)){
            let item = getItem(key, identifier)
            itemList.push(item)
        }
    })
    return itemList;
}




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
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");




let projects = document.querySelectorAll(".project");



const initProjects = () =>{
    const projectContainer = document.querySelector('.projects-container')
    let projects = getAllProjects("project", "identifier")
    projects.forEach(project => {
        projectContainer.appendChild((0,_modules_ProjectUI__WEBPACK_IMPORTED_MODULE_1__["default"])(project))
    })
}

const getAllProjects = (identifier) =>{
    return _modules_Storage__WEBPACK_IMPORTED_MODULE_2__.getAllItem(identifier)
}

const addDummyProjects = () =>{
    const projectOne =  (0,_modules_Project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "Calculator",
        "A Web based calculator built with HTML, Vanilla CSS and Javascript.",
        "https://timothyjapolinario.github.io/Calculator/",
        true
    )
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__.addItem(projectOne.title,"project", projectOne)

    const projectTwo =  (0,_modules_Project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "Signup Form",
        "A static Signup Form built with HTML and Vanilla CSS.\n This is just a design",
        "https://timothyjapolinario.github.io/sign-up-form-TOP/",
        true
    )
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__.addItem(projectTwo.title,"project", projectTwo)

    const projectThree =  (0,_modules_Project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "Etch-A-Sketch",
        "A drawing web application. This focuses on the use of CSS Grid and Javascript.",
        "https://timothyjapolinario.github.io/etch-a-sketch/",
        true
    )
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__.addItem(projectThree.title,"project", projectThree)

    const projectFour =  (0,_modules_Project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "iTunesMovies",
        "An android application for movie directories. It fetches movies from iTunesAPI built with kotlin and jetpack compose",
        "https://drive.google.com/file/d/1fcAyg3_PWxuzaJzXazo-niAN9DWy2l3x/view?usp=sharing",
        true
    )
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__.addItem(projectFour.title,"project", projectFour)
}

addDummyProjects()
initProjects()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDaEJmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUM1RWtDOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsNERBQWlCO0FBQzVCOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRW9DOzs7Ozs7O1VDeEJwQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDVTtBQUNQOztBQUU3Qzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDhEQUFpQjtBQUN0RCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxXQUFXLHdEQUFrQjtBQUM3Qjs7QUFFQTtBQUNBLHdCQUF3QiwrREFBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBZTs7QUFFbkIsd0JBQXdCLCtEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFlOztBQUVuQiwwQkFBMEIsK0RBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWU7O0FBRW5CLHlCQUF5QiwrREFBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBZTtBQUNuQjs7QUFFQTtBQUNBLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL3NyYy9tb2R1bGVzL1Byb2plY3RPcHRpb25VSS5qcyIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0VUkiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vc3JjL21vZHVsZXMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBwcm9qZWN0SW50ZXJmYWNlID0gKHN0YXRlKSA9Pih7XG4gICAgdHlwZTogXCJwcm9qZWN0SW50ZXJmYWNlXCJcbn0pXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgbGluaywgaXNGYXZvcml0ZSkgPT4ge1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgdGl0bGU6dGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOmRlc2NyaXB0aW9uLFxuICAgICAgICBsaW5rOmxpbmssXG4gICAgICAgIGlzRmF2b3JpdGU6aXNGYXZvcml0ZSxcbiAgICB9XG4gICAgbGV0IG15SW50ZXJmYWNlID0gT2JqZWN0LmNyZWF0ZShwcm9qZWN0SW50ZXJmYWNlKHN0YXRlKSlcbiAgICBjb25zb2xlLmxvZyhteUludGVyZmFjZSlcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihteUludGVyZmFjZSxzdGF0ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsImNvbnN0IGdlbmVyYXRlT3B0aW9uc1VJID0gKHBhcmVudE5vZGUsIHByb2plY3QpID0+e1xuICAgIGxldCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdE9wdGlvbnMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1vcHRpb25zJylcblxuICAgIHByb2plY3RPcHRpb25zLmFwcGVuZENoaWxkKGdlbmVyYXRlRmF2b3JpdGVCdXR0b24ocHJvamVjdCkpIFxuICAgIHByb2plY3RPcHRpb25zLmFwcGVuZENoaWxkKGdlbmVyYXRlU2hhcmVCdXR0b24ocHJvamVjdCkpXG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVEZWxldGVCdXR0b24ocGFyZW50Tm9kZSkpXG5cbiAgICByZXR1cm4gcHJvamVjdE9wdGlvbnNcbn1cblxuY29uc3QgZ2VuZXJhdGVGYXZvcml0ZUJ1dHRvbiA9IChwcm9qZWN0KSA9PntcbiAgICBsZXQgZmF2b3JpdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGlmKHByb2plY3QuaXNGYXZvcml0ZSl7XG4gICAgICAgIGZhdm9yaXRlQnV0dG9uLnNyYyA9IFwiLi9pbWFnZXMvaGVhcnQuc3ZnXCJcbiAgICB9ZWxzZXtcbiAgICAgICAgZmF2b3JpdGVCdXR0b24uc3JjID0gXCIuL2ltYWdlcy9oZWFydC1vdXRsaW5lLnN2Z1wiXG4gICAgfVxuXG4gICAgZmF2b3JpdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBjaGFuZ2VGYXZvcml0ZVN0YXR1cyhmYXZvcml0ZUJ1dHRvbiwgcHJvamVjdClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGZhdm9yaXRlQnV0dG9uXG59XG5cbmNvbnN0IGdlbmVyYXRlRGVsZXRlQnV0dG9uID0gKHBhcmVudE5vZGUpID0+e1xuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGRlbGV0ZUJ1dHRvbi5zcmMgPSBcIi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIlxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgZGVsZXRlUHJvamVjdChwYXJlbnROb2RlKVxuICAgIH0pXG5cbiAgICByZXR1cm4gZGVsZXRlQnV0dG9uXG59XG5cbmNvbnN0IGdlbmVyYXRlU2hhcmVCdXR0b24gPSAocHJvamVjdCkgPT57XG4gICAgbGV0IHNoYXJlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBzaGFyZUJ1dHRvbi5zcmMgPSBcIi4vaW1hZ2VzL3NoYXJlLnN2Z1wiXG4gICAgc2hhcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGNvcHlMaW5rVG9DbGlwQm9hcmQocHJvamVjdC5saW5rKVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2hhcmVCdXR0b25cbn1cblxuXG5jb25zdCBjb3B5TGlua1RvQ2xpcEJvYXJkID0gKGxpbmspPT57XG4gICAgaWYobGluayl7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGxpbmspLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkxpbmsgQ29waWVkIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfWVsc2V7XG4gICAgICAgIHdpbmRvdy5hbGVydChcIk5vIGxpbmsgaXMgcHJvdmlkZWQhXCIpXG4gICAgfVxufVxuXG5jb25zdCBjaGFuZ2VGYXZvcml0ZVN0YXR1cyA9IChidXR0b24sIHByb2plY3QpPT57XG4gICAgaWYocHJvamVjdC5pc0Zhdm9yaXRlKXtcbiAgICAgICAgcHJvamVjdC5pc0Zhdm9yaXRlID0gZmFsc2VcbiAgICAgICAgYnV0dG9uLnNyYyA9IFwiLi9pbWFnZXMvaGVhcnQtb3V0bGluZS5zdmdcIlxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgcHJvamVjdC5pc0Zhdm9yaXRlID0gdHJ1ZVxuICAgIGJ1dHRvbi5zcmMgPSBcIi4vaW1hZ2VzL2hlYXJ0LnN2Z1wiXG4gICAgY29uc29sZS5sb2cocHJvamVjdClcbn1cblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChwYXJlbnROb2RlKSA9PntcbiAgICBwYXJlbnROb2RlLnJlbW92ZSgpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVPcHRpb25zVUkiLCJpbXBvcnQgZ2VuZXJhdGVPcHRpb25zVUkgZnJvbSBcIi4vUHJvamVjdE9wdGlvblVJXCJcblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0VWkgPSAocHJvamVjdCk9PntcbiAgICBsZXQgcHJvamVjdFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0VUkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG5cbiAgICBwcm9qZWN0VUkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUaXRsZVVJKHByb2plY3QpKVxuICAgIHByb2plY3RVSS5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3REZXNjcmlwdGlvblVJKHByb2plY3QpKVxuICAgIHByb2plY3RVSS5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RPcHRpb25zKHByb2plY3RVSSwgcHJvamVjdCkpXG5cbiAgICByZXR1cm4gcHJvamVjdFVJXG5cbn1cblxuY29uc3QgZ2VuZXJhdGVUaXRsZVVJID0gKHByb2plY3QpID0+e1xuICAgIGxldCB0aXRsZVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZVVJLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKVxuXG4gICAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgcHJvamVjdExpbmsuaHJlZiA9IHByb2plY3QubGlua1xuICAgIHByb2plY3QudGFyZ2V0ID0gXCJfYmxhbmtcIlxuICAgIHByb2plY3RMaW5rLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGUgKyBcIiBcIlxuICAgIFxuICAgIGxldCBvcGVuTGlua0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgb3BlbkxpbmtCdXR0b24uc3JjID0gXCIuL2ltYWdlcy9vcGVuLWluLW5ldy5zdmdcIlxuICAgIG9wZW5MaW5rQnV0dG9uLmFsdCA9XCJcIlxuXG4gICAgcHJvamVjdExpbmsuYXBwZW5kQ2hpbGQob3BlbkxpbmtCdXR0b24pXG4gICAgdGl0bGVVSS5hcHBlbmRDaGlsZChwcm9qZWN0TGluaylcblxuICAgIHJldHVybiB0aXRsZVVJXG59XG5cbmNvbnN0IGdlbmVyYXRlUHJvamVjdERlc2NyaXB0aW9uVUkgPSAocHJvamVjdCk9PntcbiAgICBsZXQgZGVzY3JpcHRpb25VSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb25VSS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZXNjcmlwdGlvblwiKVxuXG4gICAgZGVzY3JpcHRpb25VSS5pbm5lclRleHQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uXG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb25VSVxufVxuXG5jb25zdCBnZW5lcmF0ZVByb2plY3RPcHRpb25zID0gKHBhcmVudE5vZGUsIHByb2plY3QpID0+e1xuICAgIHJldHVybiBnZW5lcmF0ZU9wdGlvbnNVSShwYXJlbnROb2RlLCBwcm9qZWN0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVByb2plY3RVaSIsImNvbnN0IGFkZEl0ZW0gPSAoaXRlbU5hbWUsaWRlbnRpZmllciA9IFwiXCIsaXRlbSkgPT57XG4gICAgY29uc3QgZmluYWxOYW1lID0gaWRlbnRpZmllcitcIl9cIitpdGVtTmFtZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGZpbmFsTmFtZSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG59XG5cbmNvbnN0IGdldEl0ZW0gPSAoaXRlbU5hbWUpID0+e1xuICAgIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1OYW1lKSk7XG4gICAgcmV0dXJuIGl0ZW07XG59XG5cbmNvbnN0IGdldEFsbEl0ZW0gPSAoaWRlbnRpZmllcikgPT57XG4gICAgbGV0IGtleXMgPU9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG4gICAgY29uc3QgaXRlbUxpc3QgPSBbXVxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGtleSlcbiAgICAgICAgaWYoa2V5LmluY2x1ZGVzKGlkZW50aWZpZXIpKXtcbiAgICAgICAgICAgIGxldCBpdGVtID0gZ2V0SXRlbShrZXksIGlkZW50aWZpZXIpXG4gICAgICAgICAgICBpdGVtTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBpdGVtTGlzdDtcbn1cblxuZXhwb3J0IHthZGRJdGVtLCBnZXRJdGVtLGdldEFsbEl0ZW19XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vbW9kdWxlcy9Qcm9qZWN0LmpzJ1xuaW1wb3J0IGdlbmVyYXRlUHJvamVjdFVpIGZyb20gJy4vbW9kdWxlcy9Qcm9qZWN0VUknO1xuaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tICcuL21vZHVsZXMvU3RvcmFnZSc7XG5cbmxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcblxuXG5cbmNvbnN0IGluaXRQcm9qZWN0cyA9ICgpID0+e1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJylcbiAgICBsZXQgcHJvamVjdHMgPSBnZXRBbGxQcm9qZWN0cyhcInByb2plY3RcIiwgXCJpZGVudGlmaWVyXCIpXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RVaShwcm9qZWN0KSlcbiAgICB9KVxufVxuXG5jb25zdCBnZXRBbGxQcm9qZWN0cyA9IChpZGVudGlmaWVyKSA9PntcbiAgICByZXR1cm4gU3RvcmFnZS5nZXRBbGxJdGVtKGlkZW50aWZpZXIpXG59XG5cbmNvbnN0IGFkZER1bW15UHJvamVjdHMgPSAoKSA9PntcbiAgICBjb25zdCBwcm9qZWN0T25lID0gIFByb2plY3QoXG4gICAgICAgIFwiQ2FsY3VsYXRvclwiLFxuICAgICAgICBcIkEgV2ViIGJhc2VkIGNhbGN1bGF0b3IgYnVpbHQgd2l0aCBIVE1MLCBWYW5pbGxhIENTUyBhbmQgSmF2YXNjcmlwdC5cIixcbiAgICAgICAgXCJodHRwczovL3RpbW90aHlqYXBvbGluYXJpby5naXRodWIuaW8vQ2FsY3VsYXRvci9cIixcbiAgICAgICAgdHJ1ZVxuICAgIClcbiAgICBTdG9yYWdlLmFkZEl0ZW0ocHJvamVjdE9uZS50aXRsZSxcInByb2plY3RcIiwgcHJvamVjdE9uZSlcblxuICAgIGNvbnN0IHByb2plY3RUd28gPSAgUHJvamVjdChcbiAgICAgICAgXCJTaWdudXAgRm9ybVwiLFxuICAgICAgICBcIkEgc3RhdGljIFNpZ251cCBGb3JtIGJ1aWx0IHdpdGggSFRNTCBhbmQgVmFuaWxsYSBDU1MuXFxuIFRoaXMgaXMganVzdCBhIGRlc2lnblwiLFxuICAgICAgICBcImh0dHBzOi8vdGltb3RoeWphcG9saW5hcmlvLmdpdGh1Yi5pby9zaWduLXVwLWZvcm0tVE9QL1wiLFxuICAgICAgICB0cnVlXG4gICAgKVxuICAgIFN0b3JhZ2UuYWRkSXRlbShwcm9qZWN0VHdvLnRpdGxlLFwicHJvamVjdFwiLCBwcm9qZWN0VHdvKVxuXG4gICAgY29uc3QgcHJvamVjdFRocmVlID0gIFByb2plY3QoXG4gICAgICAgIFwiRXRjaC1BLVNrZXRjaFwiLFxuICAgICAgICBcIkEgZHJhd2luZyB3ZWIgYXBwbGljYXRpb24uIFRoaXMgZm9jdXNlcyBvbiB0aGUgdXNlIG9mIENTUyBHcmlkIGFuZCBKYXZhc2NyaXB0LlwiLFxuICAgICAgICBcImh0dHBzOi8vdGltb3RoeWphcG9saW5hcmlvLmdpdGh1Yi5pby9ldGNoLWEtc2tldGNoL1wiLFxuICAgICAgICB0cnVlXG4gICAgKVxuICAgIFN0b3JhZ2UuYWRkSXRlbShwcm9qZWN0VGhyZWUudGl0bGUsXCJwcm9qZWN0XCIsIHByb2plY3RUaHJlZSlcblxuICAgIGNvbnN0IHByb2plY3RGb3VyID0gIFByb2plY3QoXG4gICAgICAgIFwiaVR1bmVzTW92aWVzXCIsXG4gICAgICAgIFwiQW4gYW5kcm9pZCBhcHBsaWNhdGlvbiBmb3IgbW92aWUgZGlyZWN0b3JpZXMuIEl0IGZldGNoZXMgbW92aWVzIGZyb20gaVR1bmVzQVBJIGJ1aWx0IHdpdGgga290bGluIGFuZCBqZXRwYWNrIGNvbXBvc2VcIixcbiAgICAgICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmY0F5ZzNfUFd4dXphSnpYYXpvLW5pQU45RFd5MmwzeC92aWV3P3VzcD1zaGFyaW5nXCIsXG4gICAgICAgIHRydWVcbiAgICApXG4gICAgU3RvcmFnZS5hZGRJdGVtKHByb2plY3RGb3VyLnRpdGxlLFwicHJvamVjdFwiLCBwcm9qZWN0Rm91cilcbn1cblxuYWRkRHVtbXlQcm9qZWN0cygpXG5pbml0UHJvamVjdHMoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==