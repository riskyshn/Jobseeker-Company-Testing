import { getTranslation } from "@/lang";
import useLanguage from "@/lib/lang-switcher";

const HowWeHelp = () => {
  const { lang } = useLanguage();
  const text = getTranslation(lang as "en" | "id");

  return (
    <>
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center text-secondary">
          {/* {text.h} */}
        </h2>
      </div>
    </>
  );
};

export default HowWeHelp;
