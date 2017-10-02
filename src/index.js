import { PLATFORM } from 'aurelia-pal';

export { QuillEditor } from './quill-editor';

export function configure(aureliaConfig, editorConfig) {
    // lets choose a default theme
    let defaultConfig = {
        modules: { toolbar: true },
        theme: 'snow'
    };

    if (!editorConfig || typeof editorConfig === 'object') {
        // merge quill options if any with our default options
        let options = Object.assign({}, defaultConfig, editorConfig);
        // register it with the DI to be used as global quill options
        aureliaConfig.container.registerInstance('quill-editor-config', options);
    }

    aureliaConfig.globalResources(PLATFORM.moduleName('./quill-editor'));
}
