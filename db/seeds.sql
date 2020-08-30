INSERT INTO department (name) 
VALUES ("Sales");

INSERT INTO department (name) 
VALUES ("Marketing");

INSERT INTO department (name) 
VALUES ("HR");


INSERT INTO role (title, salary, department_id) 
VALUES ("Manager", 60000, 1 );

INSERT INTO role (title, salary, department_id) 
VALUES ("Associate", 40000, 2  );

INSERT INTO role (title, salary, department_id) 
VALUES ("Intern", 25000, 3 );


INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Bob", "Johnson", 1);   
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Bob", "Barker", 2);   
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Bob", "Boberton", 3);
