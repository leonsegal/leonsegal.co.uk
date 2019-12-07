import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Banner from "./Banner";
import Heading from "./Heading";
import Content from "./Content";
import Footer from "./Footer";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			siteName: 'leonsegal.co.uk',
			currentPageNumber: 100,
			pages: [
				'home',
				'about',
				'blog',
				'contact',
			]
		}
	}

	render() {
		return (
			<div className="container">
				<Header siteName={this.state.siteName} currentPageNumber={this.state.currentPageNumber}/>
				<Banner siteName={this.state.siteName}/>
				<Heading/>
				<Content/>
				<Footer pages={this.state.pages} currentPageNumber={this.state.currentPageNumber}/>
			</div>
		);
	}
}

export default App;

if (document.getElementById('root')) {
	ReactDOM.render(<App/>,
		document.getElementById('root')
	);
}
