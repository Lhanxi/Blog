DROP TABLE IF EXISTS module;
DROP TABLE IF EXISTS semester;
DROP TABLE IF EXISTS users;

CREATE TABLE semester (
    id SERIAL PRIMARY KEY,
    title VARCHAR(128) NOT NULL
);

INSERT INTO semester (title) VALUES
    ('Year 1 Semester 1'),
    ('Year 1 Semester 2'),
    ('Year 2 Semester 1'),
    ('Year 2 Semester 2');

CREATE TABLE module (
    id SERIAL PRIMARY KEY,
    title VARCHAR(128) NOT NULL,
    lecturer VARCHAR(128) NOT NULL,
    overview TEXT NOT NULL,
    topics TEXT NOT NULL,
    assessments TEXT NOT NULL,
    remarks TEXT NOT NULL,
    semester_id INT NOT NULL REFERENCES semester(id) ON DELETE CASCADE
);

INSERT INTO module (title, lecturer, overview, topics, assessments, remarks, semester_id) VALUES
    ('CS1010A', 
    'Prof Leong Wai Kay', 
    E'CS1010A is the old version of CS1010S (prior to AY 23/24) and is the CS1010 variant for Business Analytics majors. Tough module even with decent programming background. Even though the module is technically an introductory module, it is best to come in with some basic Python and computational thinking background.',
    E'1. Intro to Python Primitives and Operations
    2. Functional Abstraction
    3. Recursion, Iteration & Order of Growth
    4. Higher-order Functions
    5. Data Abstraction & Debugging
    6. Working with Sequences
    7. Searching & Sorting
    8. Implementing Data Structures
    9. Object-Oriented Programming
    10. Memoization, Dynamic Programming & Exception Handling
    11. Visualising Data',
    E'Coursemology Level (Hit level 50): 15%
    Class Participation: 5%
    Midterm: 20%
    Practical: 20% 
    Final: 40% (Progressive grading: If you do better in finals than midterms, finals will take up 60%)',
    E'Lecture:
    - 1 2-hour lecture every week. The content is gone through fairly quickly and some examples are also too complicated, like how to implement differentiation in Python.
    
    Coursemology:
    - CS1010A uses Coursemology as its main content delivery platform. There are 3 main types of assignments: lecture training (done after lecture), tutorial training (done before tutorial), and Missions. Completing each assignment gives you XP, which you need to accumulate to hit the target of level 50.
    
    Tutorial:
    - Attendance is recorded and indirectly graded. It is basically class participation, and Coursemology XP will be awarded.
    
    Recitation:
    - Mini-lecture that re-iterates and goes into greater depth than lectures.

    Assessments:
    - Midterms: Quite challenging written exam paper.
    - Practical: Held on Saturday of week 13, consisting of 3 questions (Recursion/Iteration 5 marks, Data Processing 10 marks, OOP 5 marks).
    - Finals: Written paper similar to midterms, focusing on code tracing, lists, dictionaries, and OOP topics like diamond inheritance and polymorphism.',
    1);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(128) NOT NULL UNIQUE,
    password VARCHAR(128) NOT NULL,
    role VARCHAR(128) NOT NULL
);

INSERT INTO users (username, password, role) VALUES
    ('admin', 'password', 'admin');
