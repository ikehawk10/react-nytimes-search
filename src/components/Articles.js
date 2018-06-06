import React from 'react';

import Article from './Article';

const Articles = ({articles}) => {
	return (
	  <div> 
	    {articles.map(articles => {
	      return <Article article={articles} key={articles._id} />
	    })}
	  </div>
	);
}

export default Articles