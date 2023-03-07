const { dataSource } = require("../utils");
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");

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

  addSkill: async (req, res) => {
    try {
      const wilderToUpdate = await dataSource
        .getRepository(Wilder)
        .findOneBy({ name: req.body.wilderName });
      console.log(wilderToUpdate);

      const skillToAdd = await dataSource
        .getRepository(Skill)
        .findOneBy({ name: req.body.skillName });
      wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
      await dataSource.getRepository(Wilder).save(wilderToUpdate);
      res.send("Skill added to wilder");
    } catch (err) {
      console.log(err);
      res.send("Error while adding skill to wilder");
    }
  },
};
