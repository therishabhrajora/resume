
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Introduction() {
  return (
    <>
      <div>
        <div className="uppercase text-center text-5xl font-crimson ">
          rishabh rajora
        </div>
        <div className="text-center capitalize">
          Hapur , Uttar Pradesh 245101
        </div>
        <div className="flex items-center flex-col">
          <div className="flex gap-2">
            <div>📞 9548950029</div>
            <div>
              ✉️{" "}
              <a href="mailto:rishabhrajora20@gmail.com" className="underline">
                rishabhrajora20@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <FaLinkedin />
              <a
                className="underline"
                href="https://www.linkedin.com/in/therishabhrajora"
              >
                linkedin.com/in/therishabhrajora/
              </a>
            </div>
            <div className="flex items-center gap-1">
              <FaGithub />
              <a
                className="underline"
                href="https://github.com/therishabhrajora"
              >
                /therishabhrajora
              </a>
            </div>
          </div>
        </div>
        <div className="m-4">I’m a full stack developer who enjoys building web apps from start to finish. I work with tools like React, Spring Boot, and MySQL. I’m comfortable creating APIs, handling user login systems, and deploying apps using Docker. I like solving problems, learning new things, and writing clean, easy-to-understand code that works well for users.</div>
      </div>
    </>
  );
}

export default Introduction;
