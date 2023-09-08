import Features from "./components/Features";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import Vision from "./components/Vision";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Vision />
      <NewsLetter />
    </div>
  );
};

export default Home;
