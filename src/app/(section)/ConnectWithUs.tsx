// "use client";

// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import gsap, { Bounce, Power1, Power2, Power3, Power4 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// const ConnectWithUs = ({}) => {
//   const text = "Follow us";
//   return (
//     <section className="h-full w-full px-4 py-12 md:px-20 md:py-24">
//       <div className="flex flex-col gap-8 md:gap-14">
//         <div>
//           <p className="non-italic flex items-center justify-center gap-3 text-center font-playfair text-lg font-light uppercase text-primary">
//             Follow us
//           </p>
//         </div>
//         <div className="flex h-full w-full flex-col gap-8 md:flex-row">
//           <div className="w-full md:w-[25%]">
//             <Link
//               href={
//                 "https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
//               }
//               target="_blank"
//             >
//               <Image
//                 src="/images/home/social/1.png"
//                 width={380}
//                 height={395}
//                 alt="alt"
//                 className="h-auto w-full rounded-2xl hover:cursor-pointer"
//               />
//             </Link>
//           </div>
//           <div className="w-full md:w-[25%]">
//             <Link
//               href={
//                 "https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
//               }
//               target="_blank"
//             >
//               <Image
//                 src="/images/home/social/5.png"
//                 width={380}
//                 height={395}
//                 alt="alt"
//                 className="h-auto w-full rounded-2xl hover:cursor-pointer"
//               />
//             </Link>
//           </div>
//           <div className="w-full md:w-[25%]">
//             <Link
//               href={
//                 "https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
//               }
//               target="_blank"
//             >
//               <Image
//                 src="/images/home/social/3.png"
//                 width={380}
//                 height={395}
//                 alt="alt"
//                 className="h-auto w-full rounded-2xl hover:cursor-pointer"
//               />
//             </Link>
//           </div>
//           <div className="w-full md:w-[25%]">
//             <Link
//               href={
//                 "https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
//               }
//               target="_blank"
//             >
//               <Image
//                 src="/images/home/social/4.png"
//                 width={380}
//                 height={395}
//                 alt="alt"
//                 className="h-auto w-full rounded-2xl hover:cursor-pointer"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectWithUs;

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ConnectWithUs = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]); // This stores the references to the divs.

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the "Follow us" text
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play restart play restart",
          },
        },
      );

      // Animate the images with a stagger
      gsap.fromTo(
        imagesRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play restart play restart",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-full w-full px-4 py-12 md:px-20 md:py-24"
    >
      <div className="flex flex-col gap-8 md:gap-14">
        <div>
          <p
            ref={textRef}
            className="non-italic flex items-center justify-center gap-3 text-center font-playfair text-lg font-light uppercase text-primary"
          >
            Follow us
          </p>
        </div>
        <div className="flex h-full w-full flex-col gap-8 md:flex-row">
          {["1.png", "5.png", "3.png", "4.png"].map((img, i) => (
            <div key={i} className="w-full md:w-[25%]">
              <Link
                href="https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
                target="_blank"
              >
                <div
                  ref={(el) => {
                    imagesRef.current[i] = el;
                  }} // Storing div refs
                  className="overflow-hidden rounded-2xl hover:cursor-pointer"
                >
                  <Image
                    src={`/images/home/social/${img}`}
                    width={380}
                    height={395}
                    alt={`social-${i}`}
                    className="h-auto w-full"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
