import React from 'react';

function PageFooter(props) {
	const pages = props.pages.map(page =>
		<div>
			<small className="col-3">{page.pageTitle}</small>
			<small className="page-number">{page.pageNumber}</small>
		</div>
	);

	return (
		<div className="row">
			{pages}
		</div>
	);
}

export default PageFooter;
