import categoriesList from '../data/categories.json';
import { useState } from 'react';

const FilterProjects = ({ setSearchTerm, setSelectedCategory }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const handleCategoryChange = (category) => {
        setActiveFilter(category);
        setSelectedCategory(category);
    };

    const categories = ['All', ...categoriesList.map(cat => cat.value)];

    return (
        <div className="space-y-6">
            {/* Search Bar */}
            <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                    <input
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        className="w-full px-4 py-3 pl-12 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Search projects..."
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                            activeFilter === category
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md hover:scale-105'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterProjects;
