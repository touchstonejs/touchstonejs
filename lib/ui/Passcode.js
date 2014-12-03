var React = require('react/addons');

module.exports = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		helpText: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			className: '',
			processing: false
		};
	},

	getInitialState: function() {
		return {
			helpText: this.props.helpText,
			passcode: '',
			processing: this.props.processing
		}
	},

	handlePasscode: function(keyCode) {
		if (this.state.processing) return

		var passcode = this.state.passcode

		if (keyCode === 'delete') {
			passcode = passcode.slice(0, -1)

		} else {
			passcode = passcode.concat(keyCode)
		}

		if (passcode.length !== 4) {
			return this.setState({
				passcode: passcode
			})
		}

		setTimeout(function() {
			alert('Your passcode is ' + passcode);
			this.showView('home', 'fade');
		}.bind(this), 200); // the transition that stows the keyboard takes 150ms, it freezes if interrupted by the ReactCSSTransitionGroup

		return this.setState({
			passcode: passcode,
			processing: true
		})
	},
	
	render: function() {

		var passcodeStyle = { paddingTop: 100 };

		return (
			<div className="Passcode" style={passcodeStyle}>
				<input type="hidden" name="pinEntry" />
				<div className="Passcode-label">{this.props.helpText}</div>
				<div className="Passcode-fields">
					<div className="Passcode-field">
						<div className={"Passcode-input " + ((this.state.passcode.length > 0) ? "has-value" : "")} />
					</div>
					<div className="Passcode-field">
						<div className={"Passcode-input " + ((this.state.passcode.length > 1) ? "has-value" : "")} />
					</div>
					<div className="Passcode-field">
						<div className={"Passcode-input " + ((this.state.passcode.length > 2) ? "has-value" : "")} />
					</div>
					<div className="Passcode-field">
						<div className={"Passcode-input " + ((this.state.passcode.length > 3) ? "has-value" : "")} />
					</div>
				</div>
			</div>
		);
	}
});

