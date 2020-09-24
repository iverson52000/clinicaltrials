import React from 'react';
import { Row, Col, Container} from 'reactstrap';
import { Card,Button, CardTitle, CardText } from 'reactstrap';
import './StudyPage.css';

const StudyPage = () => {
	return(
		<Container className="mt-3">
			<p>Back to studies</p>
			<Row>
				<Col md="7">
					<p>Observational</p>
					<p className="study-page-title">NCI COVID-19 in Cancer Patiencts, NCCAPS Study</p>
					<p className="mt-4 sponsered">Sponsored by National Caner Institue (NCI)</p>
					<div className="d-flex flex-wrap left-button-container">
						<Card className="left-card">
							<p className="m-auto">Malignant Solid Neoplasm</p>
					      </Card>
					    <Card className="left-card">
							<p className="m-auto">Malignant Solid Neoplasm</p>
					    </Card>
					    <Card className="left-card">
							<p className="m-auto">Malignant Solid Neoplasm</p>
					    </Card>
					</div>
					<p className="mt-5 study-page-title-2">About this study</p>
					<div className="d-flex flex-wrap left-button-container">
						<Card className="left-card">
							<p className="m-auto">Malignant Solid Neoplasm</p>
					      </Card>
					    <Card className="left-card">
							<p className="m-auto">Malignant Solid Neoplasm</p>
					    </Card>
					</div>
					<p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
						ullamco laboris nisi ut aliquip ex ea commodo consequat. Read more…</p>
					<h3 className="mt-5 study-page-title-2">Treatments available in this study</h3>
					<h4 className="mt-3 study-page-title-3">Biospecimun Collection</h4>
					<p>Procedure</p>
					<p>Undergo collection of blood samples</p>
					<h4 className="mt-5 study-page-title-3">Data Collection</h4>
					<p>Other</p>
					<p>Undergo collection of medical information and imgaging</p>
				</Col>
				<Col  className="mt-5">
					<Card body className="study-page-card">
			          <CardTitle className="recruting">Recruting</CardTitle>
			          <Button className="study-page-button">Contact now</Button>
			          <CardText className="mt-3">Estimate Compensation $399</CardText>
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