import { Button } from "@/components/ui/button";

import { Textarea } from "./components/ui/textarea";
import { useState } from "react";
import axios from "axios";

export function CardWithForm() {
  const [krutidevText, setKrutidevText] = useState("");
  const [unicodeText, setUnicodeText] = useState("");

  return (
    <div className="">
      <div className="grid min-w-[80vw] min-h-[50vh] items-center">
        <div className="bg-[#970747] rounded-md text-center text-gray-200 text-4xl p-5">
          Krutidev to Unicode
        </div>
        <div className="grid md:grid-cols-10">
          <div className="md:col-span-4">
            <Textarea className="font-kruti"
              value={krutidevText}
              onChange={(e: any) => {
                setKrutidevText(e.target.value);
              }}
              placeholder=";gkW dzqrhnso VsDLV Vkbi@isLV djsa----"
            />
          </div>
          <div className="md:col-span-2 grid  justify-center items-center">
            <Button
              variant={"outline"}
              onClick={async (e) => {
                e.preventDefault();
                await axios
                  .post(
                    "https://krutidev-to-unicode-backend.onrender.com/api/convert",
                    { krutidevText }
                  )
                  .then((Response) => {
                    setUnicodeText(Response.data.unicodeText);
                  })
                  .catch((error) => console.log(error));
              }}>
              Convert
            </Button>
          </div>
          <div className="md:col-span-4">
            <Textarea  contentEditable="false" value={unicodeText} />
          </div>
        </div>
        <div className="bg-[#970747] rounded-md text-center text-gray-200 text-base p-2">
          Ceated by Vishal Srivastava with love.🧡💛🧡 <br/>Copyright &copy; 2025.
          All rights reserved.
        </div>
      </div>
    </div>
  );
}
