var blacklist = require('blacklist');
var classnames = require('classnames');
var React = require('react/addons');
var Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'Button',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		type: React.PropTypes.oneOf(['default', 'info', 'primary', 'success', 'warning', 'danger'])
	},

	getDefaultProps () {
		return {
			type: 'default'
		}
	},

	render () {
		var className = classnames('Button', ('Button--' + this.props.type), this.props.className);
		var props = blacklist(this.props, 'className');

		return (
			<Tappable className={className} {...props} component="button" />
		);
	}
});
