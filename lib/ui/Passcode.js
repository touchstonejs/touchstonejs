var React = require('react/addons'),
	UI = require('touchstonejs').UI;

module.exports = React.createClass({
	propTypes: {
		action: React.PropTypes.func,
		cancel: React.PropTypes.func,
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
			keyboardIsStowed: true,
			passcode: '',
			processing: this.props.processing
		}
	},

	componentDidMount: function() {
		// slide the keyboard up after the view is shown
		setTimeout(function() {
			this.setState({
				keyboardIsStowed: false
			});
		}.bind(this), 10);
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
			return this.props.action(passcode)
		}.bind(this), 200); // the transition that stows the keyboard takes 150ms, it freezes if interrupted by the ReactCSSTransitionGroup

		return this.setState({
			passcode: passcode,
			processing: true
		})
	},
	
	render: function() {
		return (
			<UI.FlexLayout className={this.props.viewClassName + ' passcode-fields'}>
				<UI.FlexBlock height={this.state.processing ? "100%" : "33%"}>
					<UI.Headerbar type="transparent">
						<UI.HeaderbarButton visible={!this.state.processing} onTap={this.props.cancel}>Cancel</UI.HeaderbarButton>
					</UI.Headerbar>
				</UI.FlexBlock>
				<UI.FlexBlock className={this.state.processing ? 'hidden' : ''}>
					<div className="Passcode">
						<input type="hidden" name="pinEntry" />
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
				</UI.FlexBlock>
				<UI.Keypad style="white-translucent" action={this.handlePasscode} enableDel={Boolean(this.state.passcode.length)} stowed={this.state.processing || this.state.keyboardIsStowed} />
			</UI.FlexLayout>
		);
	}
});

