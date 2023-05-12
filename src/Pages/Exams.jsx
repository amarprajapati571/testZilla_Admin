import React from "react";
import Sidebar from '../Modules/Sidebar';
import TopNav from '../Modules/TopNav';
export default function Exams() {
  return (
    <>
    <div className="layout-wrapper layout-2">
        <div className="layout-inner">
          <Sidebar/>
          <div className="layout-container">
          <TopNav/>
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
              <li className="breadcrumb-item active">Exams </li>
            </ol>
          </div>
          <div className="float-right  m-2">
            {" "}
            <button type="button" className="btn btn-outline-success">
              Add Exam
            </button>
          </div>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Sno</th>
                <th>Exam Name</th>
                <th>Total Mocks</th>
                <th>Total Quiz</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Informatic Assistant</td>
                <td>22</td>
                <td>33</td>
                <td>
                  <i className="lnr lnr-pencil"></i>{" "}
                  <i className="lnr lnr-trash"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
