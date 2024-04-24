# employee-tracker-sql

# success-criteria

GIVEN a command-line application that accepts user input

WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

# usage

- Clone or downlod the repository
- Right click 'employee-tracker-sql' in VSC and select 'Open in Integrated Terminal'
- Run `npm i` in the command line to install node modules
- Run `psql -U postgres` and enter your password
- Run `\i db/schema.sql`, then run `\i db/seeds.sql`, then use `'\q` to exit postgres
- Run `node index.js` or `npm run start` to begin the sequence

After following the steps above, the user will be prompted with several options to view information from the database, along with the ability to add or update employee details.

# Image


# Link to walkthrough/showcase