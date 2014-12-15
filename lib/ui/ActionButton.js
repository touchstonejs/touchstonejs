var React = require('react/addons'),
	classnames = require('classnames'),
	Tappable = require('react-tappable'),
	Navigation = require('../mixins/Navigation');

module.exports = React.createClass({
	displayName: 'ActionButton',
	mixins: [Navigation],
	propTypes: {
		className: React.PropTypes.string,
		component: React.PropTypes.string,
		showView: React.PropTypes.string,
		viewTransition: React.PropTypes.string,
		viewProps: React.PropTypes.object,
		disabled: React.PropTypes.bool,
		onTap: React.PropTypes.func,
		label: React.PropTypes.string,
		icon: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			component: 'button',
			disabled: false
		};
	},
	render: function() {
		var className = classnames(this.props.className, this.props.icon, {
			'action-button': true
		});

		var label = this.props.label ? <div className="action-button-label">{this.props.label}</div> : null;
		var action = this.props.showView ? this.showViewFn(this.props.showView, this.props.viewTransition, this.props.viewProps) : this.props.onTap;

		return (
			<div className="action-button-cell">
				<Tappable className={className} component={this.props.component} onTap={action} disabled={this.props.disabled}>
					{label}
					{this.props.children}
				</Tappable>
			</div>
		);
	}
});
