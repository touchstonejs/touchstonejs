var React = require('react/addons'),
	classnames = require('classnames'),
	Keypad = require('./Keypad'),
	FlexBlock = require('./FlexBlock');

module.exports = React.createClass({
	displayName: 'Passcode',
	propTypes: {
		action: React.PropTypes.func,
		className: React.PropTypes.string,
		keyboardIsStowed: React.PropTypes.bool,
		type: React.PropTypes.string,
		helpText: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			className: '',
			helpText: 'Enter your passcode',
			type: 'default'
		};
	},

	getInitialState: function() {
		return {
			helpText: this.props.helpText,
			keyboardIsStowed: true,
			passcode: ''
		}
	},

	componentDidMount: function() {
		// slide the keyboard up after the view is shown
		setTimeout(function() {
			if (!this.isMounted()) return;
			this.setState({
				keyboardIsStowed: false
			});
		}.bind(this), 400);
	},

	handlePasscode: function(keyCode) {

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
			return this.props.action(passcode)
		}.bind(this), 200); // the transition that stows the keyboard takes 150ms, it freezes if interrupted by the ReactCSSTransitionGroup

		return this.setState({
			passcode: passcode
		})
	},
	
	render: function() {

		var passcodeClassName = classnames(this.props.type, {
			'Passcode': true
		});

		return (
			<FlexBlock grow>
				<div className={passcodeClassName}>
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
				<Keypad type={this.props.type} action={this.handlePasscode} enableDel={Boolean(this.state.passcode.length)} stowed={this.state.keyboardIsStowed} />
			</FlexBlock>
		);
	}
});

