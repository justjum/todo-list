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
}

li img {
    width: 30px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";;AAEA;IACI,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,WAAW;AACf","sourcesContent":["\n\n.content {\n    display: grid;\n    grid-template-columns: 400px 1fr;\n}\n\n.sidebar {\n    border: 2px solid black;\n    width: 100%;\n    height: 100vh;\n}\n\n.container {\n    border: 2px solid black;\n    width: 100%;\n    height: 100vh;\n}\n\nform {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\nli img {\n    width: 30px;\n}"],"sourceRoot":""}]);
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
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   updateProjectEvents: () => (/* binding */ updateProjectEvents),
/* harmony export */   updateTaskEvents: () => (/* binding */ updateTaskEvents)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");








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



//global variables
let projectList = [];
let projectCounter = 0;


//update localstorage
const updateStorage = (array, storage) => {
    let string = JSON.stringify(array);
    localStorage.setItem(storage, string);
}

const loadProjectList = () => {
    projectList = JSON.parse(localStorage.getItem("projectList"));
    if (projectList === null) {   
        console.log('this');
        projectList = [new Project(1, 'Default Project')];
        updateStorage(projectList, "projectList");
    }
    else {
        
        return projectList;
    }
}
loadProjectList();
let currentProject = projectList[0].id;
(0,_page_load__WEBPACK_IMPORTED_MODULE_1__["default"])();

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
loadProjectList();




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



//storage lookup button for testing
const storageLookup = document.getElementById("storage-lookup");
storageLookup.addEventListener('click', () => {
    console.table(JSON.parse(localStorage.getItem("tasks")));
});


//add event listener new project
const addProject = document.getElementById("add-project");
addProject.addEventListener('click', () => {
    let projectName = prompt('Project name:');
    projectList.push(new Project(projectCounter, projectName));
    console.table(projectList);
    updateStorage(projectList, "projectList");
    (0,_page_load__WEBPACK_IMPORTED_MODULE_1__.updateProjectList)();
});

//add event listener select project



//delete project function
const updateProjectEvents = () => {
    const deleteProject = document.querySelectorAll(".delete-project");
    deleteProject.forEach(delProj => {
        delProj.addEventListener('click', (e) => {
            let projIndex = e.target.id.replace(/[^0-9]/g, "");
            let remove = projectList.splice(projIndex, 1);
            console.log(`${remove} is gone`);
            updateStorage(projectList, "projectList");
            (0,_page_load__WEBPACK_IMPORTED_MODULE_1__.updateProjectList)();
        })
    })

    const selectProject = document.querySelectorAll(".project-check");
    selectProject.forEach(selProj => {
        selProj.addEventListener('click', (e) => {
            let projIndex = e.target.id.replace(/[0-9]/g, "");
            currentProject = projIndex;
            (0,_page_load__WEBPACK_IMPORTED_MODULE_1__.updateProjectList)();
        })
    })
};


//edit project function

//add event listener delete task
const updateTaskEvents = () => {
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
(0,_page_load__WEBPACK_IMPORTED_MODULE_1__.updateProjectList)();





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
/* harmony import */ var _Images_check_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Images/check-circle-outline.svg */ "./src/Images/check-circle-outline.svg");
/* harmony import */ var _Images_circle_edit_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Images/circle-edit-outline.svg */ "./src/Images/circle-edit-outline.svg");
/* harmony import */ var _Images_circle_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Images/circle-outline.svg */ "./src/Images/circle-outline.svg");
/* harmony import */ var _Images_delete_circle_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Images/delete-circle-outline.svg */ "./src/Images/delete-circle-outline.svg");
/* harmony import */ var _Images_dots_vertical_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Images/dots-vertical.svg */ "./src/Images/dots-vertical.svg");
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
}

//move this to a "functionality" page rather than build
const updateProjectList = () => {
    const projects = document.getElementById("project-list");
    while (projects.hasChildNodes()) {
        projects.removeChild(projects.firstChild);
    }
    const renderProjects = document.createElement('ul');
    renderProjects.setAttribute("class", "render-projects");
    console.table(_index__WEBPACK_IMPORTED_MODULE_0__.projectList);   
    _index__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach((project, x) => {
        let li = document.createElement('li');
        if (project.id === _index__WEBPACK_IMPORTED_MODULE_0__.currentProject) {
            li.innerHTML = `<img class="project-check active ${project.id}" src=${_Images_check_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__}></img><div>${project.name}</div> <div class="project-option active ${x}"><div class="rename-project" id="rename-project${x}">Rename</div><div class="delete-project" id="delete-project${x}">Delete</div></div>`;
        }
        else {
            li.innerHTML = `<img class="project-check inactive ${project.id}" src=${_Images_circle_outline_svg__WEBPACK_IMPORTED_MODULE_3__}><div>${project.name}</div> <div class="project-option inactive"><div class="rename-project" id="rename-project${x}">Rename</div><div class="delete-project" id="delete-project${x}">Delete</div></div>`;
        }
        renderProjects.appendChild(li);
    });
    projects.appendChild(renderProjects);
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.updateProjectEvents)();
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
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.updateTaskEvents)();
};



/***/ }),

/***/ "./src/Images/check-circle-outline.svg":
/*!*********************************************!*\
  !*** ./src/Images/check-circle-outline.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7baf356d9dec3605f26c.svg";

/***/ }),

/***/ "./src/Images/circle-edit-outline.svg":
/*!********************************************!*\
  !*** ./src/Images/circle-edit-outline.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6f8bf1d4c3bda86b91e.svg";

/***/ }),

/***/ "./src/Images/circle-outline.svg":
/*!***************************************!*\
  !*** ./src/Images/circle-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3b6ef0fc8b1ecd5d1a9.svg";

/***/ }),

/***/ "./src/Images/delete-circle-outline.svg":
/*!**********************************************!*\
  !*** ./src/Images/delete-circle-outline.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ba2572368d3d3ba9f8b.svg";

/***/ }),

/***/ "./src/Images/dots-vertical.svg":
/*!**************************************!*\
  !*** ./src/Images/dots-vertical.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2500f612ad4630b14fbb.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkMsa0JBQWtCLHdCQUF3QjtBQUMxQyxrQkFBa0Isb0JBQW9CO0FBQ3RDLGtCQUFrQixxQkFBcUI7QUFDdkMsa0JBQWtCLHFCQUFxQjtBQUN2Qyx1REFBdUQsRUFBRTtBQUN6RCxtREFBbUQsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFnQjtBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2UtbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAwcHggMWZyO1xufVxuXG4uc2lkZWJhciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG5cbmxpIGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAwcHggMWZyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxubGkgaW1nIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGxvYWRwYWdlIGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xuaW1wb3J0IHsgdXBkYXRlVGFza1RhYmxlLCB1cGRhdGVQcm9qZWN0TGlzdCB9IGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xuXG5cblxuXG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrQXJyYXkgPSAndGFza3MnICsgK3Byb2plY3RDb3VudGVyO1xuICAgICAgICBwcm9qZWN0Q291bnRlciArPSAxO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RDb3VudGVyXCIsIHByb2plY3RDb3VudGVyKTtcbiAgICB9XG59XG5cblxuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0SUQsIHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0SUQgPSBwcm9qZWN0SUQ7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfVxuICAgICAgICBcblxufVxuXG5cblxuLy9nbG9iYWwgdmFyaWFibGVzXG5sZXQgcHJvamVjdExpc3QgPSBbXTtcbmxldCBwcm9qZWN0Q291bnRlciA9IDA7XG5cblxuLy91cGRhdGUgbG9jYWxzdG9yYWdlXG5jb25zdCB1cGRhdGVTdG9yYWdlID0gKGFycmF5LCBzdG9yYWdlKSA9PiB7XG4gICAgbGV0IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGFycmF5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlLCBzdHJpbmcpO1xufVxuXG5jb25zdCBsb2FkUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpO1xuICAgIGlmIChwcm9qZWN0TGlzdCA9PT0gbnVsbCkgeyAgIFxuICAgICAgICBjb25zb2xlLmxvZygndGhpcycpO1xuICAgICAgICBwcm9qZWN0TGlzdCA9IFtuZXcgUHJvamVjdCgxLCAnRGVmYXVsdCBQcm9qZWN0JyldO1xuICAgICAgICB1cGRhdGVTdG9yYWdlKHByb2plY3RMaXN0LCBcInByb2plY3RMaXN0XCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbiAgICB9XG59XG5sb2FkUHJvamVjdExpc3QoKTtcbmxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RMaXN0WzBdLmlkO1xubG9hZHBhZ2UoKTtcblxuY29uc3QgbG9hZFByb2plY3RDb3VudGVyID0oKSA9PiB7XG4gICAgcHJvamVjdENvdW50ZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RDb3VudGVyXCIpO1xuICAgIGlmIChwcm9qZWN0Q291bnRlciA9PT0gbnVsbCkge1xuICAgICAgICBwcm9qZWN0Q291bnRlciA9IDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZihwcm9qZWN0Q291bnRlcikgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcHJvamVjdENvdW50ZXIgPSArcHJvamVjdENvdW50ZXI7XG4gICAgfVxuICAgIHJldHVybiBwcm9qZWN0Q291bnRlcjtcbn1cblxubG9hZFByb2plY3RDb3VudGVyKCk7XG5sb2FkUHJvamVjdExpc3QoKTtcblxuXG5cblxuLy8gQXJyYXkgdG8gc3RvcmUgdGFzayBvYmplY3RzXG5sZXQgYWxsVGFza3MgPSBbXTtcblxuY29uc29sZS50YWJsZShhbGxUYXNrcyk7XG5cbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIik7XG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjaGVja1N0b3JhZ2UoKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldFswXS52YWx1ZSk7XG4gICAgbGV0IHByb2plY3RJRCA9IGN1cnJlbnRQcm9qZWN0O1xuICAgIGxldCB0YXNrID0gZS50YXJnZXRbMF0udmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZS50YXJnZXRbMV0udmFsdWU7XG4gICAgbGV0IGR1ZURhdGUgPSBlLnRhcmdldFsyXS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBlLnRhcmdldFszXS52YWx1ZTtcbiAgICBsZXQgY29tcGxldGUgPSBmYWxzZTtcbiAgICBhbGxUYXNrcy5wdXNoKG5ldyBUYXNrKHByb2plY3RJRCwgdGFzaywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSkpO1xuICAgIHVwZGF0ZVN0b3JhZ2UoYWxsVGFza3MsIFwidGFza3NcIik7XG4gICAgdXBkYXRlVGFza1RhYmxlKGFsbFRhc2tzKTtcbiAgICB1cGRhdGVUYXNrRXZlbnRMaXN0ZW5lcnMoKTtcbn0pO1xuXG5jb25zdCBjaGVja1N0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgYWxsVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgICAgICByZXR1cm47XG4gICAgfSBcbn07XG5cblxuXG4vL3N0b3JhZ2UgbG9va3VwIGJ1dHRvbiBmb3IgdGVzdGluZ1xuY29uc3Qgc3RvcmFnZUxvb2t1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcmFnZS1sb29rdXBcIik7XG5zdG9yYWdlTG9va3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUudGFibGUoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSk7XG59KTtcblxuXG4vL2FkZCBldmVudCBsaXN0ZW5lciBuZXcgcHJvamVjdFxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3RcIik7XG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb21wdCgnUHJvamVjdCBuYW1lOicpO1xuICAgIHByb2plY3RMaXN0LnB1c2gobmV3IFByb2plY3QocHJvamVjdENvdW50ZXIsIHByb2plY3ROYW1lKSk7XG4gICAgY29uc29sZS50YWJsZShwcm9qZWN0TGlzdCk7XG4gICAgdXBkYXRlU3RvcmFnZShwcm9qZWN0TGlzdCwgXCJwcm9qZWN0TGlzdFwiKTtcbiAgICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xufSk7XG5cbi8vYWRkIGV2ZW50IGxpc3RlbmVyIHNlbGVjdCBwcm9qZWN0XG5cblxuXG4vL2RlbGV0ZSBwcm9qZWN0IGZ1bmN0aW9uXG5jb25zdCB1cGRhdGVQcm9qZWN0RXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS1wcm9qZWN0XCIpO1xuICAgIGRlbGV0ZVByb2plY3QuZm9yRWFjaChkZWxQcm9qID0+IHtcbiAgICAgICAgZGVsUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvakluZGV4ID0gZS50YXJnZXQuaWQucmVwbGFjZSgvW14wLTldL2csIFwiXCIpO1xuICAgICAgICAgICAgbGV0IHJlbW92ZSA9IHByb2plY3RMaXN0LnNwbGljZShwcm9qSW5kZXgsIDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cmVtb3ZlfSBpcyBnb25lYCk7XG4gICAgICAgICAgICB1cGRhdGVTdG9yYWdlKHByb2plY3RMaXN0LCBcInByb2plY3RMaXN0XCIpO1xuICAgICAgICAgICAgdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1jaGVja1wiKTtcbiAgICBzZWxlY3RQcm9qZWN0LmZvckVhY2goc2VsUHJvaiA9PiB7XG4gICAgICAgIHNlbFByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2pJbmRleCA9IGUudGFyZ2V0LmlkLnJlcGxhY2UoL1swLTldL2csIFwiXCIpO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qSW5kZXg7XG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG5cbi8vZWRpdCBwcm9qZWN0IGZ1bmN0aW9uXG5cbi8vYWRkIGV2ZW50IGxpc3RlbmVyIGRlbGV0ZSB0YXNrXG5jb25zdCB1cGRhdGVUYXNrRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLWJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uZm9yRWFjaChkZWxldGVUYXNrID0+IHtcbiAgICAgICAgZGVsZXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFza0luZGV4ID0gZS50YXJnZXQuaWQucmVwbGFjZSgvW14wLTldL2csIFwiXCIpO1xuICAgICAgICAgICAgbGV0IHJlbW92ZSA9IGFsbFRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cmVtb3ZlfSBpcyBnb25lYCk7XG4gICAgICAgICAgICB1cGRhdGVTdG9yYWdlKGFsbFRhc2tzLCBcInRhc2tzXCIpO1xuICAgICAgICAgICAgdXBkYXRlVGFza1RhYmxlKGFsbFRhc2tzKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuXG5jaGVja1N0b3JhZ2UoKTtcbnVwZGF0ZVRhc2tUYWJsZShhbGxUYXNrcyk7XG51cGRhdGVQcm9qZWN0TGlzdCgpO1xuXG5cbmV4cG9ydCB7Y3VycmVudFByb2plY3QsIHByb2plY3RMaXN0fTtcbmV4cG9ydCB7dXBkYXRlVGFza0V2ZW50cywgdXBkYXRlUHJvamVjdEV2ZW50c307IiwiLy9pbXBvcnQgdXBkYXRlUHJvamVjdExpc3QgZnJvbSBmdW5jdGlvbmFsRE9NLmpzO1xuaW1wb3J0IHsgdXBkYXRlVGFza0V2ZW50cywgdXBkYXRlUHJvamVjdEV2ZW50cywgcHJvamVjdExpc3QsIGN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBDaGVja0NpcmNsZU91dGxpbmUgZnJvbSBcIi4vSW1hZ2VzL2NoZWNrLWNpcmNsZS1vdXRsaW5lLnN2Z1wiXG5pbXBvcnQgQ2lyY2xlRWRpdE91dGxpbmUgZnJvbSBcIi4vSW1hZ2VzL2NpcmNsZS1lZGl0LW91dGxpbmUuc3ZnXCJcbmltcG9ydCBDaXJjbGVPdXRsaW5lIGZyb20gXCIuL0ltYWdlcy9jaXJjbGUtb3V0bGluZS5zdmdcIlxuaW1wb3J0IERlbGV0ZUNpcmNsZU91dGxpbmUgZnJvbSBcIi4vSW1hZ2VzL2RlbGV0ZS1jaXJjbGUtb3V0bGluZS5zdmdcIlxuaW1wb3J0IERvdHNWZXJ0aWNhbCBmcm9tIFwiLi9JbWFnZXMvZG90cy12ZXJ0aWNhbC5zdmdcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkcGFnZSgpIHtcbiAgICAgYnVpbGRMYXlvdXQoKTsgIFxuICAgICBidWlsZFNpZGViYXIoKTsgXG4gICAgIGJ1aWxkQ29udGFpbmVyKCk7XG59XG5cbmV4cG9ydCB7dXBkYXRlVGFza1RhYmxlLCB1cGRhdGVQcm9qZWN0TGlzdH1cblxuY29uc3QgYnVpbGRMYXlvdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgc2lkZWJhci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNpZGViYXJcIik7XG4gICAgc2lkZWJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXJcIik7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGFpbmVyXCIpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lclwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5jb25zdCBidWlsZFNpZGViYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEhlYWRpbmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LWhlYWRpbmdcIik7XG4gICAgcHJvamVjdEhlYWRpbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWhlYWRpbmdcIik7XG4gICAgcHJvamVjdEhlYWRpbmcuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuICAgIGNvbnN0IHByb2plY3RBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0QWRkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC1hZGRcIik7XG4gICAgcHJvamVjdEFkZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtYWRkXCIpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLXByb2plY3QnKTtcbiAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdCcpO1xuICAgIGFkZEJ1dHRvbi5pbm5lckhUTUwgPSBcIitcIjtcbiAgICBwcm9qZWN0QWRkLmlubmVySFRNTCA9IFwiQWRkIG5ldyBwcm9qZWN0OlwiO1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0TGlzdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3QtbGlzdFwiKTtcbiAgICBwcm9qZWN0TGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtbGlzdFwiKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGluZyk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0QWRkKTtcbiAgICBwcm9qZWN0QWRkLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7ICAgIFxufVxuXG4vL21vdmUgdGhpcyB0byBhIFwiZnVuY3Rpb25hbGl0eVwiIHBhZ2UgcmF0aGVyIHRoYW4gYnVpbGRcbmNvbnN0IHVwZGF0ZVByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgd2hpbGUgKHByb2plY3RzLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBwcm9qZWN0cy5yZW1vdmVDaGlsZChwcm9qZWN0cy5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgcmVuZGVyUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHJlbmRlclByb2plY3RzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmVuZGVyLXByb2plY3RzXCIpO1xuICAgIGNvbnNvbGUudGFibGUocHJvamVjdExpc3QpOyAgIFxuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QsIHgpID0+IHtcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz1cInByb2plY3QtY2hlY2sgYWN0aXZlICR7cHJvamVjdC5pZH1cIiBzcmM9JHtDaGVja0NpcmNsZU91dGxpbmV9PjwvaW1nPjxkaXY+JHtwcm9qZWN0Lm5hbWV9PC9kaXY+IDxkaXYgY2xhc3M9XCJwcm9qZWN0LW9wdGlvbiBhY3RpdmUgJHt4fVwiPjxkaXYgY2xhc3M9XCJyZW5hbWUtcHJvamVjdFwiIGlkPVwicmVuYW1lLXByb2plY3Qke3h9XCI+UmVuYW1lPC9kaXY+PGRpdiBjbGFzcz1cImRlbGV0ZS1wcm9qZWN0XCIgaWQ9XCJkZWxldGUtcHJvamVjdCR7eH1cIj5EZWxldGU8L2Rpdj48L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9XCJwcm9qZWN0LWNoZWNrIGluYWN0aXZlICR7cHJvamVjdC5pZH1cIiBzcmM9JHtDaXJjbGVPdXRsaW5lfT48ZGl2PiR7cHJvamVjdC5uYW1lfTwvZGl2PiA8ZGl2IGNsYXNzPVwicHJvamVjdC1vcHRpb24gaW5hY3RpdmVcIj48ZGl2IGNsYXNzPVwicmVuYW1lLXByb2plY3RcIiBpZD1cInJlbmFtZS1wcm9qZWN0JHt4fVwiPlJlbmFtZTwvZGl2PjxkaXYgY2xhc3M9XCJkZWxldGUtcHJvamVjdFwiIGlkPVwiZGVsZXRlLXByb2plY3Qke3h9XCI+RGVsZXRlPC9kaXY+PC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJQcm9qZWN0cy5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocmVuZGVyUHJvamVjdHMpO1xuICAgIHVwZGF0ZVByb2plY3RFdmVudHMoKTtcbn1cblxuY29uc3QgYnVpbGRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgYnVpbGRUYXNrRm9ybSgpO1xuICAgIGJ1aWxkVGFza0xpc3QoKTtcbiAgICAgXG59XG5cbmNvbnN0IGJ1aWxkVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdGFza0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWZvcm1cIik7XG4gICAgdGFza0Zvcm0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stZm9ybVwiKVxuICAgIC8vdGFza0Zvcm0gZWxlbWVudHMgYmVsb3c6IHRhc2ssIGRlc2NyaXB0aW9uLCBkdWUtZGF0ZSwgcHJpb3JpdHksIChcImNvbXBsZXRlZFwiIG5vdCBuZWNjZXNzYXJ5IGZvciBlbnRyeSlcbiAgICB0YXNrRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgPGxhYmVsIGZvcj1cInRhc2tcIj5UYXNrPC9sYWJlbD48aW5wdXQgaWQ9XCJ0YXNrXCI+PC9pbnB1dD5cbiAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+PGlucHV0IGlkPVwiZGVzY3JpcHRpb25cIj48L2lucHV0PlxuICAgIDxsYWJlbCBmb3JcImR1ZS1kYXRlXCI+RHVlIERhdGU8L2xhYmVsPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIj48L2lucHV0PlxuICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD48c2VsZWN0IGlkPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIj48b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPjwvc2VsZWN0PlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGZvcj1cInRhc2stZm9ybVwiPkFkZCBUYXNrPC9idXR0b24+YDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG59XG5cbmNvbnN0IGJ1aWxkVGFza0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gICAgY29uc3Qgc3RvcmFnZUxvb2t1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tMaXN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFzay1saXN0XCIpO1xuICAgIHRhc2tMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1saXN0XCIpO1xuICAgIHN0b3JhZ2VMb29rdXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdG9yYWdlLWxvb2t1cFwiKTtcbiAgICBzdG9yYWdlTG9va3VwLmlubmVySFRNTCA9IFwiU3RvcmFnZVwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdG9yYWdlTG9va3VwKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICAgIGNvbnN0IHRhc2tUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB0YXNrVGFibGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXRhYmxlXCIpO1xuICAgIHRhc2tUYWJsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlRhc2s8L3RoPlxuICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cbiAgICAgICAgICAgIDx0aD5EYXRlIER1ZTwvdGg+XG4gICAgICAgICAgICA8dGg+UHJpb3JpdHk8L3RoPlxuICAgICAgICAgICAgPHRoPkNvbXBsZXRlPzwvdGg+XG4gICAgICAgICAgICA8dGg+RWRpdDwvdGg+XG4gICAgICAgICAgICA8dGg+RGVsZXRlPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5gO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RhYmxlKTtcbiAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gICAgdGFibGVCb2R5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFibGUtYm9keVwiKTtcbiAgICB0YWJsZUJvZHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YWJsZS1ib2R5XCIpO1xuICAgIHRhc2tUYWJsZS5hcHBlbmRDaGlsZCh0YWJsZUJvZHkpO1xufVxuXG5jb25zdCB1cGRhdGVUYXNrVGFibGUgPSAoYWxsVGFza3MpID0+IHtcbiAgICBjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlLWJvZHlcIik7XG4gICAgd2hpbGUgKHRhYmxlQm9keS5oYXNDaGlsZE5vZGVzKCkpIHsgIFxuICAgICAgICB0YWJsZUJvZHkucmVtb3ZlQ2hpbGQodGFibGVCb2R5LmZpcnN0Q2hpbGQpO1xuICAgIH07ICBcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgYWxsVGFza3MubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICByb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHRkPiR7YWxsVGFza3NbeF0udGFza308L3RkPlxuICAgICAgICAgICAgPHRkPiR7YWxsVGFza3NbeF0uZGVzY3JpcHRpb259PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ke2FsbFRhc2tzW3hdLmR1ZURhdGV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD4ke2FsbFRhc2tzW3hdLnByaW9yaXR5fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+JHthbGxUYXNrc1t4XS5jb21wbGV0ZX08L3RkPlxuICAgICAgICAgICAgPHRkPjxkaXYgY2xhc3M9XCJkZWxldGUtYnV0dG9uXCIgaWQ9XCJkZWxldGUke3h9XCI+RGVsZXRlPC9kaXY+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48ZGl2IGNsYXNzPVwiZWRpdC1idXR0b25cIiBpZD1cImVkaXQke3h9XCI+RWRpdDwvZGl2PjwvdGQ+XG4gICAgICAgICAgICBgO1xuICAgICAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9O1xuICAgIHVwZGF0ZVRhc2tFdmVudHMoKTtcbn07XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==