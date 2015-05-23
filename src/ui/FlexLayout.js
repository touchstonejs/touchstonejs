var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'FlexContainer',

	propTypes: {
		className: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			className: ''
		};
	},

	render: function() {
		var className = this.props.className ? ('FlexLayout ' + this.props.className) : 'FlexLayout';

		// react does not currently support duplicate properties (which we need for vendor-prefixed values)
		// see https://github.com/facebook/react/issues/2020
		// moved the display properties to css/touchstone/view.less using the class ".FlexLayout"

		// when supported, apply the following:
		// display: '-webkit-box',
		// display: '-webkit-flex',
		// display: '-moz-box',
		// display: '-moz-flex',
		// display: '-ms-flexbox',
		// display: 'flex',

		var inlineStyle = {
			WebkitFlexDirection: 'column',
			MozFlexDirection: 'column',
			msFlexDirection: 'column',
			FlexDirection: 'column',
			WebkitAlignItems: 'stretch',
			MozAlignItems: 'stretch',
			AlignItems: 'stretch',
			WebkitJustifyContent: 'space-between',
			MozJustifyContent: 'space-between',
			JustifyContent: 'space-between'
		}

		return <div className={className} style={inlineStyle}>{this.props.children}</div>;
	}
});
