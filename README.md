# Distributing umich-lib-ui components

## Introducing webpack 

Build a complete UMD distribution for umich-lib-ui by building a "library" with webpack.

This experiment: set up `index.js` to explicitly load components from `umich-lib-ui` to take advantage of webpack chunking. The chunking splits `dist/main.js` into 

* `dist/main.js`
* `dist/vendors~alert~chat~universal-header.bundle.js`
* `dist/vendors~alert~universal-header.bundle.js`
* `dist/vendors~chat.bundle.js`
* `dist/vendors~chat~universal-header.bundle.js`
* `dist/vendors~universal-header.bundle.js`

This experiment exposes a `DS` global which exports a method:

```
DS.load('root', 'Alert', {}, 'AHOY WORLD');
```

## Running

Clone the repository; open a local server in `ds-34-05`. Using [caddy](https://caddyserver.com/):

```
$ cd ds-34-05
$ caddy browse
```

and then open http://localhost:2015/dist/





