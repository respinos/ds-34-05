
import React from 'react';
import ReactDOM from 'react-dom';

var e = React.createElement;

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
