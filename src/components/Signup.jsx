import "../css/Signup.css";

export const Signup = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="logo-side col-md-6 text-white ">Logo side here</div>

        <div className="signup-form-side col-md-6 page-container">
          <div className="row">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email:..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password: ***"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
