import classnames from 'classnames';
import React from 'react';
import Tappable from 'react-tappable';

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
		value: React.PropTypes.string,
		cancelText: React.PropTypes.string
	},

	getInitialState () {
		return {
			isFocused: false
		};
	},

	getDefaultProps () {
		return {
			type: 'default',
			value: '',
			cancelText: 'Cancel'
		};
	},

	handleClear () {
		this.refs.input.getDOMNode().focus();
		this.props.onClear();
	},

	handleCancel () {
		this.refs.input.getDOMNode().blur();
		this.props.onCancel();
	},

	handleChange (e) {
		this.props.onChange(e.target.value);
	},

	handleBlur (e) {
		this.setState({
			isFocused: false
		});
	},

	handleFocus (e) {
		this.setState({
			isFocused: true
		});
	},

	handleSubmit (e) {
		e.preventDefault();

		let input = this.refs.input.getDOMNode();

		input.blur();
		this.props.onSubmit(input.value);
	},

	renderClear () {
		if (!this.props.value.length) return;
		return <Tappable className="SearchField__icon SearchField__icon--clear" onTap={this.handleClear} />;
	},

	renderCancel () {
		var className = classnames('SearchField__cancel', {
			'is-visible': this.state.isFocused || this.props.value
		});
		return <Tappable className={className} onTap={this.handleCancel}>{this.props.cancelText}</Tappable>;
	},

	render () {
		var className = classnames('SearchField', ('SearchField--' + this.props.type), {
			'is-focused': this.state.isFocused,
			'has-value': this.props.value
		}, this.props.className);

		return (
			<form onSubmit={this.handleSubmit} action="javascript:;" className={className}>
				<label className="SearchField__field">
					<div className="SearchField__placeholder">
						<span className="SearchField__icon SearchField__icon--search" />
						{!this.props.value.length ? this.props.placeholder : null}
					</div>
					<input type="search" ref="input" value={this.props.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} className="SearchField__input" />
					{this.renderClear()}
				</label>
				{this.renderCancel()}
			</form>
		);
	}
});
