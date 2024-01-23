import React from "react";
import Container from "@/components/container";
import { FiArrowRight } from "react-icons/fi";
import CareerImage from "@/assets/about-us-page/Career.png";
import Image from "next/image";

const CarrerAt: React.FC = () => {
  return (
    <section className="py-12 md:gap-16 md:py-24">
      <Container className="flex flex-col items-center gap-4 md:flex-row">
        <div>
          <Image alt="" src={CareerImage} className="w-full" />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-secondary md:text-6xl">
            Career at Jobseeker Company
          </h2>
          <div className="flex flex-col gap-3 text-textdefault">
            <p>
              At Jobseeker Company, we believe that connecting people with
              opportunities can have a significant positive impact on their
              lives. Our dedication to this goal is reflected in our commitment
              to fostering creativity, promoting equality, supporting growth,
              and making a positive social impact through our work.
            </p>
            <p>
              Join us and be a part of a team that is passionate about making a
              difference in people's lives.
            </p>
          </div>
          <div className="flex">
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
            >
              <span className="block">Join Our Team</span>
              <span className="block">
                <FiArrowRight size={20} />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CarrerAt;
