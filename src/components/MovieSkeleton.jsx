const MovieSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <div className="aspect-[2/3] bg-gray-200 dark:bg-gray-700 animate-pulse" />
      <div className="p-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse" />
      </div>
    </div>
  );
};

export default MovieSkeleton; 