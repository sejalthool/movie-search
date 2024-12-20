import { useSearchHistory } from '../context/SearchHistoryContext';

const SearchHistory = ({ onSelectQuery }) => {
  const { searchHistory, clearHistory } = useSearchHistory();

  if (searchHistory.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Recent Searches</h3>
        <button 
          onClick={clearHistory}
          className="text-sm text-red-500 hover:text-red-600 dark:text-red-400 
                   dark:hover:text-red-300 transition-colors"
        >
          Clear History
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {searchHistory.map((query, index) => (
          <button
            key={index}
            onClick={() => onSelectQuery(query)}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm 
                     text-gray-700 dark:text-gray-300 hover:bg-gray-200 
                     dark:hover:bg-gray-600 transition-colors"
          >
            {query}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory; 