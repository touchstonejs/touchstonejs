/** @jsx React.DOM */

var React    = require('react');
var Tappable = require('react-tappable');

module.exports = React.createClass({

	displayName: 'RadioList',

	propTypes: {
		options: React.PropTypes.array,
		value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
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
					<div className="item-note primary">
						<div className="item-note-icon ion-checkmark" />
					</div>
				) : null;

			var icon = op.icon ? (<div className="item-media">
					<span className={'item-icon primary ' + op.icon} />
				</div>) : null

			return (
				<Tappable key={'option-' + i} onTap={this.onChange.bind(this, op.value)} className={className}>
					{icon}
					<div className="item-inner">
						<div className="item-title">{op.label}</div>
						{checkMark}
					</div>
				</Tappable>
			);
		}.bind(this));

		return <div>{options}</div>;

	}

});
