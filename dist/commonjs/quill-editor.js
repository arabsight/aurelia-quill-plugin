'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QuillEditor = undefined;

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _quill = require('quill');

var _quill2 = _interopRequireDefault(_quill);

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var QuillEditor = exports.QuillEditor = (_dec = (0, _aureliaTemplating.inlineView)('<template>\n    <div ref="quillEditor"></div>\n</template>'), _dec2 = (0, _aureliaTemplating.customElement)('quill-editor'), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
    function QuillEditor() {
        var _this = this;

        _classCallCheck(this, QuillEditor);

        _initDefineProp(this, 'options', _descriptor, this);

        _initDefineProp(this, 'value', _descriptor2, this);

        this.onTextChanged = function () {
            _this.value = _this.editor.root.innerHTML;
        };
    }

    QuillEditor.prototype.bind = function bind() {
        var editorConfig = _aureliaDependencyInjection.Container.instance.get('quill-editor-config');
        this.options = Object.assign({}, editorConfig, this.options);
    };

    QuillEditor.prototype.attached = function attached() {
        this.editor = new _quill2.default(this.quillEditor, this.options);
        if (this.value) {
            this.editor.root.innerHTML = this.value;
        }

        this.editor.on('text-change', this.onTextChanged);
    };

    QuillEditor.prototype.detached = function detached() {
        this.editor.off('text-change', this.onTextChanged);
        this.editor = null;
    };

    return QuillEditor;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'options', [_dec3], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec4], {
    enumerable: true,
    initializer: null
})), _class2)) || _class) || _class);