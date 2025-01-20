import Topsellers from "./Topsellers";
import Banner from "./Banner";
import Recommended from "./Recommended";
import News from "./News";

const Home = () => {
  return (
    <>
      <Banner />
      <Topsellers />
      <Recommended />
      <News />
    </>
  );
};

export default Home;
