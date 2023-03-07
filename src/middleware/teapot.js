const makeATeapot = (req, res, next) => {
  const random = Math.ceil(Math.random() * 3);
  console.log(random);
  if (random !== 3) {
    return res.status(408).send("Teapotted");
  }
  next();
};

module.exports = {
  makeATeapot,
};
