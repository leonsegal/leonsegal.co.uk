import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from "./PageHeader";
import Banner from "./Banner";
import Content from "./Content";
import PageFooter from "./PageFooter";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			siteName: 'leonsegal.co.uk',
			pages: [
				{
					pageTitle: 'home',
					pageTagline: 'Welcome',
					pageNumber: 100,
					currentPage: true,
				},
				{
					pageTitle: 'about',
					pageTagline: 'About Leon',
					pageNumber: 200,
					currentPage: false,
				},
				{
					pageTitle: 'blog',
					pageTagline: 'Random musings',
					pageNumber: 300,
					currentPage: false,
				},
				{
					pageTitle: 'contact',
					pageTagline: 'Contact Leon',
					pageNumber: 400,
					currentPage: false,
				},
			]
		}
	}

	render() {
		return (
			<div className="container">
				<PageHeader pages={this.state.pages}/>
				<Banner siteName={this.state.siteName}/>
				<Content/>
				<PageFooter pages={this.state.pages}/>
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
