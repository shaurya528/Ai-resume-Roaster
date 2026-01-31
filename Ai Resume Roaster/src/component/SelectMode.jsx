function ModeSelector({mode, setMode}) {
    return ( 
        <div className="flex justify-center gap-4 my-4">
            <button 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
                onClick={() => setMode("Brutal")}
            >
                Brutal
            </button>
            
            <button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                onClick={() => setMode("Hr")}
            >
                HR Roast
            </button>
            
            <button 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
                onClick={() => setMode("Soft")}
            >
                Soft
            </button>
        </div> 
    );
}

export default ModeSelector;