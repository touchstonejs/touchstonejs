'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var Tappable = require('react-tappable');

var blacklist = require('blacklist');
var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Button',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		type: React.PropTypes.oneOf(['default', 'info', 'primary', 'success', 'warning', 'danger'])
	},

	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},

	render: function render() {
		var className = classnames('Button', 'Button--' + this.props.type, this.props.className);
		var props = blacklist(this.props, 'type');

		return React.createElement(Tappable, _extends({}, props, { className: className, component: 'button' }));
	}
});