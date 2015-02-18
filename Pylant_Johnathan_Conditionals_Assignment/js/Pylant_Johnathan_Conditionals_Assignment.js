//NAME: Pylant, Johnathan DATE: February 18, 2015 ASSIGNMENT: Conditionals

//This script is designed to quickly show managers the retail price of a product at the cost presented by a distributor.

//Variables for location, salary, cost of living and housing.
    var Location = prompt("Please, enter desired location.");
    var Salary = Number(prompt("Enter expected salary for new job."));
    var Extra  = Number(prompt("Enter additional income, if applicable. If not, enter 0."));
    var COL = Number(prompt("Enter estimated cost of living for " + Location + "."));
    var House = Number(prompt("Enter expected monthly mortgage or rent expense for " + Location + "."));
    var Location2;
    var Salary2;
    var Extra2;
    var COL2;
    var House2;
    var CompareL;

//Equations for establishing monthly income, comparing income to expenses, and comparing different locations.
    var Income= Number(Salary + Extra)/12;
    var Expenses= Number(COL/12+House);
    var Compare= Number(Income - Expenses);

//output showing equation above
    console.log(Income + "-" + Expenses + "=" + Compare);

//Conditionals for expressing comparison of income and expense for desired location.
    if (Compare >= 1000) {
        console.log(Location + " is a very good choice. After expenses, your cash in hand will be " + Compare + "!");
        }
    if (Compare < 1000 && Compare > 0) {
        console.log(Location + " might be tough on the wallet. Let's keep looking for a more ideal location. Shall we?")
    }
    else {
        console.log("This place seems to have a membership fee. Let's keep looking for a more ideal location. Shall we?");

//Prompt user for additional location and information.
        Location2 = confirm("Would you like to try someplace else? Click OK if you would like to, or click cancel" +
            " if you would rather come back later.");
        }

//Conditional driving prompts for acquiring information on next location or sign off if not desired.
    if (Location2 === true) {
        Location2= prompt("Please, enter the new location.");
        Salary2= Number(prompt("Enter expected salary for new job."));
        Extra2= Number(prompt("Enter additional income, if applicable. If not, enter 0."));
        COL2= Number(prompt("Enter estimated cost of living for " + Location2 + "."));
        House2= Number(prompt("Enter expected monthly mortgage or rent expense for " + Location2 + "."));
    } else {
        document.write("Thank you for your time and good luck on your future venture.")
        }
//Equations for second location.
var Income2= Number(Salary2 + Extra2)/12;
var Expenses2=Number(COL2/12+House2);
var Compare2=Number(Income2-Expenses2);

//output showing equation
    console.log(Income2 + "-" + Expenses2 + "=" + Compare2);

//Conditionals for expressing comparison of income and expense for desired location.
    if (Compare2 >= 1000) {
        console.log(Location + " is a very good choice. After expenses, your cash in hand will be " + Compare + "!");
        }
    if (Compare2 < 1000 && Compare2 > 0) {
        console.log(Location + " might be tough on the wallet. Let's keep looking for a more ideal location. Shall we?")
        }
    else {
        console.log("This place seems to have a membership fee. Let's keep looking for a more ideal location. Shall we?");

//Equations for comparing locations.
    var L1Better= Number(Location-Location2);
    var L2Better= Number(Location2-Location);

//Informs user of better location and by how much.
    CompareL = confirm("Would you like to see the difference between your first and second location? " +
        "Click OK if you would like to, or click cancel if you would rather come back later.");
    if (CompareL === true) {
        console.log(Location + " had a take home of " + Compare +". However, " + Location2 + "\'s take home was " +
            Compare2 + ".")
        }
   if (Compare > Compare2) {
        console.log(Location + " is the better choice because it leaves you with " + L1Better + " more in your pocket" +
            "than " + Location2 + ".")
        }
   if (Compare < Compare2) {
        console.log(Location2+ " is the better choice because it leaves you with " + L2Better + " more in your pocket" +
            "than " + Location + ".")}
