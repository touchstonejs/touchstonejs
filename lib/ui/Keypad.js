var React = require('react/addons'),
	classnames = require('classnames'),
	FlexBlock = require('./FlexBlock'),
	KeypadButton = require('./KeypadButton');

var svg = {
	delIcon: '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-242 183.4 90 65.4" enable-background="new -242 183.4 90 65.4" xml:space="preserve"><path d="M-166,183.4H-205c-3.8,0-7.4,1.5-10.1,4.2l-25.6,25.6c-1.6,1.6-1.6,4.2,0,5.8l25.6,25.6c2.7,2.7,6.3,4.2,10.1,4.2h39.1c7.9,0,14-6.4,14-14.3v-36.8C-152,189.8-158.1,183.4-166,183.4 M-169.8,228.4l-4.3,4.3l-12.3-12.3l-12.3,12.3l-4.3-4.3l12.3-12.3l-12.3-12.3l4.3-4.3l12.3,12.3l12.3-12.3l4.3,4.3l-12.3,12.3L-169.8,228.4z"/></svg>'
};

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
				<KeypadButton action={function() { return action('delete') }} svgIcon={svg.delIcon} disabled={!this.props.enableDel} aux />
			</FlexBlock>
		);
	}
});
