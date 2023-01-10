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
  console.log(
    "The average price is $",
    Math.round((calcAvgPrice(items) + Number.EPSILON) * 100) / 100
  );
})();
