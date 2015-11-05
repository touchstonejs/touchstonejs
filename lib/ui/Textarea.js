'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var Item = require('./Item');
var ItemContent = require('./ItemContent');
var ItemInner = require('./ItemInner');

var blacklist = require('blacklist');

module.exports = React.createClass({
	displayName: 'Input',
	propTypes: {
		className: React.PropTypes.string,
		children: React.PropTypes.node,
		disabled: React.PropTypes.bool
	},

	render: function render() {
		var inputProps = blacklist(this.props, 'children', 'className');

		return React.createElement(
			Item,
			{ selectable: this.props.disabled, className: this.props.className, component: 'label' },
			React.createElement(
				ItemInner,
				null,
				React.createElement(
					ItemContent,
					{ component: 'label' },
					React.createElement('textarea', _extends({ className: 'field', rows: 3 }, inputProps))
				),
				this.props.children
			)
		);
	}
});