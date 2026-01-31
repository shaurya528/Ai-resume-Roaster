function Result({ result }) {
  if (!result) return null;

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">
            🤖 AI Feedback
        </h1>
        
        <button 
            className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm py-1 px-3 rounded shadow-sm transition-all active:scale-95"
            onClick={() => navigator.clipboard.writeText(result)}
        >
            📋 Copy
        </button>
      </div>

      <pre className="whitespace-pre-wrap bg-white p-4 rounded-lg border border-gray-200 text-gray-700 font-mono text-sm leading-relaxed overflow-x-auto">
        {result}
      </pre>
    </div>
  );
}

export default Result;