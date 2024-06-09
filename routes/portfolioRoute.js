const router = require("express").Router();
const multer = require("multer");
const {
  Intro,
  About,
  Project,
  Education,
  Contact,
  Experience,
} = require("../models/portfolioModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads"); // Specify the destination folder for storing images
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original file name
  },
});

const upload = multer({ storage: storage });

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

// Update Intro Section
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
// Update About Section
// router.post("/update-about", async (req, res) => {
//   try {
//     const about = await About.findByIdAndUpdate(
//       { _id: req.body._id },
//       req.body,
//       {
//         new: true,
//       }
//     );
//     res.status(200).send({
//       data: about,
//       success: true,
//       message: "About Section updated successfully",
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

router.post("/update-about", upload.single("image"), async (req, res) => {
  try {
    let updatedData = req.body;

    // Check if an image file was uploaded
    if (req.file) {
      updatedData.image = req.file.originalname; // Update the image field with the file name
    }

    const about = await About.findByIdAndUpdate(
      { _id: req.body._id },
      updatedData,
      { new: true }
    );

    res.status(200).send({
      data: about,
      success: true,
      message: "About Section updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
