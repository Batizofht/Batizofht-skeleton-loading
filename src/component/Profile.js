import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import KeletonProfile from '../KeletonProfile';
const Profile = ({themehere}) => {
    const [profile , SetProfile] = useState(null);

    useEffect(() =>{
     setTimeout( async() =>{
             const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await res.json();
            SetProfile(data);
     }, 5000)
    }, [])
  return (
    <div className='Profile'>
          <h1>Profile</h1>
        {profile && (<div>
           <h4>{profile.name}</h4>
           <p>{profile.username}</p> 
           <p>{profile.email}</p>
        </div>)}
        {!profile && [1,2].map((n) => <KeletonProfile key={n} theme={themehere}/>)}
    </div>
  )
}

export default Profile