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
  //Filter through array and return only the objects that
  // meet the currency code and price range requirements
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
  // Find the title and price of the item in GBP currency
  function findGBP(arr) {
    let namePrice = "";
    arr.forEach((obj) => {
      if (obj["currency_code"] === "GBP") {
        namePrice += obj["title"] + " £" + obj["price"];
      }
    });
    return namePrice;
  }
  // Find array of objects which materials include wood
  function madeOfWood(arr) {
    return arr.filter((obj) => {
      if (obj["materials"].includes("wood")) {
        return obj;
      }
    });
  }

  // Find array of objects which has an array of materials that are 8 or longer
  function madeOf8Plus(arr) {
    return arr.filter((obj) => {
      if (obj.materials.length >= 8) {
        return obj;
      }
    });
  }
  // Get the length of the array found that has only a list of all items made by sellers
  function madeBySeller(arr) {
    return arr.filter((obj) => {
      if (obj.who_made === "i_did") {
        return obj;
      }
    }).length;
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
  console.log(findGBP(items));
  console.log(madeOfWood(items).forEach((obj) => console.log(obj.title)));
  console.log(
    madeOf8Plus(items).forEach((obj) => {
      console.log(obj.title);
      obj.materials.forEach((value) => console.log(value));
    })
  );
  console.log(madeBySeller(items) + " were made by their sellers");
})();
