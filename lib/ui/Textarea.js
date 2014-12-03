var React = require('react/addons'),
	SetClass = require('classnames');

module.exports = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		defaultValue: React.PropTypes.string,
		first: React.PropTypes.bool,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func,
		noedit: React.PropTypes.bool,
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
		var className = SetClass(this.props.className, {
			'list-item': true,
			'is-first': this.props.first
		});
		var className = SetClass({
			'list-item': true,
			'is-first': this.props.first
		});

		// output a field, or a div if not editable
		var value = this.props.noedit ? (
			<div className="field">{this.state.value}</div>
		) : (
			<textarea value={this.props.value} defaultValue={this.props.defaultValue} onChange={this.props.onChange} placeholder={this.props.placeholder} rows={this.props.rows} className="field" />
		);

		return (
			<label className={className}>
				{value}
			</label>
		);
	}
});
