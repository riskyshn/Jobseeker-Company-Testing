import useLanguage from "@/lib/lang-switcher";
import Container from "../../container";
import { getTranslation } from "@/lang";

const WhatWeDo = () => {
  const { lang } = useLanguage();

  const text = getTranslation(lang as "en" | "id");

  return (
    <section className="py-12 md:py-24">
      <Container>
        <div className="pb-6 md:pb-12">
          <h2 className="mb-4 text-4xl font-bold text-secondary md:text-6xl">
            {text["what-we-do"]}
          </h2>
          <p className="text-xl text-muted">{text["we-connect"]}</p>
        </div>

        <div className="md:flex md:items-center">
          <div className="hidden md:block md:w-[10%]"></div>
          <div className="md:w-[90%] md:border-l md:py-4 md:pl-6">
            <span className="text-textdefault md:text-lg">
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
    </section>
  );
};

export default WhatWeDo;
