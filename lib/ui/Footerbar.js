var React = require('react/addons'),
	SetClass = require('classnames'),
	FlexBlock = require('./FlexBlock');

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
		var className = SetClass(this.props.className, this.props.type, {
			'Footerbar': true
		});

		return (
			<FlexBlock height={this.props.height} className={className}>
				{this.props.children}
			</FlexBlock>
		);
	}
});
