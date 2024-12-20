import MovieSearch from './components/MovieSearch'
import { FavoritesProvider } from './context/FavoritesContext';
import { ThemeProvider } from './context/ThemeContext';
import { SearchHistoryProvider } from './context/SearchHistoryContext';
import { useTheme } from './context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();
  
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
};

function App() {
  return (
    <ThemeProvider>
      <SearchHistoryProvider>
        <FavoritesProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
            <header className="bg-white dark:bg-gray-800 shadow">
              <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Movie Search App
                </h1>
              </div>
            </header>
            <main>
              <MovieSearch />
            </main>
            <ThemeToggle />
          </div>
        </FavoritesProvider>
      </SearchHistoryProvider>
    </ThemeProvider>
  )
}

export default App
