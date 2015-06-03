var xtend = require('xtend/mutable')
var transitions = require('../constants/transitions.json')

module.exports = {
	getCSSTransition: function (key) {
		key = key in transitions ? key : 'none'

		return xtend({
			key: key,
			name: 'view-transition-' + key,
			in: false,
			out: false
		}, transitions[key])
	}
}
