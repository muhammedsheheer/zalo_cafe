"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { BetaMenuActive } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import clsx from "clsx";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${position} top-5 z-50 flex h-[10vh] w-full max-w-[1300px] items-center bg-transparent p-4 transition-all duration-300 ease-in-out`}
    >
      <div className="flex h-full w-full items-center justify-between">
        <Link href="/" className="flex md:hidden">
          <Image
            src="/images/logo.png"
            width={140}
            height={120}
            alt="logo"
            className="w-28"
          />
        </Link>
        {!isScrolled && (
          <div className="hidden w-full flex-row items-center justify-center gap-[3.48rem] md:flex">
            <div className="flex w-10/12 items-center justify-center">
              <div
                className={cn(
                  "flex w-fit items-center justify-center gap-12 rounded-full bg-white/30 px-12 py-4 backdrop-blur-md",
                  pathname !== "/" && "bg-primary",
                )}
              >
                <Button
                  asChild
                  variant="link"
                  className="px-0 font-playfair font-semibold uppercase text-accent text-white"
                >
                  <Link href="/">Home</Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  className="px-0 font-playfair font-semibold uppercase text-accent text-white"
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
                  <Image
                    src="/images/logo.png"
                    width={74}
                    height={38}
                    alt="logo"
                    className="w-32"
                  />
                </Link>
                <Button
                  asChild
                  variant="link"
                  className="px-0 font-playfair font-semibold uppercase text-accent text-white"
                >
                  <Link href="/about-us">About</Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  className="px-0 font-playfair font-semibold uppercase text-accent text-white"
                >
                  <Link href="/table-booking"> Book Now</Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  className="px-0 font-playfair font-semibold uppercase text-accent text-white"
                >
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>
            {/* <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/gift-voucher">Gift Voucher</Link>
            </Button> */}
            {/* <Link href="/table-booking">
              <Button
                className="group h-11 items-center gap-[1.19rem] rounded-full font-semibold uppercase bg-white/30 backdrop-blur-md font-playfair px-6 py-7"
                variant="secondary"
              >
                Book Table
                <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
            </Link> */}
          </div>
        )}
        {/* {!isScrolled && (
          <div className="hidden items-center justify-center gap-[2.5rem] md:flex">
            {pathname !== "/" && (
              <CartSheet>
                <Button
                  variant="ghost"
                  className="px-1 py-1 hover:bg-transparent"
                  disabled={!BetaMenuActive}
                >
                  <span className="sr-only">Shopping Cart</span>
                  <Icons.shoppingCart />
                </Button>
              </CartSheet>
            )}
            <Link href="/menu">
              <Button
                className="group h-11 items-center gap-[1.19rem] rounded-full bg-[#ccad64] font-semibold uppercase text-[#282828] hover:bg-primary"
                variant="secondary"
              >
                View Menu
                <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        )} */}
        {isScrolled ? (
          <Sidebar>
            <Button
              variant="ghost"
              className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
            >
              <span className="sr-only">Menu</span>
              <Icons.menu />
            </Button>
          </Sidebar>
        ) : (
          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden"
            >
              <span className="sr-only">Menu</span>
              <EqualizerIcon />
            </Button>
          </Sidebar>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="equalizer-icon rotate">
      <div
        className={clsx("bar", pathname === "/" ? "bg-white" : "bg-black")}
      ></div>
      <div
        className={clsx("bar", pathname === "/" ? "bg-white" : "bg-black")}
      ></div>
      <div
        className={clsx("bar", pathname === "/" ? "bg-white" : "bg-black")}
      ></div>
    </div>
  );
};
