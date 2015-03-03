var _ = require('underscore')
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

		// FIXME: we can do better
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
						<input className="field" disabled={disabled} {...curated} />
					</label>
					{this.props.children}
				</div>
			</div>
		);
	}
});
