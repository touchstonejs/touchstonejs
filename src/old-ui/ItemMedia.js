var React = require('react/addons'),
	classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'ItemMedia',
	propTypes: {
		icon: React.PropTypes.string,
		avatar: React.PropTypes.string,
		thumbnail: React.PropTypes.string
	},

	render: function () {
		var className = classnames({
			'item-media':   true,
			'is-icon':      this.props.icon,
			'is-avatar':    this.props.avatar || this.props.avatarInitials,
			'is-thumbnail': this.props.thumbnail
		}, this.props.className);

		// media types
		var icon = this.props.icon ? (
			<div className={'item-icon ' + this.props.icon} />
		) : null;
		var avatar = this.props.avatar || this.props.avatarInitials ? (
			<div className="item-avatar">
				{this.props.avatar ? <img src={this.props.avatar} /> : this.props.avatarInitials}
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