'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');

var View = React.createClass({
	displayName: 'View',

	propTypes: {
		component: React.PropTypes.func.isRequired,
		name: React.PropTypes.string.isRequired
	},
	render: function render() {
		throw new Error('TouchstoneJS <View> should not be rendered directly.');
	}
});

exports['default'] = View;
module.exports = exports['default'];