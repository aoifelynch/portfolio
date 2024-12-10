import { useLocation } from 'react-router-dom';

const PageNotFound = () => {
  let location = useLocation();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-xl max-w-md mx-auto">
        <h2 className="text-4xl font-extrabold text-primary mb-4">
          Oops! Page {location.pathname} doesn't exist 0_o
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Not sure where you were trying to go buddy but it's okay, click below to go back home.
        </p>
        <a href="/">
          <button className="btn btn-primary w-36 py-2 px-4 text-white font-semibold rounded-full shadow-md transition-transform hover:scale-105">
            Sussy Baka
          </button>
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
