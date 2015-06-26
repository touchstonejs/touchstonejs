var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Transition = require('../mixins/Transition');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Popup',
	mixins: [Transition],

	propTypes: {
		children: React.PropTypes.node,
		visible: React.PropTypes.bool
	},

	getDefaultProps () {
		return {
			transition: 'none'
		};
	},

	renderBackdrop () {
		if (!this.props.visible) return null;
		return <div className="Modal-backdrop" />;
	},

	renderDialog () {
		if (!this.props.visible) return null;

		// Set classnames
		var dialogClassName = classnames('Modal-dialog', this.props.className);

		return (<div className={dialogClassName}>
			{this.props.children}
		</div>);
	},

	render () {
		return (
			<div className="Modal">
				<ReactCSSTransitionGroup transitionName="Modal-dialog" component="div">
					{this.renderDialog()}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="Modal-background" component="div">
					{this.renderBackdrop()}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});
