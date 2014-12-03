var React = require('react/addons'),
	SetClass = require('classnames');

module.exports = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		onChange: React.PropTypes.func,
		type: React.PropTypes.string,
		label: React.PropTypes.string,
		pattern: React.PropTypes.string,
		ref: React.PropTypes.string,
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
		var value = this.props.noedit ? (
			<div className="field">{this.props.value}</div>
		) : (
			<input type={this.props.type} pattern={this.props.pattern} ref={this.props.ref} value={this.props.value} onChange={this.props.onChange} className="field" placeholder={this.props.placeholder} />
		);

		return (
			<label className={className}>
				<div className="field-label">{this.props.label}</div>
				<div className="field-control">
					{value}
					{this.props.children}
				</div>
			</label>
		);
	}
});
