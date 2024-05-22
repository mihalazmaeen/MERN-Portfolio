import React from "react";
import SectionTitle from "../../components/SectionTitle";
import mihalImage from "./mihal.png";

function About() {
    const skills=[
        "PHP","JavaScript","Laravel","VueJs","ReactJs","NodeJs","SQL","HTML/CSS","JQuery/AJAX"
    ]
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center">
        <div className="h-[50vh] w-1/2">
          <img
            src={mihalImage}
            alt="mihal"
            height={400}
            width={300}
            background="transparent"
          />
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <p className="text-white">
            Highly motivated technology enthusiast, aspire to work with cutting
            edge innovations,looking for a role in an IT organization that will
            allow me to adopt new technology trends and where I can utilize my
            knowledge and skills for the organization’s growth.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are the Technologies I have used
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill) => (
            <div className="border border-white py-3 px-5">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
