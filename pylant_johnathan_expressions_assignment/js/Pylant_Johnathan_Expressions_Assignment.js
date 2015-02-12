//NAME: Pylant, Johnathan DATE: February 12, 2015 ASSIGNMENT: Expressions

//This script is designed to quickly show managers the retail price of a product at the cost presented by a distributor.

//Prompts for variables
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

console.log("If this is a Bomber, the selling price per item at that cost is " + thePrice0)