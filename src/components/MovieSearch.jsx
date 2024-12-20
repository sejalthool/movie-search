import { useState } from 'react';
import { useSearchHistory } from '../context/SearchHistoryContext';
import SearchHistory from './SearchHistory';
import MovieSkeleton from './MovieSkeleton';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addToHistory } = useSearchHistory();

  const searchMovies = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
      );
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovies(data.Search);
        addToHistory(query);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="max-w-2xl mx-auto mb-12">
        <SearchHistory onSelectQuery={(q) => {
          setQuery(q);
          searchMovies({ preventDefault: () => {} });
        }} />
        
        <form onSubmit={searchMovies} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies..."
            className="w-full p-4 pr-12 text-lg rounded-lg border-2 border-gray-200 dark:border-gray-700 
                     focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors
                     dark:bg-gray-800 dark:text-white"
          />
          <button 
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 
                     rounded-lg hover:bg-blue-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => <MovieSkeleton key={i} />)}
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <p className="text-red-500 dark:text-red-400 text-lg">{error}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div 
            key={movie.imdbID} 
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg 
                     hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative aspect-[2/3] overflow-hidden">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
                alt={movie.Title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white 
                           line-clamp-2 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                {movie.Title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch; 