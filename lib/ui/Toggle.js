/** @jsx React.DOM */

var React = require('react'),
	SetClass = require('classnames'),
	Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'Toggle',

	propTypes: {
		options: React.PropTypes.array,
		className: React.PropTypes.string,
		type: React.PropTypes.string,
		value: React.PropTypes.string,
		onChange: React.PropTypes.func
	},

	getDefaultProps: function() {
		return {
			type: 'primary'
		};
	},

	onChange: function(value) {
		this.props.onChange(value);
	},

	render: function() {
		
		var componentClassName = SetClass(this.props.className, this.props.type, {
			'Toggle': true
		});

		var options = this.props.options.map(function(op, i) {
			var itemClassName = SetClass({
				'Toggle-item': true,
				'active': op.value === this.props.value
			});
			return (
				<Tappable key={'option-' + op.value} onTap={this.onChange.bind(this, op.value)} className={itemClassName}>
					{op.label}
				</Tappable>
			);
		}.bind(this));

		return <div className={componentClassName}>{options}</div>;

	}

});
