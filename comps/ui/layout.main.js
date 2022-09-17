import Header from "../navigation/Header";
import Footer from "../navigation/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;
