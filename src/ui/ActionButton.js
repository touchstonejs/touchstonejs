var blacklist = require('blacklist')
var classnames = require('classnames')

var React = require('react/addons')
var Tappable = require('react-tappable')
var Navigation = require('../mixins/Navigation')

module.exports = React.createClass({
	displayName: 'ActionButton',
	mixins: [Navigation],

	getDefaultProps: function () {
		return {
			component: 'button',
			disabled: false
		};
	},

	render: function () {
		var className = classnames(this.props.className, this.props.icon, {
			'action-button': true,
			'disabled': this.props.disabled
		});

		var label = this.props.label ? <div className="action-button-label">{this.props.label}</div> : null;
		var curated = blacklist(this.props, {
			children: true,
			className: true,
			disabled: true,
			icon: true,
			label: true,
			showView: true,
			viewProps: true,
			viewTransition: true
		})

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
