import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Row, Col } from 'reactstrap';
import { Card, CardBody,Button } from 'reactstrap';

import trash from "../images/trash.svg";

const GET_CLINICAL_TRIAL = gql`
	query getClinicalTrial($nctId: String) {
		getClinicalTrial(nctId: $nctId) {
			nctId
			biologicalSex
			genderBased
			startDate
			completionDate
			estimatedCompensation
			recruitingStatus
			healthyVolunteers
			conditions
			ageMin
			ageMax
			phase
			locations {
				name
			}
		}
	}
`;

// 	const GET_CLINICAL_TRIAL = gql`
// 	{ getClinicalTrial(nctId: "NCT04542304") {
// 			nctId
// 			biologicalSex
// 			genderBased
// 			startDate
// 			completionDate
// 			estimatedCompensation
// 			recruitingStatus
// 			healthyVolunteers
// 			conditions
// 			ageMin
// 			ageMax
// 			phase
// 			locations {
// 				name
// 			}
// 		}
// 	}
// `;


const ClinicCard = ({ onViewStudy, studyName, nctId }) => {
	// console.log(nctId)	
	const { loading, error, data } = useQuery(GET_CLINICAL_TRIAL, {
		variables: { nctId: "NCT04542304" },
	  });

	// let { loading, error, data } = useQuery(GET_CLINICAL_TRIAL);
		
    
    if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;
	
	return(
		  <Card className="mt-2 new-study-card">
		    <CardBody>
				 <Row>
				    <Col className="my-auto">{studyName}</Col>
					{/* <Col className="recruiting-status my-auto">{data.getClinicalTrial.recruitingStatus}</Col> */}
				    <Col className="recruiting-status my-auto">Recruiting</Col>
					<Col className="my-auto">May 05, 7:23PM PST</Col>

				    <Col className="my-auto">
				    	<span className="estimated-compensation-1">$500</span><br/>
				    	<span className="average-user-receive">average user receives $509.33</span>
				    </Col>
				    <Col className="my-auto">
				    	<Button className="view-study" onClick={onViewStudy}>View Study</Button>
				    	<Button className="rounded-circle ml-2 trash" ><img src={trash} alt="Logo" /></Button>
				    </Col>
				 </Row>
		    </CardBody>
		  </Card>
	);
}

export default ClinicCard;