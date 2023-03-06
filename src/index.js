const express = require("express");
// requête SQL en JS
const typeorm = require("typeorm");
const Wilder = require("./entity/Wilder");

const app = express();

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [require("./entity/Wilder")],
});

app.get("/", (req, res) => {
  res.send("Hello :)");
});

const start = async () => {
  await dataSource.initialize();
  await dataSource.getRepository(Wilder).save({ name: "Fourth Wilder" });
  app.listen(3000, () => console.log("Server started on 3000"));
};

start();
