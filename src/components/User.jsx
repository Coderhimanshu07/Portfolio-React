import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function UserDashboard({ myname , myrole }) {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="row justify-content-center w-100">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden" style={{ boxShadow: "0 8px 25px rgba(0,0,0,0.3)", transition: "transform 0.3s ease", }}>
            
            <div className="bg-dark text-white text-center py-4 px-3">
              <h2 className="fw-bold mb-1">Welcome back {myname}</h2>
              <p className="mb-0 fs-5">Hope you have a nice day </p>
            </div>

            <div className="card-body p-4 text-center">
              <h3 className="fw-bold mb-4 text-secondary">User Panel</h3>

              <div className="d-grid gap-3">
                <button className="btn btn-primary btn-lg rounded-pill fw-semibold shadow-sm" style={{ boxShadow: "0 6px 15px rgba(0,123,255,0.4)", transition: "0.3s", }} onMouseEnter={(e)=>{e.target.style.transform='scale(1.05)'}} onMouseLeave={(e)=>{e.target.style.transform='scale(1)'}}>
                  Edit All Courses
                </button>

                <button className="btn btn-success btn-lg rounded-pill fw-semibold shadow-sm" style={{ boxShadow: "0 6px 15px rgba(40,167,69,0.4)", transition: "0.3s", }} onMouseEnter={(e)=>{e.target.style.transform='scale(1.05)'}} onMouseLeave={(e)=>{e.target.style.transform='scale(1)'}}>
                  Edit Media
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;