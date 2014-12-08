var React = require('react/addons'),
	classnames = require('classnames');

module.exports = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		defaultValue: React.PropTypes.string,
		first: React.PropTypes.bool,
		label: React.PropTypes.string,
		inputRef: React.PropTypes.string,
		onChange: React.PropTypes.func,
		readonly: React.PropTypes.bool,
		disabled: React.PropTypes.bool,
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
						<textarea ref={this.props.inputRef} disabled={this.props.disabled || this.props.readonly} value={this.props.value} defaultValue={this.props.defaultValue} onChange={this.props.onChange} placeholder={this.props.placeholder} rows={this.props.rows} className="field" />
					</label>
					{this.props.children}
				</div>
			</div>
		);
	}
});
