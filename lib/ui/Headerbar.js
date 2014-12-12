var React = require('react/addons'),
	SetClass = require('classnames'),
	FlexBlock = require('./FlexBlock');

module.exports = React.createClass({
	displayName: 'Headerbar',
	propTypes: {
		className: React.PropTypes.string,
		height: React.PropTypes.string,
		label: React.PropTypes.string,
		type: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			height: '44px',
			type: 'default'
		};
	},
	render: function() {

		var className = SetClass(this.props.className, this.props.type, {
			'Headerbar': true
		});
		var label = this.props.label ? <div className="Headerbar-label">{this.props.label}</div> : '';

		return (
			<FlexBlock height={this.props.height} className={className}>
				{label}
				{this.props.children}
			</FlexBlock>
		);
	}
});
