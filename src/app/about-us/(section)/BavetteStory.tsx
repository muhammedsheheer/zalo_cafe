import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11">
        <h2 className="font-oswald text-center text-8xl text-[#9b3733]/20 md:left-[15%] md:text-8xl">
          The Zalos Cafe
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/image3.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-6xl sm:text-7xl md:text-start">
              From Passion
              <br />
              to Perfection
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#000] md:text-start">
              What began as a vision—to bring the soul of Middle Eastern and
              Mediterranean cuisine to life—has evolved into Zalos Café, a
              culinary destination where tradition meets innovation. Founded
              with a deep passion for authenticity, Zalos Café was born from the
              desire to create dishes that are more than just meals—they are
              experiences.
              <br />
              From our humble beginnings to becoming a haven for food lovers,
              our commitment to quality, rich flavors, and warm hospitality has
              never wavered. Every ingredient is carefully sourced, every spice
              tells a story, and every dish is a tribute to the culinary
              heritage we celebrate.
              <br />
              At Zalos Café, we don’t just serve food—we craft unforgettable
              moments. As we continue to grow, our mission remains the same: to
              blend tradition with creativity and offer an extraordinary dining
              experience that honors the essence of Middle Eastern flavors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
