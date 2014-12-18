var React = require('react/addons'),
	classnames = require('classnames'),
	FlexBlock = require('./FlexBlock'),
	KeypadButton = require('./KeypadButton');

var icons = {
	del: require('../icons/delete')
};

module.exports = React.createClass({
	propTypes: {
		action: React.PropTypes.func,
		className: React.PropTypes.string,
		stowed: React.PropTypes.bool,
		enableDel: React.PropTypes.bool,
		type: React.PropTypes.string, // options: 'black-translucent', 'white-translucent'
		wildkey: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			type: 'default'
		};
	},
	render: function() {

		var typeName = 'Keypad--' + this.props.type;

		var keypadClassName = classnames(typeName, {
			'Keypad': true,
			'is-stowed': this.props.stowed
		}, this.props.className);

		var wildkey = (this.props.wildkey && this.props.wildkey === 'decimal') ? (
			<KeypadButton value="decimal" primaryLabel="&middot;" aux />
		) : (
			<KeypadButton aux disabled />
		);

		var action = this.props.action;

		return (
			<FlexBlock className={keypadClassName}>
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
				<KeypadButton action={function() { return action('delete') }} icon={icons.del} disabled={!this.props.enableDel} aux />
			</FlexBlock>
		);
	}
});
