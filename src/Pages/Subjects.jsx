import React from 'react'
import Sidebar from "../Modules/Sidebar";
import TopNav from "../Modules/TopNav";
export default function Subjects() {
  return (
    <>
     <div className="layout-wrapper layout-2">
          <div className="layout-inner">
            <Sidebar />
            <div className="layout-container">
              <TopNav />
           <div className="layout-content">
                <div className="container-fluid flex-grow-1 container-p-y">
                <div class="layout-content">
                <div class="container-fluid flex-grow-1 container-p-y">
                        <h4 class="font-weight-bold py-3 mb-0">Subjects Panel</h4>
                        <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#"><i class="feather icon-home"></i></a></li>
                                <li class="breadcrumb-item" >Subject</li>
                               
                            </ol>
                        </div>
                        <div className="float-right  m-2">
                            {" "}
                            <button type="button" className="btn btn-outline-success">
                            Add Subject
                            </button>
                        </div>
                        <table className="table">
                            <thead className='thead-dark'>
                                <tr>
                                    <th>S.no</th>
                                    <th>Name of Subject</th>
                                    <th>Name of Exam</th>
                                    <th>Created Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Fundamental of Computer</td>
                                    <td>Informatic Assistant</td>
                                    <td>1/2/2023</td>
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
            </div>
            </div>
    </>
  )
}
