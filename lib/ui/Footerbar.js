var React = require('react/addons'),
	SetClass = require('classnames');

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
			<UI.FlexBlock height={this.props.height} className={className}>
				{this.props.children}
			</UI.FlexBlock>
		);
	}
});
