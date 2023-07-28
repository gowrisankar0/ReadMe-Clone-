const inquirer =require("inquirer");
const prompt =inquirer.createPromptModule();
const generateMarkdown=require("./utils/generateMarkdown");
const fs = require("fs");


const questions = [

{
  type:"input",
  name:"title",
  message:"what's your Project Title?"
},
{
    type:"input",
    name:"description",
    message:"Enter your project description:"
},
{
    type:"editor",
    name:"instructions",
    messsage:"Enter your installation instructions:"
},
{
    type:"editor",
    name:"usage",
    message:"Enter your usage instructions:"
},
{
    type:"input",
    name:"contributions",
    message:"Enter the contributions:"
},
{
    type:"list",
    name:"license",
    message:'what type of license you prfered',
    choices:['MIT','ISC']
}



]


function WriteFile(filename,data){

    const content =generateMarkdown(data);
    
    fs.writeFile(filename,content,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("file is created");
    })
        
    
}

prompt(questions).then((ans)=>{
    WriteFile("README.md",ans)
})

