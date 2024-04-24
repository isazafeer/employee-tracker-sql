const mainQuestion =  [
    {
        type : 'list',
        name : 'option',
        message : 'what would you like to do?',
        choices : [
            {value : 'view_departments', name : 'view all departments'},
            {value : 'view_roles', name : 'view all roles' },
            {value : 'view_employees', name : 'view all employees' },
            {value : 'add_department', name : 'add a department' },
            {value : 'add_role', name : 'add a role' },
            {value : 'add_employee', name : 'add an employee' },
            {value : 'update_role', name : 'update an employee role' }
        ]
    },
]

const QuestionForAddingADepartment = [
    {
        type : 'input',
        message : 'enter the name of the department you want to add',
        name : 'department_name' 
    },
]

const QuestionsForAddingARole = [
    {
        type : 'input',
        message : 'enter the name of the role you want to add',
        name : 'title'
    },
    {
        type : 'number',
        message : 'enter the salary of the new role (must be a number)',
        name : 'salary',
    },
    {
        type : 'list',
        message : 'select the department of the new role',
        choices : [],
        name : 'department'
    }
]

const QuestionsForAddingAnEmployee = [
    {
        type : 'input',
        message : 'enter the first name of the employee you want to add',
        name : 'first_name' 
    },
    {
        type : 'input',
        message : 'enter the last name of the employee you want to add',
        name : 'last_name' 
    }, 
    {
        type : 'list',
        message : 'select the role of the new employee',
        choices : [],
        name : 'role_id'
    },
    {
        type : 'list',
        message : 'select the manager of the new employee',
        choices : [],
        name : 'manager_id' 
    }
]

const QuestionsForUpdatingAnEmployeesRole = [
    {
        type : 'list',
        message : 'select the employee who\'s role you want to update',
        choices : [],
        name : 'employee_id'
    },
    {
        type : 'list',
        message : 'select the new role for this employee',
        choices : [],
        name : 'role_id'
    }
]

module.exports = { mainQuestion, QuestionForAddingADepartment, QuestionsForAddingARole, QuestionsForAddingAnEmployee, QuestionsForUpdatingAnEmployeesRole}