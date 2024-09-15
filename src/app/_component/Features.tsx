import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="max-w-screen-2xl">
      <div className="grid lg:grid-cols-2 gap-[1.125rem] w-full">
        {/* create */}
        <div className="drop-shadow-card overflow-hidden rounded-2xl bg-white">
          <div className="pt-8 md:pb-8 px-[0.875rem] md:max-w-[21.75rem] lg:pl-5 lg:pr-0">
            <h3 className="text-xl lg:text-2xl mb-[0.625rem] ext-shark-3">
              Create or Join a Community
            </h3>
            <p className="text-sm lg:text-base font-light text-mako">
              Protocols and dApps can set up their community page, and users can
              join by staking community tokens to obtain VOICE tokens. Your
              influence in the community is proportional to the number of tokens
              you own.
            </p>
          </div>
          <Image
            src="/svgs/create-or-join.svg"
            alt="Community"
            width={298}
            height={191}
            className="relative -mr-[5rem] ml-auto -mb-12 md:mx-0 md:absolute md:bottom-0 md:-right-[6rem] object-cover object-bottom"
          />
        </div>
        {/* influence */}
        <div className="drop-shadow-card overflow-hidden rounded-2xl bg-white">
          <div className="pt-8 px-[0.875rem] md:max-w-[19.3125rem] lg:pl-5 lg:pr-0">
            <h3 className="text-xl lg:text-2xl mb-[0.625rem] ext-shark-3">
              Proportional Influence
            </h3>
            <p className="text-sm lg:text-base font-light text-mako">
              Members use VOICE power to post, comment, create polls, and submit
              proposals. The more tokens you own, the more influence you have in
              shaping the future of your community.
            </p>
          </div>
          <Image
            src="/svgs/influence.svg"
            alt="Community"
            width={298}
            height={191}
            className="relative -mr-[3.5rem] ml-auto md:mx-0 md:absolute md:bottom-0 md:-right-[3.7rem] object-cover object-bottom"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[1.125rem] mt-6 lg:mt-[1.3125rem]">
        <div className="drop-shadow-card pt-8 px-[0.875rem] flex flex-col justify-between overflow-hidden rounded-2xl bg-white">
          <div className="">
            <h3 className="text-xl lg:text-2xl mb-[0.625rem] ext-shark-3">
              Lend Your Voice
            </h3>
            <p className="text-sm lg:text-base font-light text-mako">
              If other members believe in your perspective or decisions, they
              can lend you their VOICE tokens, amplifying your impact within the
              community.
            </p>
          </div>
          <Image
            src="/svgs/lend-voice.svg"
            alt="Lend Voice"
            width={366}
            height={162}
            className="object-cover object-bottom w-full"
          />
        </div>
        <div className="drop-shadow-card pt-8 px-[0.875rem] flex flex-col justify-between overflow-hidden rounded-2xl bg-white">
          <div className="">
            <h3 className="text-xl lg:text-2xl mb-[0.625rem] ext-shark-3">
              AI-Powered Feeds
            </h3>
            <p className="text-sm lg:text-base font-light text-mako">
              Receive personalized content based on your engagement and
              interests within all the communities you belong to.
            </p>
          </div>
          <Image
            src="/svgs/feeds.svg"
            alt="AI feeds"
            width={366}
            height={255}
            className="object-cover object-bottom w-full"
          />
        </div>
        <div className="drop-shadow-card pt-8 px-[0.875rem] flex flex-col justify-between overflow-hidden rounded-2xl bg-white">
          <div className="">
            <h3 className="text-xl lg:text-2xl mb-[0.625rem] ext-shark-3">
              Earn Rewards
            </h3>
            <p className="text-sm lg:text-base font-light text-mako">
              Communities can set up reward pools for active participation. Earn
              rewards for actively participating in discussions, voting, and
              supporting the growth of your community.
            </p>
          </div>
          <Image
            src="/svgs/reward-pool.svg"
            alt="Reward Pool"
            width={375}
            height={246}
            className="object-cover object-bottom w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
