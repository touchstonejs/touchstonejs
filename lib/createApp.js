var _ = require('underscore')
var React = require('react/addons')
var UI = require('./ui')

var DEFAULT_TRANSITION = 'none';
var TRANSITION_KEYS = [
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
];

/**
 * Touchstone App
 * ==============
 *
 * This function should be called with your app's config and views.
 *
 * It returns a Mixin which should be added to your App.
 */

function createApp(views) {
	return {

		getInitialState: function() {
			return {
				viewTransition: this.getViewTransition(DEFAULT_TRANSITION)
			};
		},

		componentWillMount: function() {
			this.views = {};
			_.each(views, function(view, key) {
				this.views[key] = React.createFactory(view);
			}, this);
		},

		childContextTypes: {
			currentView: React.PropTypes.string,
			app: React.PropTypes.object.isRequired
		},

		getChildContext: function() {
			return {
				currentView: this.state.currentView,
				app: this
			}
		},

		getView: function(key) {
			var view = views[key],
				props = _.extend({}, this.state[key + '_props']);

			if (!view) {
				return (
					<UI.FlexLayout className="view">
						<UI.FlexBlock>
							<UI.Feedback iconKey="ion-alert-circled" iconType="danger" text={'Sorry, the view <strong>"' + this.state.currentView + '"</strong> is not available.'} actionText="Okay, take me home" actionFn={this.gotoDefaultView} />
						</UI.FlexBlock>
					</UI.FlexLayout>
				);
			}

			if (this.getViewProps) {
				_.extend(props, this.getViewProps());
			}

			return React.createElement(view, _.extend(props, {
				key: key,
				app: this,
				viewClassName: this.state[key + '_class'] || 'view'
			}));

		},

		getCurrentView: function() {
			var viewsData = {};
			viewsData[this.state.currentView] = this.getView(this.state.currentView);
			var views = React.addons.createFragment(viewsData)
			return views;
		},

		getViewTransition: function(key) {
			if (!_.contains(TRANSITION_KEYS, key)) {
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

		showView: function(key, transition, props, state) {
			if (_.isObject(transition)) {
				props = transition;
				transition = DEFAULT_TRANSITION;
			}
			if (!_.isString(transition)) {
				transition = DEFAULT_TRANSITION;
			}

			transition = this.getViewTransition(transition);

			if (!props) props = {};
			console.log('Showing view |' + key + '| with transition |' + transition.key + '| and options ' + JSON.stringify(props));

			var previous = this.state.currentView;
			var newState = {
				currentView: key,
				previousView: previous,
				viewTransition: transition
			};
			newState[key + '_class'] = 'view';
			newState[key + '_props'] = props;
			if (state) {
				_.extend(newState, state);
			}
			this.setState(newState);
		},

		goto: function() {
			var args = arguments;
			return function() {
				this.showView.apply(this, args);
			}.bind(this);
		}

	}
}

module.exports = createApp;
