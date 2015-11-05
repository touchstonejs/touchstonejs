'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'ItemInner',

	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string
	},

	render: function render() {
		var className = classnames('Item__inner', this.props.className);

		return React.createElement('div', _extends({ className: className }, this.props));
	}
});