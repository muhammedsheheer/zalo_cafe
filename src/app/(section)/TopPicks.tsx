"use client";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TopPicks = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(max-width:690px)", () => {
      gsap.to(".move-top", {
        scrollTrigger: {
          trigger: ".move-top",
          toggleActions: "restart none none none",
        },
        y: -10, // Adjust the zoom scale as per your need
        duration: 2,
      });
    });

    mm.add("(min-width:691px)", () => {
      gsap.to(".move-top", {
        scrollTrigger: {
          trigger: ".move-top",
          toggleActions: "restart none none none",
        },
        y: -100, // Adjust the zoom scale as per your need
        duration: 2,
      });
    });
  }, []);
  return (
    <section
      className="relative flex h-full w-full items-center justify-center py-8 md:py-24"
      id="menu"
      style={{
        backgroundImage: " url('/images/home/leaf-skeleton.png')",
        backgroundPosition: "center bottom",
        backgroundSize: "8%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-8 md:gap-24"
        style={{
          backgroundImage:
            "url('/images/home/lemonslice.png'),url('/images/home/branch.png'),url('/images/home/leaf-down.png')",
          backgroundPosition: "left top, right top , left bottom",
          backgroundSize: "8%, 8%, 6%",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="w-full text-center font-playfair text-lg text-[#040404]">
            Our top picks
          </p>
          <p className="w-full text-center font-italiana text-5xl text-[#040404] md:text-7xl">
            Monthly Highlights
          </p>
        </div>
        <div
          style={{
            backgroundImage: "url('/images/home/aboutbg.png')",
            backgroundSize: "contai",
            backgroundRepeat: "repeat",
          }}
          className="flex w-full justify-center px-3 py-12 md:px-12"
        >
          <div className="flex max-w-[1300px] flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
            <div className="move-top flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/home/highlights/image2.png"
                width={312}
                height={397}
                alt="adanakebab"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/home/highlights/image1.png"
                width={312}
                height={397}
                alt="mezeplatter"
                className="rounded-lg"
              />
            </div>
            <div className="move-top flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/home/highlights/image3.png"
                width={312}
                height={397}
                alt="beklava"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/home/highlights/image4.png"
                width={312}
                height={397}
                alt="kebabplatter"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
