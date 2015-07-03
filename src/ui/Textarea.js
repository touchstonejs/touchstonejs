var React = require('react/addons');

var Item = require('./Item');
var ItemContent = require('./ItemContent');
var ItemInner = require('./ItemInner');

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
			<Item selectable={this.props.disabled} className={this.props.className} component="label">
				<ItemInner>
					<ItemContent component="label">
						<textarea className="field" rows={3} {...inputProps} />
					</ItemContent>
					{this.props.children}
				</ItemInner>
			</Item>
		);
	}
});
