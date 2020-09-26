import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient} from 'apollo-boost';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.donotpay.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIxLTA5LTI0VDIwOjUyOjM2LjAxNzA4MTUxN1oiLCJpZCI6IjVmNmQwNjU1ZWZmYjFmNTM2ZTZkZDIzNiIsInBob25lIjoiIiwidXNlciI6eyJfaWQiOiI1ZjZkMDY1NWVmZmIxZjUzNmU2ZGQyMzYiLCJyb2xlcyI6W10sImVtYWlsQWRkcmVzcyI6Iml2ZXJzb241MjAwMEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRFd0ZoQXozenJhZG9ya1kxdU83c3d1YmxmelpGTE0uVDR3Q3RCVFBtUWxEQzNaUEV4MFlHVyIsImNyZWF0ZWRBdCI6IjIwMjAtMDktMjRUMjA6NDk6MjUuMzgxWiIsInVwZGF0ZWRBdCI6IjIwMjAtMDktMjRUMjA6NDk6MjUuMzgxWiIsImJsb2NrZWQiOmZhbHNlLCJwaG9uZU51bWJlciI6IiIsInNlY3JldCI6IkZGNzJZNUtHRFJGU1REMlMiLCJwdXNoTm90aWZpY2F0aW9uVG9rZW4iOiIiLCJwbGFpZFNldHVwIjpmYWxzZSwidGFncyI6bnVsbCwic3Vic2NyaXB0aW9uQWdyZWVtZW50Q29uZmlybWF0aW9uIjpmYWxzZSwic3Vic2NyaXB0aW9uQWdyZWVtZW50Q29uZmlybWF0aW9uRGF0ZSI6bnVsbCwieWVhcmx5Q29uZmlybWF0aW9uIjpudWxsLCJjYXJkRmlyc3QiOmZhbHNlLCJjYXJkV2FpdGxpc3RKb2luZWQiOmZhbHNlLCJzdHJpcGVDdXN0b21lcklkIjpudWxsLCJzcGxpdFN1YnNjcmlwdGlvblVzZXJuYW1lIjoiIiwiY3VycmVuY3kiOiIiLCJpc0Vucm9sbGVkSW5BdXRvUHJvdGVjdCI6ZmFsc2UsImRlZmF1bHRQYXltZW50U291cmNlIjpudWxsLCJjYXJyaWVyTmFtZSI6IiIsImZvbGxvd1VwVGV4dCI6IiIsImNhcmRWaXAiOmZhbHNlLCJjdGEiOiIiLCJzaWduYXR1cmVMaW5rIjoiIiwic3Vic2NyaXB0aW9uQ2FuY2VsYWJsZSI6ZmFsc2UsInN1YnNjcmlwdGlvblVuY2FuY2VsYWJsZVJlYXNvbiI6bnVsbCwic3Vic2NyaXB0aW9uQ2FuY2VsYWJsZUF0IjpudWxsLCJzdWJzY3JpcHRpb25DYW5jZWxlZEF0IjpudWxsLCJwYXltZW50RXhlbXB0IjpmYWxzZSwid1NldHRpbmdzIjpmYWxzZSwid1VSTCI6IiIsImlPU01lbnVGZWF0dXJlcyI6bnVsbH19.3ykg5Ief254z0JIvgF-hXRqJbJOFQX2zHZ-36QQlChk"
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
	  authorization: token ? `Bearer ${token}` : "",    
	}
  }
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// client.query({
// 	query: gql `
// 	  	{
// 		  me {
// 		    _id
// 		    userClinicalTrialQuery {
// 		      age
// 		    	genderBased
// 		      age
// 		      state
// 		      zipCode
// 		    }
// 		    clinicalTrialsConnection {
// 		      nodes {
// 		        _id
// 		        nctId
// 		        contacted
// 		        bookmarked
// 		        clinicalTrialData {
// 		          nctId
// 		          studyName
// 		        }
// 		      }
// 		    }
// 		  }
// 		}
// 	`
// }).then((resp) => console.log(resp))


ReactDOM.render(
	<React.StrictMode>
	  <ApolloProvider client = {client}>
	    <App />
	  </ApolloProvider>
	</React.StrictMode>,

	document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
