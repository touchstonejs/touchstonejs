var Keypad = require('./Keypad');
var React = require('react/addons');
var ViewContent = require('./ViewContent');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Passcode',
	propTypes: {
		action: React.PropTypes.func,
		className: React.PropTypes.string,
		keyboardIsStowed: React.PropTypes.bool,
		type: React.PropTypes.string,
		helpText: React.PropTypes.string
	},

	getDefaultProps: function () {
		return {
			className: '',
			helpText: 'Enter your passcode',
			type: 'default'
		};
	},

	getInitialState: function () {
		return {
			helpText: this.props.helpText,
			keyboardIsStowed: true,
			passcode: ''
		};
	},

	componentDidMount: function () {
		var self = this;

		// slide the keyboard up after the view is shown
		setTimeout(function () {
			if (!this.isMounted()) return;

			self.setState({ keyboardIsStowed: false });
		}, 400);
	},

	handlePasscode: function (keyCode) {
		var passcode = this.state.passcode;

		if (keyCode === 'delete') {
			passcode = passcode.slice(0, -1);

		} else {
			passcode = passcode.concat(keyCode);
		}

		if (passcode.length !== 4) {
			return this.setState({
				passcode: passcode
			});
		}

		var self = this;
		setTimeout(function () {
			self.props.action(passcode);
		}, 200); // the transition that stows the keyboard takes 150ms, it freezes if interrupted by the ReactCSSTransitionGroup

		this.setState({ passcode: passcode });
	},

	render: function () {
		var passcode = this.state.passcode
		var passcodeClassname = classnames('Passcode', this.props.type);
		var passcodeFields = [0, 1, 2, 3].map(function (i) {
			var passcodeFieldClassname = classnames('Passcode-input', {
				'has-value': passcode.length > i
			});

			return (<div className="Passcode-field">
				<div className={passcodeFieldClassname} />
			</div>);
		});

		return (
			<ViewContent grow>
				<div className={passcodeClassname}>
					<div className="Passcode-label">{this.props.helpText}</div>
					<div className="Passcode-fields">{passcodeFields}</div>
				</div>
				<Keypad type={this.props.type} action={this.handlePasscode} enableDel={Boolean(this.state.passcode.length)} stowed={this.state.keyboardIsStowed} />
			</ViewContent>
		);
	}
});

