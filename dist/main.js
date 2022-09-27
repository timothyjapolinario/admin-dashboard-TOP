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
        return
    }
    project.isFavorite = true
    button.src = "./images/heart.svg"
}

const deleteProject = (parentNode) =>{
    parentNode.remove()
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateOptionsUI);

/***/ }),

/***/ "./src/modules/ProjectUI.js":
/*!**********************************!*\
  !*** ./src/modules/ProjectUI.js ***!
  \**********************************/
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
}

const getItem = (itemName) =>{
    const item = JSON.parse(localStorage.getItem(itemName));
    return item;
}

const getAllItem = (identifier) =>{
    let keys =Object.keys(localStorage);
    const itemList = []
    keys.forEach((key) => {
        if(key.includes(identifier)){
            let item = getItem(key, identifier)
            itemList.push(item)
        }
    })
    return itemList;
}




/***/ }),

/***/ "./src/modules/Trend.js":
/*!******************************!*\
  !*** ./src/modules/Trend.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const trendInterface = (state) =>({
    type: "trendInterface"
})
const Trend = (profileName, profileIcon, projectName) => {
    let state = {
        profileName:profileName,
        profileIcon:profileIcon,
        projectName: projectName
    }
    let myInterface = Object.create(trendInterface(state))
    return Object.assign(myInterface,state)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trend);

/***/ }),

/***/ "./src/modules/TrendUI.js":
/*!********************************!*\
  !*** ./src/modules/TrendUI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const generateTrendUI = (trend) =>{
    console.log(trend)
    const trendUI = document.createElement('div')
    trendUI.classList.add('trend')

    const profileIconUI = document.createElement('div')
    profileIconUI.classList.add('trend-profile-icon')
    const profileImage = document.createElement('img')
    profileImage.src = trend.profileIcon
    profileIconUI.appendChild(profileImage)
    
    const profileNameUI = document.createElement('div')
    profileNameUI.classList.add('trend-profile-name')
    profileNameUI.innerText = trend.profileName

    const profileProjectUI = document.createElement('div')
    profileProjectUI.classList.add('trend-project')
    profileProjectUI.innerText = trend.projectName


    trendUI.appendChild(profileIconUI)
    trendUI.appendChild(profileNameUI)
    trendUI.appendChild(profileProjectUI)

    return trendUI
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateTrendUI);

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
/* harmony import */ var _modules_ProjectUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ProjectUI.js */ "./src/modules/ProjectUI.js");
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");
/* harmony import */ var _modules_AnnouncementUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/AnnouncementUI */ "./src/modules/AnnouncementUI.js");
/* harmony import */ var _modules_Announcement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Announcement */ "./src/modules/Announcement.js");
/* harmony import */ var _modules_Trend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Trend */ "./src/modules/Trend.js");
/* harmony import */ var _modules_TrendUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/TrendUI */ "./src/modules/TrendUI.js");








let projects = document.querySelectorAll(".project");



const initProjects = () =>{
    const projectContainer = document.querySelector('.projects-container')
    let projects = getAllObjectFromLocalStorage("project")
    projects.forEach(project => {
        projectContainer.appendChild((0,_modules_ProjectUI_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project))
    })
}

const initAnnouncement = () =>{
    const announcementContainer = document.querySelector('.sidebar-announcements')
    let announcements = getAllObjectFromLocalStorage("ann")
    announcements.forEach(announcement => {
        announcementContainer.appendChild((0,_modules_AnnouncementUI__WEBPACK_IMPORTED_MODULE_3__["default"])(announcement))
    })
}

const initTrend = () =>{
    const trendContainer = document.querySelector('.sidebar-trendings')
    let trends = getAllObjectFromLocalStorage("trd")
    trends.forEach(trend => {
        trendContainer.appendChild((0,_modules_TrendUI__WEBPACK_IMPORTED_MODULE_6__["default"])(trend))
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

const addDummyTrend = () => {
    const trd1 = (0,_modules_Trend__WEBPACK_IMPORTED_MODULE_5__["default"])(
        '@mabzzz',
        './images/mabzzz-icon.png',
        'An upside down building.'
    )

    console.log(trd1)

    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__.addItem('trd1', 'trd', trd1)
    const trd2 = (0,_modules_Trend__WEBPACK_IMPORTED_MODULE_5__["default"])(
        '@geriri',
        './images/geriri-icon.png',
        'An airport inside a mall.'
    )
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__.addItem('trd2', 'trd', trd2)

    const trd3 = (0,_modules_Trend__WEBPACK_IMPORTED_MODULE_5__["default"])(
        '@supahxad',
        './images/jasper-icon.png',
        'SadBoiDrug; A new type of illegal drug.'
    )
    _modules_Storage__WEBPACK_IMPORTED_MODULE_2__.addItem('trd3', 'trd', trd3)
}

addDummyProjects()
initProjects()

addDummyAnnouncements()
initAnnouncement()

addDummyTrend()
initTrend()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsSUFBSSxxREFBZTs7QUFFbkIsd0JBQXdCLCtEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFlOztBQUVuQiwwQkFBMEIsK0RBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWU7O0FBRW5CLHlCQUF5QiwrREFBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBZTtBQUNuQjs7O0FBR0E7QUFDQSxpQkFBaUIsaUVBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBZTtBQUNuQixpQkFBaUIsaUVBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBZTtBQUNuQixpQkFBaUIsaUVBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBZTtBQUNuQjs7QUFFQTtBQUNBLGlCQUFpQiwwREFBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLHFEQUFlO0FBQ25CLGlCQUFpQiwwREFBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWU7O0FBRW5CLGlCQUFpQiwwREFBSztBQUN0QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsSUFBSSxxREFBZTtBQUNuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL3NyYy9tb2R1bGVzL0Fubm91bmNlbWVudC5qcyIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9zcmMvbW9kdWxlcy9Bbm5vdW5jZW1lbnRVSS5qcyIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL3NyYy9tb2R1bGVzL1Byb2plY3RPcHRpb25VSS5qcyIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0VUkuanMiLCJ3ZWJwYWNrOi8vYWRtaW4tZGFzaGJvYXJkLy4vc3JjL21vZHVsZXMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9zcmMvbW9kdWxlcy9UcmVuZC5qcyIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvLi9zcmMvbW9kdWxlcy9UcmVuZFVJLmpzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZG1pbi1kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FkbWluLWRhc2hib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbm5vdW5jZW1lbnRJbnRlcmZhY2UgPSAoc3RhdGUpID0+KHtcbiAgICB0eXBlOiBcImFubm91bmNlbWVudEludGVyZmFjZVwiXG59KVxuY29uc3QgQW5ub3VuY2VtZW50ID0gKHRpdGxlLCBjb250ZW50KSA9PiB7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICB0aXRsZTp0aXRsZSxcbiAgICAgICAgY29udGVudDpjb250ZW50XG4gICAgfVxuICAgIGxldCBteUludGVyZmFjZSA9IE9iamVjdC5jcmVhdGUoYW5ub3VuY2VtZW50SW50ZXJmYWNlKHN0YXRlKSlcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihteUludGVyZmFjZSxzdGF0ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5ub3VuY2VtZW50IiwiY29uc3QgZ2VuZXJhdGVBbm5vdW5jZW1lbnRVSSA9IChhbm5vdW5jZW1lbnQpID0+e1xuICAgIGNvbnN0IGFubm91bmNlbWVudFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhbm5vdW5jZW1lbnRVSS5jbGFzc0xpc3QuYWRkKCdhbm5vdW5jZW1lbnQnKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Fubm91bmNlbWVudC10aXRsZScpXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gYW5ub3VuY2VtZW50LnRpdGxlXG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Fubm91bmNlbWVudC1jb250ZW50JylcbiAgICBjb250ZW50LmlubmVyVGV4dCA9IGFubm91bmNlbWVudC5jb250ZW50XG5cbiAgICBhbm5vdW5jZW1lbnRVSS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBhbm5vdW5jZW1lbnRVSS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gICAgcmV0dXJuIGFubm91bmNlbWVudFVJXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQW5ub3VuY2VtZW50VUkiLCJcbmNvbnN0IHByb2plY3RJbnRlcmZhY2UgPSAoc3RhdGUpID0+KHtcbiAgICB0eXBlOiBcInByb2plY3RJbnRlcmZhY2VcIlxufSlcbmNvbnN0IFByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBsaW5rLCBpc0Zhdm9yaXRlKSA9PiB7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICB0aXRsZTp0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246ZGVzY3JpcHRpb24sXG4gICAgICAgIGxpbms6bGluayxcbiAgICAgICAgaXNGYXZvcml0ZTppc0Zhdm9yaXRlLFxuICAgIH1cbiAgICBsZXQgbXlJbnRlcmZhY2UgPSBPYmplY3QuY3JlYXRlKHByb2plY3RJbnRlcmZhY2Uoc3RhdGUpKVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG15SW50ZXJmYWNlLHN0YXRlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwiY29uc3QgZ2VuZXJhdGVPcHRpb25zVUkgPSAocGFyZW50Tm9kZSwgcHJvamVjdCkgPT57XG4gICAgbGV0IHByb2plY3RPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0T3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbnMnKVxuXG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVGYXZvcml0ZUJ1dHRvbihwcm9qZWN0KSkgXG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVTaGFyZUJ1dHRvbihwcm9qZWN0KSlcbiAgICBwcm9qZWN0T3B0aW9ucy5hcHBlbmRDaGlsZChnZW5lcmF0ZURlbGV0ZUJ1dHRvbihwYXJlbnROb2RlKSlcblxuICAgIHJldHVybiBwcm9qZWN0T3B0aW9uc1xufVxuXG5jb25zdCBnZW5lcmF0ZUZhdm9yaXRlQnV0dG9uID0gKHByb2plY3QpID0+e1xuICAgIGxldCBmYXZvcml0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaWYocHJvamVjdC5pc0Zhdm9yaXRlKXtcbiAgICAgICAgZmF2b3JpdGVCdXR0b24uc3JjID0gXCIuL2ltYWdlcy9oZWFydC5zdmdcIlxuICAgIH1lbHNle1xuICAgICAgICBmYXZvcml0ZUJ1dHRvbi5zcmMgPSBcIi4vaW1hZ2VzL2hlYXJ0LW91dGxpbmUuc3ZnXCJcbiAgICB9XG5cbiAgICBmYXZvcml0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGNoYW5nZUZhdm9yaXRlU3RhdHVzKGZhdm9yaXRlQnV0dG9uLCBwcm9qZWN0KVxuICAgIH0pXG5cbiAgICByZXR1cm4gZmF2b3JpdGVCdXR0b25cbn1cblxuY29uc3QgZ2VuZXJhdGVEZWxldGVCdXR0b24gPSAocGFyZW50Tm9kZSkgPT57XG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZGVsZXRlQnV0dG9uLnNyYyA9IFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1wiXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBkZWxldGVQcm9qZWN0KHBhcmVudE5vZGUpXG4gICAgfSlcblxuICAgIHJldHVybiBkZWxldGVCdXR0b25cbn1cblxuY29uc3QgZ2VuZXJhdGVTaGFyZUJ1dHRvbiA9IChwcm9qZWN0KSA9PntcbiAgICBsZXQgc2hhcmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHNoYXJlQnV0dG9uLnNyYyA9IFwiLi9pbWFnZXMvc2hhcmUuc3ZnXCJcbiAgICBzaGFyZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgY29weUxpbmtUb0NsaXBCb2FyZChwcm9qZWN0LmxpbmspXG4gICAgfSlcblxuICAgIHJldHVybiBzaGFyZUJ1dHRvblxufVxuXG5cbmNvbnN0IGNvcHlMaW5rVG9DbGlwQm9hcmQgPSAobGluayk9PntcbiAgICBpZihsaW5rKXtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobGluaykudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiTGluayBDb3BpZWQhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9ZWxzZXtcbiAgICAgICAgd2luZG93LmFsZXJ0KFwiTm8gbGluayBpcyBwcm92aWRlZCFcIilcbiAgICB9XG59XG5cbmNvbnN0IGNoYW5nZUZhdm9yaXRlU3RhdHVzID0gKGJ1dHRvbiwgcHJvamVjdCk9PntcbiAgICBpZihwcm9qZWN0LmlzRmF2b3JpdGUpe1xuICAgICAgICBwcm9qZWN0LmlzRmF2b3JpdGUgPSBmYWxzZVxuICAgICAgICBidXR0b24uc3JjID0gXCIuL2ltYWdlcy9oZWFydC1vdXRsaW5lLnN2Z1wiXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBwcm9qZWN0LmlzRmF2b3JpdGUgPSB0cnVlXG4gICAgYnV0dG9uLnNyYyA9IFwiLi9pbWFnZXMvaGVhcnQuc3ZnXCJcbn1cblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChwYXJlbnROb2RlKSA9PntcbiAgICBwYXJlbnROb2RlLnJlbW92ZSgpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVPcHRpb25zVUkiLCJpbXBvcnQgZ2VuZXJhdGVPcHRpb25zVUkgZnJvbSBcIi4vUHJvamVjdE9wdGlvblVJXCJcblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0VWkgPSAocHJvamVjdCk9PntcbiAgICBsZXQgcHJvamVjdFVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0VUkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG5cbiAgICBwcm9qZWN0VUkuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVUaXRsZVVJKHByb2plY3QpKVxuICAgIHByb2plY3RVSS5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3REZXNjcmlwdGlvblVJKHByb2plY3QpKVxuICAgIHByb2plY3RVSS5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RPcHRpb25zKHByb2plY3RVSSwgcHJvamVjdCkpXG5cbiAgICByZXR1cm4gcHJvamVjdFVJXG5cbn1cblxuY29uc3QgZ2VuZXJhdGVUaXRsZVVJID0gKHByb2plY3QpID0+e1xuICAgIGxldCB0aXRsZVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZVVJLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKVxuXG4gICAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgcHJvamVjdExpbmsuaHJlZiA9IHByb2plY3QubGlua1xuICAgIHByb2plY3QudGFyZ2V0ID0gXCJfYmxhbmtcIlxuICAgIHByb2plY3RMaW5rLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGUgKyBcIiBcIlxuICAgIFxuICAgIGxldCBvcGVuTGlua0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgb3BlbkxpbmtCdXR0b24uc3JjID0gXCIuL2ltYWdlcy9vcGVuLWluLW5ldy5zdmdcIlxuICAgIG9wZW5MaW5rQnV0dG9uLmFsdCA9XCJcIlxuXG4gICAgcHJvamVjdExpbmsuYXBwZW5kQ2hpbGQob3BlbkxpbmtCdXR0b24pXG4gICAgdGl0bGVVSS5hcHBlbmRDaGlsZChwcm9qZWN0TGluaylcblxuICAgIHJldHVybiB0aXRsZVVJXG59XG5cbmNvbnN0IGdlbmVyYXRlUHJvamVjdERlc2NyaXB0aW9uVUkgPSAocHJvamVjdCk9PntcbiAgICBsZXQgZGVzY3JpcHRpb25VSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb25VSS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZXNjcmlwdGlvblwiKVxuXG4gICAgZGVzY3JpcHRpb25VSS5pbm5lclRleHQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uXG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb25VSVxufVxuXG5jb25zdCBnZW5lcmF0ZVByb2plY3RPcHRpb25zID0gKHBhcmVudE5vZGUsIHByb2plY3QpID0+e1xuICAgIHJldHVybiBnZW5lcmF0ZU9wdGlvbnNVSShwYXJlbnROb2RlLCBwcm9qZWN0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVByb2plY3RVaSIsImNvbnN0IGFkZEl0ZW0gPSAoaXRlbU5hbWUsaWRlbnRpZmllciA9IFwiXCIsaXRlbSkgPT57XG4gICAgY29uc3QgZmluYWxOYW1lID0gaWRlbnRpZmllcitcIl9cIitpdGVtTmFtZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGZpbmFsTmFtZSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG59XG5cbmNvbnN0IGdldEl0ZW0gPSAoaXRlbU5hbWUpID0+e1xuICAgIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1OYW1lKSk7XG4gICAgcmV0dXJuIGl0ZW07XG59XG5cbmNvbnN0IGdldEFsbEl0ZW0gPSAoaWRlbnRpZmllcikgPT57XG4gICAgbGV0IGtleXMgPU9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG4gICAgY29uc3QgaXRlbUxpc3QgPSBbXVxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmKGtleS5pbmNsdWRlcyhpZGVudGlmaWVyKSl7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGdldEl0ZW0oa2V5LCBpZGVudGlmaWVyKVxuICAgICAgICAgICAgaXRlbUxpc3QucHVzaChpdGVtKVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaXRlbUxpc3Q7XG59XG5cbmV4cG9ydCB7YWRkSXRlbSwgZ2V0SXRlbSxnZXRBbGxJdGVtfVxuIiwiY29uc3QgdHJlbmRJbnRlcmZhY2UgPSAoc3RhdGUpID0+KHtcbiAgICB0eXBlOiBcInRyZW5kSW50ZXJmYWNlXCJcbn0pXG5jb25zdCBUcmVuZCA9IChwcm9maWxlTmFtZSwgcHJvZmlsZUljb24sIHByb2plY3ROYW1lKSA9PiB7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICBwcm9maWxlTmFtZTpwcm9maWxlTmFtZSxcbiAgICAgICAgcHJvZmlsZUljb246cHJvZmlsZUljb24sXG4gICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZVxuICAgIH1cbiAgICBsZXQgbXlJbnRlcmZhY2UgPSBPYmplY3QuY3JlYXRlKHRyZW5kSW50ZXJmYWNlKHN0YXRlKSlcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihteUludGVyZmFjZSxzdGF0ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJlbmQiLCJjb25zdCBnZW5lcmF0ZVRyZW5kVUkgPSAodHJlbmQpID0+e1xuICAgIGNvbnNvbGUubG9nKHRyZW5kKVxuICAgIGNvbnN0IHRyZW5kVUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRyZW5kVUkuY2xhc3NMaXN0LmFkZCgndHJlbmQnKVxuXG4gICAgY29uc3QgcHJvZmlsZUljb25VSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvZmlsZUljb25VSS5jbGFzc0xpc3QuYWRkKCd0cmVuZC1wcm9maWxlLWljb24nKVxuICAgIGNvbnN0IHByb2ZpbGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgcHJvZmlsZUltYWdlLnNyYyA9IHRyZW5kLnByb2ZpbGVJY29uXG4gICAgcHJvZmlsZUljb25VSS5hcHBlbmRDaGlsZChwcm9maWxlSW1hZ2UpXG4gICAgXG4gICAgY29uc3QgcHJvZmlsZU5hbWVVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvZmlsZU5hbWVVSS5jbGFzc0xpc3QuYWRkKCd0cmVuZC1wcm9maWxlLW5hbWUnKVxuICAgIHByb2ZpbGVOYW1lVUkuaW5uZXJUZXh0ID0gdHJlbmQucHJvZmlsZU5hbWVcblxuICAgIGNvbnN0IHByb2ZpbGVQcm9qZWN0VUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2ZpbGVQcm9qZWN0VUkuY2xhc3NMaXN0LmFkZCgndHJlbmQtcHJvamVjdCcpXG4gICAgcHJvZmlsZVByb2plY3RVSS5pbm5lclRleHQgPSB0cmVuZC5wcm9qZWN0TmFtZVxuXG5cbiAgICB0cmVuZFVJLmFwcGVuZENoaWxkKHByb2ZpbGVJY29uVUkpXG4gICAgdHJlbmRVSS5hcHBlbmRDaGlsZChwcm9maWxlTmFtZVVJKVxuICAgIHRyZW5kVUkuYXBwZW5kQ2hpbGQocHJvZmlsZVByb2plY3RVSSlcblxuICAgIHJldHVybiB0cmVuZFVJXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlVHJlbmRVSSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9tb2R1bGVzL1Byb2plY3QuanMnXG5pbXBvcnQgZ2VuZXJhdGVQcm9qZWN0VWkgZnJvbSAnLi9tb2R1bGVzL1Byb2plY3RVSS5qcyc7XG5pbXBvcnQgKiBhcyBTdG9yYWdlIGZyb20gJy4vbW9kdWxlcy9TdG9yYWdlJztcbmltcG9ydCBnZW5lcmF0ZUFubm91bmNlbWVudFVJIGZyb20gJy4vbW9kdWxlcy9Bbm5vdW5jZW1lbnRVSSdcbmltcG9ydCBBbm5vdW5jZW1lbnQgZnJvbSAnLi9tb2R1bGVzL0Fubm91bmNlbWVudCdcbmltcG9ydCBUcmVuZCBmcm9tICcuL21vZHVsZXMvVHJlbmQnXG5pbXBvcnQgZ2VuZXJhdGVUcmVuZFVJIGZyb20gJy4vbW9kdWxlcy9UcmVuZFVJJ1xuXG5sZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG5cblxuXG5jb25zdCBpbml0UHJvamVjdHMgPSAoKSA9PntcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpXG4gICAgbGV0IHByb2plY3RzID0gZ2V0QWxsT2JqZWN0RnJvbUxvY2FsU3RvcmFnZShcInByb2plY3RcIilcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdFVpKHByb2plY3QpKVxuICAgIH0pXG59XG5cbmNvbnN0IGluaXRBbm5vdW5jZW1lbnQgPSAoKSA9PntcbiAgICBjb25zdCBhbm5vdW5jZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1hbm5vdW5jZW1lbnRzJylcbiAgICBsZXQgYW5ub3VuY2VtZW50cyA9IGdldEFsbE9iamVjdEZyb21Mb2NhbFN0b3JhZ2UoXCJhbm5cIilcbiAgICBhbm5vdW5jZW1lbnRzLmZvckVhY2goYW5ub3VuY2VtZW50ID0+IHtcbiAgICAgICAgYW5ub3VuY2VtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlQW5ub3VuY2VtZW50VUkoYW5ub3VuY2VtZW50KSlcbiAgICB9KVxufVxuXG5jb25zdCBpbml0VHJlbmQgPSAoKSA9PntcbiAgICBjb25zdCB0cmVuZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLXRyZW5kaW5ncycpXG4gICAgbGV0IHRyZW5kcyA9IGdldEFsbE9iamVjdEZyb21Mb2NhbFN0b3JhZ2UoXCJ0cmRcIilcbiAgICB0cmVuZHMuZm9yRWFjaCh0cmVuZCA9PiB7XG4gICAgICAgIHRyZW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlVHJlbmRVSSh0cmVuZCkpXG4gICAgfSlcbn1cblxuY29uc3QgZ2V0QWxsT2JqZWN0RnJvbUxvY2FsU3RvcmFnZSA9IChpZGVudGlmaWVyKSA9PntcbiAgICByZXR1cm4gU3RvcmFnZS5nZXRBbGxJdGVtKGlkZW50aWZpZXIpXG59XG5cbmNvbnN0IGFkZER1bW15UHJvamVjdHMgPSAoKSA9PntcbiAgICBjb25zdCBwcm9qZWN0T25lID0gIFByb2plY3QoXG4gICAgICAgIFwiQ2FsY3VsYXRvclwiLFxuICAgICAgICBcIkEgV2ViIGJhc2VkIGNhbGN1bGF0b3IgYnVpbHQgd2l0aCBIVE1MLCBWYW5pbGxhIENTUyBhbmQgSmF2YXNjcmlwdC5cIixcbiAgICAgICAgXCJodHRwczovL3RpbW90aHlqYXBvbGluYXJpby5naXRodWIuaW8vQ2FsY3VsYXRvci9cIixcbiAgICAgICAgdHJ1ZVxuICAgIClcbiAgICBTdG9yYWdlLmFkZEl0ZW0ocHJvamVjdE9uZS50aXRsZSxcInByb2plY3RcIiwgcHJvamVjdE9uZSlcblxuICAgIGNvbnN0IHByb2plY3RUd28gPSAgUHJvamVjdChcbiAgICAgICAgXCJTaWdudXAgRm9ybVwiLFxuICAgICAgICBcIkEgc3RhdGljIFNpZ251cCBGb3JtIGJ1aWx0IHdpdGggSFRNTCBhbmQgVmFuaWxsYSBDU1MuXFxuIFRoaXMgaXMganVzdCBhIGRlc2lnblwiLFxuICAgICAgICBcImh0dHBzOi8vdGltb3RoeWphcG9saW5hcmlvLmdpdGh1Yi5pby9zaWduLXVwLWZvcm0tVE9QL1wiLFxuICAgICAgICB0cnVlXG4gICAgKVxuICAgIFN0b3JhZ2UuYWRkSXRlbShwcm9qZWN0VHdvLnRpdGxlLFwicHJvamVjdFwiLCBwcm9qZWN0VHdvKVxuXG4gICAgY29uc3QgcHJvamVjdFRocmVlID0gIFByb2plY3QoXG4gICAgICAgIFwiRXRjaC1BLVNrZXRjaFwiLFxuICAgICAgICBcIkEgZHJhd2luZyB3ZWIgYXBwbGljYXRpb24uIFRoaXMgZm9jdXNlcyBvbiB0aGUgdXNlIG9mIENTUyBHcmlkIGFuZCBKYXZhc2NyaXB0LlwiLFxuICAgICAgICBcImh0dHBzOi8vdGltb3RoeWphcG9saW5hcmlvLmdpdGh1Yi5pby9ldGNoLWEtc2tldGNoL1wiLFxuICAgICAgICB0cnVlXG4gICAgKVxuICAgIFN0b3JhZ2UuYWRkSXRlbShwcm9qZWN0VGhyZWUudGl0bGUsXCJwcm9qZWN0XCIsIHByb2plY3RUaHJlZSlcblxuICAgIGNvbnN0IHByb2plY3RGb3VyID0gIFByb2plY3QoXG4gICAgICAgIFwiaVR1bmVzTW92aWVzXCIsXG4gICAgICAgIFwiQW4gYW5kcm9pZCBhcHBsaWNhdGlvbiBmb3IgbW92aWUgZGlyZWN0b3JpZXMuIEl0IGZldGNoZXMgbW92aWVzIGZyb20gaVR1bmVzQVBJIGJ1aWx0IHdpdGgga290bGluIGFuZCBqZXRwYWNrIGNvbXBvc2VcIixcbiAgICAgICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFmY0F5ZzNfUFd4dXphSnpYYXpvLW5pQU45RFd5MmwzeC92aWV3P3VzcD1zaGFyaW5nXCIsXG4gICAgICAgIHRydWVcbiAgICApXG4gICAgU3RvcmFnZS5hZGRJdGVtKHByb2plY3RGb3VyLnRpdGxlLFwicHJvamVjdFwiLCBwcm9qZWN0Rm91cilcbn1cblxuXG5jb25zdCBhZGREdW1teUFubm91bmNlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYW5uMSA9IEFubm91bmNlbWVudChcbiAgICAgICAgJ01pc3RlckZhcG9oIGZvciBJbnRlcm5zaGlwIScsXG4gICAgICAgICdNaXN0ZXJGYXBvaCBpcyBsb29raW5nIGZvciBhbiBpbnRlcm5zaGlwISBEbyBub3QgbWlzcyB0aGlzIG9wcG9ydHVuaXR5ISdcbiAgICApXG4gICAgU3RvcmFnZS5hZGRJdGVtKCdhbm4xJywgJ2FubicsIGFubjEpXG4gICAgY29uc3QgYW5uMiA9IEFubm91bmNlbWVudChcbiAgICAgICAgJ1BvcmtzdGVhayBmb3IgbHVuY2ghJyxcbiAgICAgICAgJ0p1bHkgMjQgMjAyMiB3aWxsIGhhdmUgUG9ya3N0ZWFrIGZvciBsdW5jaCEgUmVhZHkgeW91ciBzdG9tYWNoIGZvciB0aGlzIGhlYXZ5IGRlbGljaW91cyBtZWFsISdcbiAgICApXG4gICAgU3RvcmFnZS5hZGRJdGVtKCdhbm4yJywgJ2FubicsIGFubjIpXG4gICAgY29uc3QgYW5uMyA9IEFubm91bmNlbWVudChcbiAgICAgICAgJ0NoYXJnZXIgZGllZC4nLFxuICAgICAgICAnTXkgY2hhcmdlciBicm9rZSBkb3duLiBMYXN0ZWQgZm9yIG9ubHkgbGlrZSAzIHllYXJzJ1xuICAgIClcbiAgICBTdG9yYWdlLmFkZEl0ZW0oJ2FubjMnLCAnYW5uJywgYW5uMylcbn1cblxuY29uc3QgYWRkRHVtbXlUcmVuZCA9ICgpID0+IHtcbiAgICBjb25zdCB0cmQxID0gVHJlbmQoXG4gICAgICAgICdAbWFienp6JyxcbiAgICAgICAgJy4vaW1hZ2VzL21hYnp6ei1pY29uLnBuZycsXG4gICAgICAgICdBbiB1cHNpZGUgZG93biBidWlsZGluZy4nXG4gICAgKVxuXG4gICAgY29uc29sZS5sb2codHJkMSlcblxuICAgIFN0b3JhZ2UuYWRkSXRlbSgndHJkMScsICd0cmQnLCB0cmQxKVxuICAgIGNvbnN0IHRyZDIgPSBUcmVuZChcbiAgICAgICAgJ0BnZXJpcmknLFxuICAgICAgICAnLi9pbWFnZXMvZ2VyaXJpLWljb24ucG5nJyxcbiAgICAgICAgJ0FuIGFpcnBvcnQgaW5zaWRlIGEgbWFsbC4nXG4gICAgKVxuICAgIFN0b3JhZ2UuYWRkSXRlbSgndHJkMicsICd0cmQnLCB0cmQyKVxuXG4gICAgY29uc3QgdHJkMyA9IFRyZW5kKFxuICAgICAgICAnQHN1cGFoeGFkJyxcbiAgICAgICAgJy4vaW1hZ2VzL2phc3Blci1pY29uLnBuZycsXG4gICAgICAgICdTYWRCb2lEcnVnOyBBIG5ldyB0eXBlIG9mIGlsbGVnYWwgZHJ1Zy4nXG4gICAgKVxuICAgIFN0b3JhZ2UuYWRkSXRlbSgndHJkMycsICd0cmQnLCB0cmQzKVxufVxuXG5hZGREdW1teVByb2plY3RzKClcbmluaXRQcm9qZWN0cygpXG5cbmFkZER1bW15QW5ub3VuY2VtZW50cygpXG5pbml0QW5ub3VuY2VtZW50KClcblxuYWRkRHVtbXlUcmVuZCgpXG5pbml0VHJlbmQoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9