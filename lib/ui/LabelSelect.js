var React = require('react/addons'),
	classnames = require('classnames');

module.exports = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		label: React.PropTypes.string,
		first: React.PropTypes.bool
	},
	getDefaultProps: function() {
		return {
			className: ''
		};
	},
	getInitialState: function() {
		return {
			value: this.props.value
		};
	},
	updateInputValue: function(event) {
		this.setState({
			value: event.target.value
		});
	},
	render: function() {
		// Set Classes
		var className = classnames(this.props.className, {
			'list-item': true,
			'is-first': this.props.first
		});

		// Map Options
		var options = this.props.options.map(function(op) {
			return (
				<option key={'option-' + op.value} value={op.value}>
					{op.label}
				</option>
			);
		}.bind(this));

		return (
			<label className={className}>
				<div className="item-inner">
					<div className="field-label">{this.props.label}</div>
					<div className="field-control">
						<select value={this.state.value} onChange={this.updateInputValue} className="select-field">
							{options}
						</select>
						<div className="select-field-indicator">
							<div className="select-field-indicator-arrow" />
						</div>
					</div>
				</div>
			</label>
		);
	}
});
