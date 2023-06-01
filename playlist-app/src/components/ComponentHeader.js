function ComponentHeader({ className, componentName, buttonContent, onClose }) {
  
  const handleButtonClick = () => {
    if (typeof onClose === "function") {
      onClose(); 
    }
  };

  return (
    <div className={`flex flex-row justify-between dark:bg-transparent ${className}`}>
      <p className="text-lg font-semibold text-gray-600 dark:text-white">{componentName}</p>
      <button
        className="text-sm text-gray-400 hover:text-indigo-500 dark:text-gray-300"
        onClick={handleButtonClick} 
      >
        {buttonContent}
      </button>
    </div>
  );
}

export default ComponentHeader;