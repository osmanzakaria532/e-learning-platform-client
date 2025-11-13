// components/LoadingSpinner.jsx

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="h-6 w-6 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500" />
    </div>
  );
};

export default LoadingSpinner;
