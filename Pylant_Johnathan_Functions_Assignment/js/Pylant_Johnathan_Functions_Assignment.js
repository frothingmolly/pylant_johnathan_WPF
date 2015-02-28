//NAME: Pylant, Johnathan DATE: February 26, 2015 ASSIGNMENT: Functions

//DECLARATION OF VARIABLES
//FLORIDA LOTTO VARIABLES
//Initial prompt for user to get code running. Asks user if they want to see the FL lotto numbers
var FLlotto = prompt("Would you like to see the WINNING Florida Lottery Numbers?");
//Remaining FL lotto varialbes
var FLNrepeat;
var FLdWinningNumbers;
var FL1;
var FL2;
var FL3;
var FL4;
var FL5;
var FL6;
//POWERBALL VARIABLES
var PBlotto;
var PBNrepeat;
var PBdWinningNumbers;
var PB1;
var PB2;
var PB3;
var PB4;
var PB5;
var PB6;

//FUNCTIONS
//Function validating input for FL lotto prompt
function FLNvalidation(){
    //Establishes a start a count to go toward break-code below
    var FLNrepeat = 1;
    //If the FLlotto field is left bland, the below error will run and prompt the user for input a few more times.
    while (FLlotto === "") {
        FLlotto = prompt("ERROR0: Do not leave this blank. \nI cannot help you if you do not tell me what you want." +
        " \nWould you like to see the WINNING Florida Lottery Numbers?");
        //Adds to the established counter above
        FLNrepeat = FLNrepeat + 1;
            //When the user fails to fill out the prompt enough times, the below error message is presented and the
            //loop is broken.
            if (FLNrepeat === 4) {
                console.log("ERROR1: I'm not clairvoyant, but if you play the lotto like you answer questions, I am " +
                "pretty sure you didn't win.");
                break;
            }
    }
}
//Function establishing random numbers for lotto
function FLNumbers(){
    //Recalling variables from above and establishing values for randomizing winning FL lotto numbers
    var FL1 = Math.floor(Math.random() * 53);
    var FL2 = Math.floor(Math.random() * 53);
    var FL3 = Math.floor(Math.random() * 53);
    var FL4 = Math.floor(Math.random() * 53);
    var FL5 = Math.floor(Math.random() * 53);
    var FL6 = Math.floor(Math.random() * 53);
        //Loop to ensure unique lotto numbers
        while (FL2===FL1){
            console.log("ERROR2: No two numbers are alike.");
            FL2 = ++FL2;
        }
        while (FL3===FL2 || FL3===FL1){
            console.log("ERROR3: No two numbers are alike.");
            FL3 = ++FL3;
        }
        while (FL4===FL3 || FL4===FL2 || FL4===FL1){
            console.log("ERROR4: No two numbers are alike.");
            FL4 = ++FL4;
        }
        while (FL5===FL4 || FL5===FL4 || FL5===FL3 || FL5===FL2 || FL5===FL1){
            console.log("ERROR5: No two numbers are alike.");
            FL5 = ++FL5;
        }
        while (FL6===FL5 || FL6===FL4 || FL6===FL3 || FL6===FL2 || FL6===FL1){
            console.log("ERROR6: No two numbers are alike.");
            FL6 = ++FL6;
        }
    //Printing winning FL lotto numbers to the console
    var FLdWinningNumbers= console.log("The winning numbers are "+FL1+", "+FL2+", "+FL3+", "+FL4+", "+FL5+", "+FL6);
}
//Function validating input for Powerball prompt
function PBNvalidation(){
    //Establishes a start count to go toward break-code below
    var PBrepeat = 1;
    //If the PBlotto filed is left blank, the below error will run and prompt the user for input a few more times.
    while (PBlotto === ""){
        PBlotto = prompt("ERROR0: Do not leave this blank. \nI cannot help you if you do not tell me what you want." +
        " \nWould you like to see the WINNING Powerball Numbers?");
        //Adds to the established count above
        PBrepeat = PBrepeat +1;
            //When the user fails to fill out the prompt enough times, the below error message is presented and the
            //loop is broken.
            if (PBrepeat === 4){
                console.log("ERROR1: I'm not clairvoyant, but if you play the lotto like you answer questions, I am " +
                "pretty sure you didn't win.");
                break;
            }
    }
}
//Function establishing random numbers for Powerball
function PBNumbers(){
    //Recalling variables from above and establishing values for randomizing winning Powerball numbers
    var PB1 = Math.floor(Math.random() * 59);
    var PB2 = Math.floor(Math.random() * 59);
    var PB3 = Math.floor(Math.random() * 59);
    var PB4 = Math.floor(Math.random() * 59);
    var PB5 = Math.floor(Math.random() * 59);
    var PB6 = Math.floor(Math.random() * 35);
        //Loop ensuring unique Powerball numbers
        while (PB2===PB1){
            console.log("ERROR2: No two numbers are alike.");
            PB2 = ++PB2;
        }
        while (PB3===PB2 || PB3===PB1){
            console.log("ERROR3: No two numbers are alike.");
            PB3 = ++PB3;
        }
        while (PB4===PB3 || PB4===PB2 || PB4===PB1){
            console.log("ERROR4: No two numbers are alike.");
            PB4 = ++PB4;
        }
        while (PB5===PB4 || PB5===PB3 || PB5===PB2 || PB5===PB1){
            console.log("ERROR5: No two numbers are alike.");
            PB5 = ++PB5;
        }
        while (PB6===PB5 || PB6===PB4 || PB6===PB3 || PB6===PB2 || PB6===PB1){
            console.log("ERROR6: No two numbers are alike.");
            PB6 = ++PB6;
        }
    //Printing winning Powerball numbers to the console
    var PBdWinningNumbers = console.log("The winning numbers are "+PB1+", "+PB2+", "+PB3+", "+PB4+", "+PB5+", " +
        "and the POWER PLAY is "+PB6);
}
//MAIN CODE
//Initiates the validation for the FLlotto prompt from line5
FLNvalidation();
//Conditional: If user states yes to prompt, the below function is initiated to generate the random numbers and printed
//to the console
if (FLlotto === "yes" || FLlotto==="Yes" || FLlotto==="YES"){
    FLNumbers();
}
//If the user does not want to see the FL lotto numbers, the function that drives the prompt for Powerball Lotto is
//initiated below
else{
    var PBlotto = prompt("Would you like to see the WINNING Powerball Numbers?");
    //Initiates the validation function for the PBlotto prompt
    PBNvalidation();
        //IF user states yes, the below function is initiated to generate the random numbers and printed to the console
        if (PBlotto==="Yes" || PBlotto==="yes" || PBlotto==="YES"){
            PBNumbers();
        }
        //If the user does not want to see the winning Powerball numbers, the below statement is presented
        else{
            console.log("Thanks for playing.");
        }
}