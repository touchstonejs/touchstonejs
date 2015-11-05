'use strict';

var React = require('react');
var classnames = require('classnames');
var Transition = require('react-addons-css-transition-group');

module.exports = React.createClass({
	displayName: 'Alertbar',
	propTypes: {
		animated: React.PropTypes.bool,
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		pulse: React.PropTypes.bool,
		type: React.PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
		visible: React.PropTypes.bool
	},

	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},

	render: function render() {
		var className = classnames('Alertbar', 'Alertbar--' + this.props.type, {
			'Alertbar--animated': this.props.animated,
			'Alertbar--pulse': this.props.pulse
		}, this.props.className);

		var pulseWrap = this.props.pulse ? React.createElement(
			'div',
			{ className: 'Alertbar__inner' },
			this.props.children
		) : this.props.children;
		var animatedBar = this.props.visible ? React.createElement(
			'div',
			{ className: className },
			pulseWrap
		) : null;

		var component = this.props.animated ? React.createElement(
			Transition,
			{ transitionLeaveTimeout: 500, transitionEnterTimeout: 500, transitionName: 'Alertbar', component: 'div' },
			animatedBar
		) : React.createElement(
			'div',
			{ className: className },
			pulseWrap
		);

		return component;
	}
});