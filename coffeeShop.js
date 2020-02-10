const coffeeShop = {
  branch: "Manchester",
  drinks: {
    tea: 1.0,
    latte: 2.5,
    water: 1.4
  },
  food: {
    pizza: 5.0,
    ramen: 6.8,
    sushi: 4.5
  },
  drinksOrdered() {
    return this.drinks;
  },
  foodOrdered() {
    return;
  }
};

// return this.drinks.latte + this.drinks.tea + this.drinks.water; will return TOTAL of all drinks
console.log(coffeeShop.drinksOrdered());
