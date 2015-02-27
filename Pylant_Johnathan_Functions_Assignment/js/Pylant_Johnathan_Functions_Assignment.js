//NAME: Pylant, Johnathan DATE: February 26, 2015 ASSIGNMENT: Functions

//DECLARATION OF VARIABLEST
//FLORIDA LOTTO VARIABLES
var FLlottoprompt;
var FLNrepeat;
var FLdWinningNumbers;
var FL1;
var FL2;
var FL3;
var FL4;
var FL5;
//POWERBALL VARIABLES
var PBlottoprompt;
var PBNrepeat;
var PBdWinningNumbers;
var PB1;
var PB2;
var PB3;
var PB4;
var PB5;
var PB6;

//FUNCTIONS
//This function validates the user input for the FL lotto prompt
function FLPromptValidation(){
    var FLNrepeat=1;
        while (FLlottoprompt === ""){
            FLlottoprompt = ("ERROR0: Please, do not leave this blank. \n I cannot help you if you do not tell me what you want. \n" +
            "Would you like to see the WINNING Florida Lottery numbers?")
            FLNrepeat=FLNrepeat+1;

            if (FLNrepeat=4) {
                console.log("I am not clairvoyant, but if you play the lotto the way you answer questions, I am pretty sure you didn't win.");
                break;
            }
        }
}
//This function generates random numbers to be presented to the user as winning FL lotto numbers
function FLNumbers
//This function initiates interactions with the user by prompting if they would like to see winning FL lotto numbers
function FLlottoprompt(){
    var FLlotto = prompt("Would you like to see the WINNING Florida Lottery numbers? \n Please, type Yes or No.");
    FLPromptValidation();
        if (FLlotto==="Yes" || FLlotto==="yes"){
            FLNumbers();
        }
}