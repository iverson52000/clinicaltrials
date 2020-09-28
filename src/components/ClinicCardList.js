import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ClinicCard from './ClinicCard';

import { gql, useQuery } from '@apollo/client';

const GET_CLINICAL_TRIALS = gql`
{
  getClinicalTrials(
    input: {
      placebo: false
      remoteOnly: false
      country: "United States"
      state: "California"
      healthy: false
      biologicalSex: ALL
      genderBased: false
      studyType: INTERVENTIONAL
      pregnant: NONE
      substance: DRUGS
      healthConditions: []
    }
  ) {
    nctId
    studyName
  }
}
`;

const ClinicCardList = ({ onViewStudy }) => {
	const { loading, error, data } = useQuery(GET_CLINICAL_TRIALS);
	
	if (loading) return 'Loading...';
  	if (error) return `Error! ${error.message}`;
  	// return {data.me.id}
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
		     		return <ClinicCard onViewStudy={onViewStudy} studyName={item.studyName} key = {i}/>})
				}
		</Container>
	);
}
		     // 
export default ClinicCardList;