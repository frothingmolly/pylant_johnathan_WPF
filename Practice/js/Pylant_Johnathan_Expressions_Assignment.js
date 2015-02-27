//NAME: Pylant, Johnathan DATE: February 12, 2015 ASSIGNMENT: Expressions

//This script is designed to quickly show managers the retail price of a product at the cost presented by a distributor.

//Prompts for user to input values for cost, discount, and profit margin
var Cost = parseFloat(prompt("Enter the cost of a case"));
var CaseDeal = parseFloat(prompt("Enter multi case discount in decimal format"));
var Markup = parseFloat(prompt("Enter the profit margin in decimal format"));

//Equation to account for adjusted cost of case for purchasing multiple cases
var CostAdjust = (Cost * CaseDeal + Cost);

//Arrays establishing package sizing for cases
//0 is for a case of 12 bombers (24oz bottles)
//1 is for a case of 4 six packs (12oz bottles)
//2 is for a case of 6 four packs (12oz bottles)
var myArray = new Array();
myArray[0] = "12";
myArray[1] = "4";
myArray[2] = "6";

//Equation for price of bombers per bottle
var thePrice0 = CostAdjust / myArray[0] * Markup + (Cost/myArray[0]);
alert("If this is a Bomber, the selling price per item at that cost is " + thePrice0);

//Equation for price of 6packs per pack
var thePrice1 = CostAdjust / myArray[1] * Markup + (Cost/myArray[1]);
alert("If this is a 6 pack, the selling price per item at that cost is " + thePrice1);

//Equation for price of 4packs per pack
var thePrice2 = CostAdjust / myArray[2] * Markup + (Cost/myArray[2]);
alert("If this is a 4 pack, the selling price per item at that cost is " + thePrice2);

//Printing solutions to the console
console.log("If this is a Bomber, the selling price per item at that cost is " + thePrice0)
console.log("If this is a 6 pack, the selling price per item at that cost is " + thePrice1)
console.log("If this is a 4 pack, the selling price per item at that cost is " + thePrice2)

//I typed in a case value of 120 and a discount of 0 with a profit margin of 20% and got a value of $12 for bombers, $36
// for 6packs and $24 for 4 packs.

//I typed in a case value of 50 and a discount of 10% with a profit margin of 20% and got a value of $5.08 for bombers, $15.25
// for 6packs and $10.17 for 4 packs.

//I typed in a case value of 35 and a discount of 30% with a profit margin of 20% and got a value of $3.67 for bombers, $11.02
// for 6packs and $7.35 for 4 packs.

//NOTE:  I did not use any other assignment operators because they had no place within the script I wrote. The whole script could be reduced
// to four lines, but I had to embellish to account for the attributes required for the assignment. Additional assignment operators
// were the only attributes that I could not do this for.