import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
      title={theme === 'light' ? 'Passer au mode sombre' : 'Passer au mode clair'}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {theme === 'light' ? (
          <i className="ri-moon-line text-gray-600 dark:text-gray-300"></i>
        ) : (
          <i className="ri-sun-line text-yellow-500"></i>
        )}
      </div>
    </button>
  );
}