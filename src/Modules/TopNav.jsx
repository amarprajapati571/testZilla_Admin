import React from 'react'

export default function TopNav() {
  return (
   <>
      <nav
              className="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-dark container-p-x"
              id="layout-navbar"
            >
              {/* // Brand demo (see assets/css/demo/demo.css)  */}
              <a
                href="index.html"
                className="navbar-brand app-brand demo d-lg-none py-0 mr-4"
              >
                <span className="app-brand-logo demo">
                  <img
                    src="assets/img/logo-dark.png"
                    alt="Brand Logo"
                    className="img-fluid"
                  />
                </span>
                <span className="app-brand-text demo font-weight-normal ml-2">
                  Empire
                </span>
              </a>

              {/* // Sidenav toggle (see assets/css/demo/demo.css)  */}
              <div className="layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto">
                <a
                  className="nav-item nav-link px-0 mr-lg-4"
                  href="javascript:"
                >
                  <i className="ion ion-md-menu text-large align-middle"></i>
                </a>
              </div>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#layout-navbar-collapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="navbar-collapse collapse"
                id="layout-navbar-collapse"
              >
                {/* // Divider  */}
                <hr className="d-lg-none w-100 my-2" />

                <div className="navbar-nav align-items-lg-center">
                  {/* // Search  */}
                  <label className="nav-item navbar-text navbar-search-box p-0 active">
                    <i className="feather icon-search navbar-icon align-middle"></i>
                    <span className="navbar-search-input pl-2">
                      <input
                        type="text"
                        className="form-control navbar-text mx-2"
                        placeholder="Search..."
                      />
                    </span>
                  </label>
                </div>

                <div className="navbar-nav align-items-lg-center ml-auto">
                  <div className="demo-navbar-notifications nav-item dropdown mr-lg-3">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="#"
                      data-toggle="dropdown"
                    >
                      <i className="feather icon-bell navbar-icon align-middle"></i>
                      <span className="badge badge-danger badge-dot indicator"></span>
                      <span className="d-lg-none align-middle">
                        &nbsp; Notifications
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="bg-primary text-center text-white font-weight-bold p-3">
                        4 New Notifications
                      </div>
                      <div className="list-group list-group-flush">
                        <a
                          href="javascript:"
                          className="list-group-item list-group-item-action media d-flex align-items-center"
                        >
                          <div className="ui-icon ui-icon-sm feather icon-home bg-secondary border-0 text-white"></div>
                          <div className="media-body line-height-condenced ml-3">
                            <div className="text-dark">
                              Login from 192.168.1.1
                            </div>
                            <div className="text-light small mt-1">
                              Aliquam ex eros, imperdiet vulputate hendrerit et.
                            </div>
                            <div className="text-light small mt-1">12h ago</div>
                          </div>
                        </a>

                        <a
                          href="javascript:"
                          className="list-group-item list-group-item-action media d-flex align-items-center"
                        >
                          <div className="ui-icon ui-icon-sm feather icon-user-plus bg-primary border-0 text-white"></div>
                          <div className="media-body line-height-condenced ml-3">
                            <div className="text-dark">
                              You have
                              <strong>4</strong> new followers
                            </div>
                            <div className="text-light small mt-1">
                              Phasellus nunc nisl, posuere cursus pretium nec,
                              dictum vehicula tellus.
                            </div>
                          </div>
                        </a>

                        <a
                          href="javascript:"
                          className="list-group-item list-group-item-action media d-flex align-items-center"
                        >
                          <div className="ui-icon ui-icon-sm feather icon-power bg-danger border-0 text-white"></div>
                          <div className="media-body line-height-condenced ml-3">
                            <div className="text-dark">Server restarted</div>
                            <div className="text-light small mt-1">19h ago</div>
                          </div>
                        </a>

                        <a
                          href="javascript:"
                          className="list-group-item list-group-item-action media d-flex align-items-center"
                        >
                          <div className="ui-icon ui-icon-sm feather icon-alert-triangle bg-warning border-0 text-dark"></div>
                          <div className="media-body line-height-condenced ml-3">
                            <div className="text-dark">99% server load</div>
                            <div className="text-light small mt-1">
                              Etiam nec fringilla magna. Donec mi metus.
                            </div>
                            <div className="text-light small mt-1">20h ago</div>
                          </div>
                        </a>
                      </div>
                      <a
                        href="javascript:"
                        className="d-block text-center text-light small p-2 my-1"
                      >
                        Show all notifications
                      </a>
                    </div>
                  </div>

                  <div className="demo-navbar-messages nav-item dropdown mr-lg-3">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="#"
                      data-toggle="dropdown"
                    >
                      <i className="feather icon-mail navbar-icon align-middle"></i>
                      <span className="badge badge-success badge-dot indicator"></span>
                      <span className="d-lg-none align-middle">
                        &nbsp; Messages
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="bg-primary text-center text-white font-weight-bold p-3">
                        4 New Messages
                      </div>
                      <div className="list-group list-group-flush">
                        <a
                          href="javascript:"
                          className="list-group-item list-group-item-action media d-flex align-items-center"
                        >
                          <img
                            src="assets/img/avatars/6-small.png"
                            className="d-block ui-w-40 rounded-circle"
                            alt
                          />
                          <div className="media-body ml-3">
                            <div className="text-dark line-height-condenced">
                              Lorem ipsum dolor consectetuer elit.
                            </div>
                            <div className="text-light small mt-1">
                              Josephin Doe &nbsp;·&nbsp; 58m ago
                            </div>
                          </div>
                        </a>

                        <a
                          href="javascript:"
                          className="list-group-item list-group-item-action media d-flex align-items-center"
                        >
                          <img
                            src="assets/img/avatars/4-small.png"
                            className="d-block ui-w-40 rounded-circle"
                            alt
                          />
                          <div className="media-body ml-3">
                            <div className="text-dark line-height-condenced">
                              Lorem ipsum dolor sit amet, consectetuer.
                            </div>
                            <div className="text-light small mt-1">
                              Lary Doe &nbsp;·&nbsp; 1h ago
                            </div>
                          </div>
                        </a>

                        <a
                          href="javascript:"
                          className="list-group-item list-group-item-action media d-flex align-items-center"
                        >
                          <img
                            src="assets/img/avatars/5-small.png"
                            className="d-block ui-w-40 rounded-circle"
                            alt
                          />
                          <div className="media-body ml-3">
                            <div className="text-dark line-height-condenced">
                              Lorem ipsum dolor sit amet elit.
                            </div>
                            <div className="text-light small mt-1">
                              Alice &nbsp;·&nbsp; 2h ago
                            </div>
                          </div>
                        </a>

                        <a
                          href="javascript:"
                          className="list-group-item list-group-item-action media d-flex align-items-center"
                        >
                          <img
                            src="assets/img/avatars/11-small.png"
                            className="d-block ui-w-40 rounded-circle"
                            alt
                          />
                          <div className="media-body ml-3">
                            <div className="text-dark line-height-condenced">
                              Lorem ipsum dolor sit amet consectetuer amet elit
                              dolor sit.
                            </div>
                            <div className="text-light small mt-1">
                              Suzen &nbsp;·&nbsp; 5h ago
                            </div>
                          </div>
                        </a>
                      </div>

                      <a
                        href="javascript:"
                        className="d-block text-center text-light small p-2 my-1"
                      >
                        Show all messages
                      </a>
                    </div>
                  </div>

                  {/* // Divider  */}
                  <div className="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">
                    |
                  </div>
                  <div className="demo-navbar-user nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                    >
                      <span className="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                        <img
                          src="assets/img/avatars/1.png"
                          alt
                          className="d-block ui-w-30 rounded-circle"
                        />
                        <span className="px-1 mr-lg-2 ml-2 ml-lg-0">
                          Cindy Deitch
                        </span>
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a href="javascript:" className="dropdown-item">
                        <i className="feather icon-user text-muted"></i> &nbsp;
                        My profile
                      </a>
                      <a href="javascript:" className="dropdown-item">
                        <i className="feather icon-mail text-muted"></i> &nbsp;
                        Messages
                      </a>
                      <a href="javascript:" className="dropdown-item">
                        <i className="feather icon-settings text-muted"></i>{" "}
                        &nbsp; Account settings
                      </a>
                      <div className="dropdown-divider"></div>
                      <a href="javascript:" className="dropdown-item">
                        <i className="feather icon-power text-danger"></i>{" "}
                        &nbsp; Log Out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
   </>
  )
}
