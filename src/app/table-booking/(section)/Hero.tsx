const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex h-full min-h-[400px] w-full flex-col items-center justify-center gap-[1.38rem] text-[1.5rem] leading-[110%]"
      style={{
        background:
          "linear-gradient(170deg, rgba(0, 0, 0, 0.00) 7.51%, rgba(0, 0, 0, 0.80) 92.93%), url(/images/about-us/image2.jpg) lightgray 50% / cover no-repeat",
      }}
    >
      <h1 className="font-oswald w-full text-center text-[4.75rem] leading-[80%]">
        Table Booking
      </h1>
    </section>
  );
};

export default Hero;
