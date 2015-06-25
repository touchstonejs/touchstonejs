var React = require('react/addons');
var classnames = require('classnames');
var ViewContent = require('./ViewContent');

module.exports = React.createClass({
	displayName: 'Alertbar',
	propTypes: {
		height: React.PropTypes.string,
		pulse: React.PropTypes.bool,
		type: React.PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger'])
	},
	getDefaultProps: function () {
		return {
			height: '30px',
			type: 'default'
		};
	},
	render: function () {
		var className = classnames(this.props.className, this.props.type, {
			'Alertbar': true,
			'pulse': this.props.pulse
		});
		var content = this.props.pulse ? <div className="Alertbar-inner">{this.props.children}</div> : this.props.children;

		return (
			<ViewContent height={this.props.height} className={className}>
				{content}
			</ViewContent>
		);
	}
});
