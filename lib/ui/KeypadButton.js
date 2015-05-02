var React = require('react/addons'),
	classnames = require('classnames'),
	Tappable = require('react-tappable')

module.exports = React.createClass({
	displayName: 'KeypadButton',
	propTypes: {
		action: React.PropTypes.func,
		aux: React.PropTypes.bool,
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		primaryLabel: React.PropTypes.string,
		secondaryLabel: React.PropTypes.string,
		value: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			action: function() {},
			className: '',
			secondaryLabel: ''
		};
	},
	render: function() {

		var className = classnames({
			'Keypad-button': true,
			'is-auxiliary': this.props.aux || this.props.delete,
			'disabled': this.props.disabled
		});

		var primaryLabel = this.props.primaryLabel ? <div className="Keypad-button-primary-label">{this.props.primaryLabel}</div> : null;
		var secondaryLabel = this.props.secondaryLabel ? <div className="Keypad-button-secondary-label">{this.props.secondaryLabel}</div> : null;
		var icon = this.props.icon ? <span className="Keypad-button-icon" dangerouslySetInnerHTML={{ __html: this.props.icon }} /> : null;

		return (
			<div className="Keypad-cell">
				<Tappable onTap={this.props.action} className={className} component="div">
					{icon}
					{primaryLabel}
					{secondaryLabel}
				</Tappable>
			</div>
		);
	}
});
