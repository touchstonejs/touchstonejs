var React = require('react/addons'),
	classnames = require('classnames'),
	Tappable = require('react-tappable'),
	Navigation = require('../mixins/Navigation');

module.exports = React.createClass({
	displayName: 'LoadingButton',
	mixins: [Navigation],
	propTypes: {
		children: React.PropTypes.node,
		className: React.PropTypes.string,
		component: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		label: React.PropTypes.string,
		loading: React.PropTypes.bool,
		onTap: React.PropTypes.func,
		showView: React.PropTypes.string,
		type: React.PropTypes.string,
		viewProps: React.PropTypes.object,
		viewTransition: React.PropTypes.string
	},
	getDefaultProps () {
		return {
			disabled: false,
			loading: false
		};
	},
	render () {
		// Class Name
		var className = classnames(this.props.className, this.props.type, {
			'loading-button': true,
			'disabled': this.props.disabled,
			'is-loading': this.props.loading
		});

		// Set Variables
		var label = (this.props.label && !this.props.loading) ? <div className="loading-button-text">{this.props.label}</div> : null;
		var onTap = this.props.showView ? this.showViewFn(this.props.showView, this.props.viewTransition, this.props.viewProps) : this.props.onTap;
		var loadingElements = this.props.loading ? (
			<span className="loading-button-icon-wrapper">
				<span className="loading-button-icon" />
			</span>
		) : null;

		// Output Component
		return (
			<Tappable className={className} component={this.props.component} onTap={onTap}>
				{loadingElements}
				{label}
				{this.props.children}
			</Tappable>
		);
	}
});
