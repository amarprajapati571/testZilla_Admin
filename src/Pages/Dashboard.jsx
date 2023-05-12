import React from 'react'
import TotalUserWidgets from '../Widgets/TotalUserWidgets'
import UsersWidgets from '../Widgets/UsersWidgets'
import HardwareWidgets from '../Widgets/HardwareWidgets'
import Sidebar from '../Modules/Sidebar'
import TopNav from '../Modules/TopNav'
export default function Dashboard() {
  return (
    <>
    <div className="layout-wrapper layout-2">
        <div className="layout-inner">
          <Sidebar/>
          <div className="layout-container">
          <TopNav/>
        <div className="layout-content">
            <div className="container-fluid flex-grow-1 container-p-y">
            <TotalUserWidgets/>
            <UsersWidgets />
            <HardwareWidgets/>
            </div>
        </div>
        </div>
        </div>
        </div>

    </>
  )
}
