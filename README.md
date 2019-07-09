# Distributing umich-lib-ui components

## Introducing webpack 

Build a complete UMD distribution for umich-lib-ui by building a "library" with webpack.

This experiment: set up `index.js` switches the chunking to chunk on `React`, `ReactDOM`, `@umich-lib` boundaries. The chunking splits dist/main.js into

* `dist/main.js`
* `dist/vendors~react-dom~umich-lib.bundle.js`
* `dist/vendors~react~react-dom~umich-lib.bundle.js`
* `dist/vendors~umich-lib.bundle.js`

So fewer chunks.

This experiment exposes a DS global which exports a method:

```
DS.load('universal-header', 'UniversalHeader');
DS.load('root', 'Alert', {}, 'AHOY WORLD');
```

Note in `index.js` that asking for the `universal-header` will pull in the global stylesheet component.

## Running

Clone the repository; open a local server in `ds-34-05`. Using [caddy](https://caddyserver.com/):

```
$ cd ds-34-05
$ caddy browse
```

and then open http://localhost:2015/dist/





