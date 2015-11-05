'use strict';

var classnames = require('classnames');
var React = require('react');
var Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'Switch',

	propTypes: {
		disabled: React.PropTypes.bool,
		on: React.PropTypes.bool,
		onTap: React.PropTypes.func,
		type: React.PropTypes.string
	},

	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},

	render: function render() {
		var className = classnames('Switch', 'Switch--' + this.props.type, {
			'is-disabled': this.props.disabled,
			'is-on': this.props.on
		});

		return React.createElement(
			Tappable,
			{ onTap: this.props.onTap, className: className, component: 'label' },
			React.createElement(
				'div',
				{ className: 'Switch__track' },
				React.createElement('div', { className: 'Switch__handle' })
			)
		);
	}
});