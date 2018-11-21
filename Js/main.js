
function test1() {
    
	var fName = prompt("Hey what's your name?");
	var myColour = prompt("Pick a colour, " + fName);
   
    //This is my single line comment. 

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
// Second Test
function test2() {    
	var age=prompt("how old are you?");
	

	if(age < 14){
		alert("GET ZE Hell OUUUUTTT");

	}
	else if(age == 14){
		alert("14 is Ze a very good age");

	}
	else if(age > 14){
		alert("Zuu are IIIINNNN");

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


function Guess() {

	var rand = Math.floor((Math.random() * 1000));
	var num = prompt("Guess a number between 1 and 1000.");
	while(num != rand){
		if(num > rand){
			num=prompt("Too high, try again!");
		}else if(num < rand){
			num=prompt("Too low, try again!");
		}else if(num == rand){
			num=alert("You right");
			{break;}	
		}else{
			alert("Do you even Math, bro?");
		}

	}
}













