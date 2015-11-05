'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _FieldControl = require('./FieldControl');

var _FieldControl2 = _interopRequireDefault(_FieldControl);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _ItemInner = require('./ItemInner');

var _ItemInner2 = _interopRequireDefault(_ItemInner);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

// Many input types DO NOT support setSelectionRange.
// Email will show an error on most desktop browsers but works on
// mobile safari + WKWebView, which is really what we care about
var SELECTABLE_INPUT_TYPES = {
	'email': true,
	'password': true,
	'search': true,
	'tel': true,
	'text': true,
	'url': true
};

module.exports = _react2['default'].createClass({
	displayName: 'LabelInput',

	propTypes: {
		alignTop: _react2['default'].PropTypes.bool,
		autoFocus: _react2['default'].PropTypes.bool,
		children: _react2['default'].PropTypes.node,
		className: _react2['default'].PropTypes.string,
		disabled: _react2['default'].PropTypes.bool,
		label: _react2['default'].PropTypes.string,
		readOnly: _react2['default'].PropTypes.bool,
		value: _react2['default'].PropTypes.string
	},

	componentDidMount: function componentDidMount() {
		if (this.props.autoFocus) {
			this.moveCursorToEnd();
		}
	},

	moveCursorToEnd: function moveCursorToEnd() {
		var target = this.refs.focusTarget.getDOMNode();
		var endOfString = target.value.length;

		if (SELECTABLE_INPUT_TYPES.hasOwnProperty(target.type)) {
			target.focus();
			target.setSelectionRange(endOfString, endOfString);
		}
	},

	render: function render() {
		var inputProps = (0, _blacklist2['default'])(this.props, 'alignTop', 'children', 'first', 'readOnly');
		var renderInput = this.props.readOnly ? _react2['default'].createElement(
			'div',
			{ className: 'field u-selectable' },
			this.props.value
		) : _react2['default'].createElement('input', _extends({ ref: 'focusTarget', className: 'field', type: 'text' }, inputProps));

		return _react2['default'].createElement(
			_Item2['default'],
			{ alignTop: this.props.alignTop, selectable: this.props.disabled, className: this.props.className, component: 'label' },
			_react2['default'].createElement(
				_ItemInner2['default'],
				null,
				_react2['default'].createElement(
					_reactTappable2['default'],
					{ onTap: this.moveCursorToEnd, className: 'FieldLabel' },
					this.props.label
				),
				_react2['default'].createElement(
					_FieldControl2['default'],
					null,
					renderInput,
					this.props.children
				)
			)
		);
	}
});