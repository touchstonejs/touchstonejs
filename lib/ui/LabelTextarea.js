var React = require('react/addons'),
	classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'LabelTextarea',
	propTypes: {
		className: React.PropTypes.string,
		onChange: React.PropTypes.func,
		type: React.PropTypes.string,
		label: React.PropTypes.string,
		noedit: React.PropTypes.bool,
		first: React.PropTypes.bool
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
			'field-item': true,
			'is-first': this.props.first,
			'u-selectable': this.props.disabled || this.props.readonly
		});

		var renderInput = this.props.readonly ? (
			<div className="field u-selectable">{this.props.value}</div>
		) : (
			<textarea disabled={this.props.disabled} value={this.props.value} defaultValue={this.props.defaultValue} onChange={this.props.onChange} placeholder={this.props.placeholder} rows={this.props.rows} className="field" />
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
