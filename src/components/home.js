import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import profile from "../assets/profile.png";

const Home = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const skills = ["Frontend Developer", "UI/UX Designer", "Graphic Designer"];

  useEffect(() => {
    // Set an interval to change the skill every 3 seconds (adjust the interval as needed)
    const intervalId = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); // Interval in milliseconds

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, [skills.length]);

  return (
    <div className="bg-baigan h-screen text-text-light">
      <Navbar />
      <div className="container flex flex-wrap justify-around">
        <div className="content w-3/6 text-left flex flex-col justify-center ">
          <div className="h5 text-pinky text-lg mb-2">
            <h5>Hoornain Khan</h5>
          </div>
          <div
            className="h1 font-extrabold text-6xl mb-4"
            id="skill"
            style={{ opacity: 1, transition: "opacity 1s ease-in-out" }}
          >
            {skills[currentSkillIndex]}
          </div>
          <div className="p font-thin text-xl">
            <p>
              "Elevating user experiences through pixel-perfect design and
              seamless interactions – crafting innovative and intuitive web
              solutions as a passionate {skills[currentSkillIndex].toLowerCase()}."
            </p>
          </div>
          <div >
            <button className="mt-8 p-2 rounded text-sm bg-pinky border border-white text-white hover:bg-white hover:text-pinky font-bold">Download resume</button>
          </div>
        </div>
        <div className="img min-h-screen flex items-center">
          <div className="bg-banana rounded-t-full">
            <img src={profile} alt="profile" className="w-60 rounded object-cover relative" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
