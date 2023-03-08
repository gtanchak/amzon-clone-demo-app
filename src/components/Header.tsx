import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { FC } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectProducts } from "../slices/cartSlice";

const menuItems = [
  {
    content: (
      <>
        <MenuIcon className="h-6 mr-1" />
        All
      </>
    ),
    className: "link flex items-center",
  },
  {
    content: "Prime Video",
    className: "link",
  },

  {
    content: "Amazon Business",
    className: "link",
  },
  {
    content: "Today's Deals",
    className: "link",
  },
  {
    content: "Electronics",
    className: "link hidden lg:inline-flex",
  },
  {
    content: "Food & Category",
    className: "link hidden lg:inline-flex",
  },
  {
    content: "Prime",
    className: "link hidden lg:inline-flex",
  },
  {
    content: "Buy Again",
    className: "link hidden lg:inline-flex",
  },
  {
    content: "Shopper Toolkit",
    className: "link hidden lg:inline-flex",
  },
  {
    content: "Health & Personal Care",
    className: "link hidden lg:inline-flex",
  },
];

const BottomNavBar: FC = () => (
  <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
    {menuItems.map(({ className, content }, index) => (
      <p key={index} className={className}>
        {content}
      </p>
    ))}
  </div>
);

const Header = () => {
  const [session] = useSession();
  const router = useRouter();
  const products = useSelector(selectProducts);

  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 pl-6 flex-grow py-2">
        <div
          className="mt-2 flex items-center flex-grow sm:flex-grow-0"
          onClick={() => router.push("/")}
        >
          <Image
            src="/amazon_logo.png"
            width={150}
            height={55}
            className="cursor-pointer"
            alt="amazon logo"
          />
        </div>
        {/* Search */}
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer mx-6">
          <input
            type="text"
            className="p-2 h-full flex-grow w-6 rounded-l-md focus:outline-none flex-shrink"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Account Info */}
        <div className="text-white flex items-center text-xs space-x-6 whitespace-nowrap mr-6">
          <div
            className="link"
            onClick={() => (!session ? signIn() : signOut())}
          >
            <p>{session ? `Hello ${session.user?.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            className="relative link flex items-center"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {products.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <BottomNavBar />
    </header>
  );
};

export default Header;
