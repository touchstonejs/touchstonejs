/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
	
	displayName: 'StripButtons',
	
	propTypes: {
		className: React.PropTypes.string
	},
	
	getDefaultProps: function() {
		return {
			className: ''
		};
	},
	
	render: function() {
		var className = this.props.className + ' strip-buttons';
		return <div className={className}>{this.props.children}</div>;
	}
	
});
