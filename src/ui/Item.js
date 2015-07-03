var React = require('react/addons');
var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Item',

	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		showDisclosureArrow: React.PropTypes.bool
	},

	render () {
		var className = classnames('Item', {
			'Item--has-disclosure-arrow': this.props.showDisclosureArrow
		}, this.props.className);

		return <div { ...this.props } className={className} />;
	}
});
