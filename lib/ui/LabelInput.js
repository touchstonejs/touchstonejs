var React = require('react/addons'),
	classnames = require('classnames');

module.exports = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		onChange: React.PropTypes.func,
		type: React.PropTypes.string,
		label: React.PropTypes.string,
		pattern: React.PropTypes.string,
		ref: React.PropTypes.string,
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
			'is-first': this.props.first,
			'u-selectable': this.props.disabled || this.props.readonly
		});

		return (
			<label className={className}>
				<div className="item-inner">
					<div className="field-label">{this.props.label}</div>
					<div className="field-control">
						<input disabled={this.props.disabled || this.props.readonly} type={this.props.type} pattern={this.props.pattern} ref={this.props.ref} value={this.props.value} onChange={this.props.onChange} className="field" placeholder={this.props.placeholder} />
						{this.props.children}
					</div>
				</div>
			</label>
		);
	}
});
