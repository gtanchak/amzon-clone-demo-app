import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/amazon_logo.png"
            width={150}
            height={40}
            className="cursor-pointer"
            alt="amazon logo"
            priority={true}
          />
        </div>
        {/* Search */}
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
          <input
            type="text"
            className="p-2 h-full flex-grow w-6 rounded-l-md focus:outline-none flex-shrink"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Account Info */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Ghanshyam Tanchak</p>
            <p>Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <div className="link">
            <ShoppingCartIcon />
            <p>Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div></div>
    </header>
  );
};

export default Header;
