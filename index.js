// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName(){
 customerName = customerName.toUpperCase()
}


// Function to set the bestCustomer variable to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer variable with a new value
function overwriteBestCustomer(newCustomer) {
  bestCustomer = newCustomer;
}

// Constant variable for least favorite customer
const leastFavoriteCustomer = 'somebody';

// Function that attempts to reassign the leastFavoriteCustomer variable (and should throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'somebody else'; // This line should throw an error
}
