'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');

var Transitions = {
	contextTypes: {
		app: React.PropTypes.object
	},
	transitionTo: function transitionTo(view, opts) {
		this.context.app.transitionTo(view, opts);
	}
};

exports['default'] = Transitions;
module.exports = exports['default'];