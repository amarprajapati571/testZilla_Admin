import React from "react";

export default function Login() {
  return (
    <>
      <div className="row">
        <div className="col-md-6 mx-auto border">
          <div className="authentication-wrapper authentication-1 px-4">
            <div className="authentication-inner py-5">
              <div className="d-flex justify-content-center align-items-center">
                <div className="ui-w-60">
                  <div className="w-100 position-relative"></div>
                </div>
              </div>
              <form className="my-5">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="text" className="form-control" />
                  <div className="clearfix"></div>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" />
                  <div className="clearfix"></div>
                </div>
                <div className="d-flex justify-content-between align-items-center m-0">
                  <button type="button" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
