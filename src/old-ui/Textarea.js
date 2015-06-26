var blacklist = require('blacklist');
var classnames = require('classnames');

var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'Textarea',
	propTypes: {
		children: React.PropTypes.node,
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		first: React.PropTypes.bool,
		rows: React.PropTypes.number
	},

	getDefaultProps () {
		return {
			rows: 3
		};
	},

	render () {
		var className = classnames('field-item list-item', {
			'is-first': this.props.first,
			'u-selectable': this.props.disabled
		}, this.props.className);

		var inputProps = blacklist(this.props, 'children', 'className', 'first');

		return (
			<div className={className}>
				<div className="item-inner">
					<label className="item-content">
						<textarea className="field" {...inputProps} />
					</label>
					{this.props.children}
				</div>
			</div>
		);
	}
});
