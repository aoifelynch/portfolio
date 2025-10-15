import React, { useState } from 'react';
import graphicsData from '../data/graphics.json';

// Import all images
import griefPoster from '../images/griefPoster.png';
import invitationFlyer from '../images/invitationFlyer.png';
import womenPoster from '../images/womenPoster.png';
import logoTransparent from '../images/LogoTransparent.jpeg';
import misneachLogoOld from '../images/320x400.jpeg';
import aoifePic from '../images/aoifepcpic.jpg';

const Graphics = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [filter, setFilter] = useState('All');

  // Image mapping object
  const imageMap = {
    '../images/griefPoster.png': griefPoster,
    '../images/invitationFlyer.png': invitationFlyer,
    '../images/womenPoster.png': womenPoster,
    '../images/LogoTransparent.jpeg': logoTransparent,
    '../images/320x400.jpeg': misneachLogoOld,
    '../images/aoifepcpic.jpg': aoifePic
  };

  const openModal = (imageSrc, title) => {
    setSelectedImage(imageSrc);
    setSelectedTitle(title);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle('');
  };

  // Get unique categories
  const categories = ['All', ...new Set(graphicsData.map(item => item.category))];

  // Filter graphics based on selected category
  const filteredGraphics = filter === 'All' 
    ? graphicsData 
    : graphicsData.filter(item => item.category === filter);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Design Work
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore my creative design projects including logo design, poster creation, 
              and visual branding work. Each piece represents a unique creative challenge 
              and solution.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Graphics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGraphics.map((item) => (
              <div
                key={item.id}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-105"
                onClick={() => openModal(imageMap[item.image], item.title)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={imageMap[item.image]}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{item.category}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs rounded-full font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{item.year}</span>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Full-size image */}
            <img
              src={selectedImage}
              alt={selectedTitle}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image title */}
            {selectedTitle && (
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg">
                <h3 className="text-lg font-bold">{selectedTitle}</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Graphics;
