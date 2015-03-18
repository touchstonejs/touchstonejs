var React = require('react/addons');
var _ = require('underscore');

/**
 * Touchstone Navigation Mixin
 * ===========================
 */



module.exports = {

	displayName: 'Animation',
	
	getViewTransition: function (key) {
		if (!_.contains(this._TRANSITION_KEYS, key)) {
			console.log('Invalid View Transition: ' + key);
			key = 'none';
		}
		var transition = {
			key: key,
			name: 'view-transition-' + key,
			in: false,
			out: false
		};
		if (_.contains(['reveal-from-top', 'reveal-from-bottom'], key)) {
			transition.out = true;
		} else if (_.contains(['show-from-left', 'show-from-right', 'reveal-from-left', 'reveal-from-right'], key)) {
			transition.in = true;
			transition.out = true;
		} else if (_.contains(['fade', 'fade-contract', 'fade-expand', 'show-from-top', 'show-from-bottom'], key)) {
			transition.in = true;
			transition.out = true;
		}
		return transition;
	},
	_DEFAULT_TRANSITION: 'none',
	_TRANSITION_KEYS: [
		'none',
		'fade',
		'fade-contract',
		'fade-expand',
		'show-from-left',
		'show-from-right',
		'show-from-top',
		'show-from-bottom',
		'reveal-from-left',
		'reveal-from-right',
		'reveal-from-top',
		'reveal-from-bottom'
	]
};
