var React = require('react/addons');

/**
 * Touchstone Navigation Mixin
 * ===========================
 */

module.exports = {
	
	contextTypes: {
		currentView: React.PropTypes.string,
		app: React.PropTypes.object.isRequired
	},
	
	showView: function() {
		this.context.app.showView.apply(this.context.app, arguments);
	},
	
	showViewFn: function() {
		var args = arguments;
		return function() {
			this.context.app.showView.apply(this.context.app, args);
		}.bind(this);
	}
	
};
