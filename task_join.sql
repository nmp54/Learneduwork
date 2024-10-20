CREATE TABLE users(
	id INT PRIMARY KEY,
    name varchar (100),
    password varchar (10),
    address varchar (100),
    role varchar(20),
    status varchar(20),
    created_at timestamp,
    updated_at timestamp
);
CREATE TABLE products (
	id INT PRIMARY KEY,
    category_id INT,
    user_id INT,
    code VARCHAR(100),
    name VARCHAR(50),
    slug VARCHAR(300),
    description LONGTEXT,
    photo VARCHAR(300),
    qty DOUBLE,
    unit VARCHAR(50), 
    price DOUBLE,
    status VARCHAR(50)  
);
CREATE TABLE categories(
	id INT PRIMARY KEY,
    user_id INT,
    code VARCHAR(100),
    name VARCHAR(50),
    slug VARCHAR(300),
    description text,
    status varchar(50),
    photo varchar(300)
)                                                                                                
SELECT products.*
FROM users
LEFT JOIN products
ON users.id = products.user_id
LEFT JOIN categories
ON products.category_id = categories.id;
