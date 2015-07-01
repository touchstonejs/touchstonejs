var blacklist = require('blacklist');
var classNames = require('classnames');
var ErrorView = require('./ErrorView');
var React = require('react/addons');
var Transition = React.addons.CSSTransitionGroup;

function createViewsFromChildren (children) {
	var views = {};
	React.Children.forEach(children, function (view) {
		views[view.props.name] = view;
	});
	return views;
}

var ViewContainer = React.createClass({
	statics: {
		shouldFillVerticalSpace: true
	},
	propTypes: {
		children: React.PropTypes.node
	},
	render () {
		var props = blacklist(this.props, 'children');
		return <div {...props}>{this.props.children}</div>;
	}
});

var ViewManager = React.createClass({
	statics: {
		shouldFillVerticalSpace: true
	},
	contextTypes: {
		app: React.PropTypes.object.isRequired
	},
	propTypes: {
		name: React.PropTypes.string,
		children: React.PropTypes.node,
		className: React.PropTypes.string,
		defaultView: React.PropTypes.string,
		onViewChange: React.PropTypes.func
	},
	getDefaultProps () {
		return {
			name: '__default'
		};
	},
	getInitialState () {
		return {
			views: createViewsFromChildren(this.props.children),
			currentView: this.props.defaultView,
			options: {}
		};
	},
	componentDidMount () {
		this.context.app.viewManagers[this.props.name] = this;
	},
	componentWillUnmount () {
		delete this.context.app.viewManagers[this.props.name];
	},
	componentWillReceiveProps (nextProps) {
		this.setState({
			views: createViewsFromChildren(this.props.children)
		});
		if (nextProps.name !== this.props.name) {
			this.context.app.viewManagers[nextProps.name] = this;
			delete this.context.app.viewManagers[this.props.name];
		}
		if (nextProps.currentView && nextProps.currentView !== this.state.currentView) {
			this.transitionTo(nextProps.currentView, { viewProps: nextProps.viewProps });
		}
	},
	transitionTo (viewKey, options) {
		if (typeof options === 'string') {
			options = { transition: options };
		}
		if (!options) options = {};
		this.activeTransitionOptions = options;
		this.context.app.viewManagerInTransition = this;
		this.props.onViewChange && this.props.onViewChange(viewKey);
		this.setState({
			currentView: viewKey,
			options: options
		}, () => {
			delete this.activeTransitionOptions;
			delete this.context.app.viewManagerInTransition;
		});
	},
	renderViewContainer () {
		var viewKey = this.state.currentView;
		if (!viewKey) {
			return (
				<ErrorView>
					<span className="ErrorView__heading">ViewManager: {this.props.name}</span>
					<span className="ErrorView__text">Error: There is no current View.</span>
				</ErrorView>
			);
		}
		var view = this.state.views[viewKey];
		if (!view || !view.props.component) {
			return (
				<ErrorView>
					<span className="ErrorView__heading">ViewManager: "{this.props.name}"</span>
					<span className="ErrorView__text">The View "{viewKey}" is invalid.</span>
				</ErrorView>
			);
		}
		var options = this.state.options || {};
		var viewClassName = classNames('View View--' + viewKey, view.props.className);
		var ViewComponent = view.props.component;
		var viewProps = blacklist(view.props, 'component', 'className');
		Object.assign(viewProps, options.viewProps);
		var viewElement = <ViewComponent {...viewProps} />;

		if (this.__lastRenderedView !== viewKey) {
			// console.log('initialising view ' + viewKey + ' with options', options);
			if (viewElement.type.navigationBar && viewElement.type.getNavigation) {
				var app = this.context.app;
				var transition = options.transition;
				if (app.viewManagerInTransition) {
					transition = app.viewManagerInTransition.activeTransitionOptions.transition;
				}
				setTimeout(() => {
					app.navigationBars[viewElement.type.navigationBar].updateWithTransition(viewElement.type.getNavigation(viewProps, app), transition);
				}, 0);
			}
			this.__lastRenderedView = viewKey;
		}

		return (
			<ViewContainer className={viewClassName} key={viewKey}>
				{viewElement}
			</ViewContainer>
		);
	},
	render () {
		var className = classNames('ViewManager', this.props.className);
		var viewContainer = this.renderViewContainer(this.state.currentView, { viewProps: this.state.currentViewProps });

		var transitionName = 'view-transition-instant';
		if (this.state.options.transition) {
			// console.log('applying view transition: ' + this.state.options.transition + ' to view ' + this.state.currentView);
			transitionName = 'view-transition-' + this.state.options.transition;
		}
		return (
			<Transition transitionName={transitionName} transitionEnter={true} transitionLeave={true} className={className} component="div">
				{viewContainer}
			</Transition>
		);
	}
});

export default ViewManager;
