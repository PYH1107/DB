const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

const CONNECTION_STRING =
  "mongodb+srv://maypan1107:<mshkey72516Mshkey>@cluster0.qk3cidq.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = "project";
let database;

app.listen(5038, () => {
  MongoClient.connect(CONNECTION_STRING, (error, client) => {
    database = client.db(DATABASE_NAME);
    console.log("Mongo DB Connected!");
  });
});

app.get("/hw3/server/GetNotes", (request, response) => {
  database.collection("project").find({}).toArray((error, result) => {
    response.send(result);
  });
});

app.post("/hw3/server/AddNotes", multer().none(), (request, response) => {
  database.collection("project").countDocuments({}, function (
    error,
    numOfDocs
  ) {
    database.collection("project").insertOne({
      user_id: (numOfDocs + 1).toString(),
      Progress: request.body.Progress,
      Workstyle: request.body.Workstyle,
      title: request.body.title,
    });
    response.json("Add Successfully!");
  });
});

app.delete("/hw3/server/DeleteNotes/:id", (request, response) => {
  database.collection("Ideashare").deleteOne(
    {
      user_id: request.params.id,
    },
    (error, result) => {
      if (result.deletedCount === 1) {
        response.json("Delete Successfully!");
      } else {
        response.status(404).json("User not found");
      }
    }
  );
});

app.patch("/hw3/server/UpdateNotes/:id", (request, response) => {
  database.collection("Ideashare").updateOne(
    {
      user_id: request.params.id,
    },
    {
      $set: {
        Progress: request.body.Progress,
        Workstyle: request.body.Workstyle,
        title: request.body.title,
      },
    },
    (error, result) => {
      if (result.modifiedCount === 1) {
        response.json("Update Successfully!");
      } else {
        response.status(404).json("User not found");
      }
    }
  );
});

// 启动服务器
app.listen(3000, () => {
  MongoClient.connect(CONNECTION_STRING, (error, client) => {
    database = client.db(DATABASE_NAME);
    console.log("Mongo DB Connected!");
  });
});