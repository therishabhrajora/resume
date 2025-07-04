import React from "react";

function Experience() {
  return (
    <>
      <div>
        <div className="font-serif font-semibold text-2xl border-b border-black">
          Experience
        </div>
        <div className=" w-[100%] py-1">
          <div className="flex justify-between">
            <div>
              <div className="text-lg font-serif font-semibold">Ducat India</div>
              <div className="italic font-mono">
                Trainee as Java Full Stack Developer
              </div>
            </div>
            <div>
              <div className="text-lg  font-Vollkorn  font-semibold">
                <div className="text-right">April 2024 - Oct. 2024</div>
              </div>
              <div className="italic font-mono text-right">
                Ghaziabad, Utter Pradesh
              </div>
            </div>
          </div>
          <div className="px-10 py-2">
            <li>Designed and implemented full stack web applications using Java, Spring Boot, Hibernate, and React.js.</li>
            <li> Managed and optimized databases using MySQL and MongoDB, ensuring efficient data storage and retrieval.</li>
            <li>Created RESTful APIs to facilitate communication between the front-end and back-end systems.</li>
            <li>Built responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React.js.</li>
            <li> Utilized Git for version control and collaborated with team members using GitHub.</li>
            <li> Conducted unit testing using JUnit and integrated testing frameworks to ensure code quality and reliability.</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
