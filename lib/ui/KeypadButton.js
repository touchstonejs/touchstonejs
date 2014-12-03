var React = require('react/addons'),
	Tappable = require('react-tappable'),
	Navigation = require('../mixins/Navigation');

module.exports = React.createClass({
	mixins: [Navigation],
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
		var className = this.props.aux ? ' Keypad-button is-auxiliary' : 'Keypad-button';
			className += this.props.className ? (' ' + this.props.className) : '';

		var primaryLabel = this.props.primaryLabel ? <div className="Keypad-button-primary-label">{this.props.primaryLabel}</div> : null;
		var secondaryLabel = this.props.secondaryLabel ? <div className="Keypad-button-secondary-label">{this.props.secondaryLabel}</div> : null;

		var action = function() {
			return this.props.action(this.props.value)
		}.bind(this)

		return (
			<div className="Keypad-cell">
				<Tappable onTap={action} className={className} component="button" disabled={this.props.disabled}>
					<div className="Keypad-button_inner">
						{primaryLabel}
						{secondaryLabel}
					</div>
				</Tappable>
			</div>
		);
	}
});
