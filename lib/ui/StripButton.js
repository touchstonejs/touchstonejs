/** @jsx React.DOM */

var React = require('react'),
	Tappable = require('react-tappable'),
	Navigation = require('../mixins/Navigation');

module.exports = React.createClass({
	
	mixins: [Navigation],
	
	propTypes: {
		className: React.PropTypes.string,
		showView: React.PropTypes.string,
		viewTransition: React.PropTypes.string,
		viewProps: React.PropTypes.object,
		action: React.PropTypes.func,
		label: React.PropTypes.string,
		icon: React.PropTypes.string
	},
	
	getDefaultProps: function() {
		return {
			className: ''
		};
	},
	
	render: function() {
		var className = this.props.className + ' strip-button';
		var icon = this.props.icon ? <div className={'strip-button-icon ' + this.props.icon} /> : null;
		var label = this.props.label ? <div className="strip-button-label">{this.props.label}</div> : null;
		var action = this.props.showView ? this.showViewFn(this.props.showView, this.props.viewTransition, this.props.viewProps) : this.props.action;
		return (
			<div className="strip-button-cell">
				<Tappable className={className} component={React.DOM.div} action={action}>
					<div className="strip-button-inner">
						{icon}
						{label}
						{this.props.children}
					</div>
				</Tappable>
			</div>
		);
	}
	
});
