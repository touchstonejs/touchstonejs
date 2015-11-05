'use strict';

var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'PopupIcon',
	propTypes: {
		name: React.PropTypes.string,
		type: React.PropTypes.oneOf(['default', 'muted', 'primary', 'success', 'warning', 'danger']),
		spinning: React.PropTypes.bool
	},

	render: function render() {
		var className = classNames('PopupIcon', {
			'is-spinning': this.props.spinning
		}, this.props.name, this.props.type);

		return React.createElement('div', { className: className });
	}
});