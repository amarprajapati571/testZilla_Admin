import React from "react";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";


export default function Sidebar() {
  return (
    <>
     
    
          <div
            id="layout-sidenav"
            className="layout-sidenav sidenav sidenav-vertical bg-white logo-dark"
          >
            <div className="app-brand demo">
              <span className="app-brand-logo demo">
                <img src={logo} alt="Brand Logo" className="img-fluid" />
              </span>
              <a
                href="index.html"
                className="app-brand-text demo sidenav-text font-weight-normal ml-2"
              >
                Empire
              </a>
              <a
                href="javascript:"
                className="layout-sidenav-toggle sidenav-link text-large ml-auto"
              >
                <i className="ion ion-md-menu align-middle"></i>
              </a>
            </div>
            <div className="sidenav-divider mt-0"></div>

            {/* // Links  */}
            <ul className="sidenav-inner py-1">
              {/* // Dashboards  */}

              <li className="sidenav-item open active">
              <NavLink to="/" className="sidenav-link">
                  <i className="sidenav-icon feather icon-activity"></i>
                  <div>Dashboard</div>
                </NavLink>
              </li>
              <li className="sidenav-item ">
              <NavLink to="/users" className="sidenav-link">
                  <i className="sidenav-icon  feather icon-users"></i>
                  <div>User</div>
                </NavLink>
              </li>
              <li className="sidenav-item ">
              <NavLink to="/exams" className="sidenav-link">
                  <i className="sidenav-icon  feather icon-file-text"></i>
                  <div>Exams</div>
                </NavLink>
              </li>
              <li className="sidenav-item">
              <NavLink to="/subjects" className="sidenav-link">
                  <i className="sidenav-icon  feather icon-check-square"></i>
                  <div>Subjects</div>
                </NavLink>
              </li>
              
                  <li className="sidenav-item">
                  <NavLink to="/daily-test" className="sidenav-link">
                      <i className="sidenav-icon  feather icon-compass"></i>
                      <div>Daily Test</div>
                 </NavLink>
                  </li>
                  <li className="sidenav-item">
                  <NavLink to="/mock-test" className="sidenav-link">
                      <i className="sidenav-icon  feather icon-trending-up"></i>

                      <div>Mock Test</div>
                    
                   </NavLink>
                  </li>
                  <li className="sidenav-item">
                  <NavLink to="/static-pages" className="sidenav-link">
                    
                      <i className="sidenav-icon  feather icon-clipboard"></i>

                      <div>Static Pages</div>
                    
                   </NavLink>
                  </li>
                  <li className="sidenav-item">
                  <NavLink to="/settings" className="sidenav-link">
                      <i className="sidenav-icon  feather icon-settings"></i>
                      <div>Settings</div>
                   </NavLink>
                  </li>
               
            </ul>
          </div> 

        <div className="layout-overlay layout-sidenav-toggle"></div>
     
    </>
  );
}
