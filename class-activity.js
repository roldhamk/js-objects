let drinkList = ['flat white', 'latte', 'tea'];
let balance = 10.00;
let flatWhite = 2.50;
let latte = 2.00;
let tea = 1.00;

const drinkAvail = (drink) => {
    if (drink === drinkList[0] || drink === drinkList[1] || drink === drinkList[2]) {
        return true;
    } else {
        return false;
    }
};

const purchase = (drinkCost) => {
    if (drinkCost > balance) {
        return false;
    } else {
        balance = balance - drinkCost;
        return true;
    }
};