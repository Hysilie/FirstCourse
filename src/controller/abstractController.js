const { dataSource } = require("../utils");

// Try to make class but failed

class abstractController {
  constructor({ table }) {
    this.table = table;
  }

  async create(req, res) {
    try {
      await dataSource.getRepository(this.table).save(req.body);
      res.send("Created Skill");
    } catch (error) {
      res.send("Error while creating the skill");
    }
  }

  async delete(req, res) {
    try {
      await dataSource.getRepository(this.table).delete(req.params);
      {
        res.send(` ${this.table} is deleted`);
      }
    } catch (error) {
      res.send(`${this.table} Skill doesn't exist`);
    }
  }

  async read(req, res) {
    try {
      const getAll = await dataSource.getRepository(this.table).find();
      res.send(getAll);
    } catch (error) {
      res.send(`Cannot find ${this.table}`);
    }
  }

  async update(req, res) {
    try {
      await dataSource.getRepository(this.table).update(req.params, req.body);
      res.send(`${this.table} is updated`);
    } catch (error) {
      res.send("Error while updating");
    }
  }
}

module.exports = abstractController;
