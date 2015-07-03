var FieldControl = require('./FieldControl');
var FieldLabel = require('./FieldLabel');
var Item = require('./Item');
var ItemInner = require('./ItemInner');
var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'LabelSelect',
	propTypes: {
		alignTop: React.PropTypes.bool,
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		first: React.PropTypes.bool,
		label: React.PropTypes.string,
		options: React.PropTypes.array,
		value: React.PropTypes.string
	},

	getDefaultProps () {
		return {
			className: ''
		};
	},

	getInitialState () {
		return {
			value: this.props.value
		};
	},

	updateInputValue (event) {
		this.setState({
			value: event.target.value
		});
	},

	render () {
		// Map Options
		var options = this.props.options.map(op => {
			return (
				<option key={'option-' + op.value} value={op.value}>
					{op.label}
				</option>
			);
		});

		return (
			<Item alignTop={this.props.alignTop} selectable={this.props.disabled} className={this.props.className} component="label">
				<ItemInner>
					<FieldLabel>{this.props.label}</FieldLabel>
					<FieldControl>
						<select value={this.state.value} onChange={this.updateInputValue} className="select-field">
							{options}
						</select>
						<div className="select-field-indicator">
							<div className="select-field-indicator-arrow" />
						</div>
					</FieldControl>
				</ItemInner>
			</Item>
		);
	}
});
