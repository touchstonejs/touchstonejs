import blacklist from 'blacklist';
import classNames from 'classnames';
import React from 'react';

module.exports = React.createClass({
	displayName: 'ListHeader',

	propTypes: {
		className: React.PropTypes.string,
		sticky: React.PropTypes.bool
	},

	render () {
		var className = classNames('list-header', {
			'sticky': this.props.sticky
		}, this.props.className);

		var props = blacklist(this.props, 'sticky');

		return <div className={className} {...props} />;
	}
});
