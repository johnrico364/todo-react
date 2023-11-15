import { useNavigate } from "react-router-dom";
import "../css/Update.css";
import { useContext } from "react";
import { AppContext } from "../App";

export const Update = () => {
  const navigate = useNavigate();
  const {updateId, updateTitle} = useContext(AppContext);

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row justify-content-center ">
        <div className="col-5 text-white ">
          <div className="update-container text-center ">
            <div className="update-task-container overflow-auto border">
              <div className="row justify-content-center ">
                <div className="col-7 mt-4 ">
                  <input id="update-input" className="update-input w-100" type="text" placeholder="Update:"/>
                </div>
                <div className="col-7 mt-4 ">
                  <button className="btn-update-delete w-100">Update</button>
                </div>
                <div className="col-7 mt-4 ">
                  <button className="btn-update-delete w-100">Delete</button>
                </div>
              </div>
              {updateId} :{updateTitle}
            </div>
            <i
              onClick={() => navigate("/home")}
              className="btn-return bi bi-arrow-return-left"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
