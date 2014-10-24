/** @jsx React.DOM */

var React = require('react'),
	Tappable = require('react-tappable'),
	Navigation = require('../mixins/Navigation');

/**
 * Touchstone Link Component
 * =========================
 */

module.exports = React.createClass({
	
	displayName: 'Link',
	
	mixins: [Navigation],
	
	propTypes: {
		to: React.PropTypes.string.isRequired,
		params: React.PropTypes.object,
		viewTransition: React.PropTypes.string,
		component: React.PropTypes.func,
		className: React.PropTypes.string
	},
	
	getDefaultProps: function() {
		return {
			viewTransition: 'none',
			component: React.DOM.span
		};
	},
	
	action: function() {
		var params = this.props.params;
		if ('function' === typeof params) {
			params = params.call(this);
		}
		this.showView(this.props.to, this.props.viewTransition, params);
	},
	
	render: function() {
		return Tappable({
			action: this.action,
			className: this.props.className,
			component: this.props.component
		}, this.props.children);
	}
	
});
