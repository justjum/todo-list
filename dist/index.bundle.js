"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `

.content {
    display: grid;
    grid-template-columns: 400px 1fr;
}

.sidebar {
    border: 2px solid black;
    width: 100%;
    height: 100vh;
}

.container {
    border: 2px solid black;
    width: 100%;
    height: 100vh;
}

form {
    display: grid;
    grid-template-columns: 1fr 1fr;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";;AAEA;IACI,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":["\n\n.content {\n    display: grid;\n    grid-template-columns: 400px 1fr;\n}\n\n.sidebar {\n    border: 2px solid black;\n    width: 100%;\n    height: 100vh;\n}\n\n.container {\n    border: 2px solid black;\n    width: 100%;\n    height: 100vh;\n}\n\nform {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   updateTaskEventListeners: () => (/* binding */ updateTaskEventListeners)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");




(0,_page_load__WEBPACK_IMPORTED_MODULE_1__["default"])();

let projectCounter = 0;
let projectList = JSON.parse(localStorage.getItem("projectList"));
let currentProject = projectList[0].id;

console.log(currentProject);

const loadProjectList = () => {
    if (projectList === null) {
        console.log('this');
        currentProject = new Project(1, 'Default Project');
        projectList = [currentProject];
        updateStorage(projectList, "projectList");
    }
}

loadProjectList();

const loadProjectCounter =() => {
    projectCounter = localStorage.getItem("projectCounter");
    if (projectCounter === null) {
        projectCounter = 0;
    }
    else if (typeof(projectCounter) === "string") {
        projectCounter = +projectCounter;
    }
    return projectCounter;
}

loadProjectCounter();


class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.taskArray = 'tasks' + +projectCounter;
        projectCounter += 1;
        localStorage.setItem("projectCounter", projectCounter);
    }
}



class Task {
    constructor(projectID, task, description, dueDate, priority, complete) {
        this.projectID = projectID;
        this.task = task;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
    }
        

}


// Array to store task objects
let allTasks = [];

console.table(allTasks);

const taskForm = document.getElementById("task-form");
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkStorage();
    
    console.log(e.target[0].value);
    let projectID = currentProject;
    let task = e.target[0].value;
    let description = e.target[1].value;
    let dueDate = e.target[2].value;
    let priority = e.target[3].value;
    let complete = false;
    allTasks.push(new Task(projectID, task, description, dueDate, priority, complete));
    updateStorage(allTasks, "tasks");
    (0,_page_load__WEBPACK_IMPORTED_MODULE_1__.updateTaskTable)(allTasks);
    updateTaskEventListeners();
});

const checkStorage = () => {
    if (localStorage.getItem("tasks") !== "undefined") {
        allTasks = JSON.parse(localStorage.getItem("tasks"));
        return;
    } 
};

//update localstorage
const updateStorage = (array, storage) => {
    let string = JSON.stringify(array);
    localStorage.setItem(storage, string);
}

//storage lookup button for testing
const storageLookup = document.getElementById("storage-lookup");
storageLookup.addEventListener('click', () => {
    console.table(JSON.parse(localStorage.getItem("tasks")));
});


//edit task function


//add event listener new project
const addProject = document.getElementById("add-project");
addProject.addEventListener('click', () => {
    let projectName = prompt('Project name:');
    projectList.push(new Project(projectCounter, projectName));
    console.table(projectList);
    updateStorage(projectList, "projectList");
    (0,_page_load__WEBPACK_IMPORTED_MODULE_1__.updateProjectList)();
});

//delete project function


//edit project function





//add event listener delete task
const updateTaskEventListeners = () => {
    const deleteButton = document.querySelectorAll(".delete-button");
    deleteButton.forEach(deleteTask => {
        deleteTask.addEventListener('click', (e) => {
            let taskIndex = e.target.id.replace(/[^0-9]/g, "");
            let remove = allTasks.splice(taskIndex, 1);
            console.log(`${remove} is gone`);
            updateStorage(allTasks, "tasks");
            (0,_page_load__WEBPACK_IMPORTED_MODULE_1__.updateTaskTable)(allTasks);
            e.stopPropagation();
        });
    });
};

checkStorage();
(0,_page_load__WEBPACK_IMPORTED_MODULE_1__.updateTaskTable)(allTasks);





/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadpage),
/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList),
/* harmony export */   updateTaskTable: () => (/* binding */ updateTaskTable)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
//import updateProjectList from functionalDOM.js;


function loadpage() {
     buildLayout();  
     buildSidebar(); 
     buildContainer();
}



const buildLayout = () => {
    const content = document.getElementById("content");
    const sidebar = document.createElement("div");
    const container = document.createElement("div");

    sidebar.setAttribute("class", "sidebar");
    sidebar.setAttribute("id", "sidebar");
    container.setAttribute("class", "container");
    container.setAttribute("id", "container");

    content.appendChild(sidebar);
    content.appendChild(container);
}

const buildSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const projectHeading = document.createElement("div");
    projectHeading.setAttribute("class", "project-heading");
    projectHeading.setAttribute("id", "project-heading");
    projectHeading.innerHTML = "Projects";
    const projectAdd = document.createElement('div');
    projectAdd.setAttribute("class", "project-add");
    projectAdd.setAttribute("id", "project-add");
    const addButton = document.createElement("div");
    addButton.setAttribute('class', 'add-project');
    addButton.setAttribute('id', 'add-project');
    addButton.innerHTML = "+";
    projectAdd.innerHTML = "Add new project:";
    const projectList = document.createElement("div");
    projectList.setAttribute("class", "project-list");
    projectList.setAttribute("id", "project-list");
    console.log(projectList);
    sidebar.appendChild(projectHeading);
    sidebar.appendChild(projectAdd);
    projectAdd.appendChild(addButton);
    sidebar.appendChild(projectList);
    updateProjectList();
}

//move this to a "functionality" page rather than build
const updateProjectList = () => {
    const projects = document.getElementById("project-list");
    while (projects.hasChildNodes()) {
        projects.removeChild(projects.firstChild);
    }
    let currentList = JSON.parse(localStorage.getItem("projectList"));
    const renderProjects = document.createElement('ul');
    renderProjects.setAttribute("class", "render-projects");
    console.log(renderProjects);   
    currentList.forEach((project) => {
        console.log(`This is project ${project.id}`);
        let li = document.createElement('li');
        li.innerHTML = project.name;
        renderProjects.appendChild(li);
    });
    projects.appendChild(renderProjects);
    
}

const buildContainer = () => {
    buildTaskForm();
    buildTaskList();
     
}

const buildTaskForm = () => {
    const container = document.getElementById("container");
    const taskForm = document.createElement('form');
    taskForm.setAttribute("id", "task-form");
    taskForm.setAttribute("name", "task-form")
    //taskForm elements below: task, description, due-date, priority, ("completed" not neccessary for entry)
    taskForm.innerHTML = `
    <label for="task">Task</label><input id="task"></input>
    <label for="description">Description</label><input id="description"></input>
    <label for"due-date">Due Date</label><input type="date" id="due-date"></input>
    <label for="priority">Priority</label><select id="priority" name="priority"><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select>
    <button type="submit" for="task-form">Add Task</button>`;

    container.appendChild(taskForm);
}

const buildTaskList = () => {
    const container = document.getElementById("container");
    const storageLookup = document.createElement("button");
    const taskList = document.createElement("div");
    taskList.setAttribute("class", "task-list");
    taskList.setAttribute("id", "task-list");
    storageLookup.setAttribute("id", "storage-lookup");
    storageLookup.innerHTML = "Storage";
    container.appendChild(storageLookup);
    container.appendChild(taskList);
    const taskTable = document.createElement("table");
    taskTable.setAttribute("id", "task-table");
    taskTable.innerHTML = `
        <thead>
        <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Date Due</th>
            <th>Priority</th>
            <th>Complete?</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>`;
        container.appendChild(taskTable);
    const tableBody = document.createElement("tbody");
    tableBody.setAttribute("class", "table-body");
    tableBody.setAttribute("id", "table-body");
    taskTable.appendChild(tableBody);
}

const updateTaskTable = (allTasks) => {
    const tableBody = document.getElementById("table-body");
    while (tableBody.hasChildNodes()) {  
        tableBody.removeChild(tableBody.firstChild);
    };  

    for (let x = 0; x < allTasks.length; x++) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${allTasks[x].task}</td>
            <td>${allTasks[x].description}</td>
            <td>${allTasks[x].dueDate}</td>
            <td>${allTasks[x].priority}</td>
            <td>${allTasks[x].complete}</td>
            <td><div class="delete-button" id="delete${x}">Delete</div></td>
            <td><div class="edit-button" id="edit${x}">Edit</div></td>
            `;
        tableBody.appendChild(row);
    };
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.updateTaskEventListeners)();
};



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQyxrQkFBa0Isd0JBQXdCO0FBQzFDLGtCQUFrQixvQkFBb0I7QUFDdEMsa0JBQWtCLHFCQUFxQjtBQUN2QyxrQkFBa0IscUJBQXFCO0FBQ3ZDLHVEQUF1RCxFQUFFO0FBQ3pELG1EQUFtRCxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQXdCO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCAxZnI7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MDBweCAxZnI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBsb2FkcGFnZSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcbmltcG9ydCB7IHVwZGF0ZVRhc2tUYWJsZSwgdXBkYXRlUHJvamVjdExpc3QgfSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcblxubG9hZHBhZ2UoKTtcblxubGV0IHByb2plY3RDb3VudGVyID0gMDtcbmxldCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKSk7XG5sZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdFswXS5pZDtcblxuY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuXG5jb25zdCBsb2FkUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RMaXN0ID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzJyk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gbmV3IFByb2plY3QoMSwgJ0RlZmF1bHQgUHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0TGlzdCA9IFtjdXJyZW50UHJvamVjdF07XG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UocHJvamVjdExpc3QsIFwicHJvamVjdExpc3RcIik7XG4gICAgfVxufVxuXG5sb2FkUHJvamVjdExpc3QoKTtcblxuY29uc3QgbG9hZFByb2plY3RDb3VudGVyID0oKSA9PiB7XG4gICAgcHJvamVjdENvdW50ZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RDb3VudGVyXCIpO1xuICAgIGlmIChwcm9qZWN0Q291bnRlciA9PT0gbnVsbCkge1xuICAgICAgICBwcm9qZWN0Q291bnRlciA9IDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZihwcm9qZWN0Q291bnRlcikgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcHJvamVjdENvdW50ZXIgPSArcHJvamVjdENvdW50ZXI7XG4gICAgfVxuICAgIHJldHVybiBwcm9qZWN0Q291bnRlcjtcbn1cblxubG9hZFByb2plY3RDb3VudGVyKCk7XG5cblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IoaWQsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tBcnJheSA9ICd0YXNrcycgKyArcHJvamVjdENvdW50ZXI7XG4gICAgICAgIHByb2plY3RDb3VudGVyICs9IDE7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdENvdW50ZXJcIiwgcHJvamVjdENvdW50ZXIpO1xuICAgIH1cbn1cblxuXG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3RJRCwgdGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb2plY3RJRCA9IHByb2plY3RJRDtcbiAgICAgICAgdGhpcy50YXNrID0gdGFzaztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICB9XG4gICAgICAgIFxuXG59XG5cblxuLy8gQXJyYXkgdG8gc3RvcmUgdGFzayBvYmplY3RzXG5sZXQgYWxsVGFza3MgPSBbXTtcblxuY29uc29sZS50YWJsZShhbGxUYXNrcyk7XG5cbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIik7XG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjaGVja1N0b3JhZ2UoKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldFswXS52YWx1ZSk7XG4gICAgbGV0IHByb2plY3RJRCA9IGN1cnJlbnRQcm9qZWN0O1xuICAgIGxldCB0YXNrID0gZS50YXJnZXRbMF0udmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZS50YXJnZXRbMV0udmFsdWU7XG4gICAgbGV0IGR1ZURhdGUgPSBlLnRhcmdldFsyXS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBlLnRhcmdldFszXS52YWx1ZTtcbiAgICBsZXQgY29tcGxldGUgPSBmYWxzZTtcbiAgICBhbGxUYXNrcy5wdXNoKG5ldyBUYXNrKHByb2plY3RJRCwgdGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSkpO1xuICAgIHVwZGF0ZVN0b3JhZ2UoYWxsVGFza3MsIFwidGFza3NcIik7XG4gICAgdXBkYXRlVGFza1RhYmxlKGFsbFRhc2tzKTtcbiAgICB1cGRhdGVUYXNrRXZlbnRMaXN0ZW5lcnMoKTtcbn0pO1xuXG5jb25zdCBjaGVja1N0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgYWxsVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgICAgICByZXR1cm47XG4gICAgfSBcbn07XG5cbi8vdXBkYXRlIGxvY2Fsc3RvcmFnZVxuY29uc3QgdXBkYXRlU3RvcmFnZSA9IChhcnJheSwgc3RvcmFnZSkgPT4ge1xuICAgIGxldCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShhcnJheSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZSwgc3RyaW5nKTtcbn1cblxuLy9zdG9yYWdlIGxvb2t1cCBidXR0b24gZm9yIHRlc3RpbmdcbmNvbnN0IHN0b3JhZ2VMb29rdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3JhZ2UtbG9va3VwXCIpO1xuc3RvcmFnZUxvb2t1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLnRhYmxlKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkpO1xufSk7XG5cblxuLy9lZGl0IHRhc2sgZnVuY3Rpb25cblxuXG4vL2FkZCBldmVudCBsaXN0ZW5lciBuZXcgcHJvamVjdFxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3RcIik7XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb21wdCgnUHJvamVjdCBuYW1lOicpO1xuICAgIHByb2plY3RMaXN0LnB1c2gobmV3IFByb2plY3QocHJvamVjdENvdW50ZXIsIHByb2plY3ROYW1lKSk7XG4gICAgY29uc29sZS50YWJsZShwcm9qZWN0TGlzdCk7XG4gICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0TGlzdCwgXCJwcm9qZWN0TGlzdFwiKTtcbiAgICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xufSk7XG5cbi8vZGVsZXRlIHByb2plY3QgZnVuY3Rpb25cblxuXG4vL2VkaXQgcHJvamVjdCBmdW5jdGlvblxuXG5cblxuXG5cbi8vYWRkIGV2ZW50IGxpc3RlbmVyIGRlbGV0ZSB0YXNrXG5jb25zdCB1cGRhdGVUYXNrRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5mb3JFYWNoKGRlbGV0ZVRhc2sgPT4ge1xuICAgICAgICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXNrSW5kZXggPSBlLnRhcmdldC5pZC5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIik7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlID0gYWxsVGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtyZW1vdmV9IGlzIGdvbmVgKTtcbiAgICAgICAgICAgIHVwZGF0ZVN0b3JhZ2UoYWxsVGFza3MsIFwidGFza3NcIik7XG4gICAgICAgICAgICB1cGRhdGVUYXNrVGFibGUoYWxsVGFza3MpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5jaGVja1N0b3JhZ2UoKTtcbnVwZGF0ZVRhc2tUYWJsZShhbGxUYXNrcyk7XG5cblxuZXhwb3J0IHtjdXJyZW50UHJvamVjdH07XG5leHBvcnQge3VwZGF0ZVRhc2tFdmVudExpc3RlbmVyc307IiwiLy9pbXBvcnQgdXBkYXRlUHJvamVjdExpc3QgZnJvbSBmdW5jdGlvbmFsRE9NLmpzO1xuaW1wb3J0IHsgdXBkYXRlVGFza0V2ZW50TGlzdGVuZXJzIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZHBhZ2UoKSB7XG4gICAgIGJ1aWxkTGF5b3V0KCk7ICBcbiAgICAgYnVpbGRTaWRlYmFyKCk7IFxuICAgICBidWlsZENvbnRhaW5lcigpO1xufVxuXG5leHBvcnQge3VwZGF0ZVRhc2tUYWJsZSwgdXBkYXRlUHJvamVjdExpc3R9XG5cbmNvbnN0IGJ1aWxkTGF5b3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHNpZGViYXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzaWRlYmFyXCIpO1xuICAgIHNpZGViYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyXCIpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWluZXJcIik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuY29uc3QgYnVpbGRTaWRlYmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gICAgY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RIZWFkaW5nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC1oZWFkaW5nXCIpO1xuICAgIHByb2plY3RIZWFkaW5nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1oZWFkaW5nXCIpO1xuICAgIHByb2plY3RIZWFkaW5nLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcbiAgICBjb25zdCBwcm9qZWN0QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEFkZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3QtYWRkXCIpO1xuICAgIHByb2plY3RBZGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWFkZFwiKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1wcm9qZWN0Jyk7XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXByb2plY3QnKTtcbiAgICBhZGRCdXR0b24uaW5uZXJIVE1MID0gXCIrXCI7XG4gICAgcHJvamVjdEFkZC5pbm5lckhUTUwgPSBcIkFkZCBuZXcgcHJvamVjdDpcIjtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdExpc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgcHJvamVjdExpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRpbmcpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdEFkZCk7XG4gICAgcHJvamVjdEFkZC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XG59XG5cbi8vbW92ZSB0aGlzIHRvIGEgXCJmdW5jdGlvbmFsaXR5XCIgcGFnZSByYXRoZXIgdGhhbiBidWlsZFxuY29uc3QgdXBkYXRlUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcbiAgICB3aGlsZSAocHJvamVjdHMuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIHByb2plY3RzLnJlbW92ZUNoaWxkKHByb2plY3RzLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBsZXQgY3VycmVudExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpO1xuICAgIGNvbnN0IHJlbmRlclByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICByZW5kZXJQcm9qZWN0cy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJlbmRlci1wcm9qZWN0c1wiKTtcbiAgICBjb25zb2xlLmxvZyhyZW5kZXJQcm9qZWN0cyk7ICAgXG4gICAgY3VycmVudExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhpcyBpcyBwcm9qZWN0ICR7cHJvamVjdC5pZH1gKTtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuICAgICAgICByZW5kZXJQcm9qZWN0cy5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocmVuZGVyUHJvamVjdHMpO1xuICAgIFxufVxuXG5jb25zdCBidWlsZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBidWlsZFRhc2tGb3JtKCk7XG4gICAgYnVpbGRUYXNrTGlzdCgpO1xuICAgICBcbn1cblxuY29uc3QgYnVpbGRUYXNrRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZm9ybVwiKTtcbiAgICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1mb3JtXCIpXG4gICAgLy90YXNrRm9ybSBlbGVtZW50cyBiZWxvdzogdGFzaywgZGVzY3JpcHRpb24sIGR1ZS1kYXRlLCBwcmlvcml0eSwgKFwiY29tcGxldGVkXCIgbm90IG5lY2Nlc3NhcnkgZm9yIGVudHJ5KVxuICAgIHRhc2tGb3JtLmlubmVySFRNTCA9IGBcbiAgICA8bGFiZWwgZm9yPVwidGFza1wiPlRhc2s8L2xhYmVsPjxpbnB1dCBpZD1cInRhc2tcIj48L2lucHV0PlxuICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD48aW5wdXQgaWQ9XCJkZXNjcmlwdGlvblwiPjwvaW5wdXQ+XG4gICAgPGxhYmVsIGZvclwiZHVlLWRhdGVcIj5EdWUgRGF0ZTwvbGFiZWw+PGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWUtZGF0ZVwiPjwvaW5wdXQ+XG4gICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPjxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiPjxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+PC9zZWxlY3Q+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZm9yPVwidGFzay1mb3JtXCI+QWRkIFRhc2s8L2J1dHRvbj5gO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbn1cblxuY29uc3QgYnVpbGRUYXNrTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBzdG9yYWdlTG9va3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrLWxpc3RcIik7XG4gICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWxpc3RcIik7XG4gICAgc3RvcmFnZUxvb2t1cC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN0b3JhZ2UtbG9va3VwXCIpO1xuICAgIHN0b3JhZ2VMb29rdXAuaW5uZXJIVE1MID0gXCJTdG9yYWdlXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0b3JhZ2VMb29rdXApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG4gICAgY29uc3QgdGFza1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgIHRhc2tUYWJsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stdGFibGVcIik7XG4gICAgdGFza1RhYmxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+VGFzazwvdGg+XG4gICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgPHRoPkRhdGUgRHVlPC90aD5cbiAgICAgICAgICAgIDx0aD5Qcmlvcml0eTwvdGg+XG4gICAgICAgICAgICA8dGg+Q29tcGxldGU/PC90aD5cbiAgICAgICAgICAgIDx0aD5FZGl0PC90aD5cbiAgICAgICAgICAgIDx0aD5EZWxldGU8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPmA7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGFibGUpO1xuICAgIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcbiAgICB0YWJsZUJvZHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YWJsZS1ib2R5XCIpO1xuICAgIHRhYmxlQm9keS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhYmxlLWJvZHlcIik7XG4gICAgdGFza1RhYmxlLmFwcGVuZENoaWxkKHRhYmxlQm9keSk7XG59XG5cbmNvbnN0IHVwZGF0ZVRhc2tUYWJsZSA9IChhbGxUYXNrcykgPT4ge1xuICAgIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGUtYm9keVwiKTtcbiAgICB3aGlsZSAodGFibGVCb2R5Lmhhc0NoaWxkTm9kZXMoKSkgeyAgXG4gICAgICAgIHRhYmxlQm9keS5yZW1vdmVDaGlsZCh0YWJsZUJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfTsgIFxuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBhbGxUYXNrcy5sZW5ndGg7IHgrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIHJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8dGQ+JHthbGxUYXNrc1t4XS50YXNrfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+JHthbGxUYXNrc1t4XS5kZXNjcmlwdGlvbn08L3RkPlxuICAgICAgICAgICAgPHRkPiR7YWxsVGFza3NbeF0uZHVlRGF0ZX08L3RkPlxuICAgICAgICAgICAgPHRkPiR7YWxsVGFza3NbeF0ucHJpb3JpdHl9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ke2FsbFRhc2tzW3hdLmNvbXBsZXRlfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzcz1cImRlbGV0ZS1idXR0b25cIiBpZD1cImRlbGV0ZSR7eH1cIj5EZWxldGU8L2Rpdj48L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3M9XCJlZGl0LWJ1dHRvblwiIGlkPVwiZWRpdCR7eH1cIj5FZGl0PC9kaXY+PC90ZD5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH07XG4gICAgdXBkYXRlVGFza0V2ZW50TGlzdGVuZXJzKCk7XG59O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=