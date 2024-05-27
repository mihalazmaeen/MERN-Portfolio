import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    name: "Mihal MD Azmaeen",
    age: 26,
    gender: "Male",
    email: "azmaeenmihal1@gmail.com",
    mobile: "01521428574",
    country: "Bangladesh",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-white">{"{"}</h1>
          {Object.keys(user).map((key, index) => (
            <h1 key={index} className="ml-5">
              <span className="text-tertiary">{key}: </span>
              <span className="text-white">{user[key]}</span>
            </h1>
          ))}
          <h1 className="text-white">{"}"}</h1>
        </div>
        <div className="h-[400px] ml-auto sm:ml-2">
          <dotlottie-player
            src="https://lottie.host/201b0d48-2e30-4512-a1cd-4f9737a4b74e/YKhWvz2IdP.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
