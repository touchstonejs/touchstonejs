var React = require('react');
var Router = require('react-router');

var App = React.createClass({
	render () {
		return (
			<div className="app">
				<div className="page-wrapper">
					<Router.RouteHandler/>
				</div>
				<div className="page-footer">
					<div className="ts-container container">
						<p>Created by <a href="http://www.thinkmill.com.au" target="_blank">Thinkmill</a>, and other contributors under the MIT License.</p>
						<a className="github-button" href="https://github.com/touchstonejs/touchstonejs" data-icon="octicon-star" data-count-href="/touchstonejs/touchstonejs/stargazers" data-count-api="/repos/touchstonejs/touchstonejs#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star touchstonejs/touchstonejs on GitHub">Star</a>
					</div>
				</div>
			</div>
		);
	}
});

var basepath = (window.location.pathname.slice(0, 10) === '/elemental') ? '/elemental' : '';

var routes = (
	<Router.Route name="app" path={basepath + '/'} handler={App}>
		<Router.Route name="home" path={basepath + '/'} handler={require('./pages/Home')} />
		<Router.DefaultRoute handler={require('./pages/Home')} />
	</Router.Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.getElementById('site'));
});
