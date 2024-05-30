const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const experiences = await Experience.find();
    const contacts = await Contact.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts,
      project: projects,
      experience: experiences,
      contact: contacts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
