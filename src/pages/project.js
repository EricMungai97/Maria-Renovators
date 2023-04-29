import React from "react";
import Image from "next/image";
import Caarousel from "@/pages/carousel";

function Projects() {
  return (
    <>
      <div className="bg-white pt-1 lg:pb-24 min-3/5">
        <div>
          <p className="font-bold text-3xl text-black text-center">
            Recent Works
          </p>
        </div>
        <div className="text-center lg:w-3/5 mx-auto">
          <Caarousel />
        </div>
      </div>
    </>
  );
}

export default Projects;
