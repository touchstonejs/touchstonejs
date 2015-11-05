var React = require('react');

var Transitions = {
	contextTypes: {
		app: React.PropTypes.object
	},
	transitionTo (view, opts) {
		this.context.app.transitionTo(view, opts);
	}
};

export default Transitions;
