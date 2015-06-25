var React = require('react');
var Container = require('react-container');

var ErrorView = React.createClass({
	render () {
		return (
			<Container fill className="View ErrorView">
				{this.props.children}
			</Container>
		);
	}
});

export default ErrorView;
