import React from 'react';
import moment from 'moment';

const Article = props => {
	let headline = props.article.headline.main
	let { snippet, pub_date, web_url } = props.article
	return (
		<div className="">
			<h3>{headline}</h3>
			<p>{snippet ? snippet : "No desciption available"}</p>
			<p><a href={web_url}>See Full Article Here</a></p>
			<small>Published on: {moment(pub_date).format("M/D/YYYY h:mm A") + " EDT"}</small>
		</div>
	)
}

export default Article;
