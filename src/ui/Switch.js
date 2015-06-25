var classnames = require('classnames');
var React = require('react');
var Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'Switch',

	propTypes: {
		className: React.PropTypes.string,
		on: React.PropTypes.bool,
		onTap: React.PropTypes.func,
		type: React.PropTypes.string
	},

	getDefaultProps () {
		return {
			type: 'default'
		};
	},

	render () {
		var className = classnames('switch', 'switch-' + this.props.type, { 'on': this.props.on });

		return (
			<Tappable onTap={this.props.onTap} className={className} component="label">
				<div className="track">
					<div className="handle" />
				</div>
			</Tappable>
		);
	}
});
