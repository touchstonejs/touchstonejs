var blacklist = require('blacklist');
var Item = require('./Item');
var ItemContent = require('./ItemContent');
var ItemInner = require('./ItemInner');
var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'Input',
	propTypes: {
		children: React.PropTypes.node,
		disabled: React.PropTypes.bool
	},
	getDefaultProps () {
		return {
			type: 'text'
		};
	},
	render () {
		var inputProps = blacklist(this.props, 'children', 'className');

		return (
			<Item selectable={this.props.disabled} className={this.props.className} component="label">
				<ItemInner>
					<ItemContent component="label">
						<input className="field" {...inputProps} />
					</ItemContent>
					{this.props.children}
				</ItemInner>
			</Item>
		);
	}
});
