import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Section from './components/Section';
import Articles from './components/Articles';

const apiKey = 'be5cc745c3c94ed9b9e7274a87544151';

class App extends Component {
  constructor() {
    super();

    this.state = {
      results: "",
      section: "home"
    };
    this.updateSection = this.updateSection.bind(this);
  }

  componentWillMount() {
    this.getArticles();
  }

  getArticles(term) {
    let url = `https://api.nytimes.com/svc/topstories/v2/${this.state.section}.json?api-key=${apiKey}`;

    if (term) {
      axios.get(url)
        .then(response => {
          let updatedResults = response.data.results.filter(article => {
            return article.title.toLowerCase().indexOf(term) !== -1
          })
         this.setState({results: updatedResults.slice(0,10)})
        })
        .catch(error => {
          console.log(error);
        });
    } else {
        axios.get(url)
          .then(response => {
            this.setState({results: response.data.results.slice(0,10)})
          })
          .catch(error => {
            console.log(error);
        });
    }

  }

    updateSection(section) {
      this.setState({section}, () => {
        this.getArticles();
      });
      
    }

  render() {
    const articleSearch = _.debounce((term) => {this.getArticles(term)}, 300)
    const { results } = this.state;
    return (
      <div className="container">
        <Search
          placeHolder="Search"
          updateSearch={articleSearch}
          articleCount={results.length}/>
        <Header title="New York Times Search" />
        <Section 
          section={this.state.section}
          handleUpdate={this.updateSection}/>
        <hr/>
        <Articles articles={results} />
      </div>
    );
  }
}

export default App;
