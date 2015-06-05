var React = require('react/addons');
var blacklist = require('blacklist');
var classnames = require('classnames');

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
		readOnly: React.PropTypes.bool,
		disabled: React.PropTypes.bool,
		first: React.PropTypes.bool
	},
	getDefaultProps: function () {
		return {
			type: 'text',
			readOnly: false
		};
	},
	render: function () {
		var className = classnames(this.props.className, {
			'list-item': true,
			'field-item': true,
			'is-first': this.props.first,
			'align-top': this.props.alignTop,
			'u-selectable': this.props.disabled
		});

		var props = blacklist(this.props, 'alignTop', 'children', 'first', 'readOnly');

		var renderInput = this.props.readOnly ? (
			<div className="field u-selectable">{this.props.value}</div>
		) : (
			<input className="field" {...props}/>
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
