"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-primary">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div
        className="absolute left-0 top-0 h-full w-full overflow-hidden"
        style={{
          backgroundImage: "url('/images/home/frame.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      ></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex flex-col gap-2">
            <h3 className="text-center font-playfair text-[#F7F4ED] md:text-start">
              Specials
            </h3>
            <h1 className="max-w-[600px] text-center font-italiana text-5xl text-[#F7F4ED] md:text-7xl">
              Zalo Specials
            </h1>
          </div>
          <Button
            asChild
            className="z-40 flex items-center justify-center gap-3 rounded-full bg-white px-6 py-7 font-playfair font-semibold uppercase text-black hover:bg-[#FFF] hover:text-[#9c5249]"
          >
            <Link href="/menu">
              Online Order
              <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
