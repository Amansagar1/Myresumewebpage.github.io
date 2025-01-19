"use client";
import React, { useEffect, useState } from "react";

const skillsSections = {
  "Programming Languages": [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 70 },
  ],
  "Front-end Development": [
    { name: "React Js", percentage: 75 },
    { name: "Tailwind CSS", percentage: 70 },
    { name: "Bootstrap", percentage: 50 },
    { name: "Scss", percentage: 60 },
    { name: "Next JS", percentage: 75 },
  ],
  "Back-end Development": [
    { name: "Node.js", percentage: 60 },
    { name: "Express.js", percentage: 60 },
    { name: "Microservices", percentage: 50 },
  ],
  Databases: [
    { name: "MongoDB", percentage: 75 },
    { name: "MySQL", percentage: 75 },
  ],
  Tools: [
    { name: "Visual Studio Code", percentage: 95 },
    { name: "Git/GitHub", percentage: 85 },
    { name: "Slack", percentage: 80 },
    { name: "Jira", percentage: 80 },
    { name: "Linux Ubuntu", percentage: 60 },
    { name: "AzureDevops", percentage: 85 },
    { name: "Figma", percentage: 80 },
  ],
  "Basic Knowledge": [
    { name: "WordPress", percentage: 65 },
    { name: "Photoshop", percentage: 80 },
    { name: "Premier Pro", percentage: 90 },
  ],
};

const Skill = () => {
  const [animated, setAnimated] = useState(Array(50).fill(false));

  useEffect(() => {
    skillsSectionsArray().forEach((_, index) => {
      setTimeout(() => {
        setAnimated((prev) => {
          const newArr = [...prev];
          newArr[index] = true;
          return newArr;
        });
      }, index * 200);
    });
  }, []);

  const skillsSectionsArray = () =>
    Object.values(skillsSections).flatMap((skills) => skills);

  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-r from-[#10162f] to-[#4c65be] p-4 h-[600px]">
      <section className="bg-gradient-to-r from-[#10162f] to-[#4c65be] text-white p-4 w-[90%] h-full overflow-scroll">
        <div className="container mx-auto px-8">
          <h2 className="text-2xl font-bold mb-6">
            Skills and Experience That I Have
          </h2>

          {/* Loop through each section */}
          {Object.entries(skillsSections).map(([section, skills], sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              <h3 className="text-xl font-semibold mb-2">{section}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, skillIndex) => {
                  // Correct totalIndex tracking
                  const totalIndex = Object.values(skillsSections)
                    .slice(0, sectionIndex)
                    .reduce((acc, currentSection) => acc + currentSection.length, 0) + skillIndex;

                  return (
                    <div key={skillIndex} className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full relative">
                        <div
                          className="bg-indigo-500 h-2 rounded-full transition-all duration-1000 ease-in-out"
                          style={{ width: animated[totalIndex] ? `${skill.percentage}%` : "0%" }}
                        ></div>

                        {/* Tooltip at the end */}
                        <div
                          className="absolute top-[-25px] bg-indigo-500 text-white px-2 py-1 rounded-md text-xs"
                          style={{
                            left: `${skill.percentage}%`,
                            transform: "translateX(-50%)",
                            opacity: animated[totalIndex] ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out",
                          }}
                        >
                          {skill.percentage}%
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skill;
