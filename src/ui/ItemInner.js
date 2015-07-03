var React = require('react/addons');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'ItemInner',

	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string
	},

	render () {
		var className = classnames('Item__inner', this.props.className);

		return <div className={className} {... this.props} />;
	}
});
