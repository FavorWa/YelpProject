import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <div>
            <img src = {user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <JSONPretty data={user} />
        </div>

        )
    )
}

export default Profile
<<<<<<< Updated upstream



// import { useAuth0 } from '@auth0/auth0-react';


// const Profile = () => {
//     const { user, isAuthenticated } = useAuth0();
    
//     return (
//         isAuthenticated && (
//             <article className = 'column'>
//                 {user?.picture && <img src={user.picture} alt={user?.name} />}
//                 <h2>{user?.name}</h2>
//                 <u1>
//                     {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]
//                     } </li>)}
//                 </u1>
//             </article>
          
//         )
        
//     )

// }

// export default Profile
=======
>>>>>>> Stashed changes
