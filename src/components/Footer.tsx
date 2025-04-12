"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";
import { Button } from "./ui/button";

const Footer = ({}) => {
  return (
    <footer className="z-50 flex h-full w-full flex-col items-center justify-center gap-14 px-2 py-12 pt-0 md:px-0">
      <div
        className="flex w-full flex-col items-center justify-center py-12"
        style={{
          backgroundImage: "url('/images/home/aboutbg.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="flex w-fit flex-col items-center justify-center gap-2 py-4 md:flex-row md:gap-12">
          <Button
            asChild
            variant="link"
            className="px-0 font-playfair font-semibold uppercase text-[#593710] text-accent"
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="px-0 font-playfair font-semibold uppercase text-[#593710] text-accent"
          >
            <Link href="/menu">Menu</Link>
          </Button>
          {/* <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/about-us">About</Link>
            </Button> */}
          <Link href="/">
            <Image src="/images/logo.png" width={114} height={68} alt="logo" />
          </Link>
          <Button
            asChild
            variant="link"
            className="px-0 font-playfair font-semibold uppercase text-[#593710] text-accent"
          >
            <Link href="/about-us">About</Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="px-0 font-playfair font-semibold uppercase text-[#593710] text-accent"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        <div className="flex w-full items-center justify-center gap-4">
          <Link
            href="https://g.co/kgs/rQAnich"
            target="_blank"
            className="font-bai text-sm font-semibold uppercase tracking-[4px] text-[#593710]"
          >
            <Icons.google />{" "}
          </Link>
          {/* <Link href='https://www.tripadvisor.com/Restaurant_Review-g187069-d28003565-Reviews-Nur_Cafe-Manchester_Greater_Manchester_England.html' target="_blank" className="text-[#593710] uppercase font-bai font-semibold tracking-[4px] text-sm"><Icons.facebook /></Link> */}
          <Link
            href="https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
            target="_blank"
            className="font-bai text-sm font-semibold uppercase tracking-[4px] text-[#593710]"
          >
            <Icons.instagram />
          </Link>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <p className="w-fit px-4 text-center text-xl">
          © 2025 Zalo Cafe Manchester, All Rights Reserved |{" "}
          <Link
            href="https://foodo.ai"
            className="text-primary hover:underline"
            target="_blank"
          >
            Powered By Foodo
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
