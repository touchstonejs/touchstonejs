var React = require('react/addons');
var Tappable = require('react-tappable');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'HeaderbarButton',
	propTypes: {
		disabled: React.PropTypes.bool,
		icon: React.PropTypes.string,
		label: React.PropTypes.string,
		onTap: React.PropTypes.func,
		position: React.PropTypes.string,
		primary: React.PropTypes.bool,
		visible: React.PropTypes.bool
	},

	getDefaultProps: function () {
		return {
			visible: true,
			disabled: false
		};
	},

	render: function () {
		var className = classnames('Headerbar-button', this.props.className, this.props.position, this.props.icon, {
			'hidden': !this.props.visible,
			'disabled': this.props.disabled,
			'is-primary': this.props.primary
		});

		return (
			<Tappable onTap={this.props.onTap} className={className}>
				{this.props.label}
				{this.props.children}
			</Tappable>
		);
	}
});
