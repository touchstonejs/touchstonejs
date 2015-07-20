var blacklist = require('blacklist');
var classnames = require('classnames');

var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'Input',
	propTypes: {
		first: React.PropTypes.bool
	},

	getDefaultProps: function() {
		return {
			type: 'text'
		};
	},
	render: function() {
		var className = classnames('field-item list-item', {
			'is-first': this.props.first,
			'u-selectable': this.props.disabled
		}, this.props.className);

		var inputProps = blacklist(this.props, 'children', 'className', 'first');

		return (
			<div className={className}>
				<div className="item-inner">
					<label className="item-content">
						<input className="field" {...inputProps} ref="input" />
					</label>
					{this.props.children}
				</div>
			</div>
		);
	}
});
