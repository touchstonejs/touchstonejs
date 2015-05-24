var classnames = require('classnames');

var React = require('react/addons');
var ViewContent = require('./ViewContent');

module.exports = React.createClass({
	displayName: 'Headerbar',

	propTypes: {
		className: React.PropTypes.string,
		height: React.PropTypes.string,
		label: React.PropTypes.string,
		fixed: React.PropTypes.bool,
		type: React.PropTypes.string
	},

	render: function() {
		var className = classnames('Headerbar', this.props.className, this.props.type, { 'fixed': this.props.fixed });

		var label;
		if (this.props.label !== undefined) {
			label = <div className="Headerbar-label">{this.props.label}</div>;
		}

		return (<ViewContent height={this.props.height} className={className}>
			{this.props.children}
			{label}
		</ViewContent>);
	}
})
