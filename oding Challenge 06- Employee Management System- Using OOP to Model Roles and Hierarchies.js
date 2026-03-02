// Step 2: Base Class
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

// Step 3: Subclass
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); // inherit properties
    this.teamSize = teamSize;
  }

  // Override parent method
  describe() {
    return `${this.name} manages the ${this.department} department and leads a team of ${this.teamSize} employees.`;
  }
}

// Step 4: Create Sample Instances
const emp1 = new Employee("Alice", "Finance");
const emp2 = new Employee("David", "Marketing");

const mgr1 = new Manager("Sarah", "Engineering", 8);
const mgr2 = new Manager("Michael", "HR", 5);

// Step 5: Company Class
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    for (const employee of this.employees) {
      console.log(employee.describe());
    }
  }
}

// Step 6: Instantiate Company and Add Employees
const myCompany = new Company();

myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

myCompany.listEmployees();