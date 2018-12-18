import React, { Component } from 'react';

class Section extends Component {
	constructor() {
		super();

		this.state = {section: "home"}
	}

	handleChange = e => {
		this.setState({section: e.target.value}, () => {
			this.props.handleUpdate(this.state.section)
		})
		console.log(e.target.value)

	}

	render() {
		const sectionOptions = ["home", "opinion", "world","national", "politics", "upshot", "nyregion", "business", "technology", "science", "health", "sports", "arts", "books", "movies", "theater", "sundayreview", "fashion", "tmagazine", "food", "travel", "magazine", "realestate" , "automobiles", "obituaries", "insider"];

		return(
			<form className="selection">
		    <label>
		      Sections: 
		      <select className="select-input" value={this.state.section} onChange={this.handleChange}>
		      	{sectionOptions.map((section, i) => {
		      		return <option key={i} value={section}>{section}</option>
		      	})}
		      </select>
		    </label>
		  </form>
		)
	}
	
}



export default Section;