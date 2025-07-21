

function Education() {
  return (
    <>
      <div>
        <div className="font-serif font-semibold text-xl border-b border-t bg-gray-200 text-center border-black">
          Education
        </div>
        <div className=" w-[100%] py-1 flex flex-col gap-1">
          <div className=" flex justify-between">
            <div>
              <div className="text-base font-serif font-semibold">
                Deshbandhu Collage, Delhi University
              </div>
              <div className="italic font-mono">
                Bachelor of Science in Physical Science with Computer Science
              </div>
            </div>
            <div>
              <div className="text-base font-Vollkorn font-semibold">
                <div className="text-right"> Nov. 2020 - Jun 2023</div>
              </div>
              <div className="italic font-mono text-right">CGPA : 8.227</div>
            </div>
          </div>
         
          <div className="flex justify-between">
            <div>
              <div className="text-base font-serif font-semibold">Ducat India</div>
              <div className="italic font-mono">
                Trainee as Java Full Stack Developer
              </div>
            </div>
            <div>
              <div className="text-base  font-Vollkorn  font-semibold">
                <div className="text-right">April 2024 - Oct. 2024</div>
              </div>
              <div className="italic font-mono text-right">
                Ghaziabad, Utter Pradesh
              </div>
            </div>
          </div>
          {/* <div className="px-10">
            <li>Designed and implemented full stack web applications using Java, Spring Boot, Hibernate, and React.js.</li>
            <li> Managed and optimized databases using MySQL and MongoDB, ensuring efficient data storage and retrieval.</li>
            <li>Created RESTful APIs to facilitate communication between the front-end and back-end systems.</li>
          </div> */}
           <div className=" flex justify-between">
            <div>
              <div className="text-base font-serif font-semibold">
                Noida Institute of Engineering Technology, Greater Noida 
              </div>
              <div className="italic font-mono">
                Master in Computer Application ( MCA )
              </div>
            </div>
            <div>
              <div className="text-base font-Vollkorn font-semibold">
                <div className="text-right">Oct. 2024 - Present</div>
              </div>
              <div className="italic font-mono text-right">CGPA (SEM I) : 8.2</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Education;
