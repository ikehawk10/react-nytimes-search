import React from 'react';

const Header = props => {
	return (
		<section className="row">
			<div className="col-md-12 col-sm-12">
			  <header className="main-title text-center">
			    <h1 className="h1 title"><i className="fa fa-newspaper-o" aria-hidden="true"></i>{props.title}</h1>
			  </header>
			</div>
		</section>
	)
}

export default Header;