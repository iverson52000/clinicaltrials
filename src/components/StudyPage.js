import React from 'react';
import { Row, Col, Container} from 'reactstrap';
import { Card, CardBody,Button, CardTitle, CardText } from 'reactstrap';
import { CardGroup, CardDeck} from 'reactstrap';

const StudyPage = () => {
	return(
		<Container className="mt-3">
			<p>Back to studies</p>
				<Row>
					<Col md="7">
						<p>Observational</p>
						<h2>NCI COVID-19 in Cancer Patiencts, NCCAPS Study</h2>
						<p className="mt-4">Sponsored by National Caner Institue (NCI)</p>
						<CardDeck>
					      <Card>
					        <CardBody>
					          <CardTitle>Malignant Solid Neoplasm</CardTitle>
					        </CardBody>
					      </Card>
					      <Card>
					        <CardBody>
					          <CardTitle>Malignant Solid Neoplasm</CardTitle>
					        </CardBody>
					      </Card>
					      <Card>
					        <CardBody>
					          <CardTitle>Malignant Solid Neoplasm</CardTitle>
					        </CardBody>
					      </Card>

					    </CardDeck>
						<h3 className="mt-5">About this study</h3>
						<CardDeck>
					      <Card>
					        <CardBody>
					          <CardTitle>Malignant Solid Neoplasm</CardTitle>
					        </CardBody>
					      </Card>
					      <Card>
					        <CardBody>
					          <CardTitle>Malignant Solid Neoplasm</CardTitle>
					        </CardBody>
					      </Card>
					      <Card>
					        <CardBody>
					          <CardTitle>Malignant Solid Neoplasm</CardTitle>
					        </CardBody>
					      </Card>
					    </CardDeck>
						<p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
							ullamco laboris nisi ut aliquip ex ea commodo consequat. Read more…</p>
						<h3 className="mt-5">Treatments available in this study</h3>
						<h4 className="mt-5">Biospecimun Collection</h4>
						<p>Procedure</p>
						<p>Undergo collection of blood samples</p>
					</Col>
					<Col  className="mt-5">
						<Card body>
				          <CardTitle>Recruting</CardTitle>
				          <Button className="btn-info">Go somewhere</Button>
				          <CardText className="mt-3">Estimate Compensation</CardText>
				          <CardText>How we contact them</CardText>
				          <CardText className="mb-5">Once you click Contact Now, DoNotPay will reach out to the hosts of the study on your behalf. 
				          You should hear back from them by email in several business days.</CardText>
				        </Card>
					</Col>
				</Row>
		</Container>
	);
}

export default StudyPage;