const Home = () => {
  return (
    <>
      <div class="container mx-auto px-4 py-12">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="flex flex-col justify-center">
            <h1 class="text-4xl font-bold mb-4">Hi! I'm Aoife :)</h1>
            <p class="mb-6 text-gray-600">I am a third-year Creative Computing student at IADT. Welcome to my portfolio!</p>
            <a href="/about"><button class="btn btn-primary w-36">About Me!</button></a>
          </div>

          <div class="relative">
            <div class="absolute -top-4 -right-4 w-full h-full bg-secondary rounded-lg"></div>
            <img
              src="https://avatars.githubusercontent.com/u/125558208?v=4"
              class="relative rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mt-12">
          <div class="relative">
            <div class="absolute -top-4 -right-4 w-full h-full bg-secondary rounded-lg"></div>
            <img
              src="https://avatars.githubusercontent.com/u/125558208?v=4"
              class="relative rounded-lg shadow-lg"
            />
          </div>

          <div class="flex flex-col justify-center">
            <h2 class="text-4xl font-bold mb-4">Top Skills</h2>
            <ul class="list-disc pl-6 text-gray-600 mb-6">
              <li>Javascript</li>
              <li>PHP</li>
              <li>Front-end Development</li>
              <li>React.js</li>
              <li>Laravel</li>
            </ul>
            <a href="https://www.linkedin.com/in/aoife-lynch-3687401ba/"><button class="btn btn-primary w-36">See my LinkedIn</button></a>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 py-12">
        <h2 class="text-3xl font-bold mb-4">
          Take a look at some of my previous projects:
        </h2>
        <div class="carousel w-full">
          <div id="item1" class="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              class="w-full"
            />
          </div>
          <div id="item2" class="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              class="w-full"
            />
          </div>
          <div id="item3" class="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              class="w-full"
            />
          </div>
          <div id="item4" class="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              class="w-full"
            />
          </div>
        </div>
        <div class="flex w-full justify-center gap-2 py-2">
          <a href="#item1" class="btn btn-xs">
            1
          </a>
          <a href="#item2" class="btn btn-xs">
            2
          </a>
          <a href="#item3" class="btn btn-xs">
            3
          </a>
          <a href="#item4" class="btn btn-xs">
            4
          </a>
        </div>
        <a href="/projects"><button class="btn btn-primary w-36">See All My Stuff</button></a>
      </div>
    </>
  );
};

export default Home;
