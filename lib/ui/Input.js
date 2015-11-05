'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _ItemContent = require('./ItemContent');

var _ItemContent2 = _interopRequireDefault(_ItemContent);

var _ItemInner = require('./ItemInner');

var _ItemInner2 = _interopRequireDefault(_ItemInner);

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
	displayName: 'Input',

	propTypes: {
		autoFocus: _react2['default'].PropTypes.bool,
		className: _react2['default'].PropTypes.string,
		children: _react2['default'].PropTypes.node,
		disabled: _react2['default'].PropTypes.bool
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
		var inputProps = (0, _blacklist2['default'])(this.props, 'children', 'className');

		return _react2['default'].createElement(
			_Item2['default'],
			{ className: this.props.className, selectable: this.props.disabled, component: 'label' },
			_react2['default'].createElement(
				_ItemInner2['default'],
				null,
				_react2['default'].createElement(
					_ItemContent2['default'],
					{ component: 'label' },
					_react2['default'].createElement('input', _extends({ ref: 'focusTarget', className: 'field', type: 'text' }, inputProps))
				),
				this.props.children
			)
		);
	}
});