var React = require('react/addons'),
	SetClass = require('classnames');

module.exports = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		onChange: React.PropTypes.func,
		type: React.PropTypes.string,
		ref: React.PropTypes.string,
		value: React.PropTypes.any,
		defaultValue: React.PropTypes.any,
		noedit: React.PropTypes.bool,
		first: React.PropTypes.bool
	},
	getDefaultProps: function() {
		return {
			type: 'text',
			noedit: false
		};
	},
	render: function() {
		var className = SetClass(this.props.className, {
			'list-item': true,
			'is-first': this.props.first
		});

		// output a field, or a div if not editable
		var renderValue = this.props.noedit ? (
			<div className="field">{this.props.value || this.props.defaultValue}</div>
		) : (
			<input ref={this.props.ref} type={this.props.type} value={this.props.value} defaultValue={this.props.defaultValue} onChange={this.props.onChange} className="field" placeholder={this.props.placeholder} />
		);

		return (
			<label className={className}>
				{renderValue}
			</label>
		);
	}
});
