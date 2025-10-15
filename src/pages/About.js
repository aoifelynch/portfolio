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
                Okay, so, my name is Aoife Lynch. I'm twenty years old. I was born in Kerry, lived in Australia for a few years and now I live in Dublin whilst studying my degree at IADT.
              </div>
            </div>
            
            <div className="chat chat-start">
              <div className="chat-bubble bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                You got any interests?
              </div>
            </div>
            
            <div className="chat chat-end">
              <div className="chat-bubble bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg">
                Who has time for hobbies these days!? JK... if I ever have a day off it is spent either with my friends, playing games or catching up on TV (I will have my cat with me during all of those instances)
              </div>
            </div>

            <div className="chat chat-start">
              <div className="chat-bubble bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                What's your plan for the future?
              </div>
            </div>
            
            <div className="chat chat-end">
              <div className="chat-bubble bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg">
                Well after I get this degree, I'm planning on continuing to live and work in Dublin. However, the dream is to be able to go between Australia and Dublin while working remotely (year-long summer!)
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
