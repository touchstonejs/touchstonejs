var React = require('react/addons'),
	classnames = require('classnames'),
	FlexBlock = require('./FlexBlock');

module.exports = React.createClass({
	displayName: 'Alertbar',
	propTypes: {
		className: React.PropTypes.string,
		height: React.PropTypes.string,
		pulse: React.PropTypes.bool,
		type: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			height: '30px'
		};
	},
	render: function() {
		var className = classnames(this.props.className, this.props.type, {
			'Alertbar': true,
			'pulse': this.props.pulse
		});
		var content = this.props.pulse ? <div className="Alertbar-inner">{this.props.children}</div> : this.props.children;

		return (
			<FlexBlock height={this.props.height} className={className}>
				{content}
			</FlexBlock>
		);
	}
});
