var classnames = require('classnames');

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Tappable = require('react-tappable');
var Animation = require('../mixins/Animation');

module.exports = React.createClass({
	displayName: 'Modal',
	mixins: [Animation],
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
		secondaryActionFn: React.PropTypes.func,
		viewTransition: React.PropTypes.string
	},
	
	render: function() {
		// Set classnames
		var dialogClassName = classnames({
			'Modal-dialog': true,
			'Modal-mini': this.props.mini,
			'Modal-loading': this.props.loading
		}, this.props.className);
		var modalClassName = classnames('Modal', {
			'enter': this.props.showModal
		});
		var transitionName = (this.props.viewTransition) ? (this.props.viewTransition) : this._DEFAULT_TRANSITION;
		var viewTransition = this.getViewTransition(transitionName);

		// Set dynamic content
		var icon = this.props.iconKey ? <div className={'Modal-icon ' + this.props.iconKey + ' ' + this.props.iconType} /> : null;
		var header = this.props.header ? <div className="Modal-header">{this.props.header}</div> : null;
		var content;
		if(this.props.text){
			content = <div className="Modal-text">{this.props.text}</div>
		} else {
			content = <div className="Modal-text">{this.props.children}</div>
		}
		var primaryAction = this.props.primaryActionText ? <Tappable onTap={this.props.primaryActionFn} className="Modal-action Modal-action-primary">{this.props.primaryActionText}</Tappable> : null;
		var secondaryAction = this.props.secondaryActionText ? <Tappable onTap={this.props.secondaryActionFn} className="Modal-action Modal-action-secondary">{this.props.secondaryActionText}</Tappable> : null;

		var actions = primaryAction ? ( <div className="Modal-actions">
			{secondaryAction}
			{primaryAction}
		</div> ) : null;
		

		var modal = this.props.showModal ?  (
			<div className={modalClassName}>
				<div className={dialogClassName}>
					{icon}
					{header}
					{content}
					{actions}
				</div>
				<div className="Modal-backdrop" />
			</div>
		) : null;
		
		return(
			<ReactCSSTransitionGroup transitionName={viewTransition.name} transitionEnter={viewTransition.in} transitionLeave={viewTransition.out} className="view-wrapper" component="div">
				{modal}
			</ReactCSSTransitionGroup>)
	}
});
