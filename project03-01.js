/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Mark Gore
      Date:   03/01/2024

      Filename: project03-01.js
*/
let menuItems = document.getElementsByClassName(menuItem);

for (let i = 0; i < menuItems.length; i++) {
	document.getElementById(menuItems[i]).addEventListener("click", calcTotal);
}
function calcTotal() {
	let orderTotal = 0;
	for (let i = 0; i < menuItems.length; i++) {
		if (menuItems[i].checked) {
			Number (menuItems[i].value);
			orderTotal += x;
		}
	document.getElementById("billTotal").value= formatCurrency(orderTotal);
	}
		



 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }