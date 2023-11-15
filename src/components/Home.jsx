import { useContext } from "react";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const navigate = useNavigate();
  const { userData, setUpdateId, setUpdateTitle } = useContext(AppContext);

  const getTodoAPI = async () => {
    try {
      const data = await axios.get(
        `https://apex.oracle.com/pls/apex/jao_workspace/todo/todos/${userData?.account_id}`
      );
      return data.data.items;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const data = useQuery({
    queryKey: ["todos"],
    queryFn: getTodoAPI,
  });

  const toUpdate = (todoId, title) =>{
    setUpdateId(todoId);
    setUpdateTitle(title);
    navigate("/update")
  }

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row justify-content-center ">
        <div className="col-5">
          <div className="todo-container text-center ">
            <div className="task-container overflow-auto">
              <span>ID: {userData.account_id}</span>
              {data.data?.map((d) => {
                return (
                  <div className="row justify-content-center">
                    <div className="todo-task col-10" onClick={() => toUpdate(d.todo_id, d.title)}>{d.title}</div>
                    <div className="col-1 pt-3">
                      <i className="task-checkbox bi bi-clipboard2-check"></i>
                    </div>
                  </div>
                );
              })}
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
