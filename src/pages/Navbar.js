import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <nav className="flex  justify-between pt-2  pr-64 bg-black sm:max-md:flex flex-wrap pl-2 pb-2">
        <div>
          <FontAwesomeIcon
            icon={faHome}
            width="18px"
            className="text-white hover:text-gray-900 mx-2 text-10px"
          />
          <p className="text-white font-bold">Maria's Renovators</p>
        </div>
        <div className="lg:max-xl:text-lg sm:max-sm:text-sm pt-3 bg-black space-x-10">
          <Link className="text-white font-bold " href="/">
            Home
          </Link>
          <Link className="text-white font-bold" href="/#services">
            Services
          </Link>

          <Link className="text-white font-bold" href="./project">
            Projects
          </Link>
          <Link className="text-white font-bold" href="./about">
            About
          </Link>
          <Link className="text-white font-bold" href="./contact">
            Contact
          </Link>
        </div>
    </nav>
  );
}
