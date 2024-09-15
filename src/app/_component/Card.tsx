import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const Card = ({ icon, href, title, description }: Props) => {
  return (
    <div className="drop-shadow-card backdrop-blur-[1px] bg-white/[4%] rounded-2xl px-18 py-8 flex justify-between w-full h-full items-center flex-col">
      <span className="rounded-full bg-accent size-[3.125rem] flex items-center justify-center mb-[1.625rem]">
        {icon}
      </span>
      <h4 className="text-xl 1xl:text-2xl text-white mb-[0.625rem] font-medium">
        {title}
      </h4>
      <p className="font-light text-sm lg:text-base text-white mb-18">
        {description}
      </p>
      <Link
        className="underline text-accent text-sm lg:text-base font-light"
        href={href}
      >
        Learn more
      </Link>
    </div>
  );
};

export default Card;
