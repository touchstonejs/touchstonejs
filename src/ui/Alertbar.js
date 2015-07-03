var React = require('react/addons');
var classnames = require('classnames');
var Transition = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
	displayName: 'Alertbar',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		pulse: React.PropTypes.bool,
		type: React.PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
		visible: React.PropTypes.bool
	},

	getDefaultProps () {
		return {
			type: 'default'
		};
	},

	render () {
		var className = classnames('Alertbar', ('Alertbar--' + this.props.type), {
			'Alertbar--pulse': this.props.pulse
		}, this.props.className);

		var inner = this.props.pulse ? <div className="Alertbar__inner">{this.props.children}</div> : this.props.children;
		var content = this.props.visible ? <div className={className}>{inner}</div> : null;

		return (
			<Transition transitionName="Alertbar" className="Alertbar__testything" component="div">
				{content}
			</Transition>
		);
	}
});
