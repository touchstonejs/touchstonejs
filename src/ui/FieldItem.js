var blacklist = require('blacklist');
var classnames = require('classnames');
var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'FieldItem',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string
	},
	render () {
		var className = classnames('Item FieldItem', this.props.className);
		var props = blacklist(this.props, 'children', 'className');

		return (
			<div className={className} {...props}>
				<div className="Item__inner">
					{this.props.children}
				</div>
			</div>
		);
	}
});
