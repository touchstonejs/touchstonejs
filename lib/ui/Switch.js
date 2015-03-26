var React = require('react');
var CX = require('classnames');
var Tappable = require('react-tappable');
var Navigation = require('touchstonejs').Navigation;

module.exports = React.createClass({
	displayName: 'Switch',
	mixins: [Navigation],
	propTypes: {
		on: React.PropTypes.bool,
		type: React.PropTypes.string,
		className: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			type: 'default'
		};
	},

	render: function() {
		var className = CX({
			'switch': true,
			'on': this.props.on
		}, ('switch-' + this.props.type))

		return (
			<Tappable onTap={this.props.onTap} className={className} component="label">
				<div className="track">
					<div className="handle" />
				</div>
			</Tappable>
		);
	}
});
