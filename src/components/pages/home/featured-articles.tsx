import React from "react";
import Image from "next/image";
import Container from "@/components/container";
import img from "@/assets/home-page/hrms-demo.png";
import { FiArrowRight } from "react-icons/fi";

const FeaturedArticles: React.FC = () => {
  return (
    <section className="border-y py-12 md:gap-16 md:py-24">
      <Container className="grid grid-cols-1 gap-8">
        <h2 className="mb-6 text-center text-4xl font-bold text-secondary md:text-6xl">
          Featured Articles
        </h2>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <li key={i} className="flex flex-col gap-4">
              <div className="w-full">
                <Image alt="" src={img} className="block w-full bg-gray-300" />
              </div>

              <div>
                <div className="mb-3 flex">
                  <span className="block rounded-lg bg-blue-100 px-2 text-sm font-semibold leading-7 text-black">
                    22 December 2022
                  </span>
                </div>
                <h3 className="text-xl font-bold">
                  Blog title heading will go here
                </h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>

              <div className="flex">
                <a
                  href="#"
                  className="flex items-center gap-1 py-2 text-blue-600"
                >
                  <span className="block">Read More</span>
                  <FiArrowRight size={20} className="block" />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-center md:justify-end">
          <a
            href="#"
            className="rounded-full border border-blue-600 px-4 py-2 text-blue-600"
          >
            See all articles
          </a>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedArticles;
