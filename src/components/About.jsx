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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
          doloremque quo culpa temporibus voluptas voluptate, est quisquam
          ipsam, repellat obcaecati animi rem illo aperiam exercitationem
          ducimus facilis molestias mollitia fuga! Vel ullam sapiente harum unde
          porro ratione velit possimus delectus, reiciendis nulla dicta aut,
          quos cupiditate cumque dolorum quis deserunt.
        </p>

        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          dignissimos itaque ducimus odio veniam laborum. Delectus quo itaque
          exercitationem sequi distinctio in. Nemo repellat cum quaerat
          architecto reprehenderit ipsa, dolorem delectus voluptatum commodi
          corrupti quis porro. Temporibus ad ipsam, accusamus, saepe voluptates
          libero magni quaerat ipsa, minima officiis magnam vitae?
        </p>
      </div>
    </div>
  );
};

export default About;
