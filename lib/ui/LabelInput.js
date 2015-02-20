var React = require('react/addons'),
	classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'LabelInput',
	propTypes: {
		className: React.PropTypes.string,
		onChange: React.PropTypes.func,
		type: React.PropTypes.string,
		label: React.PropTypes.string,
		pattern: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		ref: React.PropTypes.string,
		alignTop: React.PropTypes.bool,
		readonly: React.PropTypes.bool,
		disabled: React.PropTypes.bool,
		first: React.PropTypes.bool
	},
	getDefaultProps: function() {
		return {
			type: 'text',
			readonly: false
		};
	},
	render: function() {
		var className = classnames(this.props.className, {
			'list-item': true,
			'field-item': true,
			'is-first': this.props.first,
			'align-top': this.props.alignTop,
			'u-selectable': this.props.disabled
		});

		var renderInput = this.props.readonly ? (
			<div className="field u-selectable">{this.props.value}</div>
		) : (
			<input disabled={this.props.disabled} type={this.props.type} pattern={this.props.pattern} ref={this.props.ref} value={this.props.value} defaultValue={this.props.defaultValue} onChange={this.props.onChange} className="field" placeholder={this.props.placeholder} />
		);

		return (
			<label className={className}>
				<div className="item-inner">
					<div className="field-label">{this.props.label}</div>
					<div className="field-control">
						{renderInput}
						{this.props.children}
					</div>
				</div>
			</label>
		);
	}
});
