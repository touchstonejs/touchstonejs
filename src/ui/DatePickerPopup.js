var blacklist = require('blacklist');
var React = require('react');
var Popup = require('./Popup');
var DatePicker = require('./DatePicker');
var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'DatePickerPopup',

	propTypes: {
		className: React.PropTypes.string,
		visible: React.PropTypes.bool
	},

	render () {
		var className = classnames('DatePicker', this.props.className);
		var props = blacklist(this.props, 'className', 'visible');
		return (
			<Popup className={className} visible={this.props.visible}>
				<DatePicker {...props}/>
			</Popup>
		);
	}
});
