import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";

//general(site) announcements or notifications
const Header = () => {
  return (
    <header className="bg-azure py-4 font-medium lg:text-sm text-s13 text-accent px-18 flex items-center justify-center">
      <span className="flex items-start lg:items-center space-x-[0.625rem] justify-center bg-dew px-4 rounded-3xl py-[0.3125rem]">
        <AiFillInfoCircle size={24} className="-mt-1 lg:mt-0" />
        <p>
          All communities currently listed, are for testnet purposes and doesn’t
          have association with the protocol team
        </p>
      </span>
    </header>
  );
};

export default Header;
