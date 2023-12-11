const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "mshkey72516Mshkey", //change
  database: "project", //table name
});

app.post("/create", (req, res) => {
  const project_id = req.body.project_id; //constant = column
  const work_type = req.body.work_type;
  const description = req.body.description;
  const attachment = req.body.attachment;


  db.query(
    "INSERT INTO detail (project_id, work_type, description, attachment) VALUES (?,?,?,?)",//
    [project_id, work_type, description, attachment],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/project", (req, res) => {
  db.query("SELECT * FROM project", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  //const wage = req.body.wage;
  db.query(
    "UPDATE project SET description = ? WHERE id = ?",
    [description, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM project WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});