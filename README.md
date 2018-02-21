# aurelia-skeleton-plugin

## Install

```shell
npm i quill aurelia-quill-plugin
```

## Bundle (Aurelia-CLI - requirejs)

```json
{
    "name": "quill",
    "path": "../node_modules/quill/dist",
    "main": "quill",
    "resources": [
        "quill.snow.css"
    ]
},
{
    "name": "aurelia-quill-plugin",
    "path": "../node_modules/aurelia-quill-plugin/dist/amd",
    "main": "index"
}
```

## Register

```js
aurelia.use.plugin('aurelia-quill-plugin');
```

for webpack:

```js
import 'quill/dist/quill.snow.css';

aurelia.use.plugin(PLATFORM.moduleName('aurelia-quill-plugin'));
```

## Usage

```html
<require from="quill/quill.snow.css"></require>

<quill-editor value.bind="message"></quill-editor>
```

## Options

For global options pass a quil config object when registering the plugin:

```js
let options = {
    debug: 'info',
    modules: {
        toolbar: '#toolbar'
    },
    placeholder: 'Compose an epic...',
    readOnly: true
};

aurelia.use.plugin('aurelia-quill-plugin', options);
```

If you want per-instance options use the bindable `options` property:

```html
<quill-editor value.bind="content"
        options.bind="{ placeholder: 'Compose an epic...' }">
</quill-editor>
```
