import { Button } from "@/components/ui/button";

import { Textarea } from "./components/ui/textarea";
import { useState } from "react";
// import axios from "axios";
// import { PacmanLoader } from "react-spinners";

export function CardWithForm() {
  const [krutidevText, setKrutidevText] = useState("");
  const [unicodeText, setUnicodeText] = useState("");
  // const [loading, setLoading] = useState(false)
  const [copyStatus, setCopyStatus] = useState(false)
   




  function convert_to_unicode() {
    
    setCopyStatus(false)
    var legacy_text_var = krutidevText;
    
    var array_one = new Array(
        // "(",")", 
        "”k","”",
        "’k","’",
        "‘k","‘",
        
        "ñ", "Q+Z", "sas", "aa", ")Z", "ZZ", "‘", "’", "“", "”",

        "å", "ƒ", "„", "…", "†", "‡", "ˆ", "‰", "Š", "‹",

        "¶+", "d+", "[+k", "[+", "x+", "T+", "t+", "M+", "<+", "Q+", ";+", "j+", "u+",
        "Ùk", "Ù", "ä", "–", "—", "é", "™", "=kk", "f=k",

        "à", "á", "â", "ã", "ºz", "º", "í", "{k", "{", "=", "«",
        "Nî", "Vî", "Bî", "Mî", "<î", "|", "K", "}",
        "J", "Vª", "Mª", "<ªª", "Nª", "Ø", "Ý", "nzZ", "æ", "ç", "Á", "xz", "#", ":",

        "v‚", "vks", "vkS", "vk", "v", "b±", "Ã", "bZ", "b", "m", "Å", ",s", ",", "_",

        "ô", "d", "Dk", "D", "[k", "[", "x", "Xk", "X", "Ä", "?k", "?", "³",
        "pkS", "p", "Pk", "P", "N", "t", "Tk", "T", ">", "÷", "¥",

        "ê", "ë", "V", "B", "ì", "ï", "M+", "<+", "M", "<", ".k", ".",
        "r", "Rk", "R", "Fk", "F", ")", "n", "/k", "èk", "/", "Ë", "è", "u", "Uk", "U",

        "i", "Ik", "I", "Q", "¶", "c", "Ck", "C", "Hk", "H", "e", "Ek", "E",
        ";", "¸", "j", "y", "Yk", "Y", "G", "o", "Ok", "O",
         "'k", "'", "\"k", "\"", "l", "Lk", "L", "g", 

        "È", "z",
        "Ì", "Í", "Î", "Ï", "Ñ", "Ò", "Ó", "Ô", "Ö", "Ø", "Ù", "Ük", "Ü",

        "‚", "ks", "kS", "k", "h", "q", "w", "`", "s", "S",
        "a", "¡", "%", "W", "•", "·", "∙", "·", "~j", "~", "\\", "+", " ः",
        "^", "*", "Þ", "ß", "(", "¼", "½", "¿", "À", "¾", "A", "-", "&", "&", "Œ", "]", "~ ", "@")

    var array_two = new Array(
        // "¼","½", 
        "ष", "ष्",
        "श", "श्",
        "श", "श्",

        "॰", "QZ+", "sa", "a", "र्द्ध", "Z", "\"", "\"", "'", "'",

        "०", "१", "२", "३", "४", "५", "६", "७", "८", "९",

        "फ़्", "क़", "ख़", "ख़्", "ग़", "ज़्", "ज़", "ड़", "ढ़", "फ़", "य़", "ऱ", "ऩ",    // one-byte nukta varNas
        "त्त", "त्त्", "क्त", "दृ", "कृ", "न्न", "न्न्", "=k", "f=",

        "ह्न", "ह्य", "हृ", "ह्म", "ह्र", "ह्", "द्द", "क्ष", "क्ष्", "त्र", "त्र्",
        "छ्य", "ट्य", "ठ्य", "ड्य", "ढ्य", "द्य", "ज्ञ", "द्व",
        "श्र", "ट्र", "ड्र", "ढ्र", "छ्र", "क्र", "फ्र", "र्द्र", "द्र", "प्र", "प्र", "ग्र", "रु", "रू",

        "ऑ", "ओ", "औ", "आ", "अ", "ईं", "ई", "ई", "इ", "उ", "ऊ", "ऐ", "ए", "ऋ",

        "क्क", "क", "क", "क्", "ख", "ख्", "ग", "ग", "ग्", "घ", "घ", "घ्", "ङ",
        "चै", "च", "च", "च्", "छ", "ज", "ज", "ज्", "झ", "झ्", "ञ",

        "ट्ट", "ट्ठ", "ट", "ठ", "ड्ड", "ड्ढ", "ड़", "ढ़", "ड", "ढ", "ण", "ण्",
        "त", "त", "त्", "थ", "थ्", "द्ध", "द", "ध", "ध", "ध्", "ध्", "ध्", "न", "न", "न्",

        "प", "प", "प्", "फ", "फ्", "ब", "ब", "ब्", "भ", "भ्", "म", "म", "म्",
        "य", "य्", "र", "ल", "ल", "ल्", "ळ", "व", "व", "व्",
         "श", "श्", "ष", "ष्", "स", "स", "स्", "ह",

        "ीं", "्र",
        "द्द", "ट्ट", "ट्ठ", "ड्ड", "कृ", "भ", "्य", "ड्ढ", "झ्", "क्र", "त्त्", "श", "श्", 

        "ॉ", "ो", "ौ", "ा", "ी", "ु", "ू", "ृ", "े", "ै",
        "ं", "ँ", "ः", "ॅ", "ऽ", "ऽ", "ऽ", "ऽ", "्र", "्", "?", "़", ":",
        "‘", "’", "“", "”", ";", "(", ")", "{", "}", "=", "।", ".", "-", "µ", "॰", ",", "् ", "/")



    var array_one_length = array_one.length;

    var modified_substring: string = legacy_text_var;

    //****************************************************************************************
    //  Break the long text into small bunches of max. max_text_size  characters each.
    //****************************************************************************************
    var text_size = legacy_text_var.length;

    var processed_text = '';  //blank

    var sthiti1 = 0; var sthiti2 = 0; var chale_chalo = 1;

    var max_text_size = 6000;

    while (chale_chalo == 1) {
        sthiti1 = sthiti2;

        if (sthiti2 < (text_size - max_text_size)) {
            sthiti2 += max_text_size;
            while (legacy_text_var.charAt(sthiti2) != ' ') { sthiti2--; }
        }
        else { sthiti2 = text_size; chale_chalo = 0 }

        var modified_substring = legacy_text_var.substring(sthiti1, sthiti2);

        Replace_Symbols();

        processed_text += modified_substring;

        //****************************************************************************************
        //  Breaking part code over
        //****************************************************************************************
        //  processed_text = processed_text.replace( /mangal/g , "Krutidev010" ) ;   

        setUnicodeText(processed_text);
    }


    // --------------------------------------------------


    function Replace_Symbols() {

        //substitute array_two elements in place of corresponding array_one elements

        if (modified_substring != "")  // if stringto be converted is non-blank then no need of any processing.
        {
            for (var input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx++) {

                var idx = 0;  // index of the symbol being searched for replacement

                while (idx != -1) //whie-00
                {

                    modified_substring = modified_substring.replace(array_one[input_symbol_idx], array_two[input_symbol_idx])
                    idx = modified_substring.indexOf(array_one[input_symbol_idx])

                } // end of while-00 loop
            } // end of for loop

            //**********************************************************************************
            // Code for Replacing five Special glyphs
            //**********************************************************************************

            //**********************************************************************************
            // Code for Glyph1 : ± (reph+anusvAr)
            //**********************************************************************************
            modified_substring = modified_substring.replace(/±/g, "Zं"); // at some places  ì  is  used eg  in "कर्कंधु,पूर्णांक".
            //
            //**********************************************************************************
            // Glyp2: Æ
            // code for replacing "f" with "ि" and correcting its position too. (moving it one position forward)
            //**********************************************************************************

            modified_substring = modified_substring.replace(/Æ/g, "र्f");  // at some places  Æ  is  used eg  in "धार्मिक".

            var position_of_i = modified_substring.indexOf("f")

            while (position_of_i != -1)  //while-02
            {
                var charecter_next_to_i = modified_substring.charAt(position_of_i + 1)
                var charecter_to_be_replaced = "f" + charecter_next_to_i
                modified_substring = modified_substring.replace(charecter_to_be_replaced, charecter_next_to_i + "ि")
                position_of_i = modified_substring.search(/f/) //  position_of_i + 1 search for i ahead of the current position.

            } // end of while-02 loop

            //**********************************************************************************
            // Glyph3 & Glyph4: Ç  É
            // code for replacing "fa" with "िं"  and correcting its position too.(moving it two positions forward)
            //**********************************************************************************

            modified_substring = modified_substring.replace(/Ç/g, "fa"); // at some places  Ç  is  used eg  in "किंकर".
            modified_substring = modified_substring.replace(/É/g, "र्fa"); // at some places  É  is  used eg  in "शर्मिंदा"

            var position_of_i = modified_substring.indexOf("fa")

            while (position_of_i != -1)  //while-02
            {
                var charecter_next_to_ip2 = modified_substring.charAt(position_of_i + 2)
                var charecter_to_be_replaced = "fa" + charecter_next_to_ip2
                modified_substring = modified_substring.replace(charecter_to_be_replaced, charecter_next_to_ip2 + "िं")
                position_of_i = modified_substring.search(/fa/) // search for i ahead of the current position.

            } // end of while-02 loop

            //**********************************************************************************
            // Glyph5: Ê
            // code for replacing "h" with "ी"  and correcting its position too.(moving it one positions forward)
            //**********************************************************************************

            modified_substring = modified_substring.replace(/Ê/g, "ीZ"); // at some places  Ê  is  used eg  in "किंकर".


            /*
            var position_of_i = modified_substring.indexOf( "h" )
            
            while ( position_of_i != -1 )  //while-02
            {
            var charecter_next_to_i = modified_substring.charAt( position_of_i + 1 )
            var charecter_to_be_replaced = "h" + charecter_next_to_i
            modified_substring = modified_substring.replace( charecter_to_be_replaced , charecter_next_to_i + "ी" ) 
            position_of_i = modified_substring.search( /h/ , position_of_i + 1 ) // search for i ahead of the current position.
            
            } // end of while-02 loop
            */


            //**********************************************************************************
            // End of Code for Replacing four Special glyphs
            //**********************************************************************************

            // following loop to eliminate 'chhotee ee kee maatraa' on half-letters as a result of above transformation.

            var position_of_wrong_ee = modified_substring.indexOf("ि्")

            while (position_of_wrong_ee != -1)  //while-03

            {
                var consonent_next_to_wrong_ee = modified_substring.charAt(position_of_wrong_ee + 2)
                var charecter_to_be_replaced = "ि्" + consonent_next_to_wrong_ee
                modified_substring = modified_substring.replace(charecter_to_be_replaced, "्" + consonent_next_to_wrong_ee + "ि")
                position_of_wrong_ee = modified_substring.search(/ि्/) // search for 'wrong ee' ahead of the current position. 

            } // end of while-03 loop

            //**************************************
            // 
            //**************************************
            //   alert(modified_substring);
            //**************************************

            // Eliminating reph "Z" and putting 'half - r' at proper position for this.
            var set_of_matras = "अ आ इ ई उ ऊ ए ऐ ओ औ ा ि ी ु ू ृ े ै ो ौ ं : ँ ॅ"
            var position_of_R = modified_substring.indexOf("Z")

            while (position_of_R > 0)  // while-04
            {
                var  probable_position_of_half_r = position_of_R - 1;
                var charecter_at_probable_position_of_half_r = modified_substring.charAt(probable_position_of_half_r)


                // trying to find non-maatra position left to current O (ie, half -r).

                while (set_of_matras.match(charecter_at_probable_position_of_half_r) != null)  // while-05

                {
                    probable_position_of_half_r = probable_position_of_half_r - 1;
                    charecter_at_probable_position_of_half_r = modified_substring.charAt(probable_position_of_half_r);

                } // end of while-05


                charecter_to_be_replaced = modified_substring.substr(probable_position_of_half_r, (position_of_R - probable_position_of_half_r));
                var new_replacement_string = "र्" + charecter_to_be_replaced;
                charecter_to_be_replaced = charecter_to_be_replaced + "Z";
                modified_substring = modified_substring.replace(charecter_to_be_replaced, new_replacement_string);
                position_of_R = modified_substring.indexOf("Z");

            } // end of while-04

        } // end of IF  statement  meant to  supress processing of  blank  string.

        //**************************************
        //   alert(modified_substring);
        //**************************************


    } // end of the function  Replace_Symbols


} // end of Kritidev_to_unicode function



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
    } catch (error) {
      console.error("Failed to read clipboard contents: ", error);
      alert("Could not access clipboard. Please allow clipboard permissions.");
    }
  };


  return (
      <div className="shadow-xl grid  min-w-[80vw] min-h-[25vh] md:min-h-[50vh] items-center ">
      
      {/* Title */}
        <div className="bg-gradient-to-r to-purple-500 from-black 100%       
         rounded-t-md  text-center text-2xl text-gray-200 md:text-4xl md:p-5 p-3">
          Krutidev to Unicode
        </div>


      {/* conversion window */}
        <div className="grid md:grid-cols-10 md:gap-0 gap-2 ">
          
          {/* textarea for krutidev */}
          
          <div className="grid md:col-span-4  border border-y-0 border-purple-400">
            <div>
                <div className="">
                <Textarea className="font-kruti text-3xl/7 text-white  bg-purple-500"
                  value={krutidevText}
                  onChange={(e: any) => {
                    setKrutidevText(e.target.value);
                  }}
                  placeholder=";gk¡ Øqrhnso VsDLV isLV@Vkbi djsa---"
                />
              </div>
            </div>
            <div className="grid grid-cols-2  px-20 gap-4 py-2 bg-purple-500 border-0">
              <Button onClick={handlePaste} variant={"newButton"}>Paste</Button>
              <Button onClick={()=>{
                setCopyStatus(false)
                setKrutidevText("")
                setUnicodeText("")
                }} variant={"newButton"}>Clear</Button>
            </div>
          </div>
          
          

          {/* Button & loader for conversion action */}
          <div className="md:col-span-2 grid bg-purple-500 justify-center items-center ">            
           
             <Button
              variant={"outline"}
              onClick={convert_to_unicode}
              
              //   async (e) => {
              //   e.preventDefault();
              //   setLoading(true)
              //   await axios
              //     .post(`${import.meta.env.VITE_BACKEND_URL}/api/convert`,{ krutidevText })
              //     .then((Response) => {
              //       setUnicodeText(Response.data.unicodeText);
              //       setLoading(false)
              //     })
              //     .catch((error) => console.log(error));
              // }
              // ()=>{
              //   const convertedText = convert_to_unicode(krutidevText)
              //   setUnicodeText(convertedText)
              // }
              // }
              >
              Convert  
              </Button>
              
          </div>

          {/* Textarea for unicode  */}
                {/* <div className="md:col-span-4">
                  <Textarea className="text-xl" readOnly  value={unicodeText} />
                </div> */}

                <div className="grid md:col-span-4  border border-y-0 border-purple-400">
            <div>
                <div className="">
                <Textarea id="unic" className="text-xl text-white bg-purple-500" readOnly  value={unicodeText} />

              </div>
            </div>
            <div className="grid px-16 py-2 bg-purple-500 border-0">
              <Button onClick={handleCopy} variant={"newButton"}>{copyStatus ? <span>Copied &#10004;</span>:<span>Copy</span>}</Button>
            </div>
          </div>

        </div>  
        
              
        
        {/* End of conversion window  */}




        
        {/* Footer starts here */}
        <div className="bg-gradient-to-r from-purple-500  to-black   rounded-b-md text-center text-gray-300 text-sm/5 md:text-base/5 md:p-3 p-1 ">
          Ceated by Vishal Srivastava with lots of love.🧡 <br/>Copyright &copy; 2025.
          All rights reserved.
        </div>
      
      </div>
  );
}
