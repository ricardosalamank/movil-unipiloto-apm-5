CREATE TABLE product
(
    id INTEGER PRIMARY KEY,
    name TEXT,
    type TEXT,
    quantity REAL,
    price REAL
);
CREATE TABLE sqlite_sequence
(
    name TEXT,
    seq TEXT
);
CREATE TABLE user
(
    id INTEGER PRIMARY KEY,
    email TEXT,
    password TEXT,
    firstname TEXT,
    lastname TEXT,
    phone TEXT
);
