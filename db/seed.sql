INSERT INTO department (name) VALUES ('FBI');
INSERT INTO department (name) VALUES ('CIA');
INSERT INTO role (title, salary, department_id) VALUES ('Overlord', 500000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Right Hand Person', 100000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Murder Hobo', 80000, 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Fox', 'Mulder', 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Dana', 'Scully', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Deep', 'Throat', 3, 1);