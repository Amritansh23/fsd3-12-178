import{readFile } from "fs/promises";

const readData = async (fileName)=>{
  const content = await readFile (fileName, 'utf-8');
  return content;
}

const writeData = async (fileName, content)=>{
try {
  await writeFile(fileName, content);
  
} catch (error) {
  
}
};
const appendData=async(fileName, content)=>{
await appendFile(fileName, content);
};

const data=await readData("file.js");
  console.log(data);


//if a function uses await keyword than the function must be async
