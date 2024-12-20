import { createContext, useContext, useState, useEffect } from 'react';

const SearchHistoryContext = createContext();

export function SearchHistoryProvider({ children }) {
  const [searchHistory, setSearchHistory] = useState(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const addToHistory = (query) => {
    setSearchHistory(prev => {
      const filtered = prev.filter(item => item !== query);
      return [query, ...filtered].slice(0, 5);
    });
  };

  const clearHistory = () => setSearchHistory([]);

  return (
    <SearchHistoryContext.Provider value={{ searchHistory, addToHistory, clearHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
}

export const useSearchHistory = () => useContext(SearchHistoryContext); 