var blacklist = require('blacklist');
var classnames = require('classnames');
var React = require('react');
var Tappable = require('react-tappable');

export var Navigator = React.createClass({
	render () {
		return (
			<div className="Tabs-Navigator">
				{React.Children.map(this.props.children, (tab) => {
					return React.cloneElement(tab, {
						onSelect: this.props.onChange,
						navigatorValue: this.props.value
					});
				})}
			</div>
		);
	}
});

export var Tab = React.createClass({
	contextTypes: {
		tabNavigator: React.PropTypes.object
	},
	onSelect () {
		var tab = blacklist(this.props, 'children');
		this.props.onSelect(tab);
	},
	render () {
		var isCurrent = this.props.navigatorValue === this.props.value;
		var className = classnames('Tabs-Tab', {
			'is-selected': isCurrent
		});
		return (
			<Tappable onTap={this.props.onSelect && this.onSelect} className={className}>
				{this.props.children}
			</Tappable>
		);
	}
});

export var Label = React.createClass({
	render () {
		return (
			<div className="Tabs-Label">
				{this.props.children}
			</div>
		);
	}
});
