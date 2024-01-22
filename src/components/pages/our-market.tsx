import Image from "next/image";
import Container from "../container";
import OurMarketChart from "@/assets/chart.png";
import OurMarketChartMobile from "@/assets/chart-mobile.png";
import Indonesia from "@/assets/indonesia.png";
import Chart2 from "@/assets/chart-2.png";
import useLanguage from "@/lib/lang-switcher";
import { getTranslation } from "@/lang";

const OurMarket = () => {
  const { lang } = useLanguage();
  const text = getTranslation(lang as "en" | "id");

  return (
    <>
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center text-secondary">
          {text["our-market"]}
        </h2>

        <Container className="mt-12">
          <div className="mt-4 bg-white p-4 md:p-10 shadow-custom rounded-lg md:leading-8">
            <span className="text-gray-600 text-sm md:text-base">
              {text.employment}
            </span>
            <span className="text-4xl text-secondary block mt-2">
              {text.number}
            </span>
            <span className="text-gray-600 block mt-2 text-sm md:text-base">
              {text["total-employment"]}
            </span>

            <Image
              src={OurMarketChart}
              alt="Our Market Chart"
              className="mt-8 hidden md:block"
            />

            <Image
              src={OurMarketChartMobile}
              alt="Our Market Chart"
              className="mt-8 md:hidden block"
            />

            <div className="mt-4  text-muted md:flex text-[10px] md:text-sm items-center gap-8">
              <span>{text.axis}</span>
              <div className="flex items-center gap-1 md:gap-3">
                <div className="w-10 md:w-24 h-1 md:h-2 bg-primary" />
                <span>{text["total-employment"]}</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow-custom p-6 md:p-10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <h2 className="font-semibold text-xl text-secondary">
                  {text["first-market"]}
                </h2>
                <span className="block mt-3">
                  {/* In 2022,{" "}
                  <span className="text-secondary font-semibold">
                    Indonesia
                  </span>{" "}
                  have more than{" "}
                  <span className="text-secondary font-semibold">
                    75 million workforces
                  </span>{" "}
                  who are junior high school graduates to diplomas. */}
                  {text["first-market-desc"]}
                </span>

                <Image
                  src={Indonesia}
                  alt=""
                  className="py-12 max-w-[90%] mx-auto"
                />
              </div>
            </div>
            <div className="bg-white shadow-custom p-6 md:p-10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <h2 className="font-semibold text-xl text-secondary">
                  {text["work-based"]}
                </h2>
                <span className="block mt-3">{text["work-based-desc"]}</span>

                <Image
                  src={Chart2}
                  alt=""
                  className="py-12 max-w-[80%] mx-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurMarket;
