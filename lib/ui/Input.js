var _ = require('underscore')
var classnames = require('classnames')

var React = require('react/addons')

module.exports = React.createClass({
	displayName: 'Input',

	getDefaultProps: function() {
		return {
			type: 'text',
			readonly: false
		};
	},

	render: function() {
		var disabled = this.props.disabled || this.props.readonly
		var className = classnames(this.props.className, 'list-item', {
			'is-first': this.props.first,
			'u-selectable': disabled
		})

		var curated = _.extend({}, this.props)
		delete curated.className
		delete curated.disabled
		delete curated.first
		delete curated.readonly
		delete curated.children

		return (
			<div className={className}>
				<div className="item-inner">
					<label className="item-content">
						<input disabled={disabled} {...curated} className="field" />
					</label>
					{this.props.children}
				</div>
			</div>
		);
	}
});
