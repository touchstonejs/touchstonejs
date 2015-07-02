var blacklist = require('blacklist');
var classnames = require('classnames');
var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'ItemTitle',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string
	},
	render () {
		var className = classnames('Item__title', this.props.className);
		var props = blacklist(this.props, 'className');

		return (
			<div className={className} {...props} />
		);
	}
});
