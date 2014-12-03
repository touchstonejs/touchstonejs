var React = require('react/addons'),
	Tappable = require('react-tappable'),
	Navigation = require('../mixins/navigation');

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
		component: React.PropTypes.any,
		className: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			viewTransition: 'none',
			component: 'span'
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
		return (
			<Tappable onTap={this.action} className={this.props.className} component={this.props.component}>
				{this.props.children}
			</Tappable>
		);
	}
	
});
