var classnames = require('classnames');
var ItemInner = require('./ItemInner');
var ItemNote = require('./ItemNote');
var ItemTitle = require('./ItemTitle');
var LinkItem = require('./LinkItem');
var React = require('react');

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
			var checkMark = op.value === self.props.value ? (
				<ItemNote type="primary" icon="ion-checkmark" />
			) : null;
			var icon = op.icon ? (<div className="item-media"><span className={iconClassname} /></div>) : null;

			function onChange () {
				self.onChange(op.value);
			}

			return (
				<LinkItem key={'option-' + i} onTap={onChange}>
					{icon}
					<ItemInner>
						<ItemTitle>{op.label}</ItemTitle>
						{checkMark}
					</ItemInner>
				</LinkItem>
			);
		});

		return <div>{options}</div>;
	}
});
