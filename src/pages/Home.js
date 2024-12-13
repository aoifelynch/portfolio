const Home = () => {
  return (
    <>
      <div class="container mx-auto px-4 py-12">
        <div class="grid md:grid-cols-2 gap-10">
          <div class="flex flex-col justify-center">
            <h1 class="text-4xl font-bold mb-4">Hi! I'm Aoife :)</h1>
            <p class="text-lg mb-6 text-gray-600">I am a third-year Creative Computing student at IADT. Welcome to my portfolio!</p>
            <a href="/about"><button class="btn btn-primary w-36">About Me!</button></a>
          </div>

          <div class="relative">
            <div class="absolute -top-4 -right-4 w-full h-full bg-secondary rounded-lg"></div>
            <img
              src={require('../images/aoifepics.jpg')}
              class="relative rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mt-12">
          <div class="relative">
            <div class="absolute -top-4 -right-4 w-full h-full bg-secondary rounded-lg"></div>
            <img
              src={require('../images/aoifepcpic.jpg')}
              class="relative rounded-lg shadow-lg"
            />
          </div>

          <div class="flex flex-col justify-center">
            <h2 class="text-4xl font-bold mb-4">Top Skills</h2>
            <ul class="list-disc pl-6 text-lg text-gray-600 mb-6">
              <li>Javascript</li>
              <li>PHP</li>
              <li>Front-end Development</li>
              <li>React.js</li>
              <li>Design & Prototyping</li>
            </ul>
            <a href="https://www.linkedin.com/in/aoife-lynch-3687401ba/"><button class="btn btn-primary w-36">See my LinkedIn</button></a>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 py-12">
        <div class="flex justify-between items-center pt-2">
          <h2 class="text-3xl font-bold mb-4">
            Take a look at some of my previous projects:
          </h2>
          <a href="/projects">
            <button class="btn btn-primary w-44 text-base">See All My Stuff</button>
          </a>
        </div>

        <div class="carousel w-full">

          <div id="item1" class="carousel-item w-full relative group">
            <img
              src={require('../images/countries-1.png')}
              className="w-full h-96 object-cover transition-all duration-300 ease-in-out"
              alt="Rest Countries"
            />
            <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex justify-center items-center">
              <a
                href="https://aoife-reactcountries.web.app"
                class="text-white text-xl font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rest Countries
              </a>
            </div>
          </div>


          <div id="item2" class="carousel-item w-full relative group">
            <img
              src={require('../images/greenville.png')}
              className="w-full h-96 object-cover transition-all duration-300 ease-in-out"
              alt="Greenville Deli"
            />
            <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex justify-center items-center">
              <a
                href="https://aoifesproject.netlify.app/"
                class="text-white text-xl font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Greenville Deli
              </a>
            </div>
          </div>


          <div id="item3" class="carousel-item w-full relative group">
            <img
              src={require('../images/grapevine.png')}
              class="w-full h-96 object-cover transition-all duration-300 ease-in-out"
              alt="Grapevine"
            />
            <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex justify-center items-center">
              <a
                href="https://aoifegrapevine.netlify.app/"
                class="text-white text-xl font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Grapevine News
              </a>
            </div>
          </div>


          <div id="item4" class="carousel-item w-full relative group">
            <img
              src={require('../images/digidepotss.png')}
              class="w-full h-96 object-cover transition-all duration-300 ease-in-out"
              alt="Stock photo"
            />
            <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex justify-center items-center">
              <a
                href="#"
                class="text-white text-xl font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                DigiDepot
              </a>
            </div>
          </div>
        </div>

        <div class="flex w-full justify-center gap-2 py-2">
          <a href="#item1" class="btn btn-xs">1</a>
          <a href="#item2" class="btn btn-xs">2</a>
          <a href="#item3" class="btn btn-xs">3</a>
          <a href="#item4" class="btn btn-xs">4</a>
        </div>




      </div>
    </>
  );
};

export default Home;
