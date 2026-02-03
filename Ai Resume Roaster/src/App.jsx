import { useState } from "react"
import Resumeentry from "./component/Resumeentry"
import ModeSelector from "./component/SelectMode"
import Action from "./component/ActionButtom"
import Result from "./component/Result"


function App() {
 const[resume,setResume]=useState("")
 const[mode,setMode]=useState("Hr")
 const[loading,setLoading]=useState(false)
 const[result,setResult]=useState("")

 function handleRoast(){
  setLoading(true);
  
  
 }

  return (
   <>
   <Resumeentry resume={resume} setResume={setResume}/>
   <ModeSelector mode={mode} setMode={setMode}/>
   <Action onRoast={handleRoast} loading={loading}/>
   <Result result={result}/>

   </>
  )
}

export default App
