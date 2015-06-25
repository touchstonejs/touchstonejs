var React = require('react/addons');
var Tappable = require('react-tappable');

var classnames = require('classnames');

module.exports = React.createClass({
	propTypes: {
		iconName: React.PropTypes.string,
		iconType: React.PropTypes.string,
		header: React.PropTypes.string,
		subheader: React.PropTypes.string,
		text: React.PropTypes.string,
		actionText: React.PropTypes.string,
		actionFn: React.PropTypes.func
	},

	render: function () {
		var viewClassName = classnames('view-feedback', this.props.className);
		var iconClassName = classnames('view-feedback-icon', this.props.iconName, this.props.iconType);

		var icon = this.props.iconName ? <div className={iconClassName} /> : null;
		var header = this.props.header ? <div className="view-feedback-header">{this.props.header}</div> : null;
		var subheader = this.props.subheader ? <div className="view-feedback-subheader">{this.props.subheader}</div> : null;
		var text = this.props.text ? <div className="view-feedback-text" dangerouslySetInnerHTML={{__html: this.props.text}} /> : null;
		var action = this.props.actionText ? <Tappable onTap={this.props.actionFn} className="view-feedback-action">{this.props.actionText}</Tappable> : null;

		return (<div className={viewClassName}>
			{icon}
			{header}
			{subheader}
			{text}
			{action}
		</div>);
	}
});
