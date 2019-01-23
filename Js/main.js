
function test1() {
    
	var fName = prompt("Hey what's your name?");
	var myColour = prompt("Pick a colour, " + fName);
   
   

	if(myColour == "red"){

		console.log("ha. this guy likes red");
	} 
	else if(myColour == "green"){
		console.log("ah, green. He's alright.");
	}
	else if(myColour == "yellow"){
		console.log("het him something yellow.");
	}
	else {
		console.log("that's not a color");
	}
}

function test2() {    
	var age=prompt("how old are you?");
	

	if(age < 14){
		alert("GET ZE Hell OUUUUTTT");

	}
	else if(age == 14){
		alert("14 is a very good age");

	}
	else if(age > 14){
		alert("You are IIIINNNN");

	}
	else{
		alert("WHO DIS");
	}
}


function FizzBuzz() {
	var number=prompt("Type a number") 

	for (var i=1; i < 101; i++){
    	if (i % 15 == 0) {
    		prompt("FizzBuzz");
    	}
    	else if (i % 3 == 0) {
    		prompt("Fizz");
    	}
    	else if (i % 5 == 0) {
    		prompt("Buzz");
    	}
    	else {
    		console.log(i);
    	}
    }
}

/* 
Guess the Number 
*/

function Guess() {
	var rand = Math.floor((Math.random() * 1000));
	var num = prompt("Guess a number between 1 and 1000.");

	while(num != rand){
		if(num > rand){
			num=prompt("Too high, try again!");
		}
		else if(num < rand){
			num=prompt("Too low, try again!");
		}
		else if(num == rand){
			num=alert("You right");
		}
		else{
			alert("Do you even Math, bro?");
		}
	}
}

/* Bigger Numeber
*/
function Bigger(){

    var num1, num2;
    num1 = prompt("Enter the First Number", "0");
    num2 = prompt("Enter the Second Number", "0");
                                                           
    if(parseInt(num1) > parseInt(num2)) 
    { 
        alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
        }   
    else
    if(parseInt(num2) > parseInt(num1)) 
    {
        alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
        }                  
    else
    {
        alert("The values "+ num1+ " and "+ num2+ " are equal.");
    }
}

/*Multipler
*/
function Product(){
    var x, y, z;
    x = prompt ("Enter the First Number", "0")
    y = prompt ("Enter the Second Number", "0")
    z = prompt ("Enter the Third Number", "0")
    if (x>0 && y>0 && z>0)
    {
        alert("The sign is +");
    }
    else if (x<0 && y<0 && z<0)
        {
            alert("The sign is -");
        }
     else if (x>0 && y<0 && z<0)
        {
            alert("The sign is +");
        }
    else if (x<0 && y>0 && z<0)
        {
            alert("The sign is +");
        }
     else
        {
            document.getElementById("product").innerHTML = ("Multiply Number");
            document.getElementById("Answer").innerHTML = ("The sign is -");
        }
    }

/* 
Sort Number
*/
function sort(){
    var a, b, c;
    a = prompt ("Input the First integer", "0")
    b = prompt ("Input the Second integer", "0")
    c = prompt ("Input the Third integer", "0")

    if (a>b && a>c)
{
        if (b>c)
        {
            alert(a + ", " + b + ", " +c);
        }
        else
        {
            alert(a + ", " + c + ", " +b);
        }
}
else if (b>a && b >c)
{
        if (a>c)
        {
            alert(b + ", " + a + ", " +c);
        }
        else
        {
            alert(b + ", " + c + ", " +a);
        }
}
else if (c>a && c>b)
	{
        if (a>b)
        {
            alert(c + ", " + a + ", " +b);
        }
        else
        {
            alert(c + ", " + b + ", " +a);
        }
	}        
}

/* 
Pyramid Pattern
*/
function displayPyramid(){
  var x, y, chr;
  x,y,chr = prompt ("Insert an Number. Check the console for results",)
   for(x=1; x <=6; x++)
  {

   for (y=1; y < x; y++)
  {
    chr=chr+("*");        
  }
    console.log(chr);
    chr='';    
  }
} 

/*
Length of a String
*/
function stringlength(){
    var txt = prompt("Give me a sentence!");
    var size = txt.length;
    alert("The string is " + size + " characters long.");
}

/*
Letter Capitalize
*/

 function alternateCase() {
    var txt = prompt("Sentence");
    var chars = txt.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    alert(chars.join(""));  
}



