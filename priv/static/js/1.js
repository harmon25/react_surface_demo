(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./js/components/HelloReactSurface.js":
/*!********************************************!*\
  !*** ./js/components/HelloReactSurface.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_surface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react_surface */ \"./node_modules/react_surface/priv/static/react_surface.js\");\n/* harmony import */ var react_surface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_surface__WEBPACK_IMPORTED_MODULE_1__);\n\n // props are provided by the server.\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => {\n  var [count, setCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  var {\n    pushEvent,\n    handleEvent,\n    pushEventTo\n  } = Object(react_surface__WEBPACK_IMPORTED_MODULE_1__[\"useLiveContext\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    handleEvent(\"from_server\", val => {\n      console.log(\"from server!\");\n      console.log(val);\n    });\n  }, []);\n\n  var incCount = () => {\n    setCount(c => c + 1);\n  };\n\n  var handleSubmit = e => {\n    e.preventDefault();\n    var data = new FormData(e.target);\n    pushEvent(\"update_name\", {\n      new_name: data.get(\"name\")\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Props:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, JSON.stringify(props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    placeholder: \"new name\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\"\n  }, \" Update Name \")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Count: \", count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    onClick: incCount\n  }, \"Inc\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    \"phx-click\": \"trigger-event\"\n  }, \"Trigger Server Event\"));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9jb21wb25lbnRzL0hlbGxvUmVhY3RTdXJmYWNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9IZWxsb1JlYWN0U3VyZmFjZS5qcz8xMmIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMaXZlQ29udGV4dCB9IGZyb20gXCJyZWFjdF9zdXJmYWNlXCI7XG5cbi8vIHByb3BzIGFyZSBwcm92aWRlZCBieSB0aGUgc2VydmVyLlxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHsgcHVzaEV2ZW50LCBoYW5kbGVFdmVudCwgcHVzaEV2ZW50VG8gfSA9IHVzZUxpdmVDb250ZXh0KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVFdmVudChcImZyb21fc2VydmVyXCIsICh2YWwpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZnJvbSBzZXJ2ZXIhXCIpO1xuICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGluY0NvdW50ID0gKCkgPT4ge1xuICAgIHNldENvdW50KChjKSA9PiBjICsgMSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgcHVzaEV2ZW50KFwidXBkYXRlX25hbWVcIiwgeyBuZXdfbmFtZTogZGF0YS5nZXQoXCJuYW1lXCIpIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5Qcm9wczo8L2gzPlxuICAgICAgPGRpdj57SlNPTi5zdHJpbmdpZnkocHJvcHMpfTwvZGl2PlxuICAgICAgPGJyIC8+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5ldyBuYW1lXCIgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+IFVwZGF0ZSBOYW1lIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+Q291bnQ6IHtjb3VudH08L3A+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2luY0NvdW50fT5cbiAgICAgICAgICBJbmNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHBoeC1jbGljaz1cInRyaWdnZXItZXZlbnRcIj5cbiAgICAgICAgVHJpZ2dlciBTZXJ2ZXIgRXZlbnRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/components/HelloReactSurface.js\n");

/***/ })

}]);