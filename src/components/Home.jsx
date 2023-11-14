import { useContext } from "react";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export const Home = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row justify-content-center ">
        <div className="col-5">
          <div className="todo-container text-center ">
            <div className="task-container overflow-auto">
              <p>ID: {userData.account_id}</p>
              <p>Hello</p>
            </div>
            <i
              onClick={() => navigate("/add")}
              className="btn-add-task bi bi-plus-circle-fill"
            ></i>
            <i
              onClick={() => navigate("/")}
              className="btn-logout bi bi-box-arrow-in-left"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
