var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
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

import Quill from 'quill';
import { bindingMode } from 'aurelia-binding';
import { Container } from 'aurelia-dependency-injection';
import { bindable, inlineView, customElement } from 'aurelia-templating';

export let QuillEditor = (_dec = inlineView(`<template>
    <div ref="quillEditor"></div>
</template>`), _dec2 = customElement('quill-editor'), _dec3 = bindable(), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = class QuillEditor {
    constructor() {
        _initDefineProp(this, 'options', _descriptor, this);

        _initDefineProp(this, 'value', _descriptor2, this);

        this.onTextChanged = () => {
            this.value = this.editor.root.innerHTML;
        };
    }

    bind() {
        let editorConfig = Container.instance.get('quill-editor-config');
        this.options = Object.assign({}, editorConfig, this.options);
    }

    attached() {
        this.editor = new Quill(this.quillEditor, this.options);
        if (this.value) {
            this.editor.root.innerHTML = this.value;
        }

        this.editor.on('text-change', this.onTextChanged);
    }

    detached() {
        this.editor.off('text-change', this.onTextChanged);
        this.editor = null;
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'options', [_dec3], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec4], {
    enumerable: true,
    initializer: null
})), _class2)) || _class) || _class);