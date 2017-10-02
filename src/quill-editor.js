import Quill from 'quill';
import { bindingMode } from 'aurelia-binding';
import { Container } from 'aurelia-dependency-injection';
import { bindable, inlineView, customElement } from 'aurelia-templating';

@inlineView(`<template>
    <div ref="quillEditor"></div>
</template>`)
@customElement('quill-editor')
export class QuillEditor {
    @bindable() options; // per instance options
    @bindable({ defaultBindingMode: bindingMode.twoWay }) value;

    bind() {
        // merge the global options with any instance options
        let editorConfig = Container.instance.get('quill-editor-config');
        this.options = Object.assign({}, editorConfig, this.options);
    }

    attached() {
        // initialize a new instance of the Quill editor
        // with the supplied options
        this.editor = new Quill(this.quillEditor, this.options);
        if (this.value) {
            this.editor.root.innerHTML = this.value;
        }
        // listen for changes and update the value
        this.editor.on('text-change', this.onTextChanged);
    }

    onTextChanged = () => {
        this.value = this.editor.root.innerHTML;
    }

    detached() {
        // clean up
        this.editor.off('text-change', this.onTextChanged);
        this.editor = null;
    }
}
