import './App.css';
import { useState } from 'react'
import axios from "axios";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';



function App() {
  return (
    <main className = "column">
      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </main>
  );

  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>Fake Yelp</h1>
      <form>
      <fieldset>
         <label>
           <p>Keyword</p>
           <input keyword="keyword"/>
         </label>
         <label>
           <p>City</p>
           <input city="city"/>
         </label>
         <label>
           <p>Radius</p>
           <input radius="radius"/>
         </label>
         <label>
           <p>Limit</p>
           <input limit="limit"/>
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
        <p> </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
      </header>
    </div>
  );
}

export default App;
