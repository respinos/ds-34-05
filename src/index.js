
function load(id, component, kw, text) {
  import(/* webpackChunkName: "react" */ 'react').then(module => {
    const React = module.default;
    import(/* webpackChunkName: "react-dom" */ 'react-dom').then(module => {
      const ReactDOM = module.default;
      import(/* webpackChunkName: "umich-lib" */ '@umich-lib/core').then(module => {
        const umichLib = module;
        var widget;
        if ( component == 'UniversalHeader' ) {
          widget = React.createElement(
            React.Fragment,
            {},
            React.createElement(umichLib['GlobalStyleSheet']),
            React.createElement(umichLib[component])
          );
        } else {
          widget = React.createElement(umichLib[component], kw, text);
        }
        ReactDOM.render(widget, document.getElementById(id));
      })
    })
  })
}

export {
  // factory,
  // render,
  load
}
