var React = require('react/addons'),
	classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'ItemMedia',
	propTypes: {
		className: React.PropTypes.string,
		icon: React.PropTypes.string,
		avatar: React.PropTypes.string,
		thumbnail: React.PropTypes.string
	},

	render: function() {
		var className = classnames({
			'item-media': true
		}, this.props.className);

		// media types
		var icon = this.props.icon ? (
			<div className={'item-icon ' + this.props.icon} />
		) : null;
		var avatar = this.props.avatar ? (
			<div className="item-avatar">
				<img src={this.props.avatar} />
			</div>
		) : null;
		var thumbnail = this.props.thumbnail ? (
			<div className="item-thumbnail">
				<img src={this.props.thumbnail} />
			</div>
		) : null;

		return (
			<div className={className}>
				{icon}
				{avatar}
				{thumbnail}
			</div>
		);
	}
});