var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Transition = require('../mixins/Transition');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Modal',
	mixins: [Transition],

	propTypes: {
		className: React.PropTypes.string,
		visible: React.PropTypes.bool
	},

	getDefaultProps: function () {
		return {
			transition: 'none'
		};
	},

	renderBackdrop: function () {
		if (!this.props.visible) return null;
		return <div className="Modal-backdrop" />;
	},

	renderDialog: function () {
		if (!this.props.visible) return null;

		// Set classnames
		var dialogClassName = classnames('Modal-dialog', this.props.className);

		return (<div className={dialogClassName}>
			{this.props.children}
		</div>);
	},

	render: function () {
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
