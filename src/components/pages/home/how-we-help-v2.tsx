import Container from "@/components/container";
import { getTranslation } from "@/lang";
import useLanguage from "@/lib/lang-switcher";
import jobseekerAppIcon from "@/assets/jobseeker.app-icon.png";
import Image from "next/image";

const HowWeHelp: React.FC = () => {
  const { lang } = useLanguage();
  const text = getTranslation(lang);

  return (
    <section className="flex flex-col gap-8 py-12 md:gap-16 md:py-24">
      <div className="w-full">
        <Container>
          <h2 className="mb-6 text-center text-4xl font-bold text-secondary md:text-6xl">
            How We Help Our Target Market
          </h2>
          <p className="mb-3 text-center text-2xl font-semibold text-primary before:h-1 before:flex-1 before:bg-gray-50 after:h-1 after:flex-1 after:bg-gray-50 md:flex md:items-center md:gap-3 md:before:block md:before:content-['_'] md:after:block md:after:content-['_']">
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

      <div className="w-full bg-primary py-12 md:py-24">
        <Container>
          <div className="mb-12 flex justify-center">
            <span className="flex items-center justify-center rounded-lg bg-white text-center font-bold text-primary">
              <span className="block p-1">
                <Image
                  className="mx-auto block"
                  src={jobseekerAppIcon}
                  width={38}
                  height={38}
                  alt=""
                />
              </span>
              <span className="block pr-4 text-xl">JOBSEEKER APP</span>
            </span>
          </div>

          <div className="flex gap-6">
            <div className="flex-1">
              <div></div>
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
