import { Button } from "@/components/ui/button";

import { Textarea } from "./components/ui/textarea";
import { useState } from "react";
import axios from "axios";
import { PacmanLoader } from "react-spinners";

export function CardWithForm() {
  const [krutidevText, setKrutidevText] = useState("");
  const [unicodeText, setUnicodeText] = useState("");
  const [loading, setLoading] = useState(false)



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
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
      alert("Could not access clipboard. Please allow clipboard permissions.");
    }
  };


  return (
      <div className="shadow-xl grid min-w-[80vw] min-h-[30vh] md:min-h-[50vh] items-center  ">
      
      {/* Title */}
        <div className="bg-[#6C91C2] rounded-md  text-center text-gray-200 text-4xl md:p-5 p-3">
          Krutidev to Unicode
        </div>


      {/* conversion window */}
        <div className="grid md:grid-cols-10 md:gap-0 gap-2 ">
          
          {/* textarea for krutidev */}
          
          <div className="grid md:col-span-4">
            <div>
                <div className="">
                <Textarea className="font-kruti text-customSize/7"
                  value={krutidevText}
                  onChange={(e: any) => {
                    setKrutidevText(e.target.value);
                  }}
                  placeholder=";gkW dzqrhnso VsDLV isLV djsa----"
                />
              </div>
            </div>
            <div className="grid grid-cols-2  px-20 gap-4 py-2 bg-[#C5CBE3] border-0 rounded-sm">
              <Button onClick={handlePaste} variant={"newButton"}>Paste</Button>
              <Button onClick={()=>setKrutidevText("")} variant={"newButton"}>Clear</Button>
            </div>
          </div>
          
          

          {/* Button & loader for conversion action */}
          <div className="md:col-span-2 grid  justify-center items-center">            
            {!loading 
              ? 
             <Button
              variant={"outline"}
              onClick={async (e) => {
                e.preventDefault();
                setLoading(true)
                await axios
                  .post(`${import.meta.env.VITE_BACKEND_URL}/api/convert`,{ krutidevText })
                  .then((Response) => {
                    setUnicodeText(Response.data.unicodeText);
                    setLoading(false)
                  })
                  .catch((error) => console.log(error));
              }}>
              Convert  
              </Button>
              :
              <PacmanLoader />
            }
          </div>

          {/* Textarea for unicode  */}
                {/* <div className="md:col-span-4">
                  <Textarea className="text-xl" readOnly  value={unicodeText} />
                </div> */}

                <div className="grid md:col-span-4">
            <div>
                <div className="">
                <Textarea className="text-xl" readOnly  value={unicodeText} />

              </div>
            </div>
            <div className="grid px-36 py-2 bg-[#C5CBE3] border-0 rounded-sm">
              <Button onClick={handleCopy} variant={"newButton"}>Copy</Button>
            </div>
          </div>

        </div>  
        
              
        
        {/* End of conversion window  */}




        
        {/* Footer starts here */}
        <div className="bg-[#6C91C2] rounded-md text-center text-gray-300 text-base/5 md:p-2 p-1">
          Ceated by Vishal Srivastava with lots of love.🧡 <br/>Copyright &copy; 2025.
          All rights reserved.
        </div>
      
      </div>
  );
}
