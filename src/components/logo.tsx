import Image from "next/image";
import logo from "@/assets/logo.png";

interface Props {
  width?: number;
  height?: number;
}

const Logo = ({ width, height }: Props) => {
  return (
    <>
      <Image
        width={width ?? 300}
        height={height}
        src={logo}
        alt="Logo Jobseeker"
      />
    </>
  );
};

export default Logo;
