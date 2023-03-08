const { dataSource } = require("../utils");

// Try to make class

class abstractController {
  constructor({ entity }) {
    this.table = entity;
  }

  async create(req, res) {
    try {
      await dataSource.getRepository(this.table).save(req.body);
      res.send(`created ${this.table}`);
    } catch (error) {
      res.send("Error while creating the skill");
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await dataSource.getRepository(this.table).delete(id);
      {
        res.send(` ${this.table} is deleted`);
      }
    } catch (error) {
      res.send(`${this.table} doesn't exist`);
    }
  }

  async read(req, res) {
    try {
      const getAll = await dataSource.getRepository(this.table).find();
      res.send(getAll);
    } catch (error) {
      res.send(`Cannot find`);
    }
  }

  async update(req, res) {
    const { id } = req.params;

    const existingUser = await dataSource
      .getRepository(this.table)
      .findOnyeBy({ id });

    if (existingUser === null) {
      return res.status(404).send(`${this.table} not found`);
    }
    try {
      await dataSource.getRepository(this.table).update(req.params, req.body);
      res.send(`${this.table} is updated`);
    } catch (error) {
      res.send("Error while updating");
    }
  }
}

module.exports = abstractController;
