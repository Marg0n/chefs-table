import Background from "../../assets/hero.png";
import Background1 from "../../assets/hero_original.png";

const Hero = () => {
  return (
    <div
      className="hero min-h-[80vh] mx-auto container bg-center bg-[url(../../assets/hero_original.png)]"
      style={
        {
          // backgroundImage: 'url(../../images/hero.png)',
          // backgroundImage: {Background1},
        }
      }
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-[60%]">
          <h1 className="mb-5 text-5xl font-bold text-white">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5 text-white">
            Learn and explore new recipes with nessesary calories that is most
            important for you and your friends and family! Explore our site and
            get some more information.
          </p>
          <div className="space-x-2">
            <button className="btn btn-accent rounded-3xl">Explore Now</button>
            <button className="text-white btn btn-outline rounded-3xl">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
