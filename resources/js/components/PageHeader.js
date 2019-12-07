import React from 'react';

function getCurrentPage(pages) {
	return pages.reduce((result, page) => {
		return result || page.currentPage === true
	})
}

function PageTagline(props) {
	return (
		<div className="col-2">
			{props.pageTagline}
		</div>
	);
}

function PageNumber(props) {
	return (
		<div className="col-2">
			p{props.pageNumber}
		</div>
	);
}

function PageCounter(props) {
	return (
		<div className="col-2">
			{props.pageNumber}
		</div>
	);
}

class DateTime extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
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
			<div className="col-3">
				{this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
			</div>
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
