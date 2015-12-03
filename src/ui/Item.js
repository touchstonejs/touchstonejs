import blacklist from 'blacklist';
import React from 'react';
import classnames from 'classnames';

module.exports = React.createClass({
	displayName: 'Item',

	propTypes: {
		children: React.PropTypes.node.isRequired,
		component: React.PropTypes.any,
		className: React.PropTypes.string,
		showDisclosureArrow: React.PropTypes.bool
	},

	getDefaultProps () {
		return {
			component: 'div'
		};
	},

	render () {
		var componentClass = classnames('Item', {
			'Item--has-disclosure-arrow': this.props.showDisclosureArrow
		}, this.props.className);

		var props = blacklist(this.props, 'children', 'className', 'showDisclosureArrow');
		props.className = componentClass;

		return React.createElement(
			this.props.component,
			props,
			this.props.children
		);
	}
});
