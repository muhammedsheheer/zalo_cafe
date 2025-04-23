import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Specialities = ({}) => {
  return (
    <section
      id="about"
      className="relative flex w-full items-center justify-center bg-transparent"
    >
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 py-12 md:flex-row md:gap-0 md:p-0 md:pr-14 lg:py-24">
        <div className="z-30 grid h-full w-full grid-cols-1 items-center justify-center gap-5 md:ml-20 md:grid-cols-2 md:items-center md:gap-0 md:px-12">
          <div className="relative flex w-full flex-col items-center justify-center gap-10">
            <Image
              src="/images/home/social/image2.jpg"
              width={725}
              height={795}
              alt="about"
              className="h-auto w-full md:h-[600px]"
            />
          </div>

          <div className="relative flex h-full w-full items-center justify-center bg-primary p-4">
            <div
              className="absolute left-0 top-0 h-full w-full overflow-hidden"
              style={{
                backgroundImage: "url('/images/home/frame.png')",
                backgroundSize: "contain",
                backgroundRepeat: "repeat",
              }}
            ></div>
            <div className="relative flex w-fit flex-col items-start justify-center gap-5">
              <p className="non-italic font-jost w-full text-3xl font-[300] uppercase text-white">
                <span className="head-about tracking-[4px] text-white">
                  about us
                </span>
              </p>
              <p className="font-jost w-full font-extralight text-white md:max-w-[400px]">
                At Zalo’s Cafe, we believe in more than just great coffee—we
                create experiences. Nestled in the heart, our cafe is a haven
                for coffee lovers, food enthusiasts, and those looking for a
                warm, inviting space to relax or work.
              </p>
              <Button
                asChild
                className="z-40 flex items-center justify-center gap-3 rounded-full bg-white px-6 py-7 font-playfair font-semibold uppercase text-black hover:bg-[#FFF] hover:text-[#9c5249]"
              >
                <Link href="/https://g.co/kgs/rQAnich">
                  Locate Us
                  <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
