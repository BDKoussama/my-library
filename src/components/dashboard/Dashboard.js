import React from 'react'
import Navbar from '../layout/Navbar';
import Sidenav from '../layout/Sidenav';
import Profile from '../profile/Profile';
import Main from '../layout/Main';
const Dashboard = () => {
  return (
    <div>
      <Navbar/>
        <div class="flex">
            <Sidenav/>
            <Main/>
            <Profile/>
        </div>
    </div>
  )
}

export default Dashboard
