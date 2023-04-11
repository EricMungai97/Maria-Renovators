import React from 'react'
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
          className="text-yellow-500"
          width="30"
        />
      </span>
      <h6>Professional Staff</h6>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur.
      </p>
    </div>
    <div className="sm:max-md:row-span-3">
      <span>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-yellow-500"
          width="30"
        />
      </span>
      <h6>Save Time and Money</h6>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur.
      </p>
    </div>
    <div className="sm:max-md:row-span-4">
      <span>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-yellow-500"
          width="30"
        />
      </span>
      <h6>Detailed Estimate</h6>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur.
      </p>
    </div>
    <div className="sm:max-md:row-span-5">
      <span>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-yellow-500"
          width="30"
        />
      </span>
      <h6>On Time Completion</h6>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur.
      </p>
    </div>
    <div className="sm:max-md:row-span-6">
      <span>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-yellow-500"
          width="30"
        />
      </span>
      <h6>Zero complaints</h6>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur.
      </p>
    </div>
  </div>
  )
}

export default Choose