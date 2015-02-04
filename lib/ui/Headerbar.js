var React = require('react/addons'),
	classnames = require('classnames'),
	FlexBlock = require('./FlexBlock');

module.exports = React.createClass({
	displayName: 'Headerbar',
	propTypes: {
		className: React.PropTypes.string,
		height: React.PropTypes.string,
		label: React.PropTypes.string,
		fixed: React.PropTypes.bool,
		type: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			height: '44px',
			type: 'default'
		};
	},
	render: function() {
		var className = classnames(this.props.className, this.props.type, {
			'Headerbar': true,
			'fixed': this.props.fixed
		});
		var label = this.props.label ? <div className="Headerbar-label">{this.props.label}</div> : null;

		return (
			<FlexBlock height={this.props.height} className={className}>
				{label}
				{this.props.children}
			</FlexBlock>
		);
	}
});
