import React from 'react';

const Header = props => {
	return (
		<section className="">
			<div className="">
			  <header className="">
			    <h1 className=""><i className="fa fa-newspaper-o" aria-hidden="true"></i>{props.title}</h1>
			  </header>
			</div>
		</section>
	)
}

export default Header;
