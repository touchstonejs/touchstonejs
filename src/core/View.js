var React = require('react');

var View = React.createClass({
	propTypes: {
		component: React.PropTypes.func.isRequired,
		name: React.PropTypes.string.isRequired
	},
	render () {
		throw new Error('TouchstoneJS <View> should not be rendered directly.');
	}
});

export default View;
