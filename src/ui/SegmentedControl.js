var React = require('react');
var classnames = require('classnames');
var Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'SegmentedControl',

	propTypes: {
		className: React.PropTypes.string,
		equalWidthSegments: React.PropTypes.bool,
		hasGutter: React.PropTypes.bool,
		onChange: React.PropTypes.func.isRequired,
		options: React.PropTypes.array.isRequired,
		type: React.PropTypes.string,
		value: React.PropTypes.string
	},

	getDefaultProps () {
		return {
			type: 'primary'
		};
	},

	onChange (value) {
		this.props.onChange(value);
	},

	render () {
		var componentClassName = classnames('SegmentedControl', ('SegmentedControl--' + this.props.type), {
			'SegmentedControl--has-gutter': this.props.hasGutter,
			'SegmentedControl--equal-widths': this.props.equalWidthSegments
		}, this.props.className);
		var self = this;

		var options = this.props.options.map(function (op) {
			function onChange () {
				self.onChange(op.value);
			}

			var itemClassName = classnames('SegmentedControl__item', {
				'is-selected': op.value === self.props.value
			});

			return (<Tappable key={'option-' + op.value} onTap={onChange} className={itemClassName}>
				{op.label}
			</Tappable>);
		});

		return <div className={componentClassName}>{options}</div>;
	}
});
