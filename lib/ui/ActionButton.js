var _ = require('underscore')
var classnames = require('classnames')

var React = require('react/addons')
var Tappable = require('react-tappable')
var Navigation = require('../mixins/Navigation')

module.exports = React.createClass({
	displayName: 'ActionButton',
	mixins: [Navigation],

	getDefaultProps: function() {
		return {
			component: 'button',
			disabled: false
		};
	},

	render: function() {
		var className = classnames(this.props.className, this.props.icon, {
			'action-button': true,
			'disabled': this.props.disabled
		});

		var label = this.props.label ? <div className="action-button-label">{this.props.label}</div> : null;

		// FIXME: we can do better
		var curated = _.extend({}, this.props)
		delete curated.children
		delete curated.className
		delete curated.disabled
		delete curated.icon
		delete curated.label
		delete curated.showView
		delete curated.viewProps
		delete curated.viewTransition

		// TODO: remove this behaviour in >0.2.0
		if (!curated.onTap && this.props.showView) {
			curated.onTap = this.showViewFn(this.props.showView, this.props.viewTransition, this.props.viewProps)
		}

		return (<div className="action-button-cell">
			<Tappable className={className} {... curated}>
				{label}
				{this.props.children}
			</Tappable>
		</div>);
	}
});
