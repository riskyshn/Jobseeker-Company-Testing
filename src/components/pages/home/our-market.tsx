import Image from "next/image";
import Container from "../../container";
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
    <section className="flex flex-col gap-12">
      <div className="w-full">
        <Container>
          <h2 className="mb-8 text-center text-4xl font-bold text-secondary md:text-6xl">
            {text["our-market"]}
          </h2>

          <div className="mt-4 rounded-lg bg-white p-4 shadow-custom md:p-10 md:leading-8">
            <span className="text-sm text-gray-600 md:text-base">
              {text.employment}
            </span>
            <span className="mt-2 block text-4xl text-secondary">
              {text.number}
            </span>
            <span className="mt-2 block text-sm text-gray-600 md:text-base">
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
              className="mt-8 block w-full md:hidden"
            />

            <div className="mt-4  items-center gap-8 text-[10px] text-muted md:flex md:text-sm">
              <span>{text.axis}</span>
              <div className="flex items-center gap-1 md:gap-3">
                <div className="h-1 w-10 bg-primary md:h-2 md:w-24" />
                <span>{text["total-employment"]}</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="w-full">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex items-center justify-center rounded-lg bg-white p-6 shadow-custom md:p-10">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-secondary">
                  {text["first-market"]}
                </h2>
                <span className="mt-3 block">
                  In 2022,{" "}
                  <span className="font-semibold text-secondary">
                    Indonesia
                  </span>{" "}
                  have more than{" "}
                  <span className="font-semibold text-secondary">
                    75 million workforces
                  </span>{" "}
                  who are junior high school graduates to diplomas.
                  {text["first-market-desc"]}
                </span>

                <Image
                  src={Indonesia}
                  alt=""
                  className="mx-auto max-w-[90%] py-12"
                />
              </div>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-white p-6 shadow-custom md:p-10">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-secondary">
                  {text["work-based"]}
                </h2>
                <span className="mt-3 block">{text["work-based-desc"]}</span>

                <Image
                  src={Chart2}
                  alt=""
                  className="mx-auto max-w-[55%] py-12"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default OurMarket;
