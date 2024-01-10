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
        I am currently a graduating student,complete my BSc in Computer Science in 2023. I
        am enthusiastic about pursuing a career as a Front-end Developer. I have actively worked on personal
        projects to enhance my skills and bring creativity to web development.As a graduating student with a keen interest in web development, 
         With a strong 
        foundation in coding and a passion for bringing creativity to
         web interfaces, I have actively engaged in personal projects to hone my skills 
         and contribute meaningfully to the field.
        </p>

        <br />
        <p className="text-xl">
        Passionate about pursuing a Front-end Developer role where I can leverage my technical skills, creativity,
         and dedication to contribute to the development of visually appealing and user-friendly web applications. 
        Eager to work in a dynamic and collaborative environment that fosters continuous learning and growth.
        </p>
      </div>
    </div>
  );
};

export default About;
