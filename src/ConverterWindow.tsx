import { Button } from "@/components/ui/button";

import { Textarea } from "./components/ui/textarea";
import { useState } from "react";
import axios from "axios";
import { PacmanLoader } from "react-spinners";

export function CardWithForm() {
  const [krutidevText, setKrutidevText] = useState("");
  const [unicodeText, setUnicodeText] = useState("");
  const [loading, setLoading] = useState(false)

  return (
    <div className="">
      <div className="grid min-w-[80vw] min-h-[50vh] items-center">
        <div className="bg-[#1d6d86] rounded-md  text-center text-gray-200 text-4xl p-5">
          Krutidev to Unicode
        </div>
        <div className="grid md:grid-cols-10">
          <div className="md:col-span-4">
            <Textarea className="font-kruti text-customSize"
              value={krutidevText}
              onChange={(e: any) => {
                setKrutidevText(e.target.value);
              }}
              placeholder=";gkW dzqrhnso VsDLV isLV djsa----"
            />
          </div>
          <div className="md:col-span-2 grid  justify-center items-center">
            
            {!loading ? 
            
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
          <div className="md:col-span-4">
            <Textarea className="text-xl" readOnly  value={unicodeText} />
          </div>
        </div>
        <div className="bg-[#1d6d86] rounded-md text-center text-gray-200 text-base p-2">
          Ceated by Vishal Srivastava with love.🧡💛🧡 <br/>Copyright &copy; 2025.
          All rights reserved.
        </div>
      </div>
    </div>
  );
}
