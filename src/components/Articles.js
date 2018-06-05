import React, { Component } from 'react';

import Article from './Article';

class Articles extends Component {

	render() {
		let articleList = <h1>Sorry, no articles were found...</h1>
	    if (this.props.articles) {
	      articleList = this.props.articles.map(articles => {
	        return <Article article={articles} key={articles._id} />
	      })
	    }
    return (
      <div> 
        {articleList}
      </div>
    );
	}
}

export default Articles