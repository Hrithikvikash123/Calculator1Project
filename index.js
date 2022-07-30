
// Here valueButton function is using for make the Clickable button. 

function valueButton(e){
    calculatorform.result.value+=e.value;

}


/* Here  calculate function are using to calculate the operation like 2+3=5 
 eval is predefined function which is used to show the result

 */

function calculate(){
    calculatorform.result.value=eval( calculatorform.result.value);

}


// Clear function : its is used to clear the any type of text. 
 function Clear(){
    calculatorform.result.value = null;

 }
