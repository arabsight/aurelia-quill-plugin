'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QuillEditor = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _quillEditor = require('./quill-editor');

Object.defineProperty(exports, 'QuillEditor', {
    enumerable: true,
    get: function get() {
        return _quillEditor.QuillEditor;
    }
});
exports.configure = configure;

var _aureliaPal = require('aurelia-pal');

function configure(aureliaConfig, editorConfig) {
    var defaultConfig = {
        modules: { toolbar: true },
        theme: 'snow'
    };

    if (!editorConfig || (typeof editorConfig === 'undefined' ? 'undefined' : _typeof(editorConfig)) === 'object') {
        var options = Object.assign({}, defaultConfig, editorConfig);

        aureliaConfig.container.registerInstance('quill-editor-config', options);
    }

    aureliaConfig.globalResources(_aureliaPal.PLATFORM.moduleName('./quill-editor'));
}