"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUs = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(max-width:690px)", () => {
      gsap.to(".section-one", {
        scrollTrigger: {
          trigger: ".section-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        y: -40,
        duration: 2,
      });

      gsap.to(".left-container", {
        scrollTrigger: {
          trigger: ".section-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        y: -20,
        x: 0,
        duration: 2,
      });
    });

    mm.add("(min-width:691px)", () => {
      gsap.to(".section-one", {
        scrollTrigger: {
          trigger: ".section-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        y: -100,
        duration: 2,
      });

      gsap.to(".left-container", {
        scrollTrigger: {
          trigger: ".section-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: -100,
        duration: 2,
      });
    });

    const layers = document.querySelectorAll(".move");
    const speedFactor = 120;

    const onScroll = () => {
      const scrollY = window.scrollY;

      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-speed") ?? "0");

        // Calculate the movement based on scroll position
        const x = (window.innerWidth - scrollY * speed) / speedFactor;
        const y = (window.innerHeight - scrollY * speed) / speedFactor;

        // Apply the transform using GSAP
        gsap.to(layer, {
          x,
          y,
          ease: "power1.out",
        });
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <section
      className="relative flex h-full w-full items-center justify-center px-3 py-8 md:h-[100vh] md:px-6 md:py-24"
      id="menu"
      style={{
        backgroundImage: "url('/camel.svg')",
        backgroundPosition: "right bottom",
        backgroundSize: "20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="z-30 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-8 md:flex-row"
        style={{
          backgroundImage:
            "url('/images/home/leaf-skeleton.png'),url('/images/home/leaf-top.png'), url('/images/home/leaf-down.png'), url('/images/home/leafs-skeleton.png')",
          backgroundPosition: "left top, left bottom,right top,center center",
          backgroundSize: "8%, 6%, 6%, 10%",
          backgroundRepeat: "no-repeat,no-repeat,no-repeat,no-repeat",
        }}
      >
        <div
          className="section-one relative mt-[200px] flex w-full items-center justify-center p-6 md:w-1/2"
          style={{
            backgroundImage: "url('/images/home/menubg.png')",
            backgroundPosition: "center center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            src="/images/home/menu.png"
            width={570}
            height={667}
            alt="menu"
            className="w-full rounded-t-full md:w-2/3"
          />
          <div
            className="move absolute bottom-20 right-5 -rotate-12"
            data-speed="-3"
            style={{ transformStyle: "preserve-3d" }}
          >
            <p className="floating-text font-saint text-5xl text-[#040404]">
              For the best memories
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-start md:w-1/2 md:justify-center">
          <div className="left-container flex flex-col gap-4 md:-mr-[250px]">
            <p className="font-playfair uppercase text-[#040404]">About us</p>
            <p className="font-italiana text-5xl font-[400] text-[#040404] md:text-7xl md:leading-[70px]">
              Welcome
              <br />
              to Zalo Cafe
            </p>
            <p className="font-roboto w-full text-[#262626] md:w-[500px]">
              At Zola’s Cafe, we believe in more than just great coffee—we
              create experiences. Nestled in the heart, our cafe is a haven for
              coffee lovers, food enthusiasts, and those looking for a warm,
              inviting space to relax or work.
            </p>
            <Link href="/menu">
              <Button className="flex items-center justify-center gap-3 rounded-full px-6 py-7 font-playfair font-semibold hover:bg-secondary">
                Order Online
                <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
