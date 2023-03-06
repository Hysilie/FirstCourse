const express = require("express");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.get("/", (req, res) => {
  res.send("Hello :)");
});

app.get("/api/wilders", wilderController.findAll);
app.post("/api/wilder", wilderController.create);
app.delete("/api/wilder/:id", wilderController.delete);
app.put("/api/wilder/:id", wilderController.update);

const start = async () => {
  await dataSource.initialize();
  /*   await dataSource.getRepository(Wilder).save({ name: "Fourth Wilder" });
   */ app.listen(3000, () => console.log("Server started on 3000"));
};

start();
