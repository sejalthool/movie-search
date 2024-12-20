import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    setFavorites(prev => {
      const exists = prev.find(f => f.imdbID === movie.imdbID);
      if (exists) {
        return prev.filter(f => f.imdbID !== movie.imdbID);
      }
      return [...prev, movie];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext); 