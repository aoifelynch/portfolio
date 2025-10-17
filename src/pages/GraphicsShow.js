import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import graphicsData from '../data/graphics.json';

// Import all images
import griefPoster from '../images/griefPoster.png';
import invitationFlyer from '../images/invitationFlyer.png';
import womenPoster from '../images/womenPoster.png';
import logoTransparent from '../images/LogoTransparent.jpeg';
import misneachLogoOld from '../images/320x400.jpeg';
import aoifePic from '../images/aoifepcpic.jpg';

const GraphicsShow = () => {
  const [graphic, setGraphic] = useState(null);
  const { id } = useParams();

  // Image mapping object
  const imageMap = {
    '../images/griefPoster.png': griefPoster,
    '../images/invitationFlyer.png': invitationFlyer,
    '../images/womenPoster.png': womenPoster,
    '../images/LogoTransparent.jpeg': logoTransparent,
    '../images/320x400.jpeg': misneachLogoOld,
    '../images/aoifepcpic.jpg': aoifePic
  };

  useEffect(() => {
    const found = graphicsData.find((item) => item.id.toString() === id);
    setGraphic(found);
  }, [id]);

  if (graphic === null) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mb-4"></div>
          <h2 className="text-lg font-semibold text-gray-700">Loading...</h2>
        </div>
      </div>
    );
  }

  if (graphic === undefined) {
    return <Navigate to="/graphics" />;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <div className="text-sm breadcrumbs">
              <ul className="flex space-x-2 text-gray-600">
                <li>
                  <a href="/" className="hover:text-purple-600 transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/graphics" className="hover:text-purple-600 transition-colors duration-300">
                    Design Work
                  </a>
                </li>
                <li className="text-gray-800 font-medium">{graphic.title}</li>
              </ul>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Graphics Header */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    {graphic.title}
                  </h1>
                  
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium">
                      {graphic.category}
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {graphic.description}
                  </p>
                  
                  {/* Tools Used */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Tools Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {graphic.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Year */}
                  <div className="text-gray-500">
                    <span className="font-medium">Created in:</span> {graphic.year}
                  </div>
                </div>

                {/* Graphics Image Preview */}
                <div className="order-first lg:order-last">
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-white p-4">
                    <img
                      src={imageMap[graphic.image]}
                      alt={graphic.title}
                      className="w-full h-auto object-contain max-h-96"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Full Size Image Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Full Size View
              </h2>
              <div className="flex justify-center">
                <div className="relative max-w-4xl w-full">
                  <img
                    src={imageMap[graphic.image]}
                    alt={graphic.title}
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                  />
                  {/* Image caption */}
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg">
                    <p className="text-sm font-medium">{graphic.title}</p>
                  </div>
                </div>
              </div>
              
              {/* Back to Graphics button */}
              <div className="text-center mt-8">
                <a href="/graphics">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    ← Back to Design Work
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicsShow;
