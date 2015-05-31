var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Tappable = require('react-tappable');
var Transition = require('../mixins/Transition');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Modal',
	mixins: [Transition],

	propTypes: {
		className: React.PropTypes.string,
		showModal: React.PropTypes.bool,
		loading: React.PropTypes.bool,
		mini: React.PropTypes.bool,
		iconKey: React.PropTypes.string,
		iconType: React.PropTypes.string,
		header: React.PropTypes.string,
		text: React.PropTypes.string,
		primaryActionText: React.PropTypes.string,
		primaryActionFn: React.PropTypes.func,
		secondaryActionText: React.PropTypes.string,
		secondaryActionFn: React.PropTypes.func
	},

	getDefaultProps: function() {
		return {
			transition: 'none'
		};
	},

	render: function() {
		// Set classnames
		var dialogClassName = classnames('Modal-dialog', this.props.className, {
			'Modal-mini': this.props.mini,
			'Modal-loading': this.props.loading
		});
		var iconClassName = classnames('Modal-icon', this.props.iconKey, this.props.iconType)

		// Set dynamic content
		var icon = this.props.iconKey ? <div className={iconClassName} /> : null;
		var header = this.props.header ? <div className="Modal-header">{this.props.header}</div> : null;
		var text = this.props.text ? <div className="Modal-text" dangerouslySetInnerHTML={{__html: this.props.text}} /> : null;

		// actions
		var primaryAction = this.props.primaryActionText ? <Tappable onTap={this.props.primaryActionFn} className="Modal-action Modal-action-primary">{this.props.primaryActionText}</Tappable> : null;
		var secondaryAction = this.props.secondaryActionText ? <Tappable onTap={this.props.secondaryActionFn} className="Modal-action Modal-action-secondary">{this.props.secondaryActionText}</Tappable> : null;
		var actions = primaryAction ? ( <div className="Modal-actions">{secondaryAction} {primaryAction}</div> ) : null;

		// transition
		var dialogTransition = this.getCSSTransition('show-from-bottom')
		var backdropTransition = this.getCSSTransition('fade')

		console.log('backdropTransition', backdropTransition);

		return (
			<div className="Modal">
				<ReactCSSTransitionGroup
					component="div"
					transitionEnter={dialogTransition.in}
					transitionLeave={dialogTransition.out}
					transitionName={dialogTransition.name}
					className="view-transition-fade">
					<div className={dialogClassName}>
						{icon}
						{header}
						{text}
						{actions}
					</div>
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup
					component="div"
					transitionEnter={backdropTransition.in}
					transitionLeave={backdropTransition.out}
					transitionName={backdropTransition.name}>
					<div className="Modal-backdrop" />
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});
