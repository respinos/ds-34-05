
import React from 'react';
import ReactDOM from 'react-dom';
import * as core from '@umich-lib/core'

var e = React.createElement;
// ReactDOM.render(e(core.Text, { size: "2XL" }, "HELLO WORLD"), document.getElementById('root'));

const factory = function(component, kw, text) {
  return e(core[component], kw, text);
}

const render = function(fn, id) {
  ReactDOM.render(fn, document.getElementById(id));
}

export {
  factory,
  render
}
