import Link from "next/link";
import { IoLogoInstagram, IoMailOutline } from "react-icons/io5";
import { FaWikipediaW } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white">
      <Link className="flex items-center" href="#">
        {/* <UniversityIcon className="h-8 w-8" /> */}
        Rhenania Stuttgart
      </Link>
      <div className="flex items-center space-x-4">
        <Link className="hover:text-gray-400" href="#" target="_blank">
          <IoLogoInstagram className="h-6 w-6" />
        </Link>
        <Link className="hover:text-gray-400" href="#" target="_blank">
          <FaWikipediaW className="h-6 w-6" />
        </Link>
        <Link
          className="hover:text-gray-400"
          href="mailto:subsenior@rhenania-stuttgart.de"
        >
          <IoMailOutline className="h-6 w-6" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
