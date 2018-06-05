import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Articles from './components/Articles';

const apiKey = 'be5cc745c3c94ed9b9e7274a87544151';

class App extends Component {
  constructor() {
    super();

    this.state = {
      term: 'JavaScript',
      results: []
    };
  }

  componentWillMount() {
    this.getArticles();
  }

  getArticles() {
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${this
      .state.term}`;
    axios.get(url)
      .then(response => {
        this.setState({results: response.data.response.docs})
        console.log(this.state.results, this.state.term)
      })
      .catch(error => {
        console.log(error);
    });
  }

  updateSearch(term) {
    this.setState({ term: term })
    this.getArticles();
  }

  render() {
    const { term, results } = this.state;
    return (
      <div className="container">
        <Header title="New York Times Search" />
        <Search 
          term={term} 
          placeHolder="Search" 
          updateSearch={this.updateSearch.bind(this)} 
          articleCount={results.length}/>
        <Articles articles={results} />
      </div>
    );
  }
}

export default App;
