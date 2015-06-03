var classnames = require('classnames');

var React = require('react');
var Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'Switch',

	propTypes: {
		className: React.PropTypes.string,
		on: React.PropTypes.bool,
		type: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			type: 'default'
		};
	},

	render: function() {
		var className = classnames('switch', 'switch-' + this.props.type, { 'on': this.props.on })

		return (<Tappable onTap={this.props.onTap} className={className} component="label">
			<div className="track">
				<div className="handle" />
			</div>
		</Tappable>);
	}
});
