# Distributing umich-lib-ui components

## Introducing webpack 

Build a complete UMD distribution for umich-lib-ui by building a "library" with webpack.

This experiment exposes a `DS` global which exports two methods:

```
var component = DS.factory(componentName, props, text)

var textComponent = DS.factory('Text', { size: '2XL', 'Hello world'})
```

and

```
DS.render(component, 'id');

DS.render(textComponent, 'root');
```

## Running

Clone the repository; open a local server in `ds-34-05`. Using [caddy](https://caddyserver.com/):

```
$ cd ds-34-05
$ caddy browse
```

and then open http://localhost:2015/dist/





