import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Hero1 = () => {
	return(
	  <div >
	  	<Jumbotron className="hero1">
		  	<div className="">
		        <h1 className="Find-the-best-clinic">Find the best clinical trials near you</h1>
		        <p>Connect people with compensated clinical trials</p>
		        <p className="lead">
		          <Button className="get-started-botton">Get Started now</Button>
		        </p>
		    </div>
      	</Jumbotron>
	  </div>
	);
}

export default Hero1;