const Database = require("./Database.js");

class EmployeeDatabase extends Database {
  constructor(options) {
    super(options);
  }

  getDepartments() {
    return new Promise((resolve, reject) => {
        this.db.query('SELECT * FROM department', (err, results) => {
            if (err) {
                reject(err)
            }
            resolve(results)
        })
    })
}

getRoles() {
  return new Promise((resolve, reject) => {
      this.db.query('SELECT role.id, role.title, role.salary, department.name AS department_name FROM role JOIN department ON role.department_id = department.id', (err, results) => {
          if (err) {
              reject(err)
          }
          resolve(results)

      })
  })
}
getEmployees() {
  return new Promise((resolve, reject) => {
      this.db.query(`SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name,
                      role.title AS job_title, department.name AS department, role.salary AS salary,
                      CASE 
                      WHEN manager.first_name IS NULL THEN ''
                      ELSE CONCAT(manager.first_name, ' ', manager.last_name)
                      END AS manager_name 
                      
                      FROM employee
                      JOIN  role
                      ON employee.role_id = role.id
                      JOIN department
                      ON role.department_id = department.id 
                      LEFT JOIN employee AS manager
                      ON employee.manager_id = manager.id`, (err, results) => {
          if (err) {
              reject(err)
          }
          resolve(results)

      })
  })
}

addDepartment(department) {
  return new Promise((resolve, reject) => {
      this.db.query(`INSERT INTO department (name) VALUES ($1)`, [department.department_name], (err, results) => {
          if (err) {
              reject(err)
          }
          resolve(`New department ${department.department_name} successfully added!`)
      })
  })
}

addRole(role) {
  return new Promise((resolve, reject) => {
      this.db.query(`INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)`, [role.title, role.salary, role.department], (err, results) => {
          if (err) {
              reject(err)
          }
          resolve(`New role ${role.title} asuccessfully added!`)

      })
  })
}
addEmployee(employee) {
  return new Promise((resolve, reject) => {
      this.db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`, [employee.first_name, employee.last_name, employee.role_id, employee.manager_id], (err, results) => {
          if (err) {
              reject(err)
          }
          resolve(`New employee ${employee.first_name} ${employee.last_name} successfully added!`)

      })
  })
}

updateEmployee(employee) {
  return new Promise((resolve, reject) => {
      this.db.query(`UPDATE employee SET role_id = $1 WHERE id = $2`, [employee.role_id, employee.id], (err, results) => {
          if (err) {
              reject(err)
          }
          resolve(`Employee number ${employee.id}'s information was successfully updated!`)

      })
  })
}

}

module.exports = EmployeeDatabase