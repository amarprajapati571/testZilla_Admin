import React from "react";

export default function TotalUserWidgets() {
  return (
    <>
      
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto pr-0">
                      <i className="lnr lnr-users text-success display-4"></i>
                    </div>
                    <div className="col text-right">
                      <h5 className="text-success mb-0">532.3</h5>
                      <p className="mb-0">Total Users</p>
                    </div>
                  </div>
                </div>
                <div id="week-chart-2" style={{ height: "70px" }}></div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto pr-0">
                      <i className="lnr lnr-booktext-danger display-4"></i>
                    </div>
                    <div className="col text-right">
                      <h5 className="text-danger mb-0">233</h5>
                      <p className="mb-0">Total Exams</p>
                    </div>
                  </div>
                </div>
                <div id="week-chart-3" style={{ height: "70px" }}></div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto pr-0">
                      <i className="lnr lnr-rocket text-warning display-4"></i>
                    </div>
                    <div className="col text-right">
                      <h5 className="text-warning mb-0">12K</h5>
                      <p className="mb-0">Total Vists</p>
                    </div>
                  </div>
                </div>
                <div id="week-chart-4" style={{ height: "70px" }}></div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto pr-0">
                      <i className="lnr lnr-graduation-hat text-primary display-4"></i>
                    </div>
                    <div className="col text-right">
                      <h5 className="text-primary mb-0">1908</h5>
                      <p className="mb-0">Total Test</p>
                    </div>
                  </div>
                </div>
                <div id="week-chart-1" style={{ height: "70px" }}></div>
              </div>
            </div>
          </div>
      
    </>
  );
}
