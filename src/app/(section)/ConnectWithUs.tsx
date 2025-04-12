"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap, { Bounce, Power1, Power2, Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ConnectWithUs = ({}) => {
  const text = "Follow us";
  return (
    <section className="h-full w-full px-4 py-12 md:px-20 md:py-24">
      <div className="flex flex-col gap-8 md:gap-14">
        <div>
          <p className="non-italic flex items-center justify-center gap-3 text-center font-playfair text-lg font-light uppercase text-primary">
            Follow us
          </p>
        </div>
        <div className="flex h-full w-full flex-col gap-8 md:flex-row">
          <div className="w-full md:w-[25%]">
            <Link
              href={
                "https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
              }
              target="_blank"
            >
              <Image
                src="/images/home/social/1.png"
                width={380}
                height={395}
                alt="alt"
                className="h-auto w-full rounded-2xl hover:cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-full md:w-[25%]">
            <Link
              href={
                "https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
              }
              target="_blank"
            >
              <Image
                src="/images/home/social/5.png"
                width={380}
                height={395}
                alt="alt"
                className="h-auto w-full rounded-2xl hover:cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-full md:w-[25%]">
            <Link
              href={
                "https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
              }
              target="_blank"
            >
              <Image
                src="/images/home/social/3.png"
                width={380}
                height={395}
                alt="alt"
                className="h-auto w-full rounded-2xl hover:cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-full md:w-[25%]">
            <Link
              href={
                "https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
              }
              target="_blank"
            >
              <Image
                src="/images/home/social/4.png"
                width={380}
                height={395}
                alt="alt"
                className="h-auto w-full rounded-2xl hover:cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
