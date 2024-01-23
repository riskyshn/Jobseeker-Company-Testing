import Image from "next/image";
import Container from "../../container";
import OurMarketChart from "@/assets/chart.png";
import OurMarketChartMobile from "@/assets/chart-mobile.png";
import Indonesia from "@/assets/indonesia.png";
import Chart2 from "@/assets/chart-2.png";
import useLanguage from "@/lib/lang-switcher";
import { getTranslation } from "@/lang";

const OurMarket: React.FC = () => {
  const { lang } = useLanguage();
  const text = getTranslation(lang);

  return (
    <section className="bg-gray-white py-12 md:py-24">
      <h2 className="mb-8 text-center text-4xl font-bold text-secondary md:mb-12 md:text-6xl">
        {text["our-market"]}
      </h2>

      <Container className="flex flex-col gap-4 md:gap-8">
        <div className="rounded-lg bg-white p-4 shadow-custom md:p-10">
          <span className="text-sm text-gray-600 md:text-base">
            {text.employment}
          </span>
          <span className="mt-2 block text-5xl text-secondary">
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

        <div className="flex flex-col gap-8 rounded-lg bg-white px-4 py-8 shadow-custom md:flex-row md:items-center md:p-10">
          <div className="flex-1">
            <h2 className="mb-3 text-3xl font-semibold text-secondary md:text-4xl md:font-normal">
              {text["first-market"]}
            </h2>
            <p className="md:text-lg">
              In 2022,{" "}
              <span className="font-semibold text-secondary">Indonesia</span>{" "}
              have more than{" "}
              <span className="font-semibold text-secondary">
                75 million workforces
              </span>{" "}
              who are junior high school graduates to diplomas.
              {text["first-market-desc"]}
            </p>
          </div>

          <div className="text-center md:w-2/5">
            <Image src={Indonesia} alt="Peta indonesia" className="w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-8 rounded-lg bg-white px-4 py-8 shadow-custom md:flex-row-reverse md:items-center md:p-10">
          <div className="flex-1">
            <h2 className="mb-3 text-3xl font-semibold text-secondary md:text-4xl md:font-normal">
              {text["work-based"]}
            </h2>
            <p className="md:text-lg">{text["work-based-desc"]}</p>
          </div>
          <div className="text-center md:w-1/3">
            <Image src={Chart2} alt="" className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurMarket;
