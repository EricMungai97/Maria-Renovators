import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Choose() {
  return (
    <div className="bg-white justify-between lg:grid grid-cols-6 gap-6 sm:max-md:grid-rows-6 py-20 px-4">
      <div className="whitespace-nowrap pr-8  sm:max-md:row-span-1">
        <h1 className="text-3md font-bold">
          Why Choose Us
          <span className="h-4 bg-yellow-400 w-30 mt-3 block"></span>
        </h1>
      </div>
      <div className="sm:max-md:row-span-2">
        <span>
          <FontAwesomeIcon
            icon={faCheck}
            className="text-yellow-500 text-4xl"
            width="30"
          />
        </span>
        <h6>Professional Staff</h6>
        <p>
          Our team of professionals includes experienced designers, project
          managers, and skilled tradespeople who are dedicated to delivering
          high-quality workmanship and excellent customer service on every
          project.
        </p>
      </div>
      <div className="sm:max-md:row-span-3">
        <span>
          <FontAwesomeIcon
            icon={faCheck}
            className="text-yellow-500 text-4xl"
            width="30"
          />
        </span>
        <h6>Save Time and Money</h6>
        <p>
          We work efficiently to complete projects within your budget and
          timeline, without sacrificing quality.
        </p>
      </div>
      <div className="sm:max-md:row-span-4">
        <span>
          <FontAwesomeIcon
            icon={faCheck}
            className="text-yellow-500 text-4xl"
            width="30"
          />
        </span>
        <h6>Detailed Estimate</h6>
        <p>
          We provide a detailed estimate for your renovation project, so you
          know exactly what to expect in terms of cost and timeline. Our team
          will work with you to ensure that you understand every aspect of the
          project and feel confident in our services.
        </p>
      </div>
      <div className="sm:max-md:row-span-5">
        <span>
          <FontAwesomeIcon
            icon={faCheck}
            className="text-yellow-500 text-4xl"
            width="30"
          />
        </span>
        <h6>On Time Completion</h6>
        <p>
          We are committed to delivering high-quality work on
          schedule, so you can enjoy your newly renovated space as soon as
          possible.
        </p>
      </div>
      <div className="sm:max-md:row-span-6">
        <span>
          <FontAwesomeIcon
            icon={faCheck}
            className="text-yellow-500 text-4xl"
            width="30"
          />
        </span>
        <h6>Zero Complaints</h6>
        <p>
          Our commitment to excellence means that we strive for zero complaints
          on every project. We take pride in our workmanship and attention to
          detail, and we are dedicated to ensuring that every client is
          satisfied with our services.
        </p>
      </div>
    </div>
  );
}

export default Choose;
