import Hero from "./Hero";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

const Landing = () => {
  const landingStyles = {
    backgroundImage: "url('/images/didi.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="bg-cover bg-center h-[95vh]" style={landingStyles}>
      <TopBar />
      <Navbar />
      <Hero />
    </div>
  );
};

export default Landing;
