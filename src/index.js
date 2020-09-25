import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, gql } from 'apollo-boost';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.donotpay.com/'
});



const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

client.query({
	query: gql `
	  	{
		  me {
		    _id
		    userClinicalTrialQuery {
		      age
		    	genderBased
		      age
		      state
		      zipCode
		    }
		    clinicalTrialsConnection {
		      nodes {
		        _id
		        nctId
		        contacted
		        bookmarked
		        clinicalTrialData {
		          nctId
		          studyName
		        }
		      }
		    }
		  }
		}
	`
}).then((resp) => console.log(resp))


ReactDOM.render(
	<ApolloProvider client = {client}>
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>
	</ApolloProvider>,
	document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
