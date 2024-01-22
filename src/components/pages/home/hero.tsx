import Image from "next/image";
import Container from "../../container";
import Connecting from "@/assets/connecting.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState<string>("Opportunity");

  const textGenerated = ["Opportunity", "Better Job", "Better Life"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get the index of the next text in the array
      const nextIndex =
        (textGenerated.indexOf(text) + 1) % textGenerated.length;
      setText(textGenerated[nextIndex]);
    }, 2000); // Change text every 1 second

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, [text]);

  return (
    <>
      <div
        className="flex h-screen w-full items-center"
        style={{
          // background:
          //   "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('./landing.png')",
          background: "url('./landing.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div>
            <Image src={Connecting} width={700} alt="Connecting word" />
            <h1 className="hidden">Connecting people with Opportunities</h1>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-muted md:text-4xl">
                People with
              </span>
              <span className="text-2xl font-semibold text-primary md:text-4xl">
                {text}.
              </span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
