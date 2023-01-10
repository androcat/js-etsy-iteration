(function () {
  function calcAvgPrice(arr) {
    let sum = 0;
    let avg;
    let count = 0;
    //For each object in the array
    arr.forEach((obj) => {
      // Check to see if the price is in USD
      if (obj["currency_code"] === "USD") {
        // Add to running sum
        sum += obj.price;
        // Add to our count of total items which have price in USD
        count++;
      }
    });
    // Calculate the average
    avg = sum / count;
    // Return the average
    return avg;
  }
  function gatherPriceRange(arr) {
    return arr.filter((obj) => {
      if (
        obj["currency_code"] === "USD" &&
        obj["price"] >= 14.0 &&
        obj["price"] <= 18.0
      ) {
        return obj;
      }
    });
  }

  console.log(
    "The average price is $",
    // Round the average to the nearest 100ths place
    Math.round((calcAvgPrice(items) + Number.EPSILON) * 100) / 100
  );
  console.log(
    "Items that cost between $14.00 and $18.00 USD",
    gatherPriceRange(items)
  );
})();
