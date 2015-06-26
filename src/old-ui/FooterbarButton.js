var React = require('react/addons'),
	classnames = require('classnames'),
	Tappable = require('react-tappable'),
	Navigation = require('../mixins/Navigation');

module.exports = React.createClass({
	mixins: [Navigation],
	displayName: 'ActionButton',
	propTypes: {
		active: React.PropTypes.bool,
		disabled: React.PropTypes.bool,
		icon: React.PropTypes.string,
		label: React.PropTypes.string,
		onTap: React.PropTypes.func,
		showView: React.PropTypes.string,
		viewProps: React.PropTypes.object,
		viewTransition: React.PropTypes.string,
	},
	getDefaultProps: function () {
		return {
			disabled: false,
			active: false
		};
	},
	render: function () {
		var className = classnames(this.props.className, this.props.icon, {
			'Footerbar-button': true,
			'active': this.props.active,
			'disabled': this.props.disabled
		});

		var label = this.props.label ? <div className="Footerbar-button-label">{this.props.label}</div> : null;
		var action = this.props.showView ? this.showViewFn(this.props.showView, this.props.viewTransition, this.props.viewProps) : this.props.onTap;

		return (
			<Tappable className={className} component={this.props.component} onTap={action}>
				{label}
				{this.props.children}
			</Tappable>
		);
	}
});
