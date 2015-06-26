var React = require('react/addons'),
	classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'ItemNote',
	propTypes: {
		type: React.PropTypes.string,
		label: React.PropTypes.string,
		icon: React.PropTypes.string
	},

	getDefaultProps: function () {
		return {
			type: 'default'
		};
	},

	render: function () {
		var className = classnames({
			'item-note': true
		}, this.props.type, this.props.className);

		// elements
		var label = this.props.label ? (
			<div className="item-note-label">{this.props.label}</div>
		) : null;
		var icon = this.props.icon ? (
			<div className={'item-note-icon ' + this.props.icon} />
		) : null;

		return (
			<div className={className}>
				{label}
				{icon}
			</div>
		);
	}
});
