var xtend = require('xtend/mutable');
var React = require('react/addons');
var UI = require('./ui');

var DEFAULT_TRANSITION = 'none';
var TRANSITIONS = require('./constants/transition-keys');

/**
 * Touchstone App
 * ==============
 *
 * This function should be called with your app's views.
 *
 * It returns a Mixin which should be added to your App.
 */
function createApp (views) {
	return {
		componentWillMount: function () {
			this.views = {};

			for (var viewName in views) {
				var view = views[viewName];
				this.views[viewName] = React.React.createFactory(view);
			}
		},

		childContextTypes: {
			currentView: React.PropTypes.string,
			app: React.PropTypes.object.isRequired
		},

		getChildContext: function () {
			return {
				currentView: this.state.currentView,
				app: this
			};
		},

		getCurrentView: function () {
			var viewsData = {};
			viewsData[this.state.currentView] = this.getView(this.state.currentView);
			var views = React.addons.createFragment(viewsData);
			return views;
		},

		getInitialState: function () {
			return {
				viewTransition: this.getViewTransition(DEFAULT_TRANSITION)
			};
		},

		getView: function (key) {
			var view = views[key];
			if (!view) return this.getViewNotFound();

			var givenProps = this.state[key + '_props'];
			var props = xtend({
				key: key,
				app: this,
				viewClassName: this.state[key + '_class'] || 'view'
			}, givenProps);

			if (this.getViewProps) {
				xtend(props, this.getViewProps());
			}

			return React.createElement(view, props);
		},

		getViewNotFound: function () {
			return (
				<UI.View className="view">
					<UI.ViewContent>
						<UI.Feedback
							iconKey="ion-alert-circled"
							iconType="danger"
							text={'Sorry, the view <strong>"' + this.state.currentView + '"</strong> is not available.'}
							actionText="Okay, take me home"
							actionFn={this.gotoDefaultView}
						/>
					</UI.ViewContent>
				</UI.View>
			);
		},

		getViewTransition: function (key) {
			if (!TRANSITIONS[key]) {
				console.log('Invalid View Transition: ' + key);
				key = 'none';
			}

			return xtend({
				key: key,
				name: 'view-transition-' + key,
				in: false,
				out: false
			}, TRANSITIONS[key]);
		},

		showView: function (key, transition, props, state) {
			if (typeof transition === 'object') {
				props = transition;
				transition = DEFAULT_TRANSITION;
			}

			if (typeof transition !== 'string') {
				transition = DEFAULT_TRANSITION;
			}

			console.log('Showing view |' + key + '| with transition |' + transition + '| and props ' + JSON.stringify(props));

			var newState = {
				currentView: key,
				previousView: this.state.currentView,
				viewTransition: this.getViewTransition(transition)
			};

			newState[key + '_class'] = 'view';
			newState[key + '_props'] = props || {};

			xtend(newState, state);

			this.setState(newState);
		}
	};
}

module.exports = createApp;
