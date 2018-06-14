import React from 'react';
import moment from 'moment';

const Article = props => {
	let { title, url, abstract, published_date } = props.article;
	return (
		<div className="">
			<h3>{title}</h3>
			<p>{abstract ? abstract : "No desciption available"}</p>
			<p><a href={url}>See Full Article Here</a></p>
			<small>Published on: {published_date}</small>
		</div>
	)
}

export default Article;
