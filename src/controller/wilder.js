const { dataSource } = require("../utils");
const Wilder = require("../entity/Wilder");

module.exports = {
  // Create Wilder
  create: async (req, res) => {
    try {
      await dataSource.getRepository(Wilder).save(req.body);
      res.send("Created Wilder");
    } catch (error) {
      res.send("Error while creating the wilder");
    }
  },

  // Delete Wilder
  delete: async (req, res) => {
    try {
      await dataSource.getRepository(Wilder).delete(req.params);
      {
        res.send("Wilder is deleted");
      }
    } catch (error) {
      res.send("Wilder doesn't exist");
    }
  },

  // Get All Wilders
  findAll: async (req, res) => {
    try {
      dataSource.getRepository(Wilder).find();
      res.send(rows);
    } catch (error) {
      res.send("Cannot find wilders");
    }
  },

  // Modify Wilder
  update: async (req, res) => {
    try {
      dataSource.getRepository(Wilder).update(req.params, req.body);
    } catch (error) {
      res.send("Error while updating");
    }
  },
};
