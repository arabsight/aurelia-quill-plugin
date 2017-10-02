'use strict';

System.register(['aurelia-pal', './quill-editor'], function (_export, _context) {
    "use strict";

    var PLATFORM, _typeof;

    function configure(aureliaConfig, editorConfig) {
        var defaultConfig = {
            modules: { toolbar: true },
            theme: 'snow'
        };

        if (!editorConfig || (typeof editorConfig === 'undefined' ? 'undefined' : _typeof(editorConfig)) === 'object') {
            var options = Object.assign({}, defaultConfig, editorConfig);

            aureliaConfig.container.registerInstance('quill-editor-config', options);
        }

        aureliaConfig.globalResources(PLATFORM.moduleName('./quill-editor'));
    }

    _export('configure', configure);

    return {
        setters: [function (_aureliaPal) {
            PLATFORM = _aureliaPal.PLATFORM;
        }, function (_quillEditor) {
            var _exportObj = {};
            _exportObj.QuillEditor = _quillEditor.QuillEditor;

            _export(_exportObj);
        }],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }
    };
});