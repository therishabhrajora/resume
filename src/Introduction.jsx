import React from "react";
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
          Hapur , Utter Pradesh 245101
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
                href="https://www.linkedin.com/in/rishabh-rajora-162215231/"
              >
                linkedin.com/in/rishabh-rajora-162215231/
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
      </div>
    </>
  );
}

export default Introduction;
