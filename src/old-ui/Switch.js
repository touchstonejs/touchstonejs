var React = require('react');
var Tappable = require('react-tappable');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Switch',

	propTypes: {
		on: React.PropTypes.bool,
		onTap: React.PropTypes.func,
		type: React.PropTypes.string
	},

	getDefaultProps: function () {
		return {
			type: 'default'
		};
	},

	render: function () {
		var className = classnames('switch', 'switch-' + this.props.type, { 'on': this.props.on });

		return (<Tappable onTap={this.props.onTap} className={className} component="label">
			<div className="track">
				<div className="handle" />
			</div>
		</Tappable>);
	}
});
