// ----------------------------------------------------------------------------------------------------------------
// |<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<__ALERT__>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>|
// ----------------------------------------------------------------------------------------------------------------

// ---------------------------
// <<<<<<<<<<TASK 1>>>>>>>>>>|
// ---------------------------

alert("Welcome Back ");

// ---------------------------
// <<<<<<<<<<TASK 2>>>>>>>>>>|
// ---------------------------

alert("Error! Please enter a valid password.");

// ---------------------------
// <<<<<<<<<<TASK 3>>>>>>>>>>|
// ---------------------------

alert("Welcome to JS Land... \n Happy Coding");

// ---------------------------
// <<<<<<<<<<TASK 4>>>>>>>>>>|
// ---------------------------

alert("Welcome To JS Land...");
alert("Happy Coding!");

// ---------------------------
// <<<<<<<<<<TASK 5>>>>>>>>>>|
// ---------------------------

// CONSOLE
alert("Hello... I can run JS from my web browesr's console");

// ---------------------------
// <<<<<<<<<<TASK 6>>>>>>>>>>|
// ---------------------------

// ---------------------------
// <<<<<<<<<<TASK 7>>>>>>>>>>|
// ---------------------------

// In index.html file

// ----------------------------------------------------------------------------------------------------------------
// |<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<__Variable For Strings__>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>|
// ----------------------------------------------------------------------------------------------------------------

// ---------------------------
// <<<<<<<<<<TASK 1>>>>>>>>>>|
// ---------------------------
var username;

// ---------------------------
// <<<<<<<<<<TASK 2>>>>>>>>>>|
// ---------------------------
var myname="Waqar Ahmed";

// ---------------------------
// <<<<<<<<<<TASK 3>>>>>>>>>>|
// ---------------------------
var message="Hello World!";
alert(message);

// ---------------------------
// <<<<<<<<<<TASK 4>>>>>>>>>>|
// ---------------------------

var std_name="Waqar Ahmed";
var std_age=21;
var std_uni="SSUET";
var std_smt="Mobile & Web Development";

alert(std_name);
alert(std_age);
alert(std_uni);
alert(std_smt);

// ---------------------------
// <<<<<<<<<<TASK 5>>>>>>>>>>|
// ---------------------------

 alert("PIZZA \n PIZZ \n PIZ \n PIZ \n PI \n P");

// ---------------------------
// <<<<<<<<<<TASK 6>>>>>>>>>>|
// ---------------------------

 var num_child=2;
 var part_name="Sana";
 var loc="Dubai";
 var job_tit="Engineer";

 alert("You Will Be an " +job_tit+ " in " +loc+ " and married to " +part_name+ " with " +num_child+ " Kids ");

 
// ---------------------------
// <<<<<<<<<<TASK 7>>>>>>>>>>|
// ---------------------------

var email="vickyahmed2010@hotmail.com"
alert("Your Email Address is " +email);

// ---------------------------
// <<<<<<<<<<TASK 8>>>>>>>>>>|
// ---------------------------

var book="A Smarter Way To learn javaScript";
alert("I'm learning the book " +book);


// ---------------------------
// <<<<<<<<<<TASK 9>>>>>>>>>>|
// ---------------------------

var std_name="Waqar Ahmed";
var std_age=21;
var std_uni="SSUET";
var std_smt="Mobile & Web Development";

alert("My name is "+std_name);
alert("Im  "+std_age+ " Years Old");
alert("I study In "+std_uni);
alert("Currently Enrolled in "+std_smt);


// ---------------------------
// <<<<<<<<<TASK 10>>>>>>>>>>|
// ---------------------------

document.write("YAY! I can Write Html Content Through Java Script");

// ----------------------------------------------------------------------------------------------------------------
// |<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<__Variable For Numbers__>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>|
// ----------------------------------------------------------------------------------------------------------------

// ---------------------------
// <<<<<<<<<<TASK 1>>>>>>>>>>|
// ---------------------------

var age=21;
alert("Im "+age+" Years Old");

// ---------------------------
// <<<<<<<<<<TASK 2>>>>>>>>>>|
// ---------------------------

var visits=25;
alert("You Have Visited This site "+visits+" Times");

// ---------------------------
// <<<<<<<<<<TASK 3>>>>>>>>>>|
// ---------------------------
var birth_year=1997;
document.write("My Birth Year is "+birth_year );
document.write("Data Type of my declared variable is Number");

// ---------------------------
// <<<<<<<<<<TASK 4>>>>>>>>>>|
// ---------------------------

var visi_name="Waqar Ahmed";
var quant=5;
var store_name="XYZ";

document.write(visi_name+" Bought " +quant+ " T-Shirts From " +store_name+ " Store")

// ----------------------------------------------------------------------------------------------------------------
// |<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<__Variable Names: Legal & Illegal__>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>|
// ----------------------------------------------------------------------------------------------------------------

// ---------------------------
// <<<<<<<<<<TASK 1>>>>>>>>>>|
// ---------------------------

var a,b,c;

// ---------------------------
// <<<<<<<<<<TASK 2>>>>>>>>>>|
// ---------------------------

// LEGAL
var ahmed;
var waqarAhmed;
var waqar123;
var waqar_Ahmed;
var waqar$Ahmed

// ILLEGAL
// var .ahmed;
// var waqar Ahmed;
// var 123waqar;
// var waqar-Ahmed;
// var waqar?Ahmed;

// ---------------------------
// <<<<<<<<<<TASK 3>>>>>>>>>>|
// ---------------------------

document.write("Rules For Js Variables");
document.write("Variable names can only contain $, Letter, number , _ ");
document.write("Variable names are CASE SENSITIVE");
document.write("Variable names should not be JS Keywords");

// ----------------------------------------------------------------------------------------------------------------
// |<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<__Math Expressions__>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>|
// ----------------------------------------------------------------------------------------------------------------

// ---------------------------
// <<<<<<<<<<TASK 1>>>>>>>>>>|
// ---------------------------

var num1= +prompt("Enter First Number");
var num2= +prompt("Enter Second Number");

var num =num1+num2;

alert("RESULT OF Adding " +num1+" and "+num2+" is " +num)

// ---------------------------
// <<<<<<<<<<TASK 2>>>>>>>>>>|
// ---------------------------

// Subtraction
var num1= +prompt("Enter First Number");
var num2= +prompt("Enter Second Number");

var num =num1-num2;

alert("RESULT OF Subtracting " +num1+" and "+num2+" is " +num)

// Multiplying
var num1= +prompt("Enter First Number");
var num2= +prompt("Enter Second Number");

var num =num1*num2;

alert("RESULT OF Multiplying " +num1+" and "+num2+" is " +num)

// Dividing
var num1= +prompt("Enter First Number");
var num2= +prompt("Enter Second Number");

var num =num1/num2;

alert("RESULT OF Dividing " +num1+" and "+num2+" is " +num)

// Remainder
var num1= +prompt("Enter First Number");
var num2= +prompt("Enter Second Number");

var num =num1%num2;

alert("Remainder of Dividing " +num1+" by "+num2+" is " +num)


// ---------------------------
// <<<<<<<<<<TASK 3>>>>>>>>>>|
// ---------------------------

var value;
document.write("Value After Variable Declaration is: " +value)

value = 3;
document.write("Initial value: " +value);

value = ++value;
document.write("Value After Increment is: " +value);

value = value+7;
document.write("Value After Addition is: " +value);

value = --value;
document.write("Value After Decrement is: " +value);

value = value %3;
document.write("The Remainder is " +value);

// ---------------------------
// <<<<<<<<<<TASK 4>>>>>>>>>>|
// ---------------------------

var mov_ticket=600;
alert("Price Of One Movie Ticket :"+mov_ticket);

var quantity=+prompt("Number Of Tickets You Want To Buy :")
  
var Price=mov_ticket*quantity;

alert("Price Of " +quantity+ " Tickets Is " + Price);

// ---------------------------
// <<<<<<<<<<TASK 5>>>>>>>>>>|
// ---------------------------

document.write("TABLE GENERATOR");

var num=+prompt("Enter A Number:");
for(var i=0; i<=10; i++)
{
    document.write("<br>" +num+ "X" + i + "=" + num*i);
}

// ---------------------------
// <<<<<<<<<<TASK 6>>>>>>>>>>|
// ---------------------------

// C To F
document.write("Temprature Converter")
var temp_C=+prompt("Enter Temprature In Celcius")

var F = (temp_C * (9/5)) + 32;

document.write(temp_C +"<sup>o</sup>C is "+ F +"<sup>o</sup>F");
// F to C
var temp_F=+prompt("Enter Temprature In Farenheit")

var C = (temp_F - 32) * (5/9);

document.write(temp_F +"<sup>o</sup>F is "+ C +"<sup>o</sup>C");

// ---------------------------
// <<<<<<<<<<TASK 7>>>>>>>>>>|
// ---------------------------
var price1=2500;
var quant1=5;

var price2=3500;
var quant2=4;

var ship_charge=150;

document.write("Price Of Item 1 is "+price1);
document.write("<br>Quantity Of Item 1 is "+quant1);
var total1=price1*quant1;

document.write("<br>Price Of Item 2 is "+price2);
document.write("<br>Quantity Of Item 2 is "+quant2);
var total2=price2*quant2;

document.write("<br>Shipping Price "+ship_charge)

var total = total1 + total2 + ship_charge;
document.write("<br>Total Cost Of your Order Is " +total)
// ---------------------------
// <<<<<<<<<<TASK 8>>>>>>>>>>|
// ---------------------------

var marks1=+prompt("Enter Marks1");

var marks2=+prompt("Enter Marks2");

var marks3=+prompt("Enter Marks3");

var marks4=+prompt("Enter Marks4");

var total_marks=400;
document.write("Total Marks :" +total_marks);

var obtained = marks1 + marks2 + marks3 + marks4;
document.write("Marrks Obtained :" +obtained);

var percent = total_marks/obtained*(100);
document.write("Percentage :" +percent +"%");

// ---------------------------
// <<<<<<<<<<TASK 9>>>>>>>>>>|
// ---------------------------

document.write("CURRENCY CONVERTER<br>");
var pkr=(10*104)+(25*28);

document.write("Total Currency in PKR : " +pkr);

// ---------------------------
// <<<<<<<<<<TASK 10>>>>>>>>>>|
// ---------------------------

var num=25;
alert( ((num+5)*10)/2 );

// ----------------------------------------------------------------------------------------------------------------
// |<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<__Concatinating Strings__>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>|
// ----------------------------------------------------------------------------------------------------------------

// ---------------------------
// <<<<<<<<<<TASK 1>>>>>>>>>>|
// ---------------------------

var name=+prompt("Enter Your Name");
alert("Hi! " +name);

// ---------------------------
// <<<<<<<<<<TASK 2>>>>>>>>>>|
// ---------------------------


document.write("TABLE GENERATOR");

var num=+prompt("Enter A Number:");
for(var i=0; i<=10; i++)
{
    document.write("<br>" +num+ "X" + i + "=" + num*i);
}

// ---------------------------
// <<<<<<<<<<TASK 3>>>>>>>>>>|
// ---------------------------

var city=+prompt("Enter Your City");
if(city==="Karachi" || city==="karachi"){
    alert("Welcome to the city of lights");
}
else
alert("invalid!!!");

// ---------------------------
// <<<<<<<<<<TASK 4>>>>>>>>>>|
// ---------------------------

var gender=+prompt("Enter Your gender");
if(gender==="Male" || gender==="male"){
    alert("Welcome Sir!!");
}
else if(gender==="Female" || gender==="female"){
    alert("Welcome Mam!!");
}


// ---------------------------
// <<<<<<<<<<TASK 5>>>>>>>>>>|
// ---------------------------

var color=+prompt("Enter Signal color");
if(color==="Red" || color==="red"){
    alert("Vehicle Must Stop");
}
else if(color==="Yellow" || color==="yellow"){
    alert("Vehicle Should get ready to move");
}
else if(color==="Green" || color==="green"){
    alert("Vehicle Can Move");
}

// ---------------------------
// <<<<<<<<<<TASK 6>>>>>>>>>>|
// ---------------------------

var age_curr=+prompt("Enter Your Current Age");
var age_max=+prompt("Enter Your MAX age");

if(age_curr<=age_max){
    alert("You Are Welcome");
}

// ---------------------------
// <<<<<<<<<<TASK 7>>>>>>>>>>|
// ---------------------------

var fuel=+prompt("Enter Current fuel in your car");
if(fuel<0.25)
{
    alert("please Refill your Car ")
}

// ---------------------------
// <<<<<<<<<<TASK 8>>>>>>>>>>|
// ---------------------------

var a = 4; 
if (++a === 5){ 
        alert("given condition for variable a is true"); }  
var b = 82; 
if (b++ === 83){     
        alert("given condition for variable b is true"); }  
var c = 12; 
if (c++ === 13){
         alert("condition 1 is true"); } if (c === 13){     alert("condition 2 is true"); } if (++c < 14){     alert("condition 3 is true"); } if(c === 14){     alert("condition 4 is true"); }  
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
          alert("The cost equals"); }  
if (true){
         alert("True"); } if (false){     alert("False"); }  
if("car" < "cat"){     alert("car is smaller than cat"); } 

// ---------------------------
// <<<<<<<<<<TASK 9>>>>>>>>>>|
// ---------------------------


var marks1=+prompt("Enter Marks1");

var marks2=+prompt("Enter Marks2");

var marks3=+prompt("Enter Marks3");

var marks4=+prompt("Enter Marks4");

var total_marks=400;
document.write("Total Marks :" +total_marks);

var obtained = marks1 + marks2 + marks3 + marks4;
document.write("Marrks Obtained :" +obtained);

var percent = total_marks/obtained*(100);
document.write("Percentage :" +percent +"%");

if(percent>=80 && percent<=100){
    document.write("You Are Passed with A+ Grade");
}

else if(percent>=70 && percent<80){
    document.write("You Are Passed with A Grade");
}

else if(percent>=60 && percent<70){
    document.write("You Are Passed with B Grade");
}
else
document.write("You are failed");

// ---------------------------
// <<<<<<<<<<TASK 10>>>>>>>>>>|
// ---------------------------

var name1="Milk";
var price1=2500;
var quant1=5;

var name2="Soda";
var price2=3500;
var quant2=4;

var ship_charge=150;

document.write("Name of Item 1 is" +name1 )
document.write("Price Of " +name1+ " is "+price1);
document.write("<br>Quantity Of Item 1 is "+quant1);
var total1=price1*quant1;

document.write("Name of Item 2 is" +name2 )
document.write("<br>Price Of Item 2 is "+price2);
document.write("<br>Quantity Of " +name2+ " is "+quant2);
var total2=price2*quant2;

document.write("<br>Shipping Price "+ship_charge)

var total = total1 + total2 + ship_charge;
document.write("<br>Total Cost Of your Order Is " +total)


// ---------------------------
// <<<<<<<<<<TASK 11>>>>>>>>>>|
// ---------------------------

var sec_num=8;
var user_sec=+prompt("Guess The Secret Number");

if(user_sec==sec_num){
    alert("Bingo! Correct Answer");
}
else if(user_sec >=6 && user_sec<=8 )
{
    alert("Close enough to correct answer");
}

// ---------------------------
// <<<<<<<<<<TASK 12>>>>>>>>>>|
// ---------------------------

var num=+prompt("Enter A Number");
if(num%3){
    alert("Number is divisible by 3");
}

// ---------------------------
// <<<<<<<<<<TASK 13>>>>>>>>>>|
// ---------------------------

var team_name=prompt("Enter Team1 Name");
var team_core=+prompt("Enter Team1 Score");


var team2_name=prompt("Enter Team2 Name");
var team2_core=+prompt("Enter Team2 Score");

if(team_core>team2_core){
    alert(team_name+"Won The Match")
}
else 
if(team_core<team2_core){
    alert(team2_name+"Won The Match")
}
// ---------------------------
// <<<<<<<<<<TASK 14>>>>>>>>>>|
// ---------------------------

var name=prompt("Enter a String");
alert(name+" is a String")

var num=prompt("Enter a Number");
alert(num+" is a number")

// ---------------------------
// <<<<<<<<<<TASK 15>>>>>>>>>>|
// ---------------------------

var num=+prompt("Enter a Number");

// ---------------------------
// <<<<<<<<<<TASK 16>>>>>>>>>>|
// ---------------------------

// ---------------------------
// <<<<<<<<<<TASK 17>>>>>>>>>>|
// ---------------------------

// ---------------------------
// <<<<<<<<<<TASK 18>>>>>>>>>>|
// ---------------------------

// ---------------------------
// <<<<<<<<<<TASK 19>>>>>>>>>>|
// ---------------------------
