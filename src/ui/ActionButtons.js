var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'ActionButtons',
	propTypes: {
		className: React.PropTypes.string
	},
	getDefaultProps: function () {
		return {
			className: ''
		};
	},
	render: function () {
		var className = this.props.className ? (this.props.className + ' action-buttons') : 'action-buttons';
		return <div className={className}>{this.props.children}</div>;
	}
});
