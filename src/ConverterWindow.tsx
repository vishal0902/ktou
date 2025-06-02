import { Button } from "@/components/ui/button";

import { Textarea } from "./components/ui/textarea";
import { useState } from "react";
import { convert_to_unicode, convert_to_unicode_010 } from "./utils/conversion";
import toast from "react-hot-toast";
// import axios from "axios";
// import { PacmanLoader } from "react-spinners";

export function CardWithForm() {
  const [krutidevText, setKrutidevText] = useState("");
  const [unicodeText, setUnicodeText] = useState("");
  // const [loading, setLoading] = useState(false)
  const [copyStatus, setCopyStatus] = useState(false)
  const [fontName, setFontName] = useState("Krutidev014/016")
   




  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setKrutidevText(clipboardText);
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
      alert("Could not access clipboard. Please allow clipboard permissions.");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(unicodeText.toString());
      setCopyStatus(true)
      toast.success("Copied Successfully !!!")
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
      alert("Could not access clipboard. Please allow clipboard permissions.");
    }
  };


  return (
      <div className="shadow-xl grid  min-w-[80vw] min-h-[25vh] md:min-h-[50vh] items-center ">
      
      {/* Title */}
        <div className="bg-gray-700       
         rounded-t-md   text-gray-200  md:pt-5 pt-2">
          <div className="text-2xl md:text-4xl text-center my-3">Krutidev to Unicode</div>
          <div className="md:grid hidden">
              <div className="px-4 mb-2  grid md:grid-cols-10 md:gap-0 gap-2 ">
                <div className="flex space-x-6 col-span-4">
                    <div>
                        <input className="mr-2" defaultChecked type="radio" id="Krutidev014/016" name="fontName" value="Krutidev014/016"
                        onChange={(e)=>{console.log(e.target.value);setFontName(e.target.value)}} />
                        <label  className="font-kruti_010 text-base lg:text-2xl" htmlFor="Krutidev014/016">Øqrhnso 011@014@016</label>
                    </div>
                    <div>
                    <input className="mr-2" type="radio" id="Krutidev010" name="fontName" value="Krutidev010" 
                    onChange={(e)=>{console.log(e.target.value);setFontName(e.target.value)}} />
                    <label className="font-kruti_010 text-base lg:text-2xl" htmlFor="Krutidev010">Øqrhnso 010</label>
                </div>
                </div>
                <div className="col-span-2"></div>
                <div className="flex justify-center col-span-4">
                  <div className="font-kruti_010 text-base lg:text-2xl">;wfudksM</div>
                </div>
                </div>          

          </div>
          {/* <div className="flex justify-between items-center">
          <div> */}
          {/* <div className="flex space-x-6 p-2 mt-2 ml-2">
            <div>
                <input className="mr-2" defaultChecked type="radio" id="Krutidev014/016" name="fontName" value="Krutidev014/016"
                onChange={(e)=>{console.log(e.target.value);setFontName(e.target.value)}} />
                <label  className="font-kruti_010 text-2xl" htmlFor="Krutidev014/016">Øqrhnso 011@014@016</label>
            </div>
            <div>
                <input className="mr-2" type="radio" id="Krutidev010" name="fontName" value="Krutidev010" 
                onChange={(e)=>{console.log(e.target.value);setFontName(e.target.value)}} />
                <label className="font-kruti_010 text-2xl" htmlFor="Krutidev010">Øqrhnso 010</label>
            </div>
          </div> */}
          {/* </div>
          <div className="mr-52">
              <span className="hidden md:flex">Unicode</span>
          </div>
          </div> */}
          
          
        </div>


      {/* conversion window */}
        <div className="grid md:grid-cols-10 md:gap-0 gap-2 ">
          
          {/* textarea for krutidev */}
          
          <div className="grid md:col-span-4  border border-y-0 border-gray-400">
            <div>
                <div className="">
                {fontName === "Krutidev014/016"? <Textarea id="outputDiv" className="font-kruti text-2xl/7 text-black bg-white"
                  value={krutidevText}
                  onChange={(e: any) => {
                    setKrutidevText(e.target.value);
                  }}
                  placeholder=";gk¡ Øqrhnso VsDLV isLV@Vkbi djsa---"
                />:

                <Textarea id="outputDiv" className="font-kruti_010 text-2xl/7 text-black  bg-white"
                  value={krutidevText}
                  onChange={(e: any) => {
                    setKrutidevText(e.target.value);
                  }}
                  placeholder=";gk¡ Øqrhnso VsDLV isLV@Vkbi djsa---"
                />}
              </div>
            </div>
            <div className="grid grid-cols-2  px-20 gap-4 py-2 bg-white border-0">
              <Button onClick={handlePaste} variant={"newButton"}>Paste</Button>
              <Button onClick={()=>{
                setCopyStatus(false)
                setKrutidevText("")
                setUnicodeText("")
                }} variant={"newButton"}>Clear</Button>
            </div>
          </div>
          
          

          {/* Button & loader for conversion action */}
          <div className="md:col-span-2 grid bg-white justify-center items-center">            
           
             <Button
              variant={"outline"}
              onClick={()=>fontName==="Krutidev014/016"?convert_to_unicode(krutidevText, setUnicodeText, setCopyStatus):convert_to_unicode_010 (krutidevText, setUnicodeText, setCopyStatus)}
              >
              <span className="p-5 text-xl">Convert</span>  
              </Button>
              
          </div>

          {/* Textarea for unicode  */}
                {/* <div className="md:col-span-4">
                  <Textarea className="text-xl" readOnly  value={unicodeText} />
                </div> */}

                <div className="grid md:col-span-4  border border-y-0 border-gray-400">
            <div>
                <div className="">
                <Textarea id="unic" className="text-base text-black bg-white" readOnly  value={unicodeText} />

              </div>
            </div>
            <div className="grid px-16 py-2 bg-white border-0">
              <Button onClick={handleCopy} variant={"newButton"}>{copyStatus ? <span>Copied &#10004;</span>:<span>Copy</span>}</Button>
            </div>
          </div>

        </div>  
        
              
        
        {/* End of conversion window  */}




        
        {/* Footer starts here */}
        <div className="bg-gray-800 rounded-b-md text-center text-gray-400 text-sm md:text-base p-4 font-cursive ">
          Copyright &copy; 2025. All rights reserved.
        </div>
      
      </div>
  );
}
