var i = 0,text;
text = "I am a Developer"
function typing(){
   if(i<text.length){
       document.getElementById("text").innerHTML += text.charAt(i);
       i++;
       setTimeout(typing,50);

       
   }
}

typing();

