'use strict';

var classnames = require('classnames');
var React = require('react');
var Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'SearchField',
	propTypes: {
		className: React.PropTypes.string,
		onCancel: React.PropTypes.func,
		onChange: React.PropTypes.func,
		onClear: React.PropTypes.func,
		onSubmit: React.PropTypes.func,
		placeholder: React.PropTypes.string,
		type: React.PropTypes.oneOf(['default', 'dark']),
		value: React.PropTypes.string
	},

	getInitialState: function getInitialState() {
		return {
			isFocused: false
		};
	},

	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default',
			value: ''
		};
	},

	handleClear: function handleClear() {
		this.refs.input.getDOMNode().focus();
		this.props.onClear();
	},

	handleCancel: function handleCancel() {
		this.refs.input.getDOMNode().blur();
		this.props.onCancel();
	},

	handleChange: function handleChange(e) {
		this.props.onChange(e.target.value);
	},

	handleBlur: function handleBlur(e) {
		this.setState({
			isFocused: false
		});
	},

	handleFocus: function handleFocus(e) {
		this.setState({
			isFocused: true
		});
	},

	handleSubmit: function handleSubmit(e) {
		e.preventDefault();

		var input = this.refs.input.getDOMNode();

		input.blur();
		this.props.onSubmit(input.value);
	},

	renderClear: function renderClear() {
		if (!this.props.value.length) return;
		return React.createElement(Tappable, { className: 'SearchField__icon SearchField__icon--clear', onTap: this.handleClear });
	},

	renderCancel: function renderCancel() {
		var className = classnames('SearchField__cancel', {
			'is-visible': this.state.isFocused || this.props.value
		});
		return React.createElement(
			Tappable,
			{ className: className, onTap: this.handleCancel },
			'Cancel'
		);
	},

	render: function render() {
		var className = classnames('SearchField', 'SearchField--' + this.props.type, {
			'is-focused': this.state.isFocused,
			'has-value': this.props.value
		}, this.props.className);

		return React.createElement(
			'form',
			{ onSubmit: this.handleSubmit, action: 'javascript:;', className: className },
			React.createElement(
				'label',
				{ className: 'SearchField__field' },
				React.createElement(
					'div',
					{ className: 'SearchField__placeholder' },
					React.createElement('span', { className: 'SearchField__icon SearchField__icon--search' }),
					!this.props.value.length ? this.props.placeholder : null
				),
				React.createElement('input', { type: 'search', ref: 'input', value: this.props.value, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, className: 'SearchField__input' }),
				this.renderClear()
			),
			this.renderCancel()
		);
	}
});