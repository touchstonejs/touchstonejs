var blacklist = require('blacklist');
var classnames = require('classnames');
var React = require('react/addons');
var Tappable = require('react-tappable');
var Transitions = require('../mixins/Transitions');
var Item = require('./Item');

module.exports = React.createClass({
	displayName: 'LinkItem',
	mixins: [Transitions],
	propTypes: {
		children: React.PropTypes.node.isRequired,
		linkTo: React.PropTypes.string,
		onTap: React.PropTypes.func,
		showDisclosureArrow: React.PropTypes.bool,
		transition: React.PropTypes.string,
		viewProps: React.PropTypes.object
	},
	handleTap (e) {
		if (this.props.linkTo) {
			this.transitionTo(this.props.linkTo, { transition: this.props.transition, viewProps: this.props.viewProps });
		} else if (this.props.onTap) {
			this.props.onTap(e);
		}
	},
	render () {
		var props = blacklist(this.props, 'onTap', 'linkTo', 'transition', 'viewProps');

		return (
			<Tappable onTap={this.handleTap} component="div">
				<Item {...props} />
			</Tappable>
		);
	}
});
