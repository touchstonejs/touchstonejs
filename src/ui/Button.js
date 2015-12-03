import blacklist from 'blacklist';
import classnames from 'classnames';
import React from 'react';
import Tappable from 'react-tappable';

module.exports = React.createClass({
	displayName: 'Button',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		type: React.PropTypes.oneOf(['default', 'info', 'primary', 'success', 'warning', 'danger'])
	},

	getDefaultProps () {
		return {
			type: 'default'
		};
	},

	render () {
		var className = classnames('Button', 'Button--' + this.props.type, this.props.className);
		var props = blacklist(this.props, 'type');

		return (
			<Tappable {...props} className={className} component="button" />
		);
	}
});
