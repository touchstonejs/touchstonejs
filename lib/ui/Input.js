var React = require('react/addons'),
	SetClass = require('classnames');

module.exports = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		onChange: React.PropTypes.func,
		type: React.PropTypes.string,
		ref: React.PropTypes.string,
		pattern: React.PropTypes.string,
		value: React.PropTypes.any,
		defaultValue: React.PropTypes.any,
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
		var className = SetClass(this.props.className, {
			'list-item': true,
			'is-first': this.props.first
		});

		return (
			<label className={className}>
				<div className="item-inner">
					<input disabled={this.props.disabled || this.props.readonly} ref={this.props.ref} type={this.props.type} pattern={this.props.pattern} value={this.props.value} defaultValue={this.props.defaultValue} onChange={this.props.onChange} className="field" placeholder={this.props.placeholder} />
					{this.props.children}
				</div>
			</label>
		);
	}
});
