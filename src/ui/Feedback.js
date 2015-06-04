var React = require('react/addons'),
	Tappable = require('react-tappable');

module.exports = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		iconKey: React.PropTypes.string,
		iconType: React.PropTypes.string,
		header: React.PropTypes.string,
		subheader: React.PropTypes.string,
		text: React.PropTypes.string,
		actionText: React.PropTypes.string,
		actionFn: React.PropTypes.func
	},
	getDefaultProps: function () {
		return {
			className: ''
		};
	},
	render: function () {
		var className = this.props.className ? ('view-feedback ' + this.props.className) : 'view-feedback';

		var icon = this.props.iconKey ? <div className={'view-feedback-icon ' + this.props.iconKey + ' ' + this.props.iconType} /> : null;
		var header = this.props.header ? <div className="view-feedback-header">{this.props.header}</div> : null;
		var subheader = this.props.subheader ? <div className="view-feedback-subheader">{this.props.subheader}</div> : null;
		var text = this.props.text ? <div className="view-feedback-text" dangerouslySetInnerHTML={{__html: this.props.text}} /> : null;
		var action = this.props.actionText ? <Tappable onTap={this.props.actionFn} className="view-feedback-action">{this.props.actionText}</Tappable> : null;

		return (
			<div className={className}>
				{icon}
				{header}
				{subheader}
				{text}
				{action}
			</div>
		);
	}
});
