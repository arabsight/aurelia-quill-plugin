define(['exports', './quill-editor', 'aurelia-pal'], function (exports, _quillEditor, _aureliaPal) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.QuillEditor = undefined;
    Object.defineProperty(exports, 'QuillEditor', {
        enumerable: true,
        get: function () {
            return _quillEditor.QuillEditor;
        }
    });
    exports.configure = configure;

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

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
});