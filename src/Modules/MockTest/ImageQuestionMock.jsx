import React from 'react'
import Sidebar from '../Sidebar'
import TopNav from '../TopNav'

export default function ImageQuestionsMock() {
  return (
    <>
      <div className="layout-wrapper layout-2">
          <div className="layout-inner">
            <Sidebar />
            <div className="layout-container">
              <TopNav />
        <div className="layout-content">
        <div className="container-fluid flex-grow-1 container-p-y">
          <h4 className="font-weight-bold py-3 mb-0">Mock Test Panel</h4>
          <div className="text-muted small mt-0 mb-4 d-block breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">
                  <i className="feather icon-home"></i>
                </a>
              </li>
              <li className="breadcrumb-item"> Mock Test </li>
              <li className="breadcrumb-item active">Add Mock Test </li>
            </ol>
          </div>
          <div className="col-md">

<div className="card mb-3">
    <h4 className="card-header">Add Mock Test</h4>
    <div className="card-body">
            <form action="">
                               
                                
                                <div className="form-group">
                                    <label className="form-label">Name of Exam</label>
                                    <select className="selectpicker form-control col-md-5" data-style="btn-default">
                                    <option>Mustard</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Name of Test</label>
                                    <select className="selectpicker form-control col-md-5" data-style="btn-default">
                                    <option>Reasoning</option>
                                    <option>Ketchup</option>
                                    <option>Relish</option>
                                </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Correct Answer</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Description </label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Old Exam name and year </label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Upload Image</label>
                                    <input type="file" className="form-control"/>
                                </div>
        <a href="javascript:void(0)" className="btn btn-primary">Save</a>
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
  )
}

