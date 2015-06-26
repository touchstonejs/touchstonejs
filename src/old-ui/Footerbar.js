var React = require('react/addons'),
	classnames = require('classnames'),
	ViewContent = require('./ViewContent');

module.exports = React.createClass({
	displayName: 'Footerbar',
	propTypes: {
		children: React.PropTypes.node,
		height: React.PropTypes.string,
		type: React.PropTypes.string
	},
	getDefaultProps () {
		return {
			height: '44px'
		};
	},
	render () {
		var className = classnames(this.props.className, this.props.type, {
			'Footerbar': true
		});

		return (
			<ViewContent height={this.props.height} className={className}>
				{this.props.children}
			</ViewContent>
		);
	}
});
