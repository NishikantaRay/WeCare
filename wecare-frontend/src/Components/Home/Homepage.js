import React from "react";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <div className="img-background">
        <div className="container">
          <br />
          <br />
          <h1 className="text-center  mb-4">
            We are at the heart of appropriate care
          </h1>
          <br />
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4 col-12">
              <div className="card card-home">
                <div className="card-body">
                  <div className="text-center mb-3">
                    <img
                      src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
                      className="img-size"
                      id="icon"
                      alt="User Icon"
                    />
                  </div>

                  <div className="form-group">
                    <Link
                      to="/coachlogin"
                      className="btn input-block-level form-control btn-dark"
                    >
                      Login as a Coach
                    </Link>
                  </div>
                  <br />
                  <div className="form-group">
                    <Link
                      to="/coachsignup"
                      className="btn input-block-level form-control btn-dark"
                    >
                      Join as a Coach
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card card-home">
                <div className="card-body">
                  <div className="text-center mb-3">
                    <img
                      src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
                      className="img-size"
                      id="icon"
                      alt="User Icon"
                    />
                  </div>

                  <div className="form-group">
                    <Link
                      to="/userlogin"
                      className="btn input-block-level form-control btn-dark"
                    >
                      Login as a user
                    </Link>
                  </div>
                  <br />
                  <div className="form-group">
                    <Link
                      to="/usersignup"
                      className="btn input-block-level form-control btn-dark"
                    >
                      Join as a user
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 "></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
