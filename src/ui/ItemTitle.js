import blacklist from 'blacklist';
import classnames from 'classnames';
import React from 'react';

module.exports = React.createClass({
	displayName: 'ItemTitle',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string
	},
	render () {
		var className = classnames('Item__title', this.props.className);
		var props = blacklist(this.props, 'className');

		return (
			<div className={className} {...props} />
		);
	}
});
