import React from "react";

function Education() {
  return (
    <>
      <div>
        <div className="font-serif font-semibold text-2xl border-b border-black">
          Education
        </div>
        <div className=" w-[100%] py-1 flex flex-col gap-1">
          <div className=" flex justify-between">
            <div>
              <div className="text-lg font-serif font-semibold">
                Deshbandhu Collage, Delhi University
              </div>
              <div className="italic font-mono">
                Bachelor of Science in Physical Science with Computer Science
              </div>
            </div>
            <div>
              <div className="text-lg font-Vollkorn font-semibold">
                <div className="text-right"> Nov. 2020 - Jun 2023</div>
              </div>
              <div className="italic font-mono text-right">CGPA : 8.227</div>
            </div>
          </div>
          <div className=" flex justify-between">
            <div>
              <div className="text-lg font-serif font-semibold">
                Noida Institute of Engineering Technology, Greater Noida 
              </div>
              <div className="italic font-mono">
                Master in Computer Application ( MCA )
              </div>
            </div>
            <div>
              <div className="text-lg font-Vollkorn font-semibold">
                <div className="text-right">Oct. 2024 - Present</div>
              </div>
              <div className="italic font-mono text-right"></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Education;
