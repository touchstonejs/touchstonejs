var classnames = require('classnames');
var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'ItemNote',
	propTypes: {
		className: React.PropTypes.string,
		icon: React.PropTypes.string,
		label: React.PropTypes.string,
		type: React.PropTypes.string
	},
	getDefaultProps () {
		return {
			type: 'default'
		};
	},
	render () {
		var className = classnames('Item__note', (
			'Item__note--' + this.props.type
		), this.props.className);

		// elements
		var label = this.props.label ? (
			<div className="Item__note__label">{this.props.label}</div>
		) : null;
		var icon = this.props.icon ? (
			<div className={'Item__note__icon ' + this.props.icon} />
		) : null;

		return (
			<div className={className}>
				{label}
				{icon}
			</div>
		);
	}
});
