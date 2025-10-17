import React, { useState } from 'react';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');

  const openModal = (imageSrc, title) => {
    setSelectedImage(imageSrc);
    setSelectedTitle(title);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle('');
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hi! I'm Aoife
              </h1>
              <p className="text-xl mb-8 text-gray-700 leading-relaxed">
                I am a fourth-year Creative Computing student in the Institute of Art, Design & Technology, Dun Laoghaire. 
                I had my first taster of Computer Science in secondary school where I learnt basic HTML, CSS and Python 
                and have since been dedicated to furthering my education of the subject.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/about">
                  <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-none text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Learn More About Me
                  </button>
                </a>
                <a href="/contact">
                  <button className="btn btn-outline border-purple-400 text-purple-600 hover:bg-purple-50 px-8 py-3 transform hover:scale-105 transition-all duration-300">
                    Get in Touch
                  </button>
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl opacity-60 transform rotate-3"></div>
              <div className="absolute -top-3 -right-3 w-full h-full bg-gradient-to-br from-pink-200 to-blue-200 rounded-2xl opacity-40 transform rotate-1"></div>
              <img
                src={require('../images/aoifepics.jpg')}
                className="relative rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform duration-300 border-4 border-white"
                alt="Aoife Lynch"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Experience Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center order-2 md:order-1">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl opacity-60 transform -rotate-3"></div>
              <div className="absolute -top-3 -left-3 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl opacity-40 transform -rotate-1"></div>
              <img
                src={require('../images/aoifepcpic.jpg')}
                className="relative rounded-2xl shadow-2xl transform hover:-rotate-1 transition-transform duration-300 border-4 border-white"
                alt="Aoife Portrait"
              />
            </div>

            <div className="flex flex-col justify-center order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  My Skills & Experience
                </span>
              </h2>
              <div className="prose prose-lg text-gray-700 mb-8">
                <p className="mb-4">
                  Within my degree, I have gained experience with front-end languages with HTML and CSS frameworks 
                  such as Tailwind, Bootstrap and SASS. I have worked with JavaScript and PHP with Laravel for 
                  back-end development and am proficient with PHPMyAdmin and MySQL.
                </p>
                <p className="mb-4">
                  In my third year, I learnt React and Unity, alongside other new programming languages and software, 
                  to further my skills in software development and to jumpstart my learning on game development.
                </p>
                <p>
                  Outside of my degree, I spend my free time helping friends and family with their own websites, 
                  marketing and graphic design. I have used both WordPress (with Elementor) and Wix for website 
                  design and Figma for both website prototyping and the creation of various brand logos and social media posts.
                </p>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {[
                  'JavaScript', 'React.js', 'PHP & Laravel', 'HTML & CSS', 'MySQL & MongoDB', 'Unity',
                  'Tailwind & Bootstrap CSS', 'Node.js', 'WordPress', 'Figma', 'AI/Machine Learning', 'Object Oriented Programming'
                ].map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <span className="text-sm font-medium text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.linkedin.com/in/aoife-lynch-3687401ba/" target="_blank" rel="noopener noreferrer">
                  <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-none text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    View LinkedIn Profile
                  </button>
                </a>
                <a href="/about">
                  <button className="btn btn-outline border-purple-400 text-purple-600 hover:bg-purple-50 px-8 py-3 transform hover:scale-105 transition-all duration-300">
                    Read Full Bio
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Web Applications
              </span>
            </h2>
            <p className="text-xl text-gray-600">Interactive experiences built with modern technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { 
                src: 'campuspost.png', 
                title: 'Campus Post', 
                desc: 'Social media platform for college students in Ireland with React and Laravel',
                link: 'https://campuspost.web.app/',
                tech: ['React.js', 'Laravel', 'Tailwind CSS', 'MySQL']
              },
              { 
                src: 'medicalclinic.png', 
                title: 'Medical Centre', 
                desc: 'Healthcare management system with API integration and calendar functionality',
                link: 'https://medicalcentre-e830c.web.app/',
                tech: ['React.js', 'API', 'Javascript', 'Axios']
              },
              { 
                src: 'countries-1.png', 
                title: 'Rest Countries App', 
                desc: 'Interactive world map with country data using React and APIs',
                link: 'https://aoife-reactcountries.web.app',
                tech: ['React.js', 'Bootstrap CSS', 'Axios', 'API']
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={require(`../images/${project.src}`)}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    alt={project.title}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Web App
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none hover:scale-105 transition-transform duration-300">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/projects">
              <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-none text-white text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg">
                View All Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
