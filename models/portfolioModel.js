const mongoose=require ('mongoose');


const introSchema = new mongoose.Schema({
  welcomeText: {
    type: string,
    required: true,
  },
  firstName: {
    type: string,
    required: true,
  },
  middleName: {
    type: string,
  },
  lastName: {
    type: string,
    required: true,
  },
  designation: {
    type: string,
    required: true,
  },
  description: {
    type: string,
    required: true,
  },
});


const aboutSchema = new mongoose.Schema({
    about: {
        type: string,
        required: true
    },
    image: {
        type: string,
        required: true,
    },
    skillTitle: {
        type: string,
        required: true,
    },
    skills:{
        type: Array,
        required: true
    }
})

const experienceSchema = new mongoose.Schema({
  company: {
    type: string,
    required: true,
  },
  title: {
    type: string,
    required: true,
  },
  period: {
    type: string,
    required: true,
  },
  description: {
    type: string,
    required: true
  }
});

const projectsSchema = new mongoose.Schema({
  period: {
    type: string,
    required: true,
  },
  title: {
    type: string,
    required: true,
  },
  image: {
    type: string,
    required: true,
  },
  description: {
    type: string,
    required: true,
  },
  link: {
    type: string,
    required: true
  },
  technologies: {
    type: array,
    required: true
  }
});

const educationSchema = new mongoose.Schema({
  stage: {
    type: string,
    required: true,
  },
  level: {
    type: string,
    required: true,
  },
  institution: {
    type: string,
    required: true,
  },
  graduated: {
    type: string,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
  },
  age: {
    type: number,
    required: true,
  },
  gender: {
    type: string,
    required: true,
  },
  email: {
    type: string,
    required: true,
  },
  country: {
    type: string,
    required: true,
  },
  mobile: {
    type: string,
    required: true,
  },
});

module.exports = {
  Intro: mongoose.model("intros", introSchema),
  About: mongoose.model("abouts", aboutSchema),
  Experience: mongoose.model("experience", experienceSchema),
  Project: mongoose.model("projects", projectsSchema),
  Education: mongoose.model("education", educationSchema),
  Contact: mongoose.model("contacts", contactSchema),
  
}; 