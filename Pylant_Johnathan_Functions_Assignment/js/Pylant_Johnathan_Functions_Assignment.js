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