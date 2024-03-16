import Background from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero min-h-[80vh] mx-auto container image-full" >
      <figure><img src={Background} alt="Shoes" /></figure>
      
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-[60%]">
          <h1 className="mb-5 text-5xl font-bold text-gray-300">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5 text-gray-300">
            Learn and explore new recipes with necessary calories that is most
            important for you and your friends and family! Explore our site and
            get some more information.
          </p>
          <div className="space-x-2">
            <button className="btn btn-accent rounded-3xl">Explore Now</button>
            <button className="text-gray-300 btn btn-outline rounded-3xl">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
