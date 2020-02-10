const coffeeShop2 = {
  branch: "Manchester",
  drinks: [
    ["tea", "coffee", "water"],
    [1, 2.5, 1.5]
  ],
  food: [
    ["pizza", "ramen", "cake"],
    [5.0, 6.5, 2.8]
  ],
  drinksOrdered(drink) {
    if (drink === this.drinks[0][0]) {
      return `You have ordered ${this.drinks[0][0]}, cost £${this.drinks[1][0]}`;
    } else if (drink === this.drinks[0][1]) {
      return `You have ordered ${this.drinks[0][1]}, cost £${this.drinks[1][1]}`;
    } else if (drink === this.drinks[0][2]) {
      return `You have ordered ${this.drinks[0][2]}, cost £${this.drinks[1][2]}`;
    }
  },
  foodOrdered() {
    return;
  }
};

// console.log(coffeeShop2.drinks[1][1]); // prints 2.5
// console.log(coffeeShop2.food[0][1]); //  prints ramen

console.log(coffeeShop2.drinksOrdered("coffee"));
