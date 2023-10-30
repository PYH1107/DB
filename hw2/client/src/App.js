import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [project_id, setproject_id] = useState("");
  const [work_type, setwork_type] = useState(0);
  const [description, setdescription] = useState("");
  const [attachment, setattachment] = useState("");
  //const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [projectList, setprojectList] = useState([]);

  const addproject = () => {
    Axios.post("http://localhost:3001/create", {
      project_id: project_id,
      work_type: work_type,
      description: description,
      attachment: attachment,
    }).then(() => {
      setprojectList([
        ...projectList,
        {
          project_id: project_id,
          work_type: work_type,
          description: description,
          attachment: attachment,
        },
      ]);
    });
  };

  const getprojects = () => {
    Axios.get("http://localhost:3001/projects").then((response) => {
      setprojectList(response.data);
    });
  };

  const updateprojectdetail = (id) => {
    Axios.put("http://localhost:3001/update", { description: description, id: id }).then(
      (response) => {
        setprojectList(
          projectList.map((val) => {
            return val.id == id
              ? {
                  project_id: project_id,
                  work_type: work_type,
                  description: description,
                  attachment: attachment,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteproject = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setprojectList(
        projectList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Project ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setproject_id(event.target.value);
          }}
        />
        <label>Work Type:</label>
        <input
          type="text"
          onChange={(event) => {
            setwork_type(event.target.value);
          }}
        />
        <label>Description:</label>
        <input
          type="text"
          onChange={(event) => {
            setdescription(event.target.value);
          }}
        />
        <label>Attachment:</label>
        <input
          type="text"
          onChange={(event) => {
            setattachment(event.target.value);
          }}
        />
        
        <button onClick={addproject}>Add Project</button>
      </div>
      <div className="project">
        <button onClick={getprojects}>Show Project</button>

        {projectList.map((val, key) => {
          return (
            <div className="project">
              <div>
                <h3>Project ID: {val.project_id}</h3>
                <h3>Work Type: {val.work_type}</h3>
                <h3>Description: {val.description}</h3>
                <h3>Attachment: {val.attachment}</h3>
               // <h3>Wage: {val.wage}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateprojectdetail(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteproject(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
