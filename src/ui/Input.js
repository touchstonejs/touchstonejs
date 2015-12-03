import blacklist from 'blacklist';
import Item from './Item';
import ItemContent from './ItemContent';
import ItemInner from './ItemInner';
import React from 'react';

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
	displayName: 'Input',

	propTypes: {
		autoFocus: React.PropTypes.bool,
		className: React.PropTypes.string,
		children: React.PropTypes.node,
		disabled: React.PropTypes.bool
	},

	componentDidMount () {
		if (this.props.autoFocus) {
			this.moveCursorToEnd();
		}
	},

	moveCursorToEnd () {
		var target = this.refs.focusTarget.getDOMNode();
		var endOfString = target.value.length;

		if (SELECTABLE_INPUT_TYPES.hasOwnProperty(target.type)) {
			target.focus();
			target.setSelectionRange(endOfString, endOfString);
		}
	},

	render () {
		var inputProps = blacklist(this.props, 'children', 'className');

		return (
			<Item className={this.props.className} selectable={this.props.disabled} component="label">
				<ItemInner>
					<ItemContent component="label">
						<input ref="focusTarget" className="field" type="text" {...inputProps} />
					</ItemContent>
					{this.props.children}
				</ItemInner>
			</Item>
		);
	}
});
