function Resumeentry({ resume, setResume }) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <p className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Resume Roaster
      </p>
      
      <textarea
        className="w-full h-64 p-4 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-y placeholder-gray-400"
        value={resume}
        placeholder="Paste your Resume content here..."
        onChange={(e) => {
          setResume(e.target.value);
        }}
      />
      
      <span className="block text-right text-sm text-gray-500 mt-2 font-medium">
        {resume.length} characters
      </span>
    </div>
  );
}

export default Resumeentry;