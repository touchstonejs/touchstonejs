var blacklist = require('blacklist');
var classnames = require('classnames');
var React = require('react/addons');
var Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'SearchField',
	propTypes: {
		className: React.PropTypes.string,
		onChange: React.PropTypes.func,
		onClear: React.PropTypes.func,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string
	},

	getInitialState () {
		return {
			isFocused: false
		}
	},

	getDefaultProps () {
		return {
			value: ''
		}
	},

	handleClear () {
		this.refs.input.getDOMNode().focus();
		this.props.onClear();
	},

	handleChange (e) {
		this.props.onChange(e.target.value)
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

	renderClear () {
		if (!this.props.value.length) return;
		return <Tappable className="SearchField__icon SearchField__icon--clear" onTap={this.handleClear} />;
	},

	renderCancel () {
		var className = classnames('SearchField__cancel', {
			'is-visible': this.state.isFocused || this.props.value
		});
		return <Tappable className={className} onTap={this.props.onCancel}>Cancel</Tappable>;
	},

	render () {
		var className = classnames('SearchField', {
			'is-focused': this.state.isFocused || this.props.value
		});
		var props = blacklist(this.props, 'className', 'placeholder', 'type');

		return (
			<div className={className}>
				<label className="SearchField__field">
					<div className="SearchField__placeholder">
						<span className="SearchField__icon SearchField__icon--search" />
						{!this.props.value.length ? this.props.placeholder : null}
					</div>
					<input ref="input" value={this.props.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} className="SearchField__input" />
					{this.renderClear()}
				</label>
				{this.renderCancel()}
			</div>
		);
	}
});