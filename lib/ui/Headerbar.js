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
	render: function() {
		var className = classnames({
			'Headerbar': true,
			'fixed': this.props.fixed
		}, this.props.className, this.props.type);
		
		var label = (this.props.label) ? <div className="Headerbar-label">{this.props.label}</div> : null;

		return (
			<FlexBlock height={this.props.height} className={className}>
				{this.props.children}
				{label}
			</FlexBlock>
		)
	}
});
