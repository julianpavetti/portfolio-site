"use strict";

/*
  CC_4: Products + Discounts + Checkout Simulation
  - Step 2: products array of objects (5 products)
  - Step 3: for...of + switch category discount
  - Step 4: if...else if chain for customerType extra discount
  - Step 5: simulate checkout for 3 customers (for/while loops)
  - Step 6: for...in log key/value for one product after discounts applied
  - Step 7: Object.entries + destructuring log all product info after inventory updated
*/

// Step 2: Create an array of 5 product objects
const products = [
  { name: "Wireless Headphones", category: "electronics", price: 79.99, inventory: 10 },
  { name: "Hoodie", category: "apparel", price: 45.0, inventory: 25 },
  { name: "Pasta (1 lb)", category: "groceries", price: 2.49, inventory: 40 },
  { name: "Laundry Detergent", category: "household", price: 12.99, inventory: 15 },
  { name: "Notebook", category: "stationery", price: 3.99, inventory: 60 },
];

// Helper: round to 2 decimals safely
function round2(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

// Step 3: Apply a dynamic discount based on category
// We'll store discount info + discounted price on each product.
for (const product of products) {
  let categoryDiscountRate = 0;

  switch (product.category) {
    case "electronics":
      categoryDiscountRate = 0.2;
      break;
    case "apparel":
      categoryDiscountRate = 0.15;
      break;
    case "groceries":
    case "household":
      categoryDiscountRate = 0.1;
      break;
    default:
      categoryDiscountRate = 0;
  }

  product.categoryDiscountRate = categoryDiscountRate;
  product.discountedPrice = round2(product.price * (1 - categoryDiscountRate));
}

console.log("=== Products after category discounts ===");
for (const p of products) {
  console.log(
    `${p.name} | ${p.category} | Original: $${p.price.toFixed(2)} | Category Discount: ${(p.categoryDiscountRate * 100).toFixed(
      0
    )}% | Discounted: $${p.discountedPrice.toFixed(2)} | Inv: ${p.inventory}`
  );
}

// Step 4: customerType + extra discount (applied to total)
let customerType = "student"; // change to: "regular", "student", "senior"

let extraDiscountRate = 0;
if (customerType === "student") {
  extraDiscountRate = 0.05;
} else if (customerType === "senior") {
  extraDiscountRate = 0.07;
} else {
  extraDiscountRate = 0;
}

console.log("\nCustomer type:", customerType, "| Extra discount:", (extraDiscountRate * 100).toFixed(0) + "%");

// Step 5: Simulate checkout for 3 customers
// We’ll simulate each customer's cart as a list of (productIndex, qty).
// Use a FOR loop for customers; and a WHILE loop to reduce inventory per item.

const customerCarts = [
  [
    { index: 0, qty: 1 }, // headphones
    { index: 2, qty: 3 }, // pasta
  ],
  [
    { index: 1, qty: 2 }, // hoodie
    { index: 4, qty: 5 }, // notebook
  ],
  [
    { index: 3, qty: 1 }, // detergent
    { index: 2, qty: 2 }, // pasta
    { index: 4, qty: 1 }, // notebook
  ],
];

console.log("\n=== Checkout Simulation (3 customers) ===");

for (let customerNumber = 1; customerNumber <= 3; customerNumber++) {
  const cart = customerCarts[customerNumber - 1];

  let subtotal = 0;

  // Calculate subtotal from discountedPrice and update inventory
  for (let i = 0; i < cart.length; i++) {
    const { index, qty } = cart[i];
    const product = products[index];

    // Ensure we can't buy more than we have
    const purchasableQty = Math.min(qty, product.inventory);

    // Add to subtotal
    subtotal += product.discountedPrice * purchasableQty;

    // Reduce inventory using a WHILE loop (per instruction)
    let unitsToRemove = purchasableQty;
    while (unitsToRemove > 0) {
      product.inventory -= 1;
      unitsToRemove--;
    }

    // If not enough inventory, mention it
    if (purchasableQty < qty) {
      console.log(
        `Customer ${customerNumber}: Wanted ${qty} of "${product.name}" but only ${purchasableQty} were available.`
      );
    }
  }

  subtotal = round2(subtotal);
  const totalAfterExtra = round2(subtotal * (1 - extraDiscountRate));

  console.log(`Customer ${customerNumber} total: $${totalAfterExtra.toFixed(2)} (subtotal: $${subtotal.toFixed(2)})`);
}

// Step 6: Use for...in to log each key/value pair for a single product after discounts are applied.
// (Pick the first product as the example)
console.log("\n=== for...in (single product key/value pairs) ===");
const oneProduct = products[0];
for (const key in oneProduct) {
  console.log(`${key}: ${oneProduct[key]}`);
}

// Step 7: Use Object.entries() + destructuring to log all product info after inventory is updated.
console.log("\n=== Object.entries() + destructuring (all products after inventory updates) ===");
for (const product of products) {
  console.log(`\n-- ${product.name} --`);
  for (const [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`);
  }
}
