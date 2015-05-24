var React = require('react/addons'),
	classnames = require('classnames'),
	ViewContent = require('./ViewContent');

module.exports = React.createClass({
	displayName: 'Footerbar',
	propTypes: {
		className: React.PropTypes.string,
		height: React.PropTypes.string,
		type: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			height: '44px'
		};
	},
	render: function() {
		var className = classnames(this.props.className, this.props.type, {
			'Footerbar': true
		});

		return (
			<ViewContent height={this.props.height} className={className}>
				{this.props.children}
			</ViewContent>
		);
	}
});
