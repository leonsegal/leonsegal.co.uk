import React from 'react';

function PageFooter(props) {
	const pages = props.pages.map(page =>
		<p className="col-3">{page.pageTitle} {page.pageNumber}</p>
	);

	return (
		<div className="row">
			{pages}
		</div>
	);
}

export default PageFooter;
