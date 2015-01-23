var React = require('react/addons'),
	classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Textarea',
	propTypes: {
		className: React.PropTypes.string,
		defaultValue: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		first: React.PropTypes.bool,
		inputRef: React.PropTypes.string,
		label: React.PropTypes.string,
		onBlur: React.PropTypes.func,
		onChange: React.PropTypes.func,
		onFocus: React.PropTypes.func,
		readonly: React.PropTypes.bool,
		rows: React.PropTypes.number,
		value: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			className: '',
			rows: 3
		};
	},

	render: function() {
		var className = classnames(this.props.className, {
			'list-item': true,
			'is-first': this.props.first,
			'u-selectable': this.props.disabled || this.props.readonly
		});

		return (
			<div className={className}>
				<div className="item-inner">
					<label className="item-content">
						<textarea
							className="field"
							defaultValue={this.props.defaultValue}
							disabled={this.props.disabled || this.props.readonly}
							onBlur={this.props.onBlur}
							onChange={this.props.onChange}
							onFocus={this.props.onFocus}
							placeholder={this.props.placeholder}
							ref={this.props.inputRef}
							rows={this.props.rows}
							value={this.props.value}
						/>
					</label>
					{this.props.children}
				</div>
			</div>
		);
	}
});
