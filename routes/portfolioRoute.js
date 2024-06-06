const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Education,
  Contact,
  Experience,
} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const experience = await Experience.find();
    const educations = await Education.find();
    const contacts = await Contact.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      project: projects,
      education: educations,
      experience: experience,
      contact: contacts[0],
    });
  } catch (error) {
   
    res.status(500).send(error);
  }
});

module.exports = router;
