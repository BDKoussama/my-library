import React from 'react'
import Sidenav from '../layout/Sidenav';
import Profile from '../profile/Profile';
import Main from '../layout/Main';
const Dashboard = () => {
  return (
    <div>
        <div className="flex">
            <Sidenav/>
            <Main/>
            <Profile/>
        </div>
    </div>
  )
}

export default Dashboard
