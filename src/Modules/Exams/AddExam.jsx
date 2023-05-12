import React from "react";
import Sidebar from "../Sidebar";
import TopNav from "../TopNav";
export default function AddExam() {
  return (
    <>
      <div className="layout-wrapper layout-2">
        <div className="layout-inner">
          <Sidebar />
          <div className="layout-container">
            <TopNav />
            <div className="layout-content">
              <div className="container-fluid flex-grow-1 container-p-y">
                <h4 className="font-weight-bold py-3 mb-0">Exams Panel</h4>
                <div className="text-muted small mt-0 mb-4 d-block breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i className="feather icon-home"></i>
                      </a>
                    </li>
                    <li className="breadcrumb-item"> Exams </li>
                    <li className="breadcrumb-item active">Add Exams </li>
                  </ol>
                </div>
                <div className="col-md">
                  <div className="card mb-3">
                    <h4 className="card-header">Add Exam</h4>
                    <div className="card-body">
                      <form action="">
                        <div className="form-group">
                          <label className="form-label">Name of exam</label>
                          <input type="text" className="form-control" />
                          <small className="invalid-feedback">
                            A block of help text that breaks onto a new line and
                            may extend beyond one line.
                          </small>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Launch Date</label>
                          <input
                            type="datetime-local"
                            id="b-m-dtp-datetime"
                            class="form-control"
                            placeholder="DateTime"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Minus Marking</label>
                          <input
                            type="number"
                            id="b-m-dtp-datetime"
                            class="form-control"
                            placeholder="Minus marking"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Question Marks</label>
                          <input
                            type="number"
                            id="b-m-dtp-datetime"
                            class="form-control"
                            placeholder="Minus marking"
                          />
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-primary"
                        >
                          Save
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
