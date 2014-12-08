module.exports = {

	showAlertDialog: function(options, callback) {
		setTimeout(function() {
			if (navigator.notification && navigator.notification.alert) {
				navigator.notification.alert(
					options.message,
					callback,
					options.title || 'Alert',
					options.buttonLabel || 'OK'
				);
			} else {
				var msg = options.title ? options.title + '\n\n' : '';
					msg += options.message;
				alert(msg);
				setTimeout(callback, 0);
			}
		}, 1);
	}

}