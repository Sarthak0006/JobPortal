drop database if exists boat;

create database boat;

show databases;

use boat;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50)
);

CREATE TABLE jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jobtitle VARCHAR(255) NOT NULL,
    jobdescription VARCHAR(255) NOT NULL,
	noofapply INT
);


create table applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT,
    user_id INT,
    FOREIGN KEY (job_id) REFERENCES jobs(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE applications ADD COLUMN status VARCHAR(50) DEFAULT 'pending';