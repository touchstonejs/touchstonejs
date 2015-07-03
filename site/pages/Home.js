var React = require('react');

var Home = React.createClass({
	render () {
		return (
			<div>
				<div className="intro-wrapper">
					<div className="ts-container container">
						<div className="intro">
							<div className="demo">
								<div className="demo-viewport">
									<iframe src="http://demo.touchstonejs.io" width="375" height="667" frameBorder="0" />
								</div>
							</div>
							<div className="intro-content">
								<img src="/images/touchstone-logo.svg" className="touchstone-logo" />
								<h1>TouchstoneJS</h1>
								<h4>React.js powered UI framework for<br/>developing beautiful hybrid mobile apps.</h4>
								<p>Docs, examples and getting started guide coming soon.<br />Get notified when we launch</p>
								<div className="subscribe-form">
									<form action="//touchstonejs.us1.list-manage.com/subscribe/post?u=92d124e53e280584bf5005518&id=e59f569ed3" method="post" noValidate>
										<div className="InputGroup">
											<div className="InputGroup_section InputGroup_section--grow">
												<input type="email" name="EMAIL" placeholder="Email address" className="FormInput" />
											</div>
											<div className="InputGroup_section">
												<button className="Button Button--default" type="submit">Notify me</button>
											</div>
										</div>
									</form>
								</div>
								<div className="social-links">
									<a href="http://demo.touchstonejs.io" className="visible-xs visible-sm" target="_blank">
										<img src="/images/iphone.svg" />
										<span className="social-link-text">View demo</span>
									</a>
									<br />
									<a href="https://twitter.com/touchstonejs" target="_blank">
										<img src="/images/twitter-logo.svg" />
										<span className="social-link-text">Follow @touchstonejs</span>
									</a>
									<br />
									<a href="https://github.com/touchstonejs/touchstonejs" target="_blank">
										<img src="/images/github-logo.svg" />
										<span className="social-link-text">Star on GitHub</span>
									</a>
								</div>
								<p className="current-version">Current version 0.4.0 &middot; Free and open source (MIT)</p>
							</div>

						</div>
					</div>
				</div>
				<div className="page-body">
					<div className="ts-container container">
						<div className="article">
							<h2>Touchstone is made with&hellip;</h2>
							<ul className="made-with">
								<li>
									<a href="http://facebook.github.io/react" target="_blank">
										<img src="/images/reactjs.png" alt="ReactJS" title="ReactJS" />
										<h5>ReactJS</h5>
										<p>A JavaScript library for building user interfaces</p>
									</a>
								</li>
								<li>
									<a href="https://cordova.apache.org/" target="_blank">
										<img src="/images/cordova.png" alt="Cordova" title="Cordova" />
										<h5>Cordova</h5>
										<p>Platform for building native mobile apps</p>
									</a>
								</li>
								<li>
									<a href="http://www.w3.org/html/" target="_blank">
										<img src="/images/html5.png" alt="HTML" title="HTML" />
										<h5>HTML5</h5>
										<p>The markup language of the internet</p>
									</a>
								</li>
								<li>
									<a href="http://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
										<img src="/images/css3.png" alt="CSS3" title="CSS3" />
										<h5>CSS3</h5>
										<p>The presentation language of the internet</p>
									</a>
								</li>
							</ul>
						</div>
						<div className="article">
							<div className="row"><div className="col-sm-10 col-md-offset-1">
								<h2 className="mt-0 text-center">Getting Started</h2>
								<pre className="code-example__pre">
									<code>
										{`
$ git clone https://github.com/touchstonejs/touchstonejs-starter.git
$ npm install
$ npm start
										`}
									</code>
								</pre>
								<p className="text-center text-sm text-dimmed mt-3">documentation and guide coming soon</p>
							</div></div>
						</div>

						<div className="article">
							<h2>Examples &amp; references</h2>
							<ul className="examples-references">
								<li>
									<img src="/images/ei8ht.png" alt="EI8HT Wallet" title="EI8HT Wallet" className="app-logo" />
									<h5>Ei8ht Bitcoin Wallet</h5>
									<p>The best way to safely send and receive Bitcoin</p>
									<div className="app-links">
										<a className="Button Button--hollow-primary Button--sm" href="https://itunes.apple.com/us/app/ei8ht/id975816422?mt=8" target="_blank">Download on the App Store</a>
									</div>
									<img src="/images/app-ei8ht.png" className="app-screenshot" />
								</li>
								<li>
									<img src="/images/react-europe.png" alt="ReactEurope" title="ReactEurope" className="app-logo" />
									<h5>React Europe</h5>
									<p>Open source conference / attendance app</p>
									<div className="app-links">
										<a className="Button Button--hollow-primary Button--sm" href="http://thinkmill.com.au/react-europe" target="_blank">Get the App, API, Assets and Source</a>
									</div>
									<img src="/images/app-react-europe.png" className="app-screenshot" />
								</li>
								<li>
									<img src="/images/touchstone-starter.png" alt="Touchstone Starter" title="Touchstone Starter" className="app-logo" />
									<h5>Touchstone Starter</h5>
									<p>A great place to start to know TouchstoneJS</p>
									<div className="app-links">
										<a className="Button Button--hollow-primary Button--sm" href="https://github.com/touchstonejs/touchstonejs-starter" target="_blank">Clone on GitHub</a>
									</div>
									<img src="/images/app-touchstone-starter.png" className="app-screenshot" />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Home;
