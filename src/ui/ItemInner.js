var blacklist = require('blacklist');
var classnames = require('classnames');
var React = require('react/addons');
var Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'ItemInner',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string
	},
	render () {
		var className = classnames('Item__inner', this.props.className);
		var props = blacklist(this.props, 'className');

		return (
			<div {...props} className={className} />
		);
	}
});
