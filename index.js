const inquirer = require('inquirer')
const { mainQuestion, QuestionForAddingADepartment, QuestionsForAddingARole, QuestionsForAddingAnEmployee, QuestionsForUpdatingAnEmployeesRole } = require('./questions')
const EmployeeDatabase = require ('./db/EmployeeDatabase')

const db = new EmployeeDatabase({
    user: 'postgres',
    password: 'Nike2020',
    host: 'localhost',
    database: 'employee_db'
})

db.connect()

const handleMainQuestion = () => {
    inquirer
    .prompt(mainQuestion)
    .then((responseObj) => {
        switch (responseObj.option) {
            case 'view_departments':
                view_departments();
                break;
            case 'view_roles' :
                view_roles();
                break;
            case 'view_employees' :
                view_employees();
                break;
            case 'add_department':
                add_department();
                break;
            case 'add_role':
                add_role();
                break;
            case 'add_employee':
                add_employee();
                break;
            case 'update_role':
                update_role();
                break;
        }
    })
}

const view_departments = () => {
    
    db.getDepartments()
    .then(({rows}) => { 
        
        console.table(rows)

        handleMainQuestion()
    })
}

const view_roles = () => {
    
    db.getRoles()
    .then(({rows}) => {
        console.table(rows)

        handleMainQuestion()
    })
}

const view_employees = () => {
    
    db.getEmployees()
    .then(({rows}) => {
        console.table(rows)

        handleMainQuestion()
    })
}

const add_department = () => {
    inquirer.prompt(QuestionForAddingADepartment)
    .then((response) => {
      db.addDepartment(response)
      .then((results) => {
          console.log('\n', results, '\n')
          handleMainQuestion()
      })
    })
  }
  
  
  
  const add_role = () => {
      
      db.getDepartments().then(({rows}) => {
          const theDepartmentQuestion = QuestionsForAddingARole[2]
          
          rows.forEach((departmentRow) => {               
              theDepartmentQuestion.choices.push({
                  value: departmentRow.id,
                  name: departmentRow.role_name
              })
          })
          
          inquirer.prompt(QuestionsForAddingARole)
          .then((response) => {
              console.log("Role object to be added:", response);
          db.addRole(response)
          .then((results) => {
              console.log('\n', results, '\n')
              handleMainQuestion()
              })
          })
      })
  
  }
  
  const add_employee = () => {
      db.getRoles().then(({rows}) => {
          const theRoleQuestion = QuestionsForAddingAnEmployee[2]
  
          rows.forEach((roleRow) => {
              theRoleQuestion.choices.push({
                  value: roleRow.id,
                  name: roleRow.title
              })
          })
  
          db.getEmployees().then(({rows}) => {
              const theManagerQuestion = QuestionsForAddingAnEmployee[3]
  
              rows.forEach((employee) => {
                  theManagerQuestion.choices.push({
                      value: employee.id,
                      name: employee.name
                  })
              })
  
              theManagerQuestion.choices.push({
                  value: null,
                  name: 'Does not have a manager'
              })
  
              inquirer.prompt(QuestionsForAddingAnEmployee)
              .then((response) => {
                  db.addEmployee(response)
                  .then((results) => {
                      console.log('\n', results, '\n')
                      handleMainQuestion()
                  })
              })
          })
      })
  }
  
  const update_role = () => {

    db.getEmployees().then(({rows}) => {
        const theEmployeeQuestion = QuestionsForUpdatingAnEmployeesRole[0]
        theEmployeeQuestion.choices = []
        rows.forEach((employee) => {
            theEmployeeQuestion.choices.push({
                value: employee.id,
                name: employee.name
            })
        })

        db.getRoles().then(({rows})=> {
            const theRoleUpdatingQuestion = QuestionsForUpdatingAnEmployeesRole[1]
            theRoleUpdatingQuestion.choices = []
            rows.forEach((role) => {
                theRoleUpdatingQuestion.choices.push({
                    value: role.id,
                    name: role.title
                })
            })
            inquirer.prompt(QuestionsForUpdatingAnEmployeesRole)
            .then((response) => {
            
                const employee = {
                    id: response.employee_id,
                    role_id: response.role_id
                };
                db.updateEmployee(employee).then((results) => {
                    console.log('\n', results, '\n')
                    handleMainQuestion()
                }).catch((error) => {
                    console.error(error);
                    handleMainQuestion();
                });
            })
        })
    })
}

handleMainQuestion()

  