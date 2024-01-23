import Head from "next/head";
import Container from "@/components/container";
import { Input, Select, Textarea } from "@/components/ui/forms";
import Landing from "@/assets/landing.png";
import Logo from "@/assets/footerlogo.svg";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>

      <Container className="pb-12 pt-24">
        <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-custom md:flex-row-reverse">
          <div
            className="flex w-full items-center justify-center bg-cover bg-center md:w-2/5"
            style={{ background: `url('${Landing.src}')` }}
          >
            <div className="py-8">
              <Image alt="" src={Logo} className="block h-24 w-24" />
            </div>
          </div>
          <form className="flex-1 p-6">
            <h2 className="text-3xl font-bold text-secondary">
              Reach Out to Our Team
            </h2>
            <p className="mb-6 text-textdefault">
              Please fill out the form below to start
            </p>

            <Input className="mb-4" label="Full Name" name="name" />
            <Input className="mb-4" label="Email Address" name="email" />
            <Input className="mb-4" label="Phone Number" name="phone" />
            <Select
              className="mb-4"
              label="I’m an Enterprise/Candidate/SME/Media"
              name="idn"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
              ]}
            />
            <Textarea
              className="mb-4"
              rows={4}
              label="Tell us more about what you need?"
              name="name"
            />

            <button className="my-6 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-10 font-semibold text-white transition-colors hover:bg-blue-500">
              <span className="block uppercase">Submit</span>
              <FiArrowRightCircle className="block" size={22} />
            </button>
          </form>
        </div>
      </Container>
    </>
  );
}
