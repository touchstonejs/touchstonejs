var blacklist = require('blacklist')
var classnames = require('classnames')

var React = require('react/addons')

module.exports = React.createClass({
	displayName: 'Textarea',

	getDefaultProps: function() {
		return {
			rows: 3
		};
	},

	render: function() {
		var disabled = this.props.disabled || this.props.readonly
		var className = classnames(this.props.className, 'field-item list-item', {
			'is-first': this.props.first,
			'u-selectable': disabled
		})

		var curated = blacklist(this.props, {
			children: true,
			className: true,
			disabled: true,
			first: true,
			inputRef: true,
			readonly: true
		})
		curated.ref = this.props.inputRef

		return (
			<div className={className}>
				<div className="item-inner">
					<label className="item-content">
						<textarea className="field" disabled={disabled} {...curated} />
					</label>
					{this.props.children}
				</div>
			</div>
		);
	}
});
