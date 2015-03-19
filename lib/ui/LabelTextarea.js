var React = require('react/addons');
var	classnames = require('classnames');
var _ = require('underscore');

module.exports = React.createClass({
	displayName: 'LabelTextarea',
	getDefaultProps: function() {
		return {
			rows: 3
		};
	},
	render: function() {
		var disabled = this.props.disabled || this.props.readonly;
		var className = classnames(this.props.className, {
			'list-item': true,
			'field-item': true,
			'align-top': true,
			'is-first': this.props.first,
			'u-selectable': disabled
		});

		// FIXME: we can do better
		var curated = _.extend({}, this.props);
		delete curated.className;
		delete curated.disabled;
		delete curated.first;
		delete curated.readonly;
		delete curated.children;
		delete curated.label;

		var renderInput = this.props.readonly ? (
			<div className="field u-selectable">{this.props.value}</div>
		) : (
			<textarea disabled={disabled} {...curated} className="field" />
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
