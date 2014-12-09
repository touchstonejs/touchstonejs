var React = require('react/addons'),
	KeypadButton = require('./KeypadButton');

module.exports = React.createClass({
	propTypes: {
		action: React.PropTypes.func,
		className: React.PropTypes.string,
		stowed: React.PropTypes.bool,
		enableDel: React.PropTypes.bool,
		style: React.PropTypes.string,
		wildkey: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			className: '',
			wildkey: ''
		};
	},
	render: function() {
		var className = this.props.style ? ('Keypad is-' + this.props.style) : 'Keypad';
			className += this.props.stowed ? ' is-stowed' : '';
			className += this.props.className ? (' ' + this.props.className) : '';

		var wildkey = this.props.wildkey === 'decimal' ? (
			<KeypadButton value="decimal" primaryLabel="&middot;" aux={true} />
		) : (
			<KeypadButton aux={true} disabled={true} />
		);

		var action = this.props.action;

		return (
			<div className={className}>
				<KeypadButton action={function() { return action('1') }} primaryLabel="1" />
				<KeypadButton action={function() { return action('2') }} primaryLabel="2" secondaryLabel="ABC" />
				<KeypadButton action={function() { return action('3') }} primaryLabel="3" secondaryLabel="DEF" />
				<KeypadButton action={function() { return action('4') }} primaryLabel="4" secondaryLabel="GHI" />
				<KeypadButton action={function() { return action('5') }} primaryLabel="5" secondaryLabel="JKL" />
				<KeypadButton action={function() { return action('6') }} primaryLabel="6" secondaryLabel="MNO" />
				<KeypadButton action={function() { return action('7') }} primaryLabel="7" secondaryLabel="PQRS" />
				<KeypadButton action={function() { return action('8') }} primaryLabel="8" secondaryLabel="TUV" />
				<KeypadButton action={function() { return action('9') }} primaryLabel="9" secondaryLabel="WXYZ" />
				{wildkey}
				<KeypadButton action={function() { return action('0') }} primaryLabel="0" />
				<KeypadButton action={function() { return action('delete') }} secondaryLabel="DEL" aux disabled={!this.props.enableDel} />
			</div>
		);
	}
});
