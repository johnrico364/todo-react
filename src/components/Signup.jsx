import "../css/Signup.css";

export const Signup = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="logo-side col-md-6 text-white ">Logo side here</div>

        <div className="signup-form-side col-md-6 page-container">
          <div
            className="row border border-danger align-items-center "
            style={{ height: "100vh" }}
          >
            <div className="col-10">
              <div className="row mt-3">
                <div className="create-title">Create your account</div>
                <div className="col-12">
                  <input
                    type="text"
                    className="signup-container w-100"
                    placeholder="Email:..."
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <input
                    type="text"
                    className="signup-container w-100"
                    placeholder="Password: ***"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <div className="btn btn-primary">ssfsf</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
