import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: this.props.term
		}
	}

	handleChange(e) {
		const term = e.target.value
		this.props.updateSearch(term)
	}

	render() {
		return(
			<section>
	  			<input 
	  				type="text" 
	  				className="form-control" 
	  				placeholder={this.props.placeHolder}
	  				onChange={this.handleChange.bind(this)}/>
	  				<p>Displaying {this.props.articleCount} results</p>
			</section>
		)
	}
}

export default Search