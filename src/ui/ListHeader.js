var React = require('react');

var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'ListHeader',

	propsTypes: {
		className: React.PropTypes.string,
		sticky: React.PropTypes.bool
	},

	render () {
		var className = classNames('list-header', {
			'sticky': this.props.sticky
		}, this.props.className);

		var props = blacklist(this.props, 'sticky');

		return <div className={className} {...props} />;
	}
});
