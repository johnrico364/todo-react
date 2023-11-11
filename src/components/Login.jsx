import "../css/Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center login-container align-content-center">
          <div className="col-4 border align-content-center text-center login-form">
            <div className="login-title">Log in</div>
            <span className="text-danger">"Exception validation here"</span>
            <div className="row justify-content-center mt-3">
              <div className="col-8">
                <input
                  className="input-container w-100"
                  type="text"
                  placeholder="Email:"
                />
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-8">
                <input
                  className="input-container w-100"
                  type="password"
                  placeholder="Password:"
                />
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-8">
                <button className="login-btn w-100">Log in</button>
              </div>
            </div>
            <div className="row justify-content-center mt-2 mb-3">
              <div className="col-8 text-white text-end">
                <Link to={"/signup"} className=" text-white">
                  Create Account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
