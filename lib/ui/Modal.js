var React = require('react/addons'),
	Tappable = require('react-tappable');

module.exports = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		visible: React.PropTypes.bool,
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
			className: ''
		};
	},
	render: function() {
		var className = this.props.className ? ('Modal-dialog ' + this.props.className) : 'Modal-dialog';

		var primaryActionFn = function() {
			return this.props.primaryActionFn(this.props.value)
		}.bind(this);

		var secondaryActionFn = function() {
			return this.props.secondaryActionFn(this.props.value)
		}.bind(this);

		var icon = this.props.iconKey ? <div className={'Modal-icon ' + this.props.iconKey + ' ' + this.props.iconType} /> : null;
		var header = this.props.header ? <div className="Modal-header">{this.props.header}</div> : null;
		var text = this.props.text ? <div className="Modal-text" dangerouslySetInnerHTML={{__html: this.props.text}} /> : null;
		var primaryAction = this.props.primaryActionText ? <Tappable onTap={this.props.primaryActionFn} className="Modal-action Modal-action-primary">{this.props.primaryActionText}</Tappable> : null;
		var secondaryAction = this.props.secondaryActionText ? <Tappable onTap={this.props.secondaryActionFn} className="Modal-action Modal-action-secondary">{this.props.secondaryActionText}</Tappable> : null;

		var actions = primaryAction ? ( <div className="Modal-actions">
			{secondaryAction}
			{primaryAction}
		</div> ) : null;

		return (
			<div className={this.props.visible ? 'Modal visible' : 'Modal'}>
				<div className={className}>
					{icon}
					{header}
					{text}
					{actions}
				</div>
				<div className="Modal-backdrop" />
			</div>
		);
	}
});
