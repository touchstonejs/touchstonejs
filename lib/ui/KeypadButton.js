var React = require('react/addons'),
	classnames = require('classnames'),
	Tappable = require('react-tappable'),
	Navigation = require('../mixins/Navigation');

module.exports = React.createClass({
	mixins: [Navigation],
	propTypes: {
		action: React.PropTypes.func,
		aux: React.PropTypes.bool,
		className: React.PropTypes.string,
		delete: React.PropTypes.bool,
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
			'is-disabled': this.props.disabled
		});

		var primaryLabel = this.props.primaryLabel ? <div className="Keypad-button-primary-label">{this.props.primaryLabel}</div> : null;
		var secondaryLabel = this.props.secondaryLabel ? <div className="Keypad-button-secondary-label">{this.props.secondaryLabel}</div> : null;

		return (
			<div className="Keypad-cell">
				<Tappable onTap={this.props.action} className={className} component="button" disabled={this.props.disabled}>
					<div className="Keypad-button_inner">
						{primaryLabel}
						{secondaryLabel}
					</div>
				</Tappable>
			</div>
		);
	}
});
