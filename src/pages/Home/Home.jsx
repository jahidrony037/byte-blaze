import wave from "../../assets/wave.svg";
import Hero from "../../components/Hero/Hero";
const Home = () => {
  return (
    <div className="flex flex-col relative justify-center items-center min-h-[calc(100vh-120px)]">
      <Hero />
      <img className=" absolute bottom-0 w-full " src={wave} alt="wave" />
    </div>
  );
};

export default Home;
