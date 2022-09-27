/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Announcement.js":
/*!*************************************!*\
  !*** ./src/modules/Announcement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const announcementInterface = (state) =>({
    type: "announcementInterface"
})
const Announcement = (title, content) => {
    let state = {
        title:title,
        content:content
    }
    let myInterface = Object.create(announcementInterface(state))
    console.log(myInterface)
    return Object.assign(myInterface,state)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Announcement);

/***/ }),

/***/ "./src/modules/AnnouncementUI.js":
/*!***************************************!*\
  !*** ./src/modules/AnnouncementUI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const generateAnnouncementUI = (announcement) =>{
    const announcementUI = document.createElement('div')
    announcementUI.classList.add('announcement')

    const title = document.createElement('div')
    title.classList.add('announcement-title')
    title.innerText = announcement.title

    const content = document.createElement('div')
    content.classList.add('announcement-content')
    content.innerText = announcement.content

    announcementUI.appendChild(title)
    announcementUI.appendChild(content)

    return announcementUI
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAnnouncementUI);

/***/ }),

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
/* harmony import */ var _modules_AnnouncementUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/AnnouncementUI */ "./src/modules/AnnouncementUI.js");
/* harmony import */ var _modules_Announcement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Announcement */ "./src/modules/Announcement.js");






let projects = document.querySelectorAll(".project");



const initProjects = () =>{
    const projectContainer = document.querySelector('.projects-container')
    let projects = getAllObjectFromLocalStorage("project")
    projects.forEach(project => {
        projectContainer.appendChild((0,_modules_ProjectUI__WEBPACK_IMPORTED_MODULE_1__["default"])(project))
    })
}

const initAnnouncement = () =>{
    const announcementContainer = document.querySelector('.sidebar-announcements')
    console.log(announcementContainer)
    let announcements = getAllObjectFromLocalStorage("ann")
    announcements.forEach(announcement => {
        announcementContainer.appendChild((0,_modules_AnnouncementUI__WEBPACK_IMPORTED_MODULE_3__["default"])(announcement))
    })
}

const getAllObjectFromLocalStorage = (identifier) =>{
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


const addDummyAnnouncements = () => {
    const ann1 = (0,_modules_Announcement__WEBPACK_IMPORTED_MODULE_4__["default"])(
        'MisterFapoh for Internship!',
        'MisterFapoh is looking for an internship! Do not miss this opportunity!'
    )
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__.addItem('ann1', 'ann', ann1)
    const ann2 = (0,_modules_Announcement__WEBPACK_IMPORTED_MODULE_4__["default"])(
        'Porksteak for lunch!',
        'July 24 2022 will have Porksteak for lunch! Ready your stomach for this heavy delicious meal!'
    )
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__.addItem('ann2', 'ann', ann2)
    const ann3 = (0,_modules_Announcement__WEBPACK_IMPORTED_MODULE_4__["default"])(
        'Charger died.',
        'My charger broke down. Lasted for only like 3 years'
    )
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__.addItem('ann3', 'ann', ann3)
}


addDummyProjects()
initProjects()
addDummyAnnouncements()
initAnnouncement()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUkscURBQWU7QUFDbkIsaUJBQWlCLGlFQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWU7QUFDbkIsaUJBQWlCLGlFQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWU7QUFDbkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vc3JjL21vZHVsZXMvQW5ub3VuY2VtZW50LmpzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL3NyYy9tb2R1bGVzL0Fubm91bmNlbWVudFVJLmpzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vc3JjL21vZHVsZXMvUHJvamVjdE9wdGlvblVJLmpzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL3NyYy9tb2R1bGVzL1Byb2plY3RVSSIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbm5vdW5jZW1lbnRJbnRlcmZhY2UgPSAoc3RhdGUpID0+KHtcbiAgICB0eXBlOiBcImFubm91bmNlbWVudEludGVyZmFjZVwiXG59KVxuY29uc3QgQW5ub3VuY2VtZW50ID0gKHRpdGxlLCBjb250ZW50KSA9PiB7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICB0aXRsZTp0aXRsZSxcbiAgICAgICAgY29udGVudDpjb250ZW50XG4gICAgfVxuICAgIGxldCBteUludGVyZmFjZSA9IE9iamVjdC5jcmVhdGUoYW5ub3VuY2VtZW50SW50ZXJmYWNlKHN0YXRlKSlcbiAgICBjb25zb2xlLmxvZyhteUludGVyZmFjZSlcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihteUludGVyZmFjZSxzdGF0ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5ub3VuY2VtZW50IiwiY29uc3QgZ2VuZXJhdGVBbm5vdW5jZW1lbnRVSSA9IChhbm5vdW5jZW1lbnQpID0+e1xuICAgIGNvbnN0IGFubm91bmNlbWVudFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhbm5vdW5jZW1lbnRVSS5jbGFzc0xpc3QuYWRkKCdhbm5vdW5jZW1lbnQnKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Fubm91bmNlbWVudC10aXRsZScpXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gYW5ub3VuY2VtZW50LnRpdGxlXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Fubm91bmNlbWVudC1jb250ZW50JylcbiAgICBjb250ZW50LmlubmVyVGV4dCA9IGFubm91bmNlbWVudC5jb250ZW50XG5cbiAgICBhbm5vdW5jZW1lbnRVSS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBhbm5vdW5jZW1lbnRVSS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICAgcmV0dXJuIGFubm91bmNlbWVudFVJXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQW5ub3VuY2VtZW50VUkiLCJcbmNvbnN0IHByb2plY3RJbnRlcmZhY2UgPSAoc3RhdGUpID0+KHtcbiAgICB0eXBlOiBcInByb2plY3RJbnRlcmZhY2VcIlxufSlcbmNvbnN0IFByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBsaW5rLCBpc0Zhdm9yaXRlKSA9PiB7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICB0aXRsZTp0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246ZGVzY3JpcHRpb24sXG4gICAgICAgIGxpbms6bGluayxcbiAgICAgICAgaXNGYXZvcml0ZTppc0Zhdm9yaXRlLFxuICAgIH1cbiAgICBsZXQgbXlJbnRlcmZhY2UgPSBPYmplY3QuY3JlYXRlKHByb2plY3RJbnRlcmZhY2Uoc3RhdGUpKVxuICAgIGNvbnNvbGUubG9nKG15SW50ZXJmYWNlKVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG15SW50ZXJmYWNlLHN0YXRlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwiY29uc3QgZ2VuZXJhdGVPcHRpb25zVUkgPSAocGFyZW50Tm9kZSwgcHJvamVjdCkgPT57XG4gICAgbGV0IHByb2plY3RPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0T3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbnMnKVxuXG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVGYXZvcml0ZUJ1dHRvbihwcm9qZWN0KSkgXG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTaGFyZUJ1dHRvbihwcm9qZWN0KSlcbiAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChnZW5lcmF0ZURlbGV0ZUJ1dHRvbihwYXJlbnROb2RlKSlcblxuICAgIHJldHVybiBwcm9qZWN0T3B0aW9uc1xufVxuXG5jb25zdCBnZW5lcmF0ZUZhdm9yaXRlQnV0dG9uID0gKHByb2plY3QpID0+e1xuICAgIGxldCBmYXZvcml0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaWYocHJvamVjdC5pc0Zhdm9yaXRlKXtcbiAgICAgICAgZmF2b3JpdGVCdXR0b24uc3JjID0gXCIuL2ltYWdlcy9oZWFydC5zdmdcIlxuICAgIH1lbHNle1xuICAgICAgICBmYXZvcml0ZUJ1dHRvbi5zcmMgPSBcIi4vaW1hZ2VzL2hlYXJ0LW91dGxpbmUuc3ZnXCJcbiAgICB9XG5cbiAgICBmYXZvcml0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGNoYW5nZUZhdm9yaXRlU3RhdHVzKGZhdm9yaXRlQnV0dG9uLCBwcm9qZWN0KVxuICAgIH0pXG5cbiAgICByZXR1cm4gZmF2b3JpdGVCdXR0b25cbn1cblxuY29uc3QgZ2VuZXJhdGVEZWxldGVCdXR0b24gPSAocGFyZW50Tm9kZSkgPT57XG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZGVsZXRlQnV0dG9uLnNyYyA9IFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1wiXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBkZWxldGVQcm9qZWN0KHBhcmVudE5vZGUpXG4gICAgfSlcblxuICAgIHJldHVybiBkZWxldGVCdXR0b25cbn1cblxuY29uc3QgZ2VuZXJhdGVTaGFyZUJ1dHRvbiA9IChwcm9qZWN0KSA9PntcbiAgICBsZXQgc2hhcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHNoYXJlQnV0dG9uLnNyYyA9IFwiLi9pbWFnZXMvc2hhcmUuc3ZnXCJcbiAgICBzaGFyZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgY29weUxpbmtUb0NsaXBCb2FyZChwcm9qZWN0LmxpbmspXG4gICAgfSlcblxuICAgIHJldHVybiBzaGFyZUJ1dHRvblxufVxuXG5cbmNvbnN0IGNvcHlMaW5rVG9DbGlwQm9hcmQgPSAobGluayk9PntcbiAgICBpZihsaW5rKXtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobGluaykudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiTGluayBDb3BpZWQhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9ZWxzZXtcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiTm8gbGluayBpcyBwcm92aWRlZCFcIilcbiAgICB9XG59XG5cbmNvbnN0IGNoYW5nZUZhdm9yaXRlU3RhdHVzID0gKGJ1dHRvbiwgcHJvamVjdCk9PntcbiAgICBpZihwcm9qZWN0LmlzRmF2b3JpdGUpe1xuICAgICAgICBwcm9qZWN0LmlzRmF2b3JpdGUgPSBmYWxzZVxuICAgICAgICBidXR0b24uc3JjID0gXCIuL2ltYWdlcy9oZWFydC1vdXRsaW5lLnN2Z1wiXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBwcm9qZWN0LmlzRmF2b3JpdGUgPSB0cnVlXG4gICAgYnV0dG9uLnNyYyA9IFwiLi9pbWFnZXMvaGVhcnQuc3ZnXCJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxufVxuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKHBhcmVudE5vZGUpID0+e1xuICAgIHBhcmVudE5vZGUucmVtb3ZlKClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZU9wdGlvbnNVSSIsImltcG9ydCBnZW5lcmF0ZU9wdGlvbnNVSSBmcm9tIFwiLi9Qcm9qZWN0T3B0aW9uVUlcIlxuXG5jb25zdCBnZW5lcmF0ZVByb2plY3RVaSA9IChwcm9qZWN0KT0+e1xuICAgIGxldCBwcm9qZWN0VUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RVSS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcblxuICAgIHByb2plY3RVSS5hcHBlbmRDaGlsZChnZW5lcmF0ZVRpdGxlVUkocHJvamVjdCkpXG4gICAgcHJvamVjdFVJLmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdERlc2NyaXB0aW9uVUkocHJvamVjdCkpXG4gICAgcHJvamVjdFVJLmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdE9wdGlvbnMocHJvamVjdFVJLCBwcm9qZWN0KSlcblxuICAgIHJldHVybiBwcm9qZWN0VUlcblxufVxuXG5jb25zdCBnZW5lcmF0ZVRpdGxlVUkgPSAocHJvamVjdCkgPT57XG4gICAgbGV0IHRpdGxlVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlVUkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpXG5cbiAgICBsZXQgcHJvamVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBwcm9qZWN0TGluay5ocmVmID0gcHJvamVjdC5saW5rXG4gICAgcHJvamVjdC50YXJnZXQgPSBcIl9ibGFua1wiXG4gICAgcHJvamVjdExpbmsuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZSArIFwiIFwiXG4gICAgXG4gICAgbGV0IG9wZW5MaW5rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBvcGVuTGlua0J1dHRvbi5zcmMgPSBcIi4vaW1hZ2VzL29wZW4taW4tbmV3LnN2Z1wiXG4gICAgb3BlbkxpbmtCdXR0b24uYWx0ID1cIlwiXG5cbiAgICBwcm9qZWN0TGluay5hcHBlbmRDaGlsZChvcGVuTGlua0J1dHRvbilcbiAgICB0aXRsZVVJLmFwcGVuZENoaWxkKHByb2plY3RMaW5rKVxuXG4gICAgcmV0dXJuIHRpdGxlVUlcbn1cblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0RGVzY3JpcHRpb25VSSA9IChwcm9qZWN0KT0+e1xuICAgIGxldCBkZXNjcmlwdGlvblVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvblVJLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpXG5cbiAgICBkZXNjcmlwdGlvblVJLmlubmVyVGV4dCA9IHByb2plY3QuZGVzY3JpcHRpb25cblxuICAgIHJldHVybiBkZXNjcmlwdGlvblVJXG59XG5cbmNvbnN0IGdlbmVyYXRlUHJvamVjdE9wdGlvbnMgPSAocGFyZW50Tm9kZSwgcHJvamVjdCkgPT57XG4gICAgcmV0dXJuIGdlbmVyYXRlT3B0aW9uc1VJKHBhcmVudE5vZGUsIHByb2plY3QpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUHJvamVjdFVpIiwiY29uc3QgYWRkSXRlbSA9IChpdGVtTmFtZSxpZGVudGlmaWVyID0gXCJcIixpdGVtKSA9PntcbiAgICBjb25zdCBmaW5hbE5hbWUgPSBpZGVudGlmaWVyK1wiX1wiK2l0ZW1OYW1lXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZmluYWxOYW1lLCBKU09OLnN0cmluZ2lmeShpdGVtKSlcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShpdGVtKSlcbn1cblxuY29uc3QgZ2V0SXRlbSA9IChpdGVtTmFtZSkgPT57XG4gICAgY29uc3QgaXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbU5hbWUpKTtcbiAgICByZXR1cm4gaXRlbTtcbn1cblxuY29uc3QgZ2V0QWxsSXRlbSA9IChpZGVudGlmaWVyKSA9PntcbiAgICBsZXQga2V5cyA9T2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcbiAgICBjb25zdCBpdGVtTGlzdCA9IFtdXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coa2V5KVxuICAgICAgICBpZihrZXkuaW5jbHVkZXMoaWRlbnRpZmllcikpe1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBnZXRJdGVtKGtleSwgaWRlbnRpZmllcilcbiAgICAgICAgICAgIGl0ZW1MaXN0LnB1c2goaXRlbSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGl0ZW1MaXN0O1xufVxuXG5leHBvcnQge2FkZEl0ZW0sIGdldEl0ZW0sZ2V0QWxsSXRlbX1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9tb2R1bGVzL1Byb2plY3QuanMnXG5pbXBvcnQgZ2VuZXJhdGVQcm9qZWN0VWkgZnJvbSAnLi9tb2R1bGVzL1Byb2plY3RVSSc7XG5pbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gJy4vbW9kdWxlcy9TdG9yYWdlJztcbmltcG9ydCBnZW5lcmF0ZUFubm91bmNlbWVudFVJIGZyb20gJy4vbW9kdWxlcy9Bbm5vdW5jZW1lbnRVSSdcbmltcG9ydCBBbm5vdW5jZW1lbnQgZnJvbSAnLi9tb2R1bGVzL0Fubm91bmNlbWVudCdcblxubGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuXG5cblxuY29uc3QgaW5pdFByb2plY3RzID0gKCkgPT57XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKVxuICAgIGxldCBwcm9qZWN0cyA9IGdldEFsbE9iamVjdEZyb21Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0XCIpXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RVaShwcm9qZWN0KSlcbiAgICB9KVxufVxuXG5jb25zdCBpbml0QW5ub3VuY2VtZW50ID0gKCkgPT57XG4gICAgY29uc3QgYW5ub3VuY2VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItYW5ub3VuY2VtZW50cycpXG4gICAgY29uc29sZS5sb2coYW5ub3VuY2VtZW50Q29udGFpbmVyKVxuICAgIGxldCBhbm5vdW5jZW1lbnRzID0gZ2V0QWxsT2JqZWN0RnJvbUxvY2FsU3RvcmFnZShcImFublwiKVxuICAgIGFubm91bmNlbWVudHMuZm9yRWFjaChhbm5vdW5jZW1lbnQgPT4ge1xuICAgICAgICBhbm5vdW5jZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVBbm5vdW5jZW1lbnRVSShhbm5vdW5jZW1lbnQpKVxuICAgIH0pXG59XG5cbmNvbnN0IGdldEFsbE9iamVjdEZyb21Mb2NhbFN0b3JhZ2UgPSAoaWRlbnRpZmllcikgPT57XG4gICAgcmV0dXJuIFN0b3JhZ2UuZ2V0QWxsSXRlbShpZGVudGlmaWVyKVxufVxuXG5jb25zdCBhZGREdW1teVByb2plY3RzID0gKCkgPT57XG4gICAgY29uc3QgcHJvamVjdE9uZSA9ICBQcm9qZWN0KFxuICAgICAgICBcIkNhbGN1bGF0b3JcIixcbiAgICAgICAgXCJBIFdlYiBiYXNlZCBjYWxjdWxhdG9yIGJ1aWx0IHdpdGggSFRNTCwgVmFuaWxsYSBDU1MgYW5kIEphdmFzY3JpcHQuXCIsXG4gICAgICAgIFwiaHR0cHM6Ly90aW1vdGh5amFwb2xpbmFyaW8uZ2l0aHViLmlvL0NhbGN1bGF0b3IvXCIsXG4gICAgICAgIHRydWVcbiAgICApXG4gICAgU3RvcmFnZS5hZGRJdGVtKHByb2plY3RPbmUudGl0bGUsXCJwcm9qZWN0XCIsIHByb2plY3RPbmUpXG5cbiAgICBjb25zdCBwcm9qZWN0VHdvID0gIFByb2plY3QoXG4gICAgICAgIFwiU2lnbnVwIEZvcm1cIixcbiAgICAgICAgXCJBIHN0YXRpYyBTaWdudXAgRm9ybSBidWlsdCB3aXRoIEhUTUwgYW5kIFZhbmlsbGEgQ1NTLlxcbiBUaGlzIGlzIGp1c3QgYSBkZXNpZ25cIixcbiAgICAgICAgXCJodHRwczovL3RpbW90aHlqYXBvbGluYXJpby5naXRodWIuaW8vc2lnbi11cC1mb3JtLVRPUC9cIixcbiAgICAgICAgdHJ1ZVxuICAgIClcbiAgICBTdG9yYWdlLmFkZEl0ZW0ocHJvamVjdFR3by50aXRsZSxcInByb2plY3RcIiwgcHJvamVjdFR3bylcblxuICAgIGNvbnN0IHByb2plY3RUaHJlZSA9ICBQcm9qZWN0KFxuICAgICAgICBcIkV0Y2gtQS1Ta2V0Y2hcIixcbiAgICAgICAgXCJBIGRyYXdpbmcgd2ViIGFwcGxpY2F0aW9uLiBUaGlzIGZvY3VzZXMgb24gdGhlIHVzZSBvZiBDU1MgR3JpZCBhbmQgSmF2YXNjcmlwdC5cIixcbiAgICAgICAgXCJodHRwczovL3RpbW90aHlqYXBvbGluYXJpby5naXRodWIuaW8vZXRjaC1hLXNrZXRjaC9cIixcbiAgICAgICAgdHJ1ZVxuICAgIClcbiAgICBTdG9yYWdlLmFkZEl0ZW0ocHJvamVjdFRocmVlLnRpdGxlLFwicHJvamVjdFwiLCBwcm9qZWN0VGhyZWUpXG5cbiAgICBjb25zdCBwcm9qZWN0Rm91ciA9ICBQcm9qZWN0KFxuICAgICAgICBcImlUdW5lc01vdmllc1wiLFxuICAgICAgICBcIkFuIGFuZHJvaWQgYXBwbGljYXRpb24gZm9yIG1vdmllIGRpcmVjdG9yaWVzLiBJdCBmZXRjaGVzIG1vdmllcyBmcm9tIGlUdW5lc0FQSSBidWlsdCB3aXRoIGtvdGxpbiBhbmQgamV0cGFjayBjb21wb3NlXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZmNBeWczX1BXeHV6YUp6WGF6by1uaUFOOURXeTJsM3gvdmlldz91c3A9c2hhcmluZ1wiLFxuICAgICAgICB0cnVlXG4gICAgKVxuICAgIFN0b3JhZ2UuYWRkSXRlbShwcm9qZWN0Rm91ci50aXRsZSxcInByb2plY3RcIiwgcHJvamVjdEZvdXIpXG59XG5cblxuY29uc3QgYWRkRHVtbXlBbm5vdW5jZW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFubjEgPSBBbm5vdW5jZW1lbnQoXG4gICAgICAgICdNaXN0ZXJGYXBvaCBmb3IgSW50ZXJuc2hpcCEnLFxuICAgICAgICAnTWlzdGVyRmFwb2ggaXMgbG9va2luZyBmb3IgYW4gaW50ZXJuc2hpcCEgRG8gbm90IG1pc3MgdGhpcyBvcHBvcnR1bml0eSEnXG4gICAgKVxuICAgIFN0b3JhZ2UuYWRkSXRlbSgnYW5uMScsICdhbm4nLCBhbm4xKVxuICAgIGNvbnN0IGFubjIgPSBBbm5vdW5jZW1lbnQoXG4gICAgICAgICdQb3Jrc3RlYWsgZm9yIGx1bmNoIScsXG4gICAgICAgICdKdWx5IDI0IDIwMjIgd2lsbCBoYXZlIFBvcmtzdGVhayBmb3IgbHVuY2ghIFJlYWR5IHlvdXIgc3RvbWFjaCBmb3IgdGhpcyBoZWF2eSBkZWxpY2lvdXMgbWVhbCEnXG4gICAgKVxuICAgIFN0b3JhZ2UuYWRkSXRlbSgnYW5uMicsICdhbm4nLCBhbm4yKVxuICAgIGNvbnN0IGFubjMgPSBBbm5vdW5jZW1lbnQoXG4gICAgICAgICdDaGFyZ2VyIGRpZWQuJyxcbiAgICAgICAgJ015IGNoYXJnZXIgYnJva2UgZG93bi4gTGFzdGVkIGZvciBvbmx5IGxpa2UgMyB5ZWFycydcbiAgICApXG4gICAgU3RvcmFnZS5hZGRJdGVtKCdhbm4zJywgJ2FubicsIGFubjMpXG59XG5cblxuYWRkRHVtbXlQcm9qZWN0cygpXG5pbml0UHJvamVjdHMoKVxuYWRkRHVtbXlBbm5vdW5jZW1lbnRzKClcbmluaXRBbm5vdW5jZW1lbnQoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==