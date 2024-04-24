-- Connect to the database
INSERT INTO department (name)
VALUES ('sales'),
        ('engineering'),
        ('finance'),
        ('legal');

INSERT INTO role (title, salary, department_id)
VALUES ('sales lead', 100000, 1),
        ('sales person', 23000, 1),
        ('lead engineer', 80000, 2),
        ('software engineer', 90000, 2),
        ('accountant', 49000, 3),
        ('legal team lead', 74000, 4),
        ('lawyer', 38000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('eva', 'baker', 1, NULL),
        ('albert', 'moss', 2, 1),
        ('wallace', 'powers', 5, NULL),
        ('aflie', 'johnson', 3, NULL),
        ('marian', 'webb', 4, 4),
        ('homer', 'mann', 6, NULL),
        ('laura', 'wood', 7, 6),
        ('eva', 'curtis', 2, 1),
        ('jerry', 'terry', 4, 4),
        ('john', 'doe', 5, NULL);