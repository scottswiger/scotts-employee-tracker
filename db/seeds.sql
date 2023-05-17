INSERT INTO department (dept_name)
VALUES
    ("Engineering"),
    ("Finance"),
    ("Legal"),
    ("Sales");

INSERT INTO role (title, salary, dept_id)
VALUES
    ("Sales Lead", 200000, 4),
    ("Salesperson", 100000, 4),
    ("Lead Engineer", 150000, 1),
    ("Software Engineer", 100000, 1),
    ("Account Manager", 160000, 2),
    ("Accountant", 125000, 2),
    ("Legal Team Lead", 250000, 3),
    ("Lawyer", 190000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Mike", "Wazowski", 1, null),
    ("George", "ChaCarlinn", 2, 1), 
    ("Apple", "Bottom", 3, null),
    ("Pear", "Head", 4, 3),
    ("Mike", "Mike", 5, null),
    ("Kleindesterner", "Smeegleborp", 6, 5),
    ("Le", "Lo", 7, null),
    ("Deedle", "Dorp", 8, 7);