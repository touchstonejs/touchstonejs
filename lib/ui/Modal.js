var React = require('react/addons'),
	classnames = require('classnames'),
	Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'Modal',
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
			showModal: false
		};
	},
	
	getInitialState: function() {
		return {
			showModal: this.props.showModal
		};
	},

	// TODO: use ReactTransitionGroup to handle fade in/out
	componentDidMount: function() {
		var self = this;
		setTimeout(function() {
			self.setState({ showModal: true });
		}, 1);
	},

	render: function() {
		// Set classnames
		var dialogClassName = classnames({
			'Modal-dialog': true,
			'Modal-mini': this.props.mini,
			'Modal-loading': this.props.loading
		}, this.props.className);
		var modalClassName = classnames('Modal', {
			'enter': this.state.showModal
		});

		// Set dynamic content
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
			<div className={modalClassName}>
				<div className={dialogClassName}>
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
