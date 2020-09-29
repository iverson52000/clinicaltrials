import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ClinicCard from './ClinicCard';

import { gql, useQuery } from '@apollo/client';

const GET_CLINICAL_TRIALS = gql`
	query getClinicalTrials($placebo: Boolean, $remoteOnly: Boolean, $country: String) {
		getClinicalTrials(
			input: {
			placebo: $placebo
			remoteOnly: $remoteOnly
			country: $country
			}
		) {
			nctId
			studyName
		}
	}	
`;


const ClinicCardList = ({ onViewStudy, filters }) => {
	let { placebo, remoteOnly, country } = filters;
	let { loading, error, data } = useQuery(GET_CLINICAL_TRIALS, {
		variables: { 
			placebo: placebo, 
			remoteOnly: remoteOnly,
			country: country,
			}, 
		});
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
	
	  // console.log(data.getClinicalTrials.slice(0, 5))

	return(
		<Container className="px-0">
			 <Row>
		        <Col style={{marginLeft: '20px'}}>Study Name</Col>
		        <Col style={{marginLeft: '-5px'}}>Recruitment Status</Col>
		        <Col>Date/Time posted</Col>
		        <Col>Estimated Compensation</Col>
		        <Col></Col>
		     </Row>
		     	{data.getClinicalTrials.slice(0, 5).map((item, i) => {
					 return <ClinicCard 
					 			onViewStudy={onViewStudy} 
								studyName={item.studyName} 
								nctId={item.nctId}
								key = {i}/>})
				}
		</Container>
	);
}
		     // 
export default ClinicCardList;