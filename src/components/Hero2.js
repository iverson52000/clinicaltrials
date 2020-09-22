import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const Hero2 = () => {
	return(
	  <div>
	  	<Jumbotron className="hero2">
		  	<Container>
		  	      <Row>
			        <Col md="7">
			        	<h1 className="Dont-miss-out-Be-t">Don’t miss out. Be the first to know.</h1>
				        <p className="These-slots-fill-up">These slots fill up fast. Get text notifications as soon as a new study opens near you by upgrading to a premium subscription.</p>
				        <p className="lead">
				          <Button className="Rectangle">Upgrade</Button>
				        </p>
			        </Col>
			        <Col>
				        <ul>
				        	<li>Get access to other premium features</li>
				        	<li>Can downgrade at anytime</li>
				        	<li>Instant notifications</li>
				        	<li>Studies that match your preferences</li>
				        	<li>Improve enrollment chances by 30%</li>
				        </ul>     	
			        </Col>
			      </Row>
		    </Container>
      	</Jumbotron>
	  </div>
	);
}

export default Hero2;