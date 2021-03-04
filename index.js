const blue500 = "#4299e1";   // Tailwind's blue-500
const blue600 = "#3182ce";   // etc
const blue700 = "#2b6cb0";
const blue800 = "#2c5282";
const vibrantBlue = "#0939c2";
const chosenHighlightColor = vibrantBlue;


const onloadFunction = (param) => {             
   document.getElementById(param).style.color = chosenHighlightColor;    // Styling for link to current page
   document.getElementById(param).style.fontWeight = "500";
}

const toggle_nav_pulldown = () => {
   const x = document.getElementById("my_links");
   if (x.style.visibility === "hidden") {
   x.style.visibility = "visible";
   } else {
   x.style.visibility = "hidden";
   }
} 


function includeHTML() {        // from https://www.w3schools.com/howto/howto_html_include.asp
   var z, i, elmnt, file, xhttp;
   /*loop through a collection of all HTML elements:*/
   z = document.getElementsByTagName("*");
   for (i = 0; i < z.length; i++) {
      elmnt = z[i];

      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");

      if (file) {
         /*make an HTTP request using the attribute value as the file name:*/
         xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
               if (this.status == 200) {elmnt.innerHTML = this.responseText;}
               if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
               /*remove the attribute, and call this function once more:*/
               elmnt.removeAttribute("w3-include-html");
               includeHTML();
            }
         }
         xhttp.open("GET", file, true);
         xhttp.send();
         /*exit the function:*/
         return;
      }
   }
};







