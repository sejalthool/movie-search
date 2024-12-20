import { useState, useEffect } from 'react';
import MovieDetails from './MovieDetails';

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 
                     dark:hover:text-gray-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col md:flex-row gap-8 p-6">
            <div className="w-full md:w-1/3">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
                alt={movie.Title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {movie.Title}
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-sm">
                    {movie.Year}
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full text-sm">
                    {movie.Type}
                  </span>
                </div>
                
                <p className="text-lg leading-relaxed">
                  A captivating {movie.Type} that showcases the best of cinema. Click to learn more about 
                  this title on IMDb.
                </p>
                
                <a
                  href={`https://www.imdb.com/title/${movie.imdbID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 
                           text-black rounded-lg transition-colors"
                >
                  View on IMDb
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails; 