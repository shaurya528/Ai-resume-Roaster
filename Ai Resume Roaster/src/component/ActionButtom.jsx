function Action({ onRoast, loading }) {
  return (
    <div className="flex justify-center mt-8">
      <button
        className="w-full md:w-auto px-8 py-3 bg-black text-white font-bold text-lg rounded-lg shadow-lg hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={onRoast}
        disabled={loading}
      >
        {loading ? "Roasting..." : "Roast My Resume 🔥"}
      </button>
    </div>
  );
}

export default Action;