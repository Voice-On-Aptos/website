import ArrowTargetIcon from "@/components/custom-icons/ArrowTargetIcon";
import TickCircleIcon from "@/components/custom-icons/TickCircleIcon";
import VOAIcon from "@/components/custom-icons/VOAIcon";
import { generatePlaceholder } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Card from "./_component/Card";
import Faqs from "./_component/Faqs";
import Features from "./_component/Features";

export default function Page() {
  return (
    <>
      <section className="relative min-h-dvh bg-no-repeat bg-cover 1xl:px-[5.375rem] lg:px-16 bg-top bg-pattern bg-blend-exclusion flex items-center flex-col pt-[6rem] px-18 space-y-[4.625rem] lg:space-y-[4.25rem] bg-white">
        <div className="text-center flex flex-col items-center max-w-[45rem] text-shark">
          <h1 className="font-medium text-s34 leading-normal lg:text-s54 lg:leading-[4.5rem] mb-6">
            Decentralized Communities, Governed by{" "}
            <span className="text-accent underline">You.</span>
          </h1>
          <p className="text-lg lg:text-s20 mb-8 lg:mb-6 font-light max-w-[36.3125rem]">
            Voice on Aptos (VOA) is a community-driven platform where projects
            and protocols on the Aptos Blockchain can create and manage
            decentralized communities.
          </p>
          <Link
            href="/explore"
            className="inline-block rounded-[0.625rem] w-full lg:w-fit bg-accent py-3 px-7 text-white text-sm"
          >
            Explore Communities
          </Link>
        </div>
        <Image
          alt="Dapp - Explore Communities"
          src="/svgs/dapp-mobile.svg"
          width={631.09}
          height={390.29}
          placeholder={generatePlaceholder(631.09, 390.29)}
          className="object-left-top object-cover max-w-full lg:hidden"
        />
        <Image
          alt="Dapp - Explore Communities"
          src="/svgs/dapp-desktop.svg"
          width={1313}
          height={812}
          placeholder={generatePlaceholder(1313, 812)}
          className="object-center object-cover max-w-full hidden lg:block"
        />
      </section>
      <section className="bg-shark-2 bg-top bg-pattern bg-blend-exclusion bg-no-repeat bg-cover pt-[5rem] 1xl:pt-[5.9375rem] 1xl:pb-[6.6875rem] pb-[5.875rem] px-18 1xl:px-[5.375rem] lg:px-16 flex items-center flex-col text-center">
        <h2 className="text-white font-medium text-3xl 1xl:text-5xl max-w-[43rem] mb-[3.125rem] 1xl:mb-[4.625rem]">
          Shape the Future <br /> of Decentralized Communities
        </h2>
        <div className="grid md:grid-cols-2 max-w-screen-2xl lg:grid-cols-3 place-items-center gap-[1.75rem]">
          <Card
            title="Voice Proportional to Investment"
            description="Users who own tokens in a protocol or dApp have a voice proportional to their investment, enabling them to shape the direction and decisions of the projects they care about."
            href="#"
            icon={<VOAIcon />}
          />
          <Card
            title="Influence Through Commitment"
            description="Your influence in a community is tied to your commitment and investment, and you can lend your VOICE tokens to others who believe in their perspective, amplifying their influence."
            href="#"
            icon={<TickCircleIcon />}
          />
          <Card
            title="Amplify Voices, Shape Decisions"
            description="By lending your VOICE tokens to amplify other voices, you can ensure that every decision reflects the community's true desires."
            href="#"
            icon={<ArrowTargetIcon />}
          />
        </div>
      </section>
      <section className="px-18 1xl:px-[5.375rem] lg:px-16 flex flex-col items-center bg-alabaster pt-[5rem] 1xl:pt-[5.9375rem] 1xl:pb-[8.125rem] pb-16">
        <h1 className="text-center text-shark-3 font-medium text-s26 lg:text-s46 max-w-[57.75rem] mb-[3.6875rem] lg:mb-[4.625rem]">
          Create, Join, and Shape the Future of Decentralized Communities
        </h1>
        <Features />
      </section>
      <section className="px-18 1xl:px-[5.375rem] pt-[3.75rem] 1xl:py-[5.9375rem] pb-[3.75rem] lg:px-16">
        <div className="mx-auto max-w-screen-2xl w-full">
          <h1 className="text-shark-3 font-medium text-s26 lg:text-s46 mb-[2.5rem] lg:mb-[2.625rem]">
            Frequently Asked Questions
          </h1>
          <Faqs />
        </div>
      </section>
      <section className="px-18 1xl:px-[5.375rem] lg:px-16 pt-[3.75rem] pb-[3.25rem] xl:pt-[4.25rem] xl:pb-[5.8125rem]">
        <div className="bg-teal rounded-3xl max-w-screen-2xl mx-auto w-full overflow-hidden relative grid place-items-center">
          <div className="pt-[3.1875rem] relative z-20 px-[1.5625rem] xl:pt-[5.9375rem] xl:pb-[6.375rem] pb-[4.3125rem] flex flex-col items-center text-center">
            <h3 className="text-white text-3xl lg:text-s46 mb-[3.375rem] lg:mb-[1.875rem]">
              Ready to Find Your Voice?
            </h3>
            <span className="flex flex-col items-center w-full max-w-[33.0625rem] whitespace-nowrap mx-auto lg:flex-row lg:space-y-0 lg:space-x-4 space-y-4">
              <Link
                href="/community/new"
                className="block rounded-[0.625rem] w-full flex-1 text-accent py-3 px-7 bg-white text-sm"
              >
                Join a Decentralized Community
              </Link>
              <Link
                href="/community/new"
                className="block rounded-[0.625rem] w-full flex-1 bg-accent py-3 px-7 lg:px-10 text-white text-sm"
              >
                Create a Community
              </Link>
            </span>
          </div>
          <Image
            src="/svgs/topology.svg"
            alt="Topology Pattern"
            width={408.15}
            height={398.61}
            className="absolute top-[3rem] lg:top-0 -left-[4rem] lg:-left-[4.75rem] object-left-bottom object-contain h-full"
          />
          <Image
            src="/svgs/topology-2.svg"
            alt="Topology Pattern"
            width={408.15}
            height={398.61}
            className="absolute hidden lg:block top-[0.5rem] -right-[9rem] object-left-top object-contain h-full"
          />
        </div>
      </section>
    </>
  );
}
