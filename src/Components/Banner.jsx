const Banner = () => {
  return (
    <div
      className="hero bg-cover bg-center object-cover min-h-[602px]"
      style={{
        backgroundImage: `url(/src/assets/more/3.png)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60">
        
      </div>
      <div className="text-[#FFFFFF] w-full flex justify-end ">
        <div className="max-w-4xl mr-5">
          <h1 className="mb-5 text-3xl font-rancho">Would you like a Cup of Delicious Coffee?</h1>
          <p className="mb-5 text-sm max-w-3xl font-raleway">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className=" text-[#242222] px-4 py-2 font-rancho hover:bg-gray-300 font-semibold border-2 border-[#242222]  bg-[#E3B577]">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
