import React from "react";
import Image from "next/image";
import Caarousel from "@/pages/carousel";

function Projects() {
  return (
    <>
      <div className="bg-black pt-1">
        <hr className="text-yellow-400"></hr>
        <div>
          <p className="font-bold text-3xl text-yellow-400 text-center">
            Recent Works
          </p>
        </div>
        <div className="w-3/5 mx-auto">
        <Caarousel />
        </div>
      </div>
      <div className="bg-yellow-400 py-2  px-10 sm:max-md:">
        <div className="flex justify-between">
          <p className="font-bold text-2md">8000</p>
          <p className="font-bold text-2md">100 </p>
        </div>
        <div className="flex justify-between">
          <p> Hours of Work</p>
          <p>Projects Complete</p>
        </div>
      </div>
    </>
  );
}

export default Projects;
