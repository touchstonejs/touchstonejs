var React = require('react/addons'),
	SetClass = require('classnames'),
	Tappable = require('react-tappable'),
	Navigation = require('../mixins/Navigation');

module.exports = React.createClass({
	displayName: 'HeaderbarButton',
	mixins: [Navigation],
	propTypes: {
		className: React.PropTypes.string,
		component: React.PropTypes.string,
		showView: React.PropTypes.string,
		viewTransition: React.PropTypes.string,
		viewProps: React.PropTypes.object,
		disabled: React.PropTypes.bool,
		primary: React.PropTypes.bool,
		onTap: React.PropTypes.func,
		position: React.PropTypes.string,
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
		var className = SetClass(this.props.className, this.props.position, this.props.icon, {
			'Headerbar-button': true,
			'disabled': this.props.disabled,
			'is-primary': this.props.primary
		});

		var label = this.props.label ? <div className="action-button-label">{this.props.label}</div> : null;
		var action = this.props.showView ? this.showViewFn(this.props.showView, this.props.viewTransition, this.props.viewProps) : this.props.onTap;

		return (
			<Tappable onTap={action} className={className} component={this.props.component}>
				{this.props.label}
				{this.props.children}
			</Tappable>
		);
	}
});
