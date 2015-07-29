import blacklist from 'blacklist';
import FieldControl from './FieldControl';
import FieldLabel from './FieldLabel';
import Item from './Item';
import ItemInner from './ItemInner';
import React from 'react/addons';
import Tappable from 'react-tappable';

// Many input types DO NOT support setSelectionRange.
// Email will show an error on most desktop browsers but works on
// mobile safari + WKWebView, which is really what we care about
const SELECTABLE_INPUT_TYPES = {
	'email': true,
	'password': true,
	'search': true,
	'tel': true,
	'text': true,
	'url': true
};

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
	
	moveCursorToEnd () {
		var target = this.refs.focusTarget.getDOMNode();
		var endOfString = target.value.length;
		
		console.count('focus ' + target.type);
		
		if (SELECTABLE_INPUT_TYPES.hasOwnProperty(target.type)) {
			target.setSelectionRange(endOfString, endOfString);
		}
	},
	
	handleFocus () {
		this.moveCursorToEnd();
		
		if (this.props.onFocus) {
			this.props.onFocus();
		}
	},

	render () {
		var indentifiedByUserInput = this.props.id || this.props.htmlFor;
		
		var inputProps = blacklist(this.props, 'alignTop', 'children', 'first', 'readOnly');
		var renderInput = this.props.readOnly ? (
			<div className="field u-selectable">{this.props.value}</div>
		) : (
			<input ref="focusTarget" className="field" type="text" {... inputProps} />
		);

		return (
			<Item alignTop={this.props.alignTop} selectable={this.props.disabled} className={this.props.className} component="label">
				<ItemInner>
					<Tappable onTap={this.handleFocus} className="FieldLabel">{this.props.label}</Tappable>
					<FieldControl>
						{renderInput}
						{this.props.children}
					</FieldControl>
				</ItemInner>
			</Item>
		);
	}
});
