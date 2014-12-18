module.exports = {

	// ALERT
	// Options: (message, [title], [buttonName])
	showAlertDialog: function(options, alertCallback) {
		if (typeof options === 'string') options = { message: options }
		options.buttonLabel = options.buttonLabel || 'OK'
		options.message = options.message || ''
		options.title = options.title || 'Confirm'
		alertCallback = alertCallback || function() {}

		if (typeof options.buttonLabel !== 'string') throw new TypeError('options.buttonLabel must be a string');
		if (typeof options.message !== 'string')     throw new TypeError('options.message must be a string');
		if (typeof options.title !== 'string')       throw new TypeError('options.title must be a string');
		if (typeof alertCallback !== 'function')     throw new TypeError('alertCallback must be a function')

		setTimeout(function() {
			if (navigator.notification && navigator.notification.alert) {
				navigator.notification.alert(options.message, alertCallback, options.title, options.buttonLabel);

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

		if (typeof options === 'string') options = { message: options }
		options.buttonLabel = options.buttonLabel || ['OK', 'Cancel']
		options.message = options.message || ''
		options.title = options.title || 'Confirm'

		if (!Array.isArray(options.buttonLabel)) throw new TypeError('options.buttonLabel must be a string.');
		if (typeof options.message !== 'string') throw new TypeError('options.message must be a string.');
		if (typeof options.title !== 'string')   throw new TypeError('options.title must be a string.');
		if (typeof done !== 'function')          throw new TypeError('done must be a function')

		setTimeout(function() {
			if (navigator.notification && navigator.notification.confirm) {
				navigator.notification.confirm(options.message, confirmCallback, options.title, options.buttonLabel)

			} else {
				var msg = options.title ? options.title + '\n\n' : '';
				msg += options.message;

				var result = confirm(msg) ? 1 : 0;
				setTimeout(confirmCallback.bind(undefined, result), 0);
			}
		}, 1);
	}

}
