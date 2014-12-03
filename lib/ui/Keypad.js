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

		return (
			<div className={className}>
				<KeypadButton action={this.props.action.bind(this, '1')} primaryLabel="1" />
				<KeypadButton action={this.props.action.bind(this, '2')} primaryLabel="2" secondaryLabel="ABC" />
				<KeypadButton action={this.props.action.bind(this, '3')} primaryLabel="3" secondaryLabel="DEF" />
				<KeypadButton action={this.props.action.bind(this, '4')} primaryLabel="4" secondaryLabel="GHI" />
				<KeypadButton action={this.props.action.bind(this, '5')} primaryLabel="5" secondaryLabel="JKL" />
				<KeypadButton action={this.props.action.bind(this, '6')} primaryLabel="6" secondaryLabel="MNO" />
				<KeypadButton action={this.props.action.bind(this, '7')} primaryLabel="7" secondaryLabel="PQRS" />
				<KeypadButton action={this.props.action.bind(this, '8')} primaryLabel="8" secondaryLabel="TUV" />
				<KeypadButton action={this.props.action.bind(this, '9')} primaryLabel="9" secondaryLabel="WXYZ" />
				{wildkey}
				<KeypadButton action={this.props.action.bind(this, '0')} primaryLabel="0" />
				<KeypadButton action={this.props.action.bind(this, 'delete')} secondaryLabel="DEL" aux disabled={!this.props.enableDel} />
			</div>
		);
	}
});
