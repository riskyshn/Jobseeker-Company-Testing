import React from "react";
import Image from "next/image";
import Container from "@/components/container";

import Sandi from "@/assets/about-us-page/Sandi.png";
import Helmy from "@/assets/about-us-page/Helmy.png";
import Gita from "@/assets/about-us-page/Gita.png";
import Rizal from "@/assets/about-us-page/Rizal.png";
import Daniel from "@/assets/about-us-page/Daniel.png";
import Philip from "@/assets/about-us-page/Ng.png";
import Steve from "@/assets/about-us-page/Steve.png";
import Biju from "@/assets/about-us-page/Biju.png";
import Akhsat from "@/assets/about-us-page/Akhsat.png";

const items = [
  {
    name: "Sandiaga Uno",
    position: "Minister of Tourism and Creative Economy",
    image: Sandi,
  },
  {
    name: "Helmy Yahya",
    position: "Entrepreneur, Coach, and Actor",
    image: Helmy,
  },
  {
    name: "Gita Wirjawan",
    position: "Entrepreneur and Former Minister of Trade",
    image: Gita,
  },
  {
    name: "Rizal Gozali",
    position: "Managing Director at Credit Suisse",
    image: Rizal,
  },
  {
    name: "Daniel Surya",
    position: "Executive Chairman & Co-Founder WIR Group",
    image: Daniel,
  },
  {
    name: "Philip Ng",
    position: "Co-Founder & CEO BitCyber",
    image: Philip,
  },
  {
    name: "Steve Lovato",
    position: "Founder & Managing Director, Incentive Dynamics",
    image: Steve,
  },
  {
    name: "Biju Mohan",
    position: "Managing Director and Partner at Accenture",
    image: Biju,
  },
  {
    name: "Akshat Chawla",
    position:
      "Vice President and General Manager (Asia Pacific Japan) Autofleet",
    image: Akhsat,
  },
];

const OurAdvisors: React.FC = () => {
  return (
    <section className="py-12 md:gap-16 md:py-24">
      <Container className="grid grid-cols-1 gap-8">
        <h2 className="mb-6 text-center text-4xl font-bold text-secondary md:text-6xl">
          Our Advisors
        </h2>

        <div className="flex flex-col flex-wrap items-center justify-center md:flex-row">
          {items.map((el, i) => (
            <div key={i} className="w-2/3 p-3 md:w-1/5">
              <Image
                alt=""
                src={el.image}
                className="mx-auto mb-3 block w-4/5"
              />
              <h3 className="text-center text-lg font-semibold">{el.name}</h3>
              <p className="text-center text-textdefault">{el.position}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurAdvisors;
