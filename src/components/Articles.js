import React from 'react';

import Article from './Article';

const Articles = ({articles}) => {
	if (!articles) {
		return <div>Loading...</div>
	}


	return (
	  <div className="articles-list"> 
	  	<p>Displaying {articles.length !== 1 ? `${articles.length} results` : `${articles.length} result`} </p>
	    {articles.map(articles => {
	      return <Article article={articles} key={articles.short_url} />
	    })}
	  </div>
	);
	
}

export default Articles