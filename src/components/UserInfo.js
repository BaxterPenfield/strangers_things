import React from 'react'
import { getUserInfo } from '../api';

function UserInfo() {
  return (
    <button onClick={async (e) => {
        e.preventDefault();
        getUserInfo().then(results => {
            console.log(results);
        })

    }}>My information</button>
  )
}

export default UserInfo