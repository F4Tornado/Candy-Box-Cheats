//Lets you unplant lollipops from the farm. Go into the console and type farm.unplant(amt) where amt is the amount you want to unplant.
farm.unplant = (amt) => {
  farm.setLollipopsPlanted(farm.lollipopsPlanted-=amt);
  lollipops.setNbrOwned(lollipops.nbrOwned+=amt);
}

//Removes the limit on the amount of lollipops you can grow per second
farm.maxLollipopsPerDay = Infinity;
farm.calculateLollipopsPerDay();

// Prevents shopkeep running out of lollipops (Unless you can click 280 times/second)
setInterval(() => {
  lollipops.setNbrInStock(140)
}, 500)
