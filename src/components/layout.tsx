import Footer from "./footer";
import Navbar from "./navbar";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
