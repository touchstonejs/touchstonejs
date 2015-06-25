var React = require('react');

var Transitions = {
	contextTypes: {
		app: React.PropTypes.object
	},
	transitionTo (view, opts) {
		var vm = '__default';
		view = view.split(':');
		if (view.length > 1) {
			vm = view.shift();
		}
		view = view[0];
		this.context.app.viewManagers[vm].transitionTo(view, opts);
	}
};

export default Transitions;
