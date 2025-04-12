"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Menu = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".zoom-scroll", {
      scrollTrigger: {
        trigger: ".zoom-scroll",
        toggleActions: "restart none none none",
      },
      scale: 1, // Adjust the zoom scale as per your need
      duration: 2,
    });

    gsap.to(".zoom-scroll-two", {
      scrollTrigger: {
        trigger: ".zoom-scroll",
        toggleActions: "restart none none none",
      },
      scale: 1, // Adjust the zoom scale as per your need
      duration: 2,
    });

    gsap.to(".zoom-scroll-three", {
      scrollTrigger: {
        trigger: ".zoom-scroll",
        toggleActions: "restart none none none",
      },
      scale: 1, // Adjust the zoom scale as per your need
      duration: 2,
    });

    gsap.to(".zoom-scroll-four", {
      scrollTrigger: {
        trigger: ".zoom-scroll",
        toggleActions: "restart none none none",
      },
      scale: 1, // Adjust the zoom scale as per your need
      duration: 2,
    });
  }, []);
  return (
    <section
      className="relative flex h-full w-full items-center justify-center py-8 md:py-24"
      id="menu"
      style={{
        backgroundImage: " url('/images/home/leaf-skeleton.png')",
        backgroundPosition: "center bottom",
        backgroundSize: " 10%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-8"
        style={{
          backgroundImage: "url('/images/home/leaf-down.png')",
          backgroundPosition: "left top",
          backgroundSize: "6%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="w-full text-center font-playfair text-lg text-[#040404]">
            Menu
          </p>
          <p className="w-full text-center font-italiana text-5xl text-[#040404] md:text-7xl">
            Explore Our Menu
          </p>
        </div>
        <div
          style={{
            backgroundImage: "url('/images/home/aboutbg.png')",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
          }}
          className="flex w-full justify-center px-3 py-12 md:px-12"
        >
          <div className="flex max-w-[1300px] flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/home/menu/image1.png"
                width={331}
                height={331}
                alt="breakfast"
                className="zoom-scroll aspect-square rounded-full object-cover"
                style={{
                  transform: "scale(0.8)",
                }}
              />
              <p className="font-italiana text-xl font-semibold tracking-[4px] text-black">
                Shawarma Manouche
              </p>
              <Link
                href="/menu"
                className="border-b-[1px] border-b-[#202020] font-playfair text-lg text-[#202020]"
              >
                view menu
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/home/menu/image2.png"
                width={331}
                height={331}
                alt="brunch"
                className="zoom-scroll-two aspect-square rounded-full object-cover"
                style={{
                  transform: "scale(0.8)",
                }}
              />
              <p className="font-italiana text-xl font-semibold tracking-[4px] text-black">
                breakfast
              </p>
              <Link
                href="/menu"
                className="border-b-[1px] border-b-[#202020] font-playfair text-lg text-[#202020]"
              >
                view menu
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/home/menu/image3.png"
                width={330}
                height={330}
                alt="lunch"
                className="zoom-scroll-three aspect-square rounded-full object-cover"
                style={{
                  transform: "scale(0.8)",
                }}
              />
              <p className="font-italiana text-xl font-semibold tracking-[4px] text-black">
                wraps
              </p>
              <Link
                href="/menu"
                className="border-b-[1px] border-b-[#202020] font-playfair text-lg text-[#202020]"
              >
                view menu
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src="/images/home/menu/image4.png"
                width={330}
                height={330}
                alt="coffee"
                className="zoom-scroll-four aspect-square rounded-full object-cover"
                style={{
                  transform: "scale(0.8)",
                }}
              />
              <p className="font-italiana text-xl font-semibold tracking-[4px] text-black">
                desserts
              </p>
              <Link
                href="/menu"
                className="border-b-[1px] border-b-[#202020] font-playfair text-lg text-[#202020]"
              >
                view menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
