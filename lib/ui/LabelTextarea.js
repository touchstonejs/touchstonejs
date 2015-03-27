var blacklist = require('blacklist')
var	classnames = require('classnames');

var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'LabelTextarea',
	getDefaultProps: function() {
		return {
			rows: 3
		};
	},
	render: function() {
		var disabled = this.props.disabled || this.props.readonly;
		var className = classnames(this.props.className, {
			'list-item': true,
			'field-item': true,
			'align-top': true,
			'is-first': this.props.first,
			'u-selectable': disabled
		});

		var curated = blacklist(this.props, {
			className: true,
			disabled: true,
			first: true,
			readonly: true,
			children: true,
			label: true
		})

		var renderInput = this.props.readonly ? (
			<div className="field u-selectable">{this.props.value}</div>
		) : (
			<textarea disabled={disabled} {...curated} className="field" />
		);

		return (
			<div className={className}>
				<label className="item-inner">
					<div className="field-label">{this.props.label}</div>
					<div className="field-control">
						{renderInput}
						{this.props.children}
					</div>
				</label>
			</div>
		);
	}
});
