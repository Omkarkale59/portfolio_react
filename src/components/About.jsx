import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        I Am Currently a Graduating Student, Completed my BSc In Computer Science In 2023. I Am Enthusiastic About Pursuing a Career As a Front-End Developer. I Have Actively Worked On Personal Projects To Enhance My Skills And Bring Creativity To Web Development.
          
        </p>

        <br />
        <p className="text-xl">
          i'm Currently Looking for Frontend Devloper Role.
        </p>
      </div>
    </div>
  );
};

export default About;
