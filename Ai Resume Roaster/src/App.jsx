import { useState } from "react"
import Resumeentry from "./component/Resumeentry"


function App() {
 const[resume,setResume]=useState("")

  return (
   <>
   <Resumeentry resume={resume} setResume={setResume}/>
   </>
  )
}

export default App
