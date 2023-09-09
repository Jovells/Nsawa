import NsawaCampaigns from "./components/Campaigns";
import Features from "./components/Features";
import Hero from "./components/Hero";
import News from "./components/News";
import Vision from "./components/Vision";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Vision />
      <NsawaCampaigns />
      <News />
    </>
  );
};

export default Home;
