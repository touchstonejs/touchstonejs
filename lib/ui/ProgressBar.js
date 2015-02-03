var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'ProgressBar',
	propTypes: {
		onChange: React.PropTypes.func,
		progress: React.PropTypes.any,
		max: React.PropTypes.any
	},
	onChange:function(){
		if(this.props.onChange)
			this.props.onChange();
	},
	componentWillReceiveProps: function(newProps) {
		if(newProps != this.props)
  			this.onChange();
	},
	getDefaultProps: function() {
		return {
			progress: 0,
			max: 100
		};
	},
	render: function() {
		return (
			<div className="item-inner">
				<progress 
					value={this.props.progress} 
					max={this.props.max}
					onChange={this.onChange}>
					{this.props.progress}%
				</progress>
			</div>
		);
	}
});
