// Requête SQL - JS
const typeorm = require("typeorm");

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [
    require("./entity/Wilder"),
    require("./entity/Skill"),
    require("./entity/Grade"),
  ],
  // log SQL logic
  //logging: ["query", "error"],
});

module.exports = {
  dataSource,
};
