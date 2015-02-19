//NAME: Pylant, Johnathan DATE: February 18, 2015 ASSIGNMENT: Conditionals

//This script is designed to quickly show managers the retail price of a product at the cost presented by a distributor.

//Variables for location, salary, cost of living and housing.
var Location = prompt("Please, enter desired location.");
var Salary = Number(prompt("Enter expected salary for new job."));
var Extra  = Number(prompt("Enter additional income, if applicable. If not, enter 0."));
var COL = Number(prompt("Enter estimated monthly cost of living for " + Location + ". Visit www.Numbeo.com/cost-of-living" +
    " for help."));
var House = Number(prompt("Enter expected monthly mortgage or rent expense for " + Location + "."));
var Location2;
var Salary2;
var Extra2;
var COL2;
var House2;
var Choose;
var TryAgain;

//Equations for establishing monthly income and comparing income to expenses for desired location.
var Income= Number(Salary + Extra)/12;
var Expenses= Number(COL+House);
var Compare= Number(Income - Expenses);

//Output showing equation above.
console.log(Income + "-" + Expenses + "=" + Compare);

//Conditionals for expressing comparison of income and expense for desired location.
if (Compare >= 1000) {
    console.log(Location + " is a very good choice. After expenses, your cash in hand will be " + Compare + "!");
}
else if (Compare < 1000 && Compare > 0) {
    console.log(Location + " might be tough on the wallet. Let's keep looking for a more ideal location. Shall we?");
//Asks User if they would like to explore other locations.
    Location2 = confirm("Would you like to try someplace else? Click OK if you would like to, or click cancel" +
        " if you would rather come back later.");
}
else {
    console.log("This place seems too expensive. Let's keep looking for a more ideal location. Shall we?");

//Asks User if they would like to explore other locations.
    Location2 = confirm("Would you like to try someplace else? Click OK if you would like to, or click cancel" +
        " if you would rather come back later.");
}

//Conditional driving prompts for acquiring information on next location or sign off if not desired.
if (Location2 === false) {
    console.log("Thank you for your time and good luck on your future venture.");
}
else {
    Location2 = prompt("Please, enter the new location.");
    Salary2 = Number(prompt("Enter expected salary for new job."));
    Extra2 = Number(prompt("Enter additional income, if applicable. If not, enter 0."));
    COL2 = Number(prompt("Enter estimated monthly cost of living for " + Location2 + ". Visit www.Numbeo.com/cost-of-living" +
        " for help."));
    House2 = Number(prompt("Enter expected monthly mortgage or rent expense for " + Location2 + "."));

//Equations for establishing monthly income and comparing income to expenses for second location
    var Income2 = Number(Salary2 + Extra2) / 12;
    var Expenses2 = Number(COL2 + House2);
    var Compare2 = Number(Income2 - Expenses2);

//Output showing equation above.
    console.log(Income2 + "-" + Expenses2 + "=" + Compare2);

//Conditional for expressing comparison and expense for second location.
    if (Compare2 >= 1000) {
        console.log(Location2 + " is a very good choice. After expenses, you cash in hand will be " + Compare2 + "!");
    }
    else if (Compare2 < 1000 && Compare2 > 0) {
        console.log(Location2 + " might be tough on the wallet.");
    }
    else {
        console.log(Location2 + " seems too expensive.");
    }

//Prompt user to compare locations.
    Choose = confirm("Would you like to compare " + Location + " and " + Location2 + "?");


//Conditional for comparing locations
    if (Choose === false) {
        console.log("Thank you for your time and good luck on your future venture.");
    }
    else {
        console.log(Location + " had a take home of " + Compare + ", while " + Location2 + " had a take home of " +
            Compare2 + ".");
    }

//Equations to establish the difference between the better and lesser locations.
    var L1 = Number(Compare - Compare2);
    var L2 = Number(Compare2 - Compare);
//Showing the difference between the better location and the lesser location.

    if (Compare > Compare2) {
        console.log(Location + " is the better choice because you were left with $" + L1 + " more cash in hand " +
            "than in " + Location2 + ".");
    }

    if (Compare < Compare2) {
        console.log(Location2 + " is the better choice because you were left with $" + L2 + " more cash in hand " +
            "than in " + Location + ".");
    }

}