import Container from "@/components/container";
import { getTranslation } from "@/lang";
import useLanguage from "@/lib/lang-switcher";
import Image from "next/image";

const HowWeHelp: React.FC = () => {
  const { lang } = useLanguage();
  const text = getTranslation(lang);

  return (
    <section className="py-12">
      <div className="py-12">
        <Container>
          <h2 className="mb-6 text-center text-5xl font-bold text-secondary">
            How We Help Our Target Market
          </h2>
          <p className="mb-3 text-center text-2xl font-semibold text-primary before:h-1 before:flex-1 before:bg-gray-200 after:h-1 after:flex-1 after:bg-gray-200 md:flex md:items-center md:gap-3 md:before:block md:before:content-['_'] md:after:block md:after:content-['_']">
            <span className="block">
              For Those of You Who Are Looking for Job Opportunities
            </span>
          </p>
          <p className="text-center text-lg text-textdefault md:mx-auto md:max-w-3xl">
            We help candidates in Indonesia to find the best opportunity and
            maximize their potential with our social recruitment platform.
          </p>
        </Container>
      </div>
      <div className="bg-primary py-12">
        <Container>
          <div className="mb-12 flex justify-center">
            <span className="block rounded-full bg-white px-4 py-2 font-bold text-primary">
              JOBSEEKER APP
            </span>
          </div>

          <div className="flex gap-6">
            <div className="flex w-2/5 items-center justify-end">
              <div className="">{/* <Image src={} /> */}</div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white">
                #CaraBaruCariKerja
              </h2>
              <p className="text-lg text-white">
                <span className="font-bold">Jobseeker App</span> is recruitment
                platform with social media format that simplifies the process
                for job seekers especially non-white-collar workers in Indonesia
                to get a job that suits their skills and experience in no time.
                It’s like a job dating app.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HowWeHelp;
