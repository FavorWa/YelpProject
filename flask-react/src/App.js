
import './App.css';
import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useState } from 'react'
import axios from "axios";
import Profile from './components/Profile';



function App() {
  // Set up state variables to store the user's input and the response from the Yelp API
  const [location, setLocation] = useState('');
  const [term, setTerm] = useState('');
  const [response, setResponse] = useState(null);

  // Define a function to handle the user's input
  function handleInputChange(event) {
    // Update the state variables with the user's input
    if (event.target.name === 'location') {
      setLocation(event.target.value);
    } else if (event.target.name === 'term') {
      setTerm(event.target.value);
    }
  }

  // Define a function to handle the form submission
  function handleSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Use Axios to send the user's input to the backend
    axios.post('/', {
       
      "location": location,
        "term": term
      
      
    })
    .then(response => {
      // Update the state with the response from the backend
      setResponse(response.data);
      console.log(response.data)
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
  }


  // Render the form and the response from the Yelp API (if any)
  return(
    <div className='App'>
    <>
       <LoginButton />
       <LogoutButton />
       <Profile />
     </>
     <header className="App-header">
      <h1>Findit</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input type="text" name="location" value={location} onChange={handleInputChange} />
        </label>
        <label>
          Term:
          <input type="text" name="term" value={term} onChange={handleInputChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      {response &&
        <div>
          <h2>Results</h2>
          {/* Use the response from the Yelp API to render the results */}
          <ul>
            {response.businesses.map(business => (
              <li key={business.id}>{business.name}</li>
            ))}
          </ul>
        </div>
      }
      </header>
    </div>
    );
}

export default App;
