'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FieldControl = require('./FieldControl');

var _FieldControl2 = _interopRequireDefault(_FieldControl);

var _FieldLabel = require('./FieldLabel');

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _ItemInner = require('./ItemInner');

var _ItemInner2 = _interopRequireDefault(_ItemInner);

module.exports = _react2['default'].createClass({
	displayName: 'LabelSelect',
	propTypes: {
		className: _react2['default'].PropTypes.string,
		disabled: _react2['default'].PropTypes.bool,
		label: _react2['default'].PropTypes.string,
		onChange: _react2['default'].PropTypes.func.isRequired,
		options: _react2['default'].PropTypes.array.isRequired,
		value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string])
	},

	getDefaultProps: function getDefaultProps() {
		return {
			className: ''
		};
	},

	renderOptions: function renderOptions() {
		return this.props.options.map(function (op) {
			return _react2['default'].createElement(
				'option',
				{ key: 'option-' + op.value, value: op.value },
				op.label
			);
		});
	},

	render: function render() {

		return _react2['default'].createElement(
			_Item2['default'],
			{ className: this.props.className, component: 'label' },
			_react2['default'].createElement(
				_ItemInner2['default'],
				null,
				_react2['default'].createElement(
					_FieldLabel2['default'],
					null,
					this.props.label
				),
				_react2['default'].createElement(
					_FieldControl2['default'],
					null,
					_react2['default'].createElement(
						'select',
						{ disabled: this.props.disabled, value: this.props.value, onChange: this.props.onChange, className: 'select-field' },
						this.renderOptions()
					),
					_react2['default'].createElement(
						'div',
						{ className: 'select-field-indicator' },
						_react2['default'].createElement('div', { className: 'select-field-indicator-arrow' })
					)
				)
			)
		);
	}
});