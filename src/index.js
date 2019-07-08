
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import * as core from '@umich-lib/core'

// var e = React.createElement;

// const factory = function(component, kw, text) {
//   return e(core[component], kw, text);
// }

// const render = function(fn, id) {
//   ReactDOM.render(fn, document.getElementById(id));
// }

function load(id, component, kw, text) {
  import(/* webpackChunkName: "react" */ 'react').then(module => {
    const React = module.default;
    import(/* webpackChunkName: "react-dom" */ 'react-dom').then(module => {
      const ReactDOM = module.default;
      import(/* webpackChunkName: "umich-lib" */ '@umich-lib/core').then(module => {
        const umichLib = module;
        console.log("AHOY", umichLib);
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

// function load(id, module, kw, text) {
//   switch(module) {
//     case 'UniversalHeader':
//       import(/* webpackChunkName: "universal-header" */ '@umich-lib/universal-header').then(module => {
//         const component = module.default;
//         ReactDOM.render(e(component, kw, text), document.getElementById(id));
//       });
//       break;
//     case 'Alert':
//       import(/* webpackChunkName: "alert" */ '@umich-lib/alert').then(module => {
//         const component = module.default;
//         ReactDOM.render(e(component, kw, text), document.getElementById(id));
//       });
//       break;
//     case 'Chat':
//       import(/* webpackChunkName: "chat" */ '@umich-lib/chat').then(module => {
//         const component = module.default;
//         ReactDOM.render(e(component, kw, text), document.getElementById(id));
//       });
//       break;
//     default:
//       console.log("Sorry.");
//   }
// }

export {
  // factory,
  // render,
  load
}
