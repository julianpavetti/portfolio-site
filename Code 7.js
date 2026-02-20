"use strict";

/*
Challenge: Payroll Functions (cc_5.js)
- Clean syntax
- Modular design
- Meaningful function names
- Test functions individually using console.log()
*/

// Step 2: Employee array (3–5 objects)
const employees = [
  { name: "Ava", hourlyRate: 22.5, hoursWorked: 38 },
  { name: "Noah", hourlyRate: 18.0, hoursWorked: 44 },
  { name: "Mia", hourlyRate: 30.0, hoursWorked: 52 },
  { name: "Ethan", hourlyRate: 25.0, hoursWorked: 40 },
  { name: "Sophia", hourlyRate: 19.5, hoursWorked: 41 }
];

// Step 3: Base pay for up to 40 hours only
function calculateBasePay(rate, hours) {
  const baseHours = Math.min(hours, 40);
  return rate * baseHours;
}

// Step 4: Overtime pay at 1.5x rate for hours over 40
function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - 40, 0);
  return overtimeHours * rate * 1.5;
}

// Step 5: Taxes deduct 15% of gross pay
function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}

// Helper: format currency for cleaner console output
function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

// Step 6: Process payroll for a single employee
function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;

  const taxes = calculateTaxes(grossPay);
  const netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: Number(basePay.toFixed(2)),
    overtimePay: Number(overtimePay.toFixed(2)),
    grossPay: Number(grossPay.toFixed(2)),
    netPay: Number(netPay.toFixed(2))
  };
}

/* -------------------------------------------------------
   ✅ Individual Function Tests (required by instructions)
-------------------------------------------------------- */
console.log("=== Individual Function Tests ===");

console.log("Base Pay (rate=20, hours=35) should be 700:", calculateBasePay(20, 35));
console.log("Base Pay (rate=20, hours=45) should be 800:", calculateBasePay(20, 45));

console.log("OT Pay (rate=20, hours=35) should be 0:", calculateOvertimePay(20, 35));
console.log("OT Pay (rate=20, hours=45) should be 150:", calculateOvertimePay(20, 45));

console.log("Taxes on gross=1000 should be 150:", calculateTaxes(1000));

console.log("Format Money 1234.5 should be $1234.50:", formatMoney(1234.5));

console.log("Process Payroll sample:",
  processPayroll({ name: "Test Employee", hourlyRate: 20, hoursWorked: 45 })
);

/* -------------------------------------------------------
   ✅ Step 7: Loop through employees and log payroll objects
-------------------------------------------------------- */
console.log("\n=== Payroll Results ===");

for (const employee of employees) {
  const payroll = processPayroll(employee);
  console.log(payroll);

  // Optional: friendly summary line (still uses functions via payroll object)
  console.log(
    `${payroll.name} | Base: ${formatMoney(payroll.basePay)} | OT: ${formatMoney(payroll.overtimePay)} | Gross: ${formatMoney(payroll.grossPay)} | Net: ${formatMoney(payroll.netPay)}`
  );
}