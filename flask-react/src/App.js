import './App.css';
import React from 'react';
import LoginButton from './components/LoginButton';
import { useState } from 'react'
import axios from "axios";
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';



function App() {
  
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

  return (
    <div className="App">
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












// import './App.css';
// import React from 'react';
// import LoginButton from './components/LoginButton';
// import { useState } from 'react'
// import axios from "axios";
// import LogoutButton from './components/LogoutButton';
// import Profile from './components/Profile';



// function App() {
  
    
//   const [profileData, setProfileData] = useState(null)

  
//   function getData() {
//     axios({
//       method: "GET",
//       url:"/profile",
//     })
//     .then((response) => {
//       const res =response.data
//       setProfileData(({
//         profile_name: res.name,
//         about_me: res.about}))
//     }).catch((error) => {
//       if (error.response) {
//         console.log(error.response)
//         console.log(error.response.status)
//         console.log(error.response.headers)
//         }
//     })}
  
//   return (
//     <div className="App">
//       <>
//       <LoginButton />
//       <LogoutButton /> 
//       <Profile /> 
//      </>
//       <header className="App-header">
//       <h1>Findit</h1>
//       <form>
//       <fieldset>
//          <label>
//            <p>Keyword</p>
//            <input keyword="keyword"/>
//          </label>
//          <label>
//            <p>City</p>
//            <input city="city"/>
//          </label>
//          <label>
//            <p>Radius</p>
//            <input radius="radius"/>
//          </label>
//          <label>
//            <p>Limit</p>
//            <input limit="limit"/>
//          </label>
//        </fieldset>
//        <button type="submit">Submit</button>
//       </form>
//         <p> </p><button onClick={getData}>Click me</button>
//         {profileData && <div>
//               <p>Profile name: {profileData.profile_name}</p>
//               <p>About me: {profileData.about_me}</p>
//             </div>
//         }
//       </header>
//     </div>
//   );
// }

// export default App;
