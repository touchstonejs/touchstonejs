import blacklist from 'blacklist';
import classnames from 'classnames';
import DatePicker from './DatePicker';
import Popup from './Popup';
import React from 'react';

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
