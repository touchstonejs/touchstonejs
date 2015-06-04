var React = require('react/addons');

var blacklist = require('blacklist')
var	classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'LabelTextarea',

	getDefaultProps: function () {
		return {
			rows: 3
		};
	},

	render: function () {
		var className = classnames(this.props.className, 'list-item', 'field-item', 'align-top', {
			'is-first': this.props.first,
			'u-selectable': this.props.disabled
		});

		var props = blacklist(this.props, 'children', 'className', 'disabled', 'first', 'label', 'readonly')

		var renderInput = this.props.readonly ? (
			<div className="field u-selectable">{this.props.value}</div>
		) : (
			<textarea {...props} className="field" />
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
