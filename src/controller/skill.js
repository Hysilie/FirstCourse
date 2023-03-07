const { dataSource } = require("../utils");
const Skill = require("../entity/Skill");

module.exports = {
  // Create Skill
  create: async (req, res) => {
    try {
      await dataSource.getRepository(Skill).save(req.body);
      res.send("Created Skill");
    } catch (error) {
      res.send("Error while creating the skill");
    }
  },

  // Delete Skill
  delete: async (req, res) => {
    try {
      await dataSource.getRepository(Skill).delete(req.params);
      {
        res.send("Skill is deleted");
      }
    } catch (error) {
      res.send("Skill doesn't exist");
    }
  },

  // Get All Skill
  read: async (req, res) => {
    try {
      const getAll = await dataSource.getRepository(Skill).find();
      res.send(getAll);
    } catch (error) {
      res.send("Cannot find skills");
    }
  },

  // Modify Skill
  update: async (req, res) => {
    try {
      dataSource.getRepository(Skill).update(req.params, req.body);
    } catch (error) {
      res.send("Error while updating");
    }
  },
};
