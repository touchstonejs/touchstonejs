var classnames = require('classnames');
var icons = {
	del: require('../icons/delete')
};

var ViewContent = require('./ViewContent');
var KeypadButton = require('./KeypadButton');
var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'Keypad',
	propTypes: {
		action: React.PropTypes.func,
		className: React.PropTypes.string,
		enableDel: React.PropTypes.bool,
		stowed: React.PropTypes.bool,
		type: React.PropTypes.oneOf(['black-translucent', 'white-translucent']),
		wildkey: React.PropTypes.string
	},

	getDefaultProps () {
		return {
			type: 'default'
		};
	},

	render () {
		var action = this.props.action;
		var typeName = 'Keypad--' + this.props.type;
		var keypadClassName = classnames(this.props.className, typeName, 'Keypad', {
			'is-stowed': this.props.stowed
		});

		var wildkey;

		if (this.props.wildkey === 'decimal') {
			wildkey = <KeypadButton value="decimal" primaryLabel="&middot;" aux />;
		} else {
			wildkey = <KeypadButton aux disabled />;
		}

		return (
			<ViewContent className={keypadClassName}>
				<KeypadButton action={function () { return action('1'); }} primaryLabel="1" />
				<KeypadButton action={function () { return action('2'); }} primaryLabel="2" secondaryLabel="ABC" />
				<KeypadButton action={function () { return action('3'); }} primaryLabel="3" secondaryLabel="DEF" />
				<KeypadButton action={function () { return action('4'); }} primaryLabel="4" secondaryLabel="GHI" />
				<KeypadButton action={function () { return action('5'); }} primaryLabel="5" secondaryLabel="JKL" />
				<KeypadButton action={function () { return action('6'); }} primaryLabel="6" secondaryLabel="MNO" />
				<KeypadButton action={function () { return action('7'); }} primaryLabel="7" secondaryLabel="PQRS" />
				<KeypadButton action={function () { return action('8'); }} primaryLabel="8" secondaryLabel="TUV" />
				<KeypadButton action={function () { return action('9'); }} primaryLabel="9" secondaryLabel="WXYZ" />
				{wildkey}
				<KeypadButton action={function () { return action('0'); }} primaryLabel="0" />
				<KeypadButton action={function () { return action('delete'); }} icon={icons.del} disabled={!this.props.enableDel} aux />
			</ViewContent>
		);
	}
});
