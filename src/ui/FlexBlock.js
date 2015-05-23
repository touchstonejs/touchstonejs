var React = require('react/addons'),
	classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'FlexBlock',
	propTypes: {
		id: React.PropTypes.string,
		className: React.PropTypes.string,
		height: React.PropTypes.string,
		scrollable: React.PropTypes.bool,
		grow: React.PropTypes.bool
	},

	getDefaultProps: function() {
		return {
			className: '',
			height: ''
		};
	},

	render: function() {
		var className = classnames({
			'FlexBlock': true,
			'springy-scrolling': this.props.scrollable
		}, this.props.className);
		
		var inlineStyle = {};

		// set height on blocks if provided
		if (this.props.height) {
			inlineStyle.height = this.props.height;
		}

		// stretch to take up space
		if (this.props.grow) {
			inlineStyle.WebkitBoxFlex = '1';
			inlineStyle.WebkitFlex = '1';
			inlineStyle.MozBoxFlex = '1';
			inlineStyle.MozFlex = '1';
			inlineStyle.MsFlex = '1';
			inlineStyle.flex = '1';
		}

		// allow blocks to be scrollable
		if (this.props.scrollable) {
			inlineStyle.overflowY = 'auto';
			inlineStyle.WebkitOverflowScrolling = 'touch';
		}

		return <div className={className} id={this.props.id} style={inlineStyle}>{this.props.children}</div>;
	}
});
