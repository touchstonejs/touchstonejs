/** @jsx React.DOM */

var React = require('react'),
	Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'RadioList',

	propTypes: {
		options: React.PropTypes.array,
		value: React.PropTypes.string,
		onChange: React.PropTypes.func
	},

	onChange: function(value) {
		this.props.onChange(value);
	},

	render: function() {

		var options = this.props.options.map(function(op, i) {
			var className = 'list-item' + (i === 0 ? ' is-first' : '');
			var checkMark = op.value === this.props.value ? (
					<div className="item-note is-primary">
						<div className="item-note-icon ion-checkmark" />
					</div>
				) : null;
			return (
				<Tappable key={'option-' + op.value} onTap={this.onChange.bind(this, op.value)} className={className}>
					{op.label}
					{checkMark}
				</Tappable>
			);
		}.bind(this));

		return <div>{options}</div>;

	}

});
