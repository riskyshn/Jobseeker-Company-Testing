import Image from "next/image";
import Container from "@/components/container";
import jobseekerAppIcon from "@/assets/jobseeker.app-icon.png";
import jobseekerAppDemo from "@/assets/jobseeker.app-demo.png";
import jobseekerPartnersIcon from "@/assets/jobseeker.partners-icon.png";
import jobseekerPartnersDemo from "@/assets/jobseeker.partners-demo.png";
import jobseekerLifeDemo from "@/assets/jobseeker.life-demo.png";
import jobseekerServicesDemo from "@/assets/jobseeker.services-demo.png";
import playsoteImg from "@/assets/playstore.png";
import appsoteImg from "@/assets/appstore.png";
import hrmsDemo from "@/assets/hrms-demo.png";
import hrisIcon from "@/assets/icon-hris.png";
import atsIcon from "@/assets/icon-ats.png";
import hrcIcon from "@/assets/icon-hrc.png";
import esIcon from "@/assets/icon-es.png";
import itaSdaIcon from "@/assets/icon-ita-sda.png";

const HowWeHelp: React.FC = () => {
  return (
    <section className="py-12 md:gap-16 md:py-24">
      <Container className="grid grid-cols-1 gap-8">
        <h2 className="mb-6 text-center text-4xl font-bold text-secondary md:text-6xl">
          How We Help Our Target Market
        </h2>

        <div>
          <h3 className="mb-3 text-center text-2xl font-semibold text-primary before:h-1 before:flex-1 before:bg-gray-100 after:h-1 after:flex-1 after:bg-gray-100 md:flex md:items-center md:gap-3 md:before:block md:before:content-['_'] md:after:block md:after:content-['_']">
            <span className="block">
              For Those of You Who Are Looking for Job Opportunities
            </span>
          </h3>
          <p className="mb-8 text-center text-lg text-textdefault md:mx-auto md:max-w-3xl">
            We help candidates in Indonesia to find the best opportunity and
            maximize their potential with our social recruitment platform.
          </p>
        </div>

        <div className="rounded-lg bg-primary p-4 md:py-12">
          <div className="mb-4 flex justify-center p-4">
            <span className="block items-center justify-center rounded-full bg-white px-4 py-1 text-center text-xs font-bold text-primary md:px-6 md:py-2 md:text-base">
              JOBSEEKER APP
            </span>
          </div>

          <div className="flex items-center justify-center md:mx-auto md:w-3/4">
            <div className="w-[45%] md:w-[35%]">
              <Image
                className="block h-auto w-full"
                src={jobseekerAppDemo}
                alt=""
              />
            </div>
            <div className="w-[55%] md:w-[65%]">
              <Image
                className="mb-3 block h-10 w-10 md:mb-6 md:h-20 md:w-20"
                src={jobseekerAppIcon}
                alt=""
              />
              <h2 className="mb-3 font-bold text-white md:mb-6 md:text-2xl">
                #CaraBaruCariKerja
              </h2>
              <p className="mb-3 text-xs text-white md:mb-6 md:text-lg">
                <span className="font-bold">Jobseeker App</span> is recruitment
                platform with social media format that simplifies the process
                for job seekers especially non-white-collar workers in Indonesia
                to get a job that suits their skills and experience in no time.
                It’s like a job dating app.
              </p>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <a href="#" className="block">
                  <Image src={playsoteImg} alt="" className="block w-full" />
                </a>
                <a href="#" className="block">
                  <Image src={appsoteImg} alt="" className="block w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12">
          <h3 className="mb-3 text-center text-2xl font-semibold text-secondary before:h-1 before:flex-1 before:bg-gray-100 after:h-1 after:flex-1 after:bg-gray-100 md:flex md:items-center md:gap-3 md:before:block md:before:content-['_'] md:after:block md:after:content-['_']">
            <span className="block">
              For Business Owner / Entreprise Who Are Looking for The Best
              Talent
            </span>
          </h3>
          <p className="mb-8 text-center text-lg text-textdefault md:mx-auto md:max-w-3xl">
            We help candidates in Indonesia to find the best opportunity and
            maximize their potential with our social recruitment platform.
          </p>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-custom md:py-12">
          <div className="mb-4 flex justify-center p-4">
            <span className="block items-center justify-center rounded-full bg-secondary px-4 py-1 text-center text-xs font-bold text-white md:px-6 md:py-2 md:text-base">
              JOBSEEKER SOFTWARE (HRMS)
            </span>
          </div>

          <div className="grid grid-cols-1 items-center md:grid-cols-3">
            <div className="p-4">
              <Image alt="" src={hrmsDemo} className="block w-full" />
            </div>
            <div className="p-4">
              <Image alt="" src={jobseekerLifeDemo} className="block w-full" />
            </div>
            <div className="grid grid-cols-1 gap-4 p-4">
              <div>
                <Image alt="" src={atsIcon} className="mx-auto block w-24" />
                <h4 className="font-semibold text-secondary md:text-lg">
                  Recruitment (ATS)
                </h4>
                <p className="text-xs md:text-sm">
                  Hire high quality candidates from your own talent pool with a
                  customized job portal powered by our Applicant Tracking
                  System.
                </p>
              </div>
              <div>
                <Image alt="" src={hrisIcon} className="mx-auto block w-24" />
                <h4 className="font-semibold text-secondary md:text-lg">
                  Management & Empowering (HRIS)
                </h4>
                <p className="text-xs md:text-sm">
                  Monitoring performance, managing employees, developing
                  employees through planned activities, analyzing and planning
                  the workforce.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-custom md:py-12">
          <div className="mb-4 flex justify-center p-4">
            <span className="block items-center justify-center rounded-full bg-secondary px-4 py-1 text-center text-xs font-bold text-white md:px-6 md:py-2 md:text-base">
              JOBSEEKER SERVICES
            </span>
          </div>

          <div className="grid grid-cols-1 items-center md:grid-cols-3">
            <div className="p-4 md:hidden">
              <Image
                alt=""
                src={jobseekerServicesDemo}
                className="block w-full"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 p-4">
              <div>
                <Image alt="" src={hrcIcon} className="mx-auto block w-24" />
                <h4 className="font-semibold text-secondary md:text-lg">
                  Human Resource Consunting (HRC)
                </h4>
                <p className="text-xs md:text-sm">
                  Maximize your company's success starting from the HR Division.
                  Our expert team is ready to become your trusted HR partner,
                  providing reliable consultation to overcome every HR challenge
                  your company faces.
                </p>
              </div>
            </div>
            <div className="hidden p-4 md:block">
              <Image
                alt=""
                src={jobseekerServicesDemo}
                className="block w-full"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 p-4">
              <div>
                <Image alt="" src={itaSdaIcon} className="mx-auto block w-24" />
                <h4 className="font-semibold text-secondary md:text-lg">
                  ITA/SDA
                </h4>
                <p className="text-xs md:text-sm">
                  Explore a new era of innovation and flexibility with our
                  trusted partners. Personalized IT solutions can empower your
                  team with precision skills and expertise, driving improvements
                  in your projects.
                </p>
              </div>
              <div>
                <Image alt="" src={esIcon} className="mx-auto block w-24" />
                <h4 className="font-semibold text-secondary md:text-lg">
                  Executive Search (ES)
                </h4>
                <p className="text-xs md:text-sm">
                  Support your recruiting team in attracting talented
                  individuals or managing large-scale recruitment to facilitate
                  your business expansion in Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-secondary p-4 md:py-12">
          <div className="mb-4 flex justify-center p-4">
            <span className="block items-center justify-center rounded-full bg-white px-4 py-1 text-center text-xs font-bold text-secondary md:px-6 md:py-2 md:text-base">
              JOBSEEKER PARTNERS
            </span>
          </div>

          <div className="flex items-center justify-center md:mx-auto md:w-3/4">
            <div className="w-[45%] md:w-[35%]">
              <Image
                className="block h-auto w-full"
                src={jobseekerPartnersDemo}
                alt=""
              />
            </div>
            <div className="w-[55%] md:w-[65%]">
              <Image
                className="mb-3 block h-10 w-10 md:mb-6 md:h-20 md:w-20"
                src={jobseekerPartnersIcon}
                alt=""
              />
              <h2 className="mb-3 font-bold text-white md:mb-6 md:text-2xl">
                #CaraBaruCariKerja
              </h2>
              <p className="mb-3 text-xs text-white md:mb-6 md:text-lg">
                <span className="font-bold">Jobseeker App</span> is recruitment
                platform with social media format that simplifies the process
                for job seekers especially non-white-collar workers in Indonesia
                to get a job that suits their skills and experience in no time.
                It’s like a job dating app.
              </p>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <a href="#" className="block">
                  <Image src={playsoteImg} alt="" className="block w-full" />
                </a>
                <a href="#" className="block">
                  <Image src={appsoteImg} alt="" className="block w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowWeHelp;
