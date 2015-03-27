var blacklist = require('blacklist')
var classnames = require('classnames')

var React = require('react/addons')

module.exports = React.createClass({
	displayName: 'Input',

	getDefaultProps: function() {
		return {
			type: 'text'
		};
	},

	render: function() {
		var disabled = this.props.disabled || this.props.readonly
		var className = classnames(this.props.className, 'field-item list-item', {
			'is-first': this.props.first,
			'u-selectable': disabled
		})

		var curated = blacklist(this.props, {
			className: true,
			disabled: true,
			first: true,
			readonly: true,
			children: true
		})

		return (
			<div className={className}>
				<div className="item-inner">
					<label className="item-content">
						<input className="field" disabled={disabled} {...curated} />
					</label>
					{this.props.children}
				</div>
			</div>
		);
	}
});
