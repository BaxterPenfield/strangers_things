import React from 'react'
import { getUserInfo } from '../api';

function UserInfo({token}) {
  return (
    <button onClick={async (e) => {
        e.preventDefault();
        getUserInfo(token).then(results => {
            console.log(results);
        })

    }}>My information</button>
  )
}

export default UserInfo