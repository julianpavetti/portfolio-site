// Step 2: Create Customer Records
const customers = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    purchases: ["Laptop", "Mouse"]
  },
  {
    name: "Brian Smith",
    email: "brian@example.com",
    purchases: ["Phone"]
  },
  {
    name: "Carla Davis",
    email: "carla@example.com",
    purchases: ["Tablet", "Headphones", "Charger"]
  }
];

// Step 3: Add and Remove Data
customers.push({
  name: "David Lee",
  email: "david@example.com",
  purchases: ["Camera"]
});

customers.shift(); // removes the first customer

// Step 4: Update Customer Info
customers[0].email = "brian.new@example.com"; // update email
customers[1].purchases.push("Smartwatch"); // add new purchase

// Step 5: Display Customer Information
customers.forEach(customer => {
  console.log(
    `${customer.name} | ${customer.email} | Total Purchases: ${customer.purchases.length}`
  );
});
