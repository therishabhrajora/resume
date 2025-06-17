import React from "react";

function Projects() {
  return (
    <div>
      <div className="font-serif font-semibold text-2xl border-b border-black">
        Projects
      </div>
      <div className=" w-[100%] py-1">
           <div className="">
          <div className="flex justify-between">
            <div>
              <span className="font-mono italic mr-2 hover:underline text-blue-700"><a href="">Link</a></span><span className="text-lg font-serif font-semibold">
                HealthBot
              </span>
              &nbsp;|&nbsp;
              <span className="italic font-mono">
                Java, Spring Boot, Spring AI, OpenAI API
              </span>
            </div>
            <div className="text-lg  font-Vollkorn font-semibold">
              <div className="text-right">June 2025 -  July 2025</div>
            </div>
          </div>
          <div className="px-10 py-2">
            <li>
             <b> Developed an AI-powered chatbot that answers general health </b>related questions using natural language processing via OpenAI.
            </li>
            <li>
              <b>Integrated Spring AI</b> to handle prompt engineering and deliver safe, informative, real-time responses through RESTful APIs.
            </li>
            
          </div>
        </div>
        
        <div className="">
          <div className="flex justify-between">
            <div>
              <span className="font-mono italic mr-2 hover:underline text-blue-700"><a href="https://github.com/therishabhrajora/ramya">Link</a></span><span className="text-lg font-serif font-semibold">
                RamYa Srubs shopping website
              </span>
              &nbsp;|&nbsp;
              <span className="italic font-mono">
                java, Spring Boot, MySQL, reactjs
              </span>
            </div>
            <div className="text-lg  font-Vollkorn font-semibold">
              <div className="text-right">April 2025 - june 2025</div>
            </div>
          </div>
          <div className="px-10 py-2">
            <li>
              <b>Developed a full-stack web application</b> for purchasing medical scrubs, targeting healthcare professionals with role-specific uniform needs and a clean, intuitive UI.
            </li>
            <li>
              <b>Integrated product catalog features</b> including filtering by size, color, gender, and profession-specific categories, ensuring efficient product discovery.
            </li>
            <li>
              <b>Implemented secure user authentication and authorization</b> using Spring Security, allowing for customer registration, login, and admin-level inventory management.
            </li>
            <li>
              <b>Built robust backend APIs</b> for order placement, inventory updates, and cart functionality; connected to a MySQL database for persistent storage and transactional integrity.
            </li>
          </div>
        </div>
     

        
        
      </div>
    </div>
  );
}

export default Projects;
