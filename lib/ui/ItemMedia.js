'use strict';

var React = require('react');
var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'ItemMedia',
	propTypes: {
		avatar: React.PropTypes.string,
		avatarInitials: React.PropTypes.string,
		className: React.PropTypes.string,
		icon: React.PropTypes.string,
		thumbnail: React.PropTypes.string
	},

	render: function render() {
		var className = classnames({
			'Item__media': true,
			'Item__media--icon': this.props.icon,
			'Item__media--avatar': this.props.avatar || this.props.avatarInitials,
			'Item__media--thumbnail': this.props.thumbnail
		}, this.props.className);

		// media types
		var icon = this.props.icon ? React.createElement('div', { className: 'Item__media__icon ' + this.props.icon }) : null;
		var avatar = this.props.avatar || this.props.avatarInitials ? React.createElement(
			'div',
			{ className: 'Item__media__avatar' },
			this.props.avatar ? React.createElement('img', { src: this.props.avatar }) : this.props.avatarInitials
		) : null;
		var thumbnail = this.props.thumbnail ? React.createElement(
			'div',
			{ className: 'Item__media__thumbnail' },
			React.createElement('img', { src: this.props.thumbnail })
		) : null;

		return React.createElement(
			'div',
			{ className: className },
			icon,
			avatar,
			thumbnail
		);
	}
});