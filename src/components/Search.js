import React, { Component } from 'react';

class Search extends Component {

	handleChange(e) {
		const term = e.target.value.toLowerCase();
		this.props.updateSearch(term)
	}

	render() {
		let { placeHolder} = this.props
		return(
			<section>
	  			<input
	  				type="text"
	  				className="search" 
	  				placeholder={placeHolder}
	  				onChange={this.handleChange.bind(this)}/>
			</section>
		)
	}
}

export default Search
