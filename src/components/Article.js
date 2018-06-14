import React from 'react';
import moment from 'moment-timezone';

const Article = props => {
	let { title, url, abstract, published_date } = props.article;
	let fujiTime = `${moment(published_date).tz("Pacific/Fiji").format("M/D/YYYY h:mm A")} FJT`
	return (
		<div className="article-result">
			<h3>{title}</h3>
			<p>{abstract ? abstract : "No desciption available"}</p>
			<p><a className="article-link" href={url}>See Full Article Here</a></p>
			<small>Published on: {fujiTime}</small>
		</div>
	)
}

export default Article;
