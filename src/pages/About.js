const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get to know me better through this conversation about my background, 
              interests, and future aspirations.
            </p>
          </div>

          {/* Chat Section */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="chat chat-start">
              <div className="chat-bubble bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                Tell us the basics, who are you!
              </div>
            </div>
            
            <div className="chat chat-end">
              <div className="chat-bubble bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg">
                Okay, so, my name is Aoife Lynch. I'm twenty-one years old. I was born in Kerry, lived in Australia for a few years and now I live in Dublin whilst studying my degree at IADT. I work part-time in my local cinema and also do side-projects for my mother's business whenever she needs help.
              </div>
            </div>
            
            <div className="chat chat-start">
              <div className="chat-bubble bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                You got any interests?
              </div>
            </div>
            
            <div className="chat chat-end">
              <div className="chat-bubble bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg">
                Yeah, I love to travel and explore new places, I've been to 15 countries so far, not bad for a 21-year-old! However, in my normal day-to-day life I like to hang out with friends and family, explore Dublin and try out new recipes in the kitchen.
              </div>
            </div>

            <div className="chat chat-start">
              <div className="chat-bubble bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                What's your plan for the future?
              </div>
            </div>
            
            <div className="chat chat-end">
              <div className="chat-bubble bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg">
                Once I finish my degree I would love to stay in Dublin and work as a front-end developer. I might also consider furthering my education in UI/UX design as I find that side of things really interesting. I'mm not impartial to the idea of working abroad for a few years either, that would be a great experience!
              </div>
            </div>
            
            <div className="chat chat-start">
              <div className="chat-bubble bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                That's the dream! Well, if I have any other questions, I'll give you a shout :)
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex justify-center mt-16">
            <a href="mailto:aoifellynch@outlook.com">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Email Me!
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
