import useLanguage from "@/lib/lang-switcher";
import Container from "../../container";
import { getTranslation } from "@/lang";

const WhatWeDo = () => {
  const { lang } = useLanguage();

  const text = getTranslation(lang as "en" | "id");

  return (
    <>
      <Container className="pt-24 pb-8">
        <div className="md:pb-12 pb-6">
          <h2 className="text-3xl text-secondary font-semibold">
            {text["what-we-do"]}
          </h2>
          <span className="text-muted text-lg block mt-4">
            {text["we-connect"]}
          </span>
        </div>
        <div className="md:flex md:items-center ">
          <div className="hidden md:w-[10%] md:block"></div>
          <div className="md:w-[90%] md:border-l md:pl-6 md:py-4">
            <span className="text-textdefault text-lg">
              Was established in February 2022 with the goal of creating a
              reliable economic ecosystem for the workforce. Our platform aims
              to empower every individual by connecting them with opportunities
              that align with their skills and experience.
              <br /> <br />
              We strive to go beyond traditional employment and also support
              compliance management through innovative solutions. Our approach
              emphasizes the use of technology, collaboration, and empowerment
              to bring about positive transformations in individuals lives and
              make a meaningful contribution to the overall economic landscape
            </span>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WhatWeDo;
