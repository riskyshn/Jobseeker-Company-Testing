import Image from "next/image";
import HeroImage from "@/assets/about-us-page/AboutUs.png";
import Container from "../../container";

const Hero: React.FC = () => {
  return (
    <section className="py-12 pt-20 md:py-24">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row-reverse">
          <div>
            <Image alt="" src={HeroImage} className="block w-full" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-secondary md:text-6xl">
              About Us
            </h2>
            <p className="text-textdefault">
              Jobseeker Company was established in February 2022 with the goal
              of creating one reliable economic ecosystem for the workforce. Our
              recruitment platform aims to empower each individual by connecting
              them with opportunities that align with their skills and
              experience.
            </p>
            <p className="text-textdefault">
              We want to enable them to improve their standard of living and
              achieve better prospects for their future.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
