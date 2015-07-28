var FieldControl = require('./FieldControl');
var FieldLabel = require('./FieldLabel');
var Item = require('./Item');
var ItemInner = require('./ItemInner');
var React = require('react/addons');

var blacklist = require('blacklist');

module.exports = React.createClass({
	displayName: 'LabelInput',

	propTypes: {
		alignTop: React.PropTypes.bool,
		children: React.PropTypes.node,
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		label: React.PropTypes.string,
		readOnly: React.PropTypes.bool,
		value: React.PropTypes.string
	},

	getDefaultProps () {
		return {
			readOnly: false
		};
	},
	
	createUEID () {
		return Math.floor(Math.random() * Date.now()).toString(36);
	},
	
	moveCursorToEnd () {
		var target = this.refs.focusTarget.getDOMNode();
		var endOfString = 0;
		
		if (this.props.value) {
			endOfString = this.props.value.length
		} else if (this.props.defaultValue) {
			endOfString = this.props.defaultValue.length
		}
		
		target.setSelectionRange(endOfString, endOfString);
	},
	
	handleFocus () {
		this.moveCursorToEnd();
		
		if (this.props.onFocus) {
			this.props.onFocus();
		}
	},

	render () {
		var indentifiedByUserInput = this.props.id || this.props.htmlFor;
		var uniqueId = indentifiedByUserInput ? indentifiedByUserInput : this.createUEID();
		
		var inputProps = blacklist(this.props, 'alignTop', 'children', 'first', 'readOnly');
		var renderInput = this.props.readOnly ? (
			<div className="field u-selectable">{this.props.value}</div>
		) : (
			<input ref="focusTarget" className="field" type="text" onFocus={this.handleFocus} {... inputProps} id={uniqueId} />
		);

		return (
			<Item alignTop={this.props.alignTop} selectable={this.props.disabled} className={this.props.className} component="label">
				<ItemInner>
					<FieldLabel htmlFor={uniqueId}>{this.props.label}</FieldLabel>
					<FieldControl>
						{renderInput}
						{this.props.children}
					</FieldControl>
				</ItemInner>
			</Item>
		);
	}
});
