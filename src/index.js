
import React from 'react';
import ReactDOM from 'react-dom';
// import * as core from '@umich-lib/core'

var e = React.createElement;
// ReactDOM.render(e(core.Text, { size: "2XL" }, "HELLO WORLD"), document.getElementById('root'));

// const factory = function(component, kw, text) {
//   return e(core[component], kw, text);
// }

// const render = function(fn, id) {
//   ReactDOM.render(fn, document.getElementById(id));
// }

function load(id, module, kw, text) {
  switch(module) {
    case 'UniversalHeader':
      import(/* webpackChunkName: "universal-header" */ '@umich-lib/universal-header').then(module => {
        const component = module.default;
        ReactDOM.render(e(component, kw, text), document.getElementById(id));
      });
      break;
    case 'Alert':
      import(/* webpackChunkName: "alert" */ '@umich-lib/alert').then(module => {
        const component = module.default;
        ReactDOM.render(e(component, kw, text), document.getElementById(id));
      });
      break;
    case 'Chat':
      import(/* webpackChunkName: "chat" */ '@umich-lib/chat').then(module => {
        const component = module.default;
        ReactDOM.render(e(component, kw, text), document.getElementById(id));
      });
      break;
    default:
      console.log("Sorry.");
  }
}

export {
  // factory,
  // render,
  load
}
