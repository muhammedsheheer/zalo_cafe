"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({}) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animation = gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", paused: true },
      );

      ScrollTrigger.create({
        trigger: headingRef.current,
        start: "top 80%",
        end: "bottom top",
        onEnter: () => {
          animation.restart();
        },
        onEnterBack: () => {
          animation.restart();
        },
        onLeave: () => {
          animation.pause(0).progress(0);
        },
        onLeaveBack: () => {
          animation.pause(0).progress(0);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".head-container", 2, {
      y: 50,
      opacity: 1,
      ease: "power4.out",
    })
      .from(".head-hero", 1.5, {
        x: 200,
        opacity: 0,
        delay: -2,
      })
      .from(".hero-button", 1.5, {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: -2,
      });

    tl.fromTo(
      ".table-button",
      {
        opacity: 0, // Start invisible
        scale: 0.5, // Start smaller for a "pop-in" effect
      },
      {
        opacity: 1, // Fully visible
        scale: 1, // Restore to original size
        duration: 1, // Duration for fade-in and scale effect
        ease: "power3.out", // Smooth easing effect
      },
    );

    // Rotation animation
    tl.to(".table-button", {
      rotation: 360, // Full rotation
      duration: 10, // Time for one rotation
      ease: "linear", // Consistent rotation speed
      repeat: -1, // Infinite rotation
    });
  }, []);
  return (
    <section
      id="hero"
      className="relative flex w-full items-center justify-center"
    >
      <div className="flex min-h-[100vh] w-full items-center justify-center bg-black">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="https://d8q1b3smcycac.cloudfront.net/zalos/zalos-cafe-web.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/zalo.png"
          ></video>
        </div>

        {/* <div className="relative z-50 flex w-full max-w-[1300px] items-center justify-center md:h-[80vh] md:justify-start">
          <div className="head-container flex h-full w-full flex-col items-start justify-center gap-7 px-3 md:w-2/3 md:px-0">
            <h1
              ref={headingRef}
              className="head-hero w-full text-center font-italiana text-5xl text-background sm:text-5xl md:text-start md:text-8xl md:leading-[110px]"
            >
              The Love <br />
              Language of <br />
              Arabian Hospitality
            </h1>

            <div className="flex w-full justify-center gap-4 md:justify-start">
              <Link href="/menu">
                <Button className="hero-button flex items-center justify-center gap-3 rounded-full bg-white px-6 py-7 font-playfair font-semibold uppercase text-black hover:bg-[#9c5249] hover:text-white">
                  Order Online
                  <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
