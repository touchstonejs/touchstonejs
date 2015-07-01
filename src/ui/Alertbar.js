var React = require('react/addons');

var blacklist = require('blacklist');
var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Alertbar',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		pulse: React.PropTypes.bool,
		type: React.PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger'])
	},

	getDefaultProps () {
		return {
			type: 'default'
		}
	},

	render () {
		var { pulse } = this.props
		var className = classnames('Alertbar', this.props.className, this.props.type, { 'pulse': pulse });

		if (pulse) {
			var otherProps = blacklist(this.props, 'children')

			return (
				<div className={className} {... otherProps}>
					<div className="Alertbar__inner">{this.props.children}</div>
				</div>
			)
		}

		return <div className={className} {...this.props} />
	}
});
