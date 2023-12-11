const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "mshkey72516Mshkey",
  database: "final",
});

// 創建 choose_topic 選單
const topics = [
  ["sociology"], ["mathematics"], ["physics"], ["chemistry"],
  ["computer_science"], ["political_science"], ["law"], ["art"]
];

db.query(
  "CREATE TABLE IF NOT EXISTS choose_topic (topic_id INT AUTO_INCREMENT PRIMARY KEY, topic_name VARCHAR(255))",
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("choose_topic table created");
      // 插入選單項目
      db.query(
        "INSERT INTO choose_topic (topic_name) VALUES ?",
        [topics],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Choose_topic menu created");
          }
        }
      );
    }
  }
);

app.post("/create/idea", (req, res) => {
  const { user_id, idea_topic, idea_detail, like } = req.body;

  db.query(
    "INSERT INTO Idea (user_id, idea_topic, idea_detail, `like`) VALUES (?,?,?,?)",
    [user_id, idea_topic, idea_detail, like],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting idea");
      } else {
        res.status(201).send("Idea inserted");
      }
    }
  );
});

app.post("/create/demo", (req, res) => {
  const { user_id, demo_topic, demo_link } = req.body;

  db.query(
    "INSERT INTO Demo (user_id, demo_topic, demo_link) VALUES (?,?,?)",
    [user_id, demo_topic, demo_link],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting demo");
      } else {
        res.status(201).send("Demo inserted");
      }
    }
  );
});

app.post("/create/user", (req, res) => {
  const { user_id, name } = req.body;

  db.query(
    "INSERT INTO User (user_id, name) VALUES (?, ?)",
    [user_id, name],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting user");
      } else {
        res.status(201).send("User inserted");
      }
    }
  );
});

// 取得 choose_topic 選單
app.get("/topics", (req, res) => {
  db.query("SELECT * FROM choose_topic", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching topics");
    } else {
      res.status(200).send(result);
    }
  });
});

// 其他 CRUD 操作（更新、刪除）choose_topic 的 endpoint 可以依照需要自行添加

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
