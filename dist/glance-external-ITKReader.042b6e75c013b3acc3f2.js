/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return (self["webpackChunkrediminds_cta"] = self["webpackChunkrediminds_cta"] || []).push([["glance-external-ITKReader"],{

/***/ "./externals/ITKReader/ITKDicomImageReader.js":
/*!****************************************************!*\
  !*** ./externals/ITKReader/ITKDicomImageReader.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"extend\": function() { return /* binding */ extend; },\n/* harmony export */   \"newInstance\": function() { return /* binding */ newInstance; }\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _kitware_vtk_js_macro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kitware/vtk.js/macro */ \"./node_modules/@kitware/vtk.js/macro.js\");\n/* harmony import */ var _kitware_vtk_js_Common_DataModel_ITKHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kitware/vtk.js/Common/DataModel/ITKHelper */ \"./node_modules/@kitware/vtk.js/Common/DataModel/ITKHelper.js\");\n/* harmony import */ var itk_readImageDICOMFileSeries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! itk/readImageDICOMFileSeries */ \"./node_modules/itk/readImageDICOMFileSeries.js\");\n/* eslint-disable-next-line no-unused-vars */\n\n\n\n\nvar convertItkToVtkImage = _kitware_vtk_js_Common_DataModel_ITKHelper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].convertItkToVtkImage;\n\nfunction getArrayName(filename) {\n  var idx = filename.lastIndexOf('.');\n  var name = idx > -1 ? filename.substring(0, idx) : filename;\n  return \"Scalars \".concat(name);\n} // ----------------------------------------------------------------------------\n// vtkITKDicomImageReader methods\n// ----------------------------------------------------------------------------\n\n\nfunction vtkITKDicomImageReader(publicAPI, model) {\n  // Set our className\n  model.classHierarchy.push('vtkITKDicomImageReader'); // Returns a promise to signal when image is ready\n\n  publicAPI.readFileSeries = function (files) {\n    if (!files || !files.length || files === model.files) {\n      return Promise.resolve();\n    }\n\n    model.files = files;\n    return (0,itk_readImageDICOMFileSeries__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(files).then(function (_ref) {\n      var image = _ref.image;\n      return image;\n    }).then(function (itkImage) {\n      var imageData = convertItkToVtkImage(itkImage, {\n        scalarArrayName: model.arrayName || getArrayName(model.fileName)\n      });\n      model.output[0] = imageData;\n      publicAPI.modified();\n    });\n  };\n\n  publicAPI.requestData = function () {\n    publicAPI.readFileSeries(model.files, model.fileName);\n  };\n} // ----------------------------------------------------------------------------\n// Object factory\n// ----------------------------------------------------------------------------\n\n\nvar DEFAULT_VALUES = {\n  fileName: '',\n  // If null/undefined a unique array will be generated\n  arrayName: null\n}; // ----------------------------------------------------------------------------\n\nfunction extend(publicAPI, model) {\n  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  Object.assign(model, DEFAULT_VALUES, initialValues); // Build VTK API\n\n  _kitware_vtk_js_macro__WEBPACK_IMPORTED_MODULE_1__[\"default\"].obj(publicAPI, model);\n  _kitware_vtk_js_macro__WEBPACK_IMPORTED_MODULE_1__[\"default\"].algo(publicAPI, model, 0, 1);\n  _kitware_vtk_js_macro__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setGet(publicAPI, model, ['fileName', 'arrayName']); // vtkITKDicomImageReader methods\n\n  vtkITKDicomImageReader(publicAPI, model);\n} // ----------------------------------------------------------------------------\n\nvar newInstance = _kitware_vtk_js_macro__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newInstance(extend, 'vtkITKDicomImageReader'); // ----------------------------------------------------------------------------\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  newInstance: newInstance,\n  extend: extend\n});\n\n//# sourceURL=webpack://rediminds-cta/./externals/ITKReader/ITKDicomImageReader.js?");

/***/ }),

/***/ "./externals/ITKReader/index.js":
/*!**************************************!*\
  !*** ./externals/ITKReader/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"imageExtensions\": function() { return /* binding */ imageExtensions; },\n/* harmony export */   \"polyDataExtensions\": function() { return /* binding */ polyDataExtensions; },\n/* harmony export */   \"extensions\": function() { return /* binding */ extensions; },\n/* harmony export */   \"registerToGlance\": function() { return /* binding */ registerToGlance; }\n/* harmony export */ });\n/* harmony import */ var _kitware_vtk_js_IO_Misc_ITKImageReader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kitware/vtk.js/IO/Misc/ITKImageReader */ \"./node_modules/@kitware/vtk.js/IO/Misc/ITKImageReader.js\");\n/* harmony import */ var _kitware_vtk_js_IO_Misc_ITKPolyDataReader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kitware/vtk.js/IO/Misc/ITKPolyDataReader */ \"./node_modules/@kitware/vtk.js/IO/Misc/ITKPolyDataReader.js\");\n/* harmony import */ var itk_extensionToImageIO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! itk/extensionToImageIO */ \"./node_modules/itk/extensionToImageIO.js\");\n/* harmony import */ var itk_extensionToImageIO__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(itk_extensionToImageIO__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var itk_readImageArrayBuffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! itk/readImageArrayBuffer */ \"./node_modules/itk/readImageArrayBuffer.js\");\n/* harmony import */ var itk_extensionToPolyDataIO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! itk/extensionToPolyDataIO */ \"./node_modules/itk/extensionToPolyDataIO.js\");\n/* harmony import */ var itk_extensionToPolyDataIO__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(itk_extensionToPolyDataIO__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var itk_readPolyDataArrayBuffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! itk/readPolyDataArrayBuffer */ \"./node_modules/itk/readPolyDataArrayBuffer.js\");\n/* harmony import */ var _ITKDicomImageReader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ITKDicomImageReader */ \"./externals/ITKReader/ITKDicomImageReader.js\");\n\n\n\n\n\n\n\n_kitware_vtk_js_IO_Misc_ITKImageReader__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setReadImageArrayBufferFromITK(itk_readImageArrayBuffer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n_kitware_vtk_js_IO_Misc_ITKPolyDataReader__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setReadPolyDataArrayBufferFromITK(itk_readPolyDataArrayBuffer__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvar imgExtSet = new Set(Array.from(itk_extensionToImageIO__WEBPACK_IMPORTED_MODULE_2___default().keys()).map(function (ext) {\n  return ext.toLowerCase();\n})); // blacklist json, since we load in measurements.json instead\n\nimgExtSet.delete('json');\nvar imageExtensions = Array.from(imgExtSet);\nvar polyDataExtensions = Array.from(new Set(Array.from(itk_extensionToPolyDataIO__WEBPACK_IMPORTED_MODULE_4___default().keys()).map(function (ext) {\n  return ext.toLowerCase();\n})));\nvar extensions = imageExtensions.concat(polyDataExtensions);\nfunction registerToGlance(Glance) {\n  if (Glance) {\n    imageExtensions.filter(function (e) {\n      return e !== 'dcm';\n    }).forEach(function (extension) {\n      return Glance.registerReader({\n        extension: extension,\n        name: \"\".concat(extension.toUpperCase(), \" Reader\"),\n        vtkReader: _kitware_vtk_js_IO_Misc_ITKImageReader__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        binary: true,\n        fileNameMethod: 'setFileName'\n      });\n    });\n    polyDataExtensions.forEach(function (extension) {\n      return Glance.registerReader({\n        extension: extension,\n        name: \"\".concat(extension.toUpperCase(), \" Reader\"),\n        vtkReader: _kitware_vtk_js_IO_Misc_ITKPolyDataReader__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        binary: true,\n        fileNameMethod: 'setFileName'\n      });\n    });\n    Glance.registerReader({\n      extension: 'dcm',\n      name: 'DICOM File Series Reader',\n      vtkReader: _ITKDicomImageReader__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n      fileNameMethod: 'setFileName',\n      fileSeriesMethod: 'readFileSeries',\n      binary: true\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  extensions: extensions,\n  registerToGlance: registerToGlance\n});\nvar Glance = (typeof window === 'undefined' ? {} : window).Glance;\nregisterToGlance(Glance);\n\n//# sourceURL=webpack://rediminds-cta/./externals/ITKReader/index.js?");

/***/ }),

/***/ "?d4c0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

eval("/* (ignored) */\n\n//# sourceURL=webpack://rediminds-cta/crypto_(ignored)?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors"], function() { return __webpack_exec__("./externals/ITKReader/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ return __webpack_exports__;
/******/ }
]);
});