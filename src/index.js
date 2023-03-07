const express = require("express");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder");
const skillController = require("./controller/skill");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello :)");
});

// Wilders
app.get("/api/wilders", wilderController.findAll);
app.post("/api/wilder", wilderController.create);
app.delete("/api/wilder/:id", wilderController.delete);
app.put("/api/wilder/:id", wilderController.update);

// Skills
app.get("/api/skills", skillController.findAll);
app.post("/api/skill", skillController.create);
app.delete("/api/skill/:id", skillController.delete);
app.put("/api/skill/:id", skillController.update);

// RELATIONS
app.post("/api/addSkill", wilderController.addSkill);

// 404
app.get("*", function (req, res) {
  res.send("OMG FAIL ! ", 404);
});

const start = async () => {
  await dataSource.initialize();
  app.listen(3000, () => console.log("Server started on 3000"));
};

start();
