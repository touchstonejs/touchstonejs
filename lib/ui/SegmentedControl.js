'use strict';

var React = require('react');
var classnames = require('classnames');
var Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'SegmentedControl',

	propTypes: {
		className: React.PropTypes.string,
		equalWidthSegments: React.PropTypes.bool,
		isInline: React.PropTypes.bool,
		hasGutter: React.PropTypes.bool,
		onChange: React.PropTypes.func.isRequired,
		options: React.PropTypes.array.isRequired,
		type: React.PropTypes.string,
		value: React.PropTypes.string
	},

	getDefaultProps: function getDefaultProps() {
		return {
			type: 'primary'
		};
	},

	onChange: function onChange(value) {
		this.props.onChange(value);
	},

	render: function render() {
		var componentClassName = classnames('SegmentedControl', 'SegmentedControl--' + this.props.type, {
			'SegmentedControl--inline': this.props.isInline,
			'SegmentedControl--has-gutter': this.props.hasGutter,
			'SegmentedControl--equal-widths': this.props.equalWidthSegments
		}, this.props.className);
		var self = this;

		var options = this.props.options.map(function (op) {
			function onChange() {
				self.onChange(op.value);
			}

			var itemClassName = classnames('SegmentedControl__item', {
				'is-selected': op.value === self.props.value
			});

			return React.createElement(
				Tappable,
				{ key: 'option-' + op.value, onTap: onChange, className: itemClassName },
				op.label
			);
		});

		return React.createElement(
			'div',
			{ className: componentClassName },
			options
		);
	}
});