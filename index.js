// Write your solution in this file!
var customerName = `bob`;

function upperCaseCustomerName (){
    return customerName.toUpperCase();
}
var customerName = upperCaseCustomerName();

function setBestCustomer() {
    var bestCustomer = `not bob`;
}
setBestCustomer();

function overwriteBestCustomer(newBestCustomer) {
    var bestCustomer = newBestCustomer;
}
newBestCustomer();

const leastFavoriteCustomer = `Aria`;
function changeLeastFavoriteCustomer(leastFavoriteCustomer) {
    const leastFavoriteCustomer = leastFavoriteCustomer;
    return leastFavoriteCustomer;
}
leastFavoriteCustomer();