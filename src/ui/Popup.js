var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Popup',

	propTypes: {
		children: React.PropTypes.node,
		className: React.PropTypes.string,
		visible: React.PropTypes.bool
	},

	getDefaultProps () {
		return {
			transition: 'none'
		};
	},

	renderBackdrop () {
		if (!this.props.visible) return null;
		return <div className="Popup-backdrop" />;
	},

	renderDialog () {
		if (!this.props.visible) return null;

		// Set classnames
		var dialogClassName = classnames('Popup-dialog', this.props.className);

		return (<div className={dialogClassName}>
			{this.props.children}
		</div>);
	},

	render () {
		return (
			<div className="Popup">
				<ReactCSSTransitionGroup transitionName="Popup-dialog" transitionEnterTimeout={300} transitionLeaveTimeout={300} component="div">
					{this.renderDialog()}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="Popup-background" transitionEnterTimeout={300} transitionLeaveTimeout={300} component="div">
					{this.renderBackdrop()}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});
