const Key = ({ isDigit = false, text, onClick }) => (
  <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
    <input
      className={`rounded-${
        isDigit ? "full" : "lg"
      } h-20 w-20 flex items-center bg-purple-800 shadow-purple-400/50  justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:bg-orange-200 hover:border-gray-500 focus:outline-none`}
      value={text}
      type="button"
      onClick={onClick}
    />
  </div>
);

export default Key;