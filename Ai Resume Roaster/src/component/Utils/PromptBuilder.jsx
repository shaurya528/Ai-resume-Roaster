function PromptBuilder({mode,resume}) {
     if(mode=="Brutal"){
        return `Roast brutally...\n${resume}`;
    } else if(mode=="Hr"){
return `Give kind feedback...\n${resumeText}`;
    }else{
          return `Rewrite professionally...\n${resumeText}`;
    }
    return (<> 
    </>  );
}

export default PromptBuilder;