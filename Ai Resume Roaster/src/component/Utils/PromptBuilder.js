function PromptBuilder(mode,resume) {
     if(mode=="Brutal"){
        return `Roast brutally...\n${resume}`;
    } else if(mode=="Hr"){
return `Give kind feedback...\n${resume}`;
    }else{
          return `Rewrite professionally...\n${resume}`;
    }
}

export default PromptBuilder;