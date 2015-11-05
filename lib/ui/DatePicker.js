'use strict';

var React = require('react');
var Tappable = require('react-tappable');
var classnames = require('classnames');

var i18n = {
	// TODO: use real i18n strings.
	weekdaysMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	longMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	formatYearMonth: function formatYearMonth(year, month) {
		return year + ' - ' + (month + 1);
	}
};

function newState(props) {
	var date = props.date || new Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	var ns = {
		mode: 'day',
		year: year,
		month: month,
		day: date.getDate(),
		displayYear: year,
		displayMonth: month,
		displayYearRangeStart: Math.floor(year / 10) * 10
	};
	return ns;
}

module.exports = React.createClass({
	displayName: 'DatePicker',
	propTypes: {
		date: React.PropTypes.object,
		mode: React.PropTypes.oneOf(['day', 'month']),
		onChange: React.PropTypes.func
	},

	getDefaultProps: function getDefaultProps() {
		return {
			date: new Date()
		};
	},

	getInitialState: function getInitialState() {
		return newState(this.props);
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		this.setState(newState(nextProps));
	},

	selectDay: function selectDay(year, month, day) {
		this.setState({
			year: year,
			month: month,
			day: day
		});

		if (this.props.onChange) {
			this.props.onChange(new Date(year, month, day));
		}
	},

	selectMonth: function selectMonth(month) {
		this.setState({
			displayMonth: month,
			mode: 'day'
		});
	},

	selectYear: function selectYear(year) {
		this.setState({
			displayYear: year,
			displayYearRangeStart: Math.floor(year / 10) * 10,
			mode: 'month'
		});
	},

	handlerTopBarTitleClick: function handlerTopBarTitleClick() {
		if (this.state.mode === 'day') {
			this.setState({ mode: 'month' });
		} else {
			this.setState({ mode: 'day' });
		}
	},

	handleLeftArrowClick: function handleLeftArrowClick() {
		switch (this.state.mode) {
			case 'day':
				this.goPreviousMonth();
				break;

			case 'month':
				this.goPreviousYearRange();
				break;

			case 'year':
				this.goPreviousYearRange();
				break;
		}
	},

	handleRightArrowClick: function handleRightArrowClick() {
		switch (this.state.mode) {
			case 'day':
				this.goNextMonth();
				break;

			case 'month':
				this.goNextYearRange();
				break;

			case 'year':
				this.goNextYearRange();
				break;
		}
	},

	goPreviousMonth: function goPreviousMonth() {
		if (this.state.displayMonth === 0) {
			this.setState({
				displayMonth: 11,
				displayYear: this.state.displayYear - 1
			});
		} else {
			this.setState({
				displayMonth: this.state.displayMonth - 1
			});
		}
	},

	goNextMonth: function goNextMonth() {
		if (this.state.displayMonth === 11) {
			this.setState({
				displayMonth: 0,
				displayYear: this.state.displayYear + 1
			});
		} else {
			this.setState({
				displayMonth: this.state.displayMonth + 1
			});
		}
	},

	goPreviousYear: function goPreviousYear() {
		this.setState({
			displayYear: this.state.displayYear - 1
		});
	},

	goNextYear: function goNextYear() {
		this.setState({
			displayYear: this.state.displayYear + 1
		});
	},

	goPreviousYearRange: function goPreviousYearRange() {
		this.setState({
			displayYearRangeStart: this.state.displayYearRangeStart - 10
		});
	},

	goNextYearRange: function goNextYearRange() {
		this.setState({
			displayYearRangeStart: this.state.displayYearRangeStart + 10
		});
	},

	renderWeeknames: function renderWeeknames() {
		return i18n.weekdaysMin.map(function (name, i) {
			return React.createElement(
				'span',
				{ key: name + i, className: 'week-name' },
				name
			);
		});
	},

	renderDays: function renderDays() {
		var displayYear = this.state.displayYear;
		var displayMonth = this.state.displayMonth;
		var today = new Date();
		var lastDayInMonth = new Date(displayYear, displayMonth + 1, 0);
		var daysInMonth = lastDayInMonth.getDate();
		var daysInPreviousMonth = new Date(displayYear, displayMonth, 0).getDate();
		var startWeekDay = new Date(displayYear, displayMonth, 1).getDay();
		var days = [];
		var i, dm, dy;

		for (i = 0; i < startWeekDay; i++) {
			var d = daysInPreviousMonth - (startWeekDay - 1 - i);
			dm = displayMonth - 1;
			dy = displayYear;
			if (dm === -1) {
				dm = 11;
				dy -= 1;
			}
			days.push(React.createElement(
				Tappable,
				{ key: 'p' + i, onTap: this.selectDay.bind(this, dy, dm, d), className: 'day in-previous-month' },
				d
			));
		}

		var inThisMonth = displayYear === today.getFullYear() && displayMonth === today.getMonth();
		var inSelectedMonth = displayYear === this.state.year && displayMonth === this.state.month;
		for (i = 1; i <= daysInMonth; i++) {
			var cssClass = classnames({
				'day': true,
				'is-today': inThisMonth && i === today.getDate(),
				'is-current': inSelectedMonth && i === this.state.day
			});
			days.push(React.createElement(
				Tappable,
				{ key: i, onTap: this.selectDay.bind(this, displayYear, displayMonth, i), className: cssClass },
				i
			));
		}

		var c = startWeekDay + daysInMonth;
		for (i = 1; i <= 42 - c; i++) {
			dm = displayMonth + 1;
			dy = displayYear;
			if (dm === 12) {
				dm = 0;
				dy += 1;
			}
			days.push(React.createElement(
				Tappable,
				{ key: 'n' + i, onTap: this.selectDay.bind(this, dy, dm, i), className: 'day in-next-month' },
				i
			));
		}

		return days;
	},

	renderMonths: function renderMonths() {
		var _this = this;

		return i18n.months.map(function (name, m) {
			return React.createElement(
				Tappable,
				{ key: name + m, className: classnames('month-name', { 'is-current': m === _this.state.displayMonth }),
					onTap: _this.selectMonth.bind(_this, m) },
				name
			);
		});
	},

	renderYears: function renderYears() {
		var years = [];
		for (var i = this.state.displayYearRangeStart - 1; i < this.state.displayYearRangeStart + 11; i++) {
			years.push(React.createElement(
				Tappable,
				{ key: i, className: classnames('year', { 'is-current': i === this.state.displayYear }),
					onTap: this.selectYear.bind(this, i) },
				i
			));
		}

		return years;
	},

	render: function render() {
		var topBarTitle = '';
		switch (this.state.mode) {
			case 'day':
				topBarTitle = i18n.formatYearMonth(this.state.displayYear, this.state.displayMonth);
				break;
			case 'month':
				topBarTitle = this.state.displayYearRangeStart + ' - ' + (this.state.displayYearRangeStart + 9);
				break;
		}

		return React.createElement(
			'div',
			{ className: classnames('date-picker', 'mode-' + this.state.mode) },
			React.createElement(
				'div',
				{ className: 'top-bar' },
				React.createElement(Tappable, { className: 'left-arrow', onTap: this.handleLeftArrowClick }),
				React.createElement(Tappable, { className: 'right-arrow', onTap: this.handleRightArrowClick }),
				React.createElement(
					Tappable,
					{ className: 'top-bar-title', onTap: this.handlerTopBarTitleClick },
					topBarTitle
				)
			),
			this.state.mode === 'day' && [React.createElement(
				'div',
				{ key: 'weeknames', className: 'week-names-container' },
				this.renderWeeknames()
			), React.createElement(
				'div',
				{ key: 'days', className: 'days-container' },
				this.renderDays()
			)],
			this.state.mode === 'month' && [React.createElement(
				'div',
				{ key: 'years', className: 'years-container' },
				this.renderYears()
			), React.createElement(
				'div',
				{ key: 'months', className: 'month-names-container' },
				this.renderMonths()
			)]
		);
	}
});