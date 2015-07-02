var blacklist = require('blacklist');
var classnames = require('classnames');
var Item = require('./Item');
var ItemContent = require('./ItemContent');
var ItemInner = require('./ItemInner');
var FieldLabel = require('./FieldLabel');
var FieldControl = require('./FieldControl');
var React = require('react/addons');

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
			type: 'text',
			readOnly: false
		};
	},

	render () {
		var props = blacklist(this.props, 'alignTop', 'children', 'first', 'readOnly');
		var renderInput = this.props.readOnly ? (
			<div className="field u-selectable">{this.props.value}</div>
		) : (
			<input className="field" {...props}/>
		);

		return (
			<Item alignTop={this.props.alignTop} selectable={this.props.disabled} className={this.props.className} component="label">
				<ItemInner>
					<FieldLabel>{this.props.label}</FieldLabel>
					<FieldControl>
						{renderInput}
						{this.props.children}
					</FieldControl>
				</ItemInner>
			</Item>
		);
	}
});
