import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="2xl:w-[1570px] w-11/12 flex justify-between items-center  m-auto text-xs">
      <div className="text-white flex gap-4 ">
        <h3 className="flex items-center gap-1">
          USD
          <IoIosArrowDown />
        </h3>
        <h3 className="flex items-center gap-1">
          EN
          <IoIosArrowDown />
        </h3>
        <h3 className="text-red-500 ">+1 (800) 123 456 789</h3>
      </div>
      <div className="text-white flex justify-center items-center">
        <Link className="px-4 border-r-[1px] border-neutral-700 ">
          My Account
        </Link>
        <Link className="px-4 border-r-[1px] border-neutral-700 ">
          About US
        </Link>
        <Link className="px-4 border-r-[1px] border-neutral-700 ">
          Contact Us
        </Link>
        <Link className="px-4 border-r-[1px] border-neutral-700 ">FAQs</Link>
      </div>
    </div>
  );
};

export default TopBar;
