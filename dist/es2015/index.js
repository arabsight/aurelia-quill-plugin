import { PLATFORM } from 'aurelia-pal';

export { QuillEditor } from './quill-editor';

export function configure(aureliaConfig, editorConfig) {
    let defaultConfig = {
        modules: { toolbar: true },
        theme: 'snow'
    };

    if (!editorConfig || typeof editorConfig === 'object') {
        let options = Object.assign({}, defaultConfig, editorConfig);

        aureliaConfig.container.registerInstance('quill-editor-config', options);
    }

    aureliaConfig.globalResources('./quill-editor');
}