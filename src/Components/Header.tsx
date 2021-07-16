import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div
      className="top-0 z-50 bg-white flex 
    items-center p-6 lg:px-6 shadow-md min-w-screen"
    >
      {/* Searchbar */}
      <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
        <input
          className="hidden md:inline-flex ml-3 items-center bg-transparent outline-none  
            placeholder-gray-500 "
          type="text"
          placeholder="Search Item"
        />

        <FontAwesomeIcon className="cursor-pointer" icon={faSearch} />
      </div>
      {/* Title*/}
      <div className="flex justify-center items-center flex-grow  text-2xl lg:mr-11">
        <h1>HEEYOON-MALL</h1>
      </div>
      {/* icon */}
      <div className="flex items-center sm:space-x-5 justify-end  mr-2 lg:ml-14">
        <FontAwesomeIcon icon={faShoppingBag} size="lg" />
        <FontAwesomeIcon icon={faHeart} size="lg" />
        <FontAwesomeIcon icon={faStar} size="lg" />
      </div>
    </div>
  );
}

export default Header;
