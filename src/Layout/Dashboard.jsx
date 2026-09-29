import React from 'react'
import { NavLink, Outlet } from 'react-router'
function Dashboard() {
  return (
    <div>
        <h2>Dahboard Layout</h2>
        <nav>
          <NavLink to="profile">Profile</NavLink>
          <NavLink to="setting">Setting</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}
export default Dashboard