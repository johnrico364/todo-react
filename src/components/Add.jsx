import { useContext, useState } from "react";
import "../css/Add.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export const Add = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);

  const [title, setTitle] = useState("");

  const [response, setResponse] = useState("");

  const adddTodoAPI = () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddtodo = () => {
    const todo = {
      title: title,
      createdBy: userData.account_id,
    };
  };

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row justify-content-center ">
        <div className="col-5 text-white ">
          <div className="add-container text-center ">
            <div className="add-task-container overflow-auto">
              <p>ID: {userData.account_id}</p>
              <div className="row justify-content-center ">
                <div className="col-7 mt-4 ">
                  <input
                    className="add-input w-100"
                    type="text"
                    placeholder="Add:"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="col-7 mt-4">
                  <button className="btn-add w-100">Add</button>
                </div>
              </div>
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
