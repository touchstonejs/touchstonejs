var Item = require('./Item');
var ItemContent = require('./ItemContent');
var ItemInner = require('./ItemInner');
var React = require('react/addons');

var blacklist = require('blacklist');

module.exports = React.createClass({
	displayName: 'Input',

	propTypes: {
		className: React.PropTypes.string,
		children: React.PropTypes.node,
		disabled: React.PropTypes.bool
	},

	render () {
		var inputProps = blacklist(this.props, 'children', 'className');

		return (
			<Item className={this.props.className} selectable={this.props.disabled} component="label">
				<ItemInner>
					<ItemContent component="label">
						<input className="field" type="text" {...inputProps} />
					</ItemContent>
					{this.props.children}
				</ItemInner>
			</Item>
		);
	}
});
