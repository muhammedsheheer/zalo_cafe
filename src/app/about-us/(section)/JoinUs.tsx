import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/image7.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-black/50" />
      <div className="z-20 flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="font-oswald max-w-[500px] text-center text-5xl md:leading-[60px]">
            Join Us for an
            <br />
            Unforgettable Feast
          </h1>
          <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6]">
            Whether it’s a cozy dinner or a grand gathering, Zalos Café invites
            you to embark on an extraordinary culinary journey. From authentic
            Middle Eastern flavors to hand-selected ingredients, every dish is a
            tribute to our rich heritage and passion for excellence. Immerse
            yourself in an experience where tradition meets innovation, and
            every bite is a celebration of taste and culture.
          </p>
          <Link href="/table-booking">
            <Button
              variant="outline"
              className="group w-fit items-center gap-[1.19rem] border-primary bg-transparent px-6 py-6 font-semibold uppercase text-white hover:bg-primary"
            >
              Book Now{" "}
              <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
