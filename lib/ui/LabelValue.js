'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FieldControl = require('./FieldControl');

var _FieldControl2 = _interopRequireDefault(_FieldControl);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _ItemInner = require('./ItemInner');

var _ItemInner2 = _interopRequireDefault(_ItemInner);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

module.exports = _react2['default'].createClass({
	displayName: 'LabelValue',

	propTypes: {
		alignTop: _react2['default'].PropTypes.bool,
		className: _react2['default'].PropTypes.string,
		label: _react2['default'].PropTypes.string,
		placeholder: _react2['default'].PropTypes.string,
		value: _react2['default'].PropTypes.string
	},

	render: function render() {
		return _react2['default'].createElement(
			_Item2['default'],
			{ alignTop: this.props.alignTop, className: this.props.className, component: 'label' },
			_react2['default'].createElement(
				_ItemInner2['default'],
				null,
				_react2['default'].createElement(
					'div',
					{ className: 'FieldLabel' },
					this.props.label
				),
				_react2['default'].createElement(
					_FieldControl2['default'],
					null,
					_react2['default'].createElement(
						'div',
						{ className: (0, _classnames2['default'])('field', this.props.value ? 'u-selectable' : 'field-placeholder') },
						this.props.value || this.props.placeholder
					)
				)
			)
		);
	}
});