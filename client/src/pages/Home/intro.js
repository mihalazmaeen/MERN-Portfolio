import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hello, I am</h1>
      <h1 className="text-7xl text-secondary font-semibold">
        Mihal MD Azmaeen
      </h1>
      <h1 className="text-6xl text-white font-semibold">Software Engineer</h1>
      <p className="text-white">
        Technology Enthusiast & Software Engineer | Skilled in Laravel, VueJs &
        React | Passionate About Cutting-Edge Solutions
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-5">
        My Resume
      </button>
    </div>
  );
}

export default Intro;
