import React from 'react';

function Title(props) {
	return (
		<div className="col-3">
			{props.siteName}
		</div>
	)
}

function PageNumber(props) {
	return <div className="col-4">{props.currentPageNumber}</div>
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

function Header(props) {
	return (
		<div className="row">
			<Title siteName={props.siteName}/>
			<PageNumber currentPageNumber={props.currentPageNumber}/>
			<DateTime/>
		</div>
	)
}

export default Header;
