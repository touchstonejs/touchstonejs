module.exports = {

	// ALERT
	// Options: (message, [title], [buttonName])
	showAlertDialog: function(options, alertCallback) {
		if (typeof options === 'string') options = { message: options };
		if (options.message     && typeof options.message !== 'string')     throw new TypeError('options.message must be a string.');
		if (options.title       && typeof options.title !== 'string')       throw new TypeError('options.title must be a string.');
		if (options.buttonLabel && typeof options.buttonLabel !== 'string') throw new TypeError('options.buttonLabel must be a string.');
		if (typeof alertCallback !== 'function') alertCallback = function() {};
		setTimeout(function() {
			if (navigator.notification && navigator.notification.alert) {
				navigator.notification.alert(
					options.message || '',
					alertCallback,
					options.title || 'Alert',
					options.buttonLabel || 'OK'
				);
			} else {
				var msg = options.title ? options.title + '\n\n' : '';
					msg += options.message;
				alert(msg);
				setTimeout(alertCallback, 0);
			}
		}, 1);
	},

	// CONFIRM
	// Options: (message, [title], [buttonLabels])
	// Callback: invoke with index of button pressed (1, 2, or 3) or when the dialog is dismissed without a button press (0)
	showConfirmDialog: function(options, done) {
		function confirmCallback(buttonIndex) {
			return done(buttonIndex === 1)
		}
		setTimeout(function() {
			if (navigator.notification && navigator.notification.confirm) {
				navigator.notification.confirm(
					options.message || '',
					confirmCallback,
					options.title || 'Confirm',
					options.buttonLabels || ['OK', 'Cancel']
				);
			} else {
				var msg = options.title ? options.title + '\n\n' : '';
					msg += options.message;
				var result = confirm(msg) ? 1 : 0;
				setTimeout(confirmCallback.bind(undefined, result), 0);
			}
		}, 1);
	}

}
