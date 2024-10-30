const Hero = () => {
    return (
      <section className="relative p-10 bg-gradient-to-r from-pink-100 to-yellow-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-600">Travel top destination of the world</h1>
          <p className="mt-4 text-gray-600">We always make our customers happy by providing as many choices as possible</p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-purple-500 text-white px-6 py-3 rounded-lg">Get Started</button>
            <button className="bg-transparent border border-purple-500 text-purple-500 px-6 py-3 rounded-lg">Watch Demo</button>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <img src="/image1.jpg" alt="Top places" className="rounded-lg" />
          <img src="/image2.jpg" alt="Top places" className="rounded-lg" />
          <img src="/image3.jpg" alt="Top places" className="rounded-lg" />
        </div>
      </section>
    );
  };
export default Hero;