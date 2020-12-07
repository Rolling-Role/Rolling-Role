/*터미널에서 데이터베이스 및 사용자를 추가하는 sql문입니다. 
data.sql실행전에 보고 실행해주세요.*/
use mysql;
create database rollingrole;
use rollingrole;
create table members(name text);
create user 'roll'@'%' identified by '1234';
grant all privileges on rollingrole.* to 'roll'@'%' with grant option;
flush privileges;


