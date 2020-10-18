
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

INSERT into user (user_id,name,email,password,token) values('avinash','Avinash Thakur','avinash9.5thakur@gmail.com','avinash','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhdmluYXNoNTEiLCJpYXQiOjE2MDMwMzYyMzl9.QuXErJLWhwf_08Eh6j-2QhZWowFMdKUK3oAB8HnX6z0');

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Avinash123';
flush privileges;

CREATE TABLE doctor
(
doc_id int auto_increment,
user_id varchar(60),
name varchar(60),
email varchar(60),
appointment_slot_time varchar(255),
day_start varchar(255),
day_end varchar(255),
PRIMARY KEY (doc_id)
);


CREATE TABLE appointment
(
app_id int auto_increment,
app_date date,
app_time time,
doc_id int,
patient_name varchar(80),
patient_email varchar(255),
patient_phone varchar(15),
app_status varchar(25),
PRIMARY KEY (app_id)
);
insert into appointment (app_date,app_time,doc_id,patient_name,patient_email,patient_phone,app_status)values ('2020-11-11','09:30:00',1,'NO Name','abc@def.com','1234567890','CLOSED');

insert into appointment (app_date,app_time,doc_id,patient_name,patient_email,patient_phone,app_status)values ('2020-11-11','09:30:00',2,'don','some@sws.com','123456789','OPEN');
select * from appointment where doc_id = 1 and app_date >= '2020-10-18';

select * from doctor inner join user on doctor.user_id = user.user_id where user.user_id ='avinash78' and user.password='$2b$08$WcQ7EMziYxsyhPJBnot7Sef6aClh033uCxzBlHqu.ycR1oCE9dbuK';  