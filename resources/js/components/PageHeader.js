import React from 'react';

function getCurrentPage(pages) {
	return pages.reduce((result, page) => {
		return result || page.currentPage === true
	})
}

function PageTagline(props) {
	return (
		<small className="col-2 text-center">
			{props.pageTagline}
		</small>
	);
}

function PageNumber(props) {
	return (
		<small className="col-2 text-center">
			p{props.pageNumber}
		</small>
	);
}

function PageCounter(props) {
	return (
		<small className="col-2 text-center">
			{props.pageNumber}
		</small>
	);
}

class DateTime extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			now: new Date(),
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<small className="col-6">
				{
					this.state.days[this.state.now.getDay()] + ' '
					+ this.state.now.getDay() + ' '
					+ this.state.months[this.state.now.getMonth()]} {this.state.date.toLocaleTimeString()
				}
			</small>
		);
	}
}

function PageHeader(props) {
	const currentPage = getCurrentPage(props.pages);

	return (
		<div className="row">
			<PageNumber pageNumber={currentPage.pageNumber}/>
			<PageTagline pageTagline={currentPage.pageTagline}/>
			<PageCounter pageNumber={currentPage.pageNumber}/>
			<DateTime/>
		</div>
	)
}

export default PageHeader;
