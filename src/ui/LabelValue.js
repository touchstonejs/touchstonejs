import FieldControl from './FieldControl';
import Item from './Item';
import ItemInner from './ItemInner';
import React from 'react';
import classnames from 'classnames';

module.exports = React.createClass({
	displayName: 'LabelValue',

	propTypes: {
		alignTop: React.PropTypes.bool,
		className: React.PropTypes.string,
		label: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string
	},

	render () {
		return (
			<Item alignTop={this.props.alignTop} className={this.props.className} component="label">
				<ItemInner>
					<div className="FieldLabel">{this.props.label}</div>
					<FieldControl>
						<div className={classnames('field', this.props.value ? 'u-selectable' : 'field-placeholder')}>
							{this.props.value || this.props.placeholder}
						</div>
					</FieldControl>
				</ItemInner>
			</Item>
		);
	}
});
