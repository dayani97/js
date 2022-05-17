//alert('hello world');
//console.log('hello world');

//const s = 'hello world!';
//console.log(s.split(''));
/*function btnclicked(){
    console.log("button clicked");
}
*/

// document.getElementById="btnclicked".mouseOver = function(){mouseOver}
// function(){
//     console.log("button cliked");
// }

// let btn = document.getElementById("addbtn");
// btn.addEventListener('click',function(event) {
//     alert(event.type);
// });

 //display = () => console.letlog("hello world");

 /* document.getElementById("submitbtn").onclick = 
 function(){clicked()};

 function clicked(){
     document.getElementById("demo").innerHTML =
     "you've sucessfully submitted";
 } */
 

 document.getElementById("submitbtn").addEventListener("click", myclick);

 function myclick(){
     document.getElementById("demo").innerHTML =
     "you have sucessfully clicked me";
 }

 
 document.getElementById("reset").addEventListener ("click", reset);

 function reset(){
    document.getElementById("demo").innerHTML =
    "";
 }

 



    

//  let age = 15;
//   age >= 18 ? console.log('you can drive'):console.log("you can't drive"); 

    
    

 
   
