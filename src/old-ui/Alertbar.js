var classnames = require('classnames');
var React = require('react/addons');
var ViewContent = require('./ViewContent');

module.exports = React.createClass({
	displayName: 'Alertbar',
	propTypes: {
		children: React.PropTypes.node,
		className: React.PropTypes.string,
		height: React.PropTypes.string,
		pulse: React.PropTypes.bool,
		type: React.PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger'])
	},
	getDefaultProps () {
		return {
			height: '30px',
			type: 'default'
		};
	},
	render () {
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
