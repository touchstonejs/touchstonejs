/** @jsx React.DOM */

var React = require('react'),
	Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'RadioList',

	propTypes: {
		options: React.PropTypes.array,
		value: React.PropTypes.string,
		icon: React.PropTypes.string,
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

			var icon = op.icon ? (<div className="list-item-icon-wrapper">
					<span className={'list-icon left text-primary ' + op.icon} />
				</div>) : null

			return (
				<Tappable key={'option-' + i} onTap={this.onChange.bind(this, op.value)} className={className}>
					{icon}
					{op.label}
					{checkMark}
				</Tappable>
			);
		}.bind(this));

		return <div>{options}</div>;

	}

});
