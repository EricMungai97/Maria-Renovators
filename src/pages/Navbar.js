import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <nav className="flex justify-between pt-2 pr-64 bg-black">
      <div className="hidden sm:block">
        <FontAwesomeIcon
          icon={faHome}
          width="30px"
          className="text-white hover:text-gray-900 mx-2 text-10px"
        />
        <p className="text-white text-2xl font-bold">Marias Renovators</p>
      </div>
      <div className="flex justify-between gap-4 lg:text-lg sm:max-sm:text-sm px-2 py-3 bg-black">
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
