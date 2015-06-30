var React = require('react');
var Tappable = require('react-tappable');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'RadioList',

	propTypes: {
		options: React.PropTypes.array,
		value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
		icon: React.PropTypes.string,
		onChange: React.PropTypes.func
	},

	onChange (value) {
		this.props.onChange(value);
	},

	render () {
		var self = this;
		var options = this.props.options.map(function (op, i) {
			var iconClassname = classnames('item-icon primary', op.icon);
			var tappableClassname = classnames('list-item', { 'is-first': i === 0 });
			var checkMark = op.value === self.props.value ? (
				<div className="item-note primary">
					<div className="item-note-icon ion-checkmark" />
				</div>
			) : null;
			var icon = op.icon ? (<div className="item-media"><span className={iconClassname} /></div>) : null;

			function onChange () {
				self.onChange(op.value);
			}

			return (
				<Tappable key={'option-' + i} onTap={onChange} className={tappableClassname}>
					{icon}
					<div className="item-inner">
						<div className="item-title">{op.label}</div>
						{checkMark}
					</div>
				</Tappable>
			);
		});

		return <div>{options}</div>;
	}
});
