"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".zoom-scrolls", {
      scrollTrigger: {
        trigger: ".zoom-scrolls",
        toggleActions: "restart none none none",
      },
      scale: 1, // Adjust the zoom scale as per your need
      duration: 2.5,
    });
    gsap.to(".zoom-scrolls-two", {
      scrollTrigger: {
        trigger: ".zoom-scrolls-two",
        toggleActions: "restart none none none",
      },
      scale: 1, // Adjust the zoom scale as per your need
      duration: 2.5,
    });
  }, []);
  return (
    <section
      className="relative flex h-full w-full flex-col items-center justify-center gap-6 bg-[#240e0d] px-3 py-12 pb-6 md:h-[100vh] md:flex-row md:items-end md:justify-between md:px-12"
      id="contact"
    >
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Image
        src="/images/home/1.png"
        width={524}
        height={686}
        alt="contact"
        className="zoom-scrolls z-30 w-full rounded-t-full md:h-4/5 md:w-1/3"
        style={{
          transform: "scale(0.5)",
        }}
      />
      <div className="relative z-40 h-full w-full rounded-t-full bg-primary px-6 py-24 md:w-1/3">
        <div
          className="absolute left-0 top-0 z-10 h-full w-full overflow-hidden rounded-t-full"
          style={{
            backgroundImage: "url('/images/home/frame.png')",
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
          }}
        ></div>
        <div className="z-40 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-playfair text-lg text-[#F7F4ED]">Connect</p>
            <p className="font-italiana text-5xl text-[#F7F4ED] md:text-6xl">
              Contact us
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-inter text-lg text-[#B57978]">Booking request</p>
            <Link
              href="tel:+441925982168"
              className="z-40 font-inter text-xl text-[#FFE9B6]"
            >
              +44 1925 982168
            </Link>
            <Link
              href="mailto:info@zaloscafe.co.uk"
              className="z-40 font-inter text-xl text-[#FFE9B6]"
            >
              info@zaloscafe.co.uk
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-inter text-lg text-[#B57978]">Location</p>
            <Link
              href="https://g.co/kgs/rQAnich"
              target="_blank"
              className="z-40 font-inter text-xl text-[#FFE9B6]"
            >
              31 The Cross, Lymm WA13 <br /> 0HR, United Kingdom
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-inter text-lg text-[#B57978]">Opening Hours</p>
            <p className="font-inter text-xl text-[#FFE9B6]">
              Monday - Thursday: 8:30 AM - 4:30 PM
            </p>
            <p className="font-inter text-xl text-[#FFE9B6]">
              Friday - Saturday: 8:30 AM - 5:00 PM
            </p>
            <p className="font-inter text-xl text-[#FFE9B6]">
              Sunday: 8:30 AM - 4:00 PM
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/images/home/6.png"
        width={524}
        height={686}
        alt="contact"
        className="zoom-scrolls-two z-30 w-full rounded-t-full md:h-4/5 md:w-1/3"
        style={{
          transform: "scale(0.5)",
        }}
      />
    </section>
  );
};

export default Contact;
