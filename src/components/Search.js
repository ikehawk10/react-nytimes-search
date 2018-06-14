import React, { Component } from 'react';

class Search extends Component {

	handleChange(e) {
		const term = e.target.value.toLowerCase();
		this.props.updateSearch(term)
	}

	render() {
		let {articleCount, placeHolder} = this.props
		return(
			<section>
	  			<input
	  				type="text"
	  				className="" 
	  				placeholder={placeHolder}
	  				onChange={this.handleChange.bind(this)}/>
	  				<p>Displaying {articleCount !== 1 ? `${articleCount} results` : `${articleCount} result`} </p>
			</section>
		)
	}
}

export default Search
