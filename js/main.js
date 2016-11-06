function interrogate() {

var firstName=prompt('What is your first name?');
var lastName=prompt('What is your last name?');
var fullName=firstName+' '+lastName;
console.log(fullName);
function ageQuestion(message){

	var age=prompt(message);
	age=parseInt(age);
	if (isNaN(age)){
		ageQuestion('How old are you? Use numbers, please.');
		return false;}
	if (age>=18){
		console.log('User is an adult');
	}
	else if (age>=13){
		console.log('User is a teenager');
	}
	else {
		console.log('User is a child');}
}
ageQuestion('How old are you?');
//if (firstName=="general"&&lastName!="assembly") {
//	console.log('Hi General');
//}
if (firstName.toLowerCase()==="general"&&lastName.toLowerCase()!="assembly"){
	console.log("Hi General!");}

var faveColour=prompt('What is your favourite colour?');
faveColour=faveColour.toLowerCase().trim();
if (faveColour ==='red' ||
	faveColour === 'blue'||
	faveColour === 'green'||
	faveColour === 'yellow'){
	$('h1').css('color',faveColour);
	}
}
//if (firstName==='General'&&lastName!=='Assembly'){
//	console.log('Greetings, General!');
//}
//When the page loads
$(function(){
	$('img').on('click',interrogate);
	//When the user clicks a h3
	$('h3').on('click',function(){
	//Hide the next element
 	$(this).next().slideToggle(400);
	});
});