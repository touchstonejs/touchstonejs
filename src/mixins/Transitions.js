import React from 'react';

var Transitions = {
	contextTypes: {
		app: React.PropTypes.object
	},
	transitionTo (view, opts) {
		this.context.app.transitionTo(view, opts);
	}
};

export default Transitions;
