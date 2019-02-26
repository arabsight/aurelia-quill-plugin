'use strict';

System.register(['quill', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-templating'], function (_export, _context) {
    "use strict";

    var Quill, bindingMode, Container, bindable, inlineView, customElement, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, QuillEditor;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    return {
        setters: [function (_quill) {
            Quill = _quill.default;
        }, function (_aureliaBinding) {
            bindingMode = _aureliaBinding.bindingMode;
        }, function (_aureliaDependencyInjection) {
            Container = _aureliaDependencyInjection.Container;
        }, function (_aureliaTemplating) {
            bindable = _aureliaTemplating.bindable;
            inlineView = _aureliaTemplating.inlineView;
            customElement = _aureliaTemplating.customElement;
        }],
        execute: function () {
            _export('QuillEditor', QuillEditor = (_dec = inlineView('<template>\n    <div ref="quillEditor"></div>\n</template>'), _dec2 = customElement('quill-editor'), _dec3 = bindable(), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
                function QuillEditor() {
                    var _this = this;

                    _classCallCheck(this, QuillEditor);

                    this._textChanged = false;

                    _initDefineProp(this, 'options', _descriptor, this);

                    _initDefineProp(this, 'value', _descriptor2, this);

                    this.onTextChanged = function () {
                        _this._textChanged = true;
                        _this.value = _this.editor.root.innerHTML;
                    };
                }

                QuillEditor.prototype.bind = function bind() {
                    var editorConfig = Container.instance.get('quill-editor-config');
                    this.options = Object.assign({}, editorConfig, this.options);
                };

                QuillEditor.prototype.attached = function attached() {
                    this.editor = new Quill(this.quillEditor, this.options);

                    this.editor.on('text-change', this.onTextChanged);

                    if (this.value) {
                        this.editor.root.innerHTML = this.value;
                    }
                };

                QuillEditor.prototype.valueChanged = function valueChanged(newValue, oldValue) {
                    if (newValue !== oldValue && this.editor.root.innerHTML !== newValue && this._textChanged === false) {
                        this.editor.root.innerHTML = this.value;
                    }
                    this._textChanged = false;
                };

                QuillEditor.prototype.detached = function detached() {
                    this.editor.off('text-change', this.onTextChanged);
                    this.cleanModules();

                    this.editor = null;
                    delete this.editor;
                };

                QuillEditor.prototype.cleanModules = function cleanModules() {
                    var toolbar = this.quillEditor.parentNode.querySelector('.ql-toolbar');

                    if (toolbar) {
                        toolbar.remove();
                    }

                    this.editor.options.modules.toolbar = null;
                    delete this.editor.options.modules.toolbar;

                    this.editor.theme.modules.toolbar = null;
                    delete this.editor.theme.modules.toolbar;
                };

                return QuillEditor;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'options', [_dec3], {
                enumerable: true,
                initializer: null
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec4], {
                enumerable: true,
                initializer: null
            })), _class2)) || _class) || _class));

            _export('QuillEditor', QuillEditor);
        }
    };
});