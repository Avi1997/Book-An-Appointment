create database book_appointment;
use book_appointment;

CREATE TABLE user
(
user_id varchar(60),
name varchar(60),
email varchar(60),
password varchar(60),
token varchar(255),
PRIMARY KEY (user_id)
);

INSERT into user (user_id,name,email,password,token) values('avinash51','Avinash Thakur','avinash9.5thakur@gmail.com','avinash','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhdmluYXNoNTEiLCJpYXQiOjE2MDMwMzYyMzl9.QuXErJLWhwf_08Eh6j-2QhZWowFMdKUK3oAB8HnX6z0');

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Avinash123';
flush privileges;

CREATE TABLE doctor
(
doc_id int auto_increment,
user_id varchar(60),
name varchar(60),
email varchar(60),
password varchar(60),
token varchar(255),
PRIMARY KEY (user_id)
);





