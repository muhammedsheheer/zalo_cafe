import Image from "next/image";

const Hero = ({}) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold leading-[66px] text-primary lg:text-6xl">
                {" "}
                Welcome to Zalos Cafe
                <br /> A Symphony of Flavors
              </h1>
              <p className="font-manrope font-normal text-black">
                At Zalos Cafe, every dish is a celebration of rich traditions
                and bold flavors. From the finest ingredients to time-honored
                recipes, we bring you an unforgettable dining experience
                inspired by the heart of Middle Eastern and Mediterranean
                cuisine. Whether you’re indulging in perfectly grilled kebabs,
                savoring aromatic spices, or treating yourself to a sweet
                delight, each bite tells a story of authenticity, passion, and
                culinary mastery.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
            <Image
              src="/images/about-us/image1.jpg"
              width={951}
              height={975}
              alt="hero"
              className="h-[100vh] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
