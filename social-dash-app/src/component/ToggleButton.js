function ToggleButton() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="flex items-center sm:pt-0 pt-6">
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <span class="sm:pr-3 text-sm font-medium text-gray-900 dark:text-white">
          Dark Mode
        </span>
        <div
          class="sm:relative absolute sm:right-0 right-6 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gray-900 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:bg-gray-900 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-tr from-sky-500 to-green-500 hover:bg-gradient-to-tr from-sky-500 to-green-500"
          onClick={toggleTheme}
        ></div>
      </label>
    </div>
  );
}

export default ToggleButton;
