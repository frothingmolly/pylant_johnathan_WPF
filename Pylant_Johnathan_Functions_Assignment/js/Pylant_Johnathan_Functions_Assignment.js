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
    //Recalling variables from above and establishing values for randomizing winning numbers
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