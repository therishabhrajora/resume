function Projects() {
  return (
    <div>
      <div className="font-serif font-semibold text-xl border-t border-b bg-gray-200 text-center border-black">
        Projects
      </div>
      <div className=" w-[100%] space-y-5 py-4">
        {/* <div className="">
          <div className="flex justify-between">
            <div>
              <span className="font-mono italic mr-2 hover:underline text-blue-700">
                <a href="">Link</a>
              </span>
              <span className="text-base font-serif font-semibold">
                HealthBot
              </span>
              &nbsp;|&nbsp;
              <span className="italic font-mono">
                Java, Spring Boot, Spring AI, OpenAI API
              </span>
            </div>
            <div className="text-base  font-Vollkorn font-semibold">
              <div className="text-right">June 2025 - July 2025</div>
            </div>
          </div>
          <div className="px-10 py-2">
            <li>
              <b>
                {" "}
                Developed an AI-powered chatbot that answers general health{" "}
              </b>
              related questions using natural language processing via OpenAI.
            </li>
            <li>
              <b>Integrated Spring AI</b> to handle prompt engineering and
              deliver safe, informative, real-time responses through RESTful
              APIs.
            </li>
          </div>
        </div> */}

        <div className="">
          <div className="flex justify-between">
            <div className="space-x-5">
              <span className="text-base font-serif font-semibold">
                RamYa Srubs shopping website
              </span>
              &nbsp;|&nbsp;
              <span className="italic font-mono">
                java, Spring Boot, MySQL, reactjs
              </span>
              <div className="text-lg font-mono italic mr-2 hover:underline font-bold underline text-blue-700">
                <a href="https://ramyascrubs.netlify.app/" className="ml-5">
                  Link
                </a>
              </div>
            </div>
            <div className="text-base  font-Vollkorn font-semibold">
              <div className="text-right">April 2025 - june 2025</div>
            </div>
          </div>
          <div className="px-10 py-2">
            <li>
              <b>Developed a full-stack web application</b> for purchasing
              medical scrubs, targeting healthcare professionals with
              role-specific uniform needs and a clean, intuitive UI.
            </li>
            <li>
              <b>Integrated product catalog features</b> including filtering by
              size, color, gender, and profession-specific categories, ensuring
              efficient product discovery.
            </li>
            <li>
              <b>Implemented secure user authentication and authorization</b>{" "}
              using Spring Security, allowing for customer registration, login,
              and admin-level inventory management.
            </li>
            <li>
              <b>Built robust backend APIs</b> for order placement, inventory
              updates, and cart functionality; connected to a MySQL database for
              persistent storage and transactional integrity.
            </li>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between">
            <div className="space-x-5">
              <span className="text-base font-serif font-semibold">
                Charcha: Chat Application
              </span>
              &nbsp;|&nbsp;
              <span className="italic font-mono">
                java, Spring Boot, Mongodb, reactjs, WebSockets
              </span>
              <div className="text-lg font-mono italic mr-2 hover:underline font-bold underline text-blue-700">
                <a href="https://charchabot.onrender.com" className="ml-5">
                  Link
                </a>
              </div>
            </div>
            <div className="text-base  font-Vollkorn font-semibold">
              <div className="text-right">Aug 2025 ( under development )</div>
            </div>
          </div>
          <div className="px-10 py-2">
            <li>
              Supports <b>real-time one-to-one</b> and group messaging using
              <b>WebSockets.</b>
            </li>
            <li>Maintains persistent <b>chat history and user data</b> in MongoDB.</li>
            <li>
              Offers typing indicators, live updates, and <b> responsive UI </b>for
              smooth user experience.
            </li>
            <li>
              Optimized with scalable WebSocket handling to <b> support multiple
              concurrent users.</b>
            </li>
            <li>
              Provides <b>secure authentication </b> & authorization using JWT and
             <b> Spring Security.</b>
            </li>
            <li>
              Containerized with <b> Docker for easy deployment </b> and portability.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
