/*반드시 user.sql을 먼저 실행하여 사용자와 데이터베이스부터 만든 후 아래의 
내용을 보고 실행해주세요*/
CREATE TABLE groups(
   group_num INT AUTO_INCREMENT NOT NULL,
   group_info VARCHAR(100),
   PRIMARY KEY(group_num)
);
DROP TABLE members;
CREATE TABLE members(
   group_num INT AUTO_INCREMENT NOT NULL,
   mem_num TINYINT NOT NULL,
   mem_name VARCHAR(50) NOT NULL,
   role1_score INT DEFAULT 0,
   role2_score INT DEFAULT 0,
   role3_score INT DEFAULT 0,
   role4_score INT DEFAULT 0,

   PRIMARY KEY(group_num, mem_num),
   FOREIGN KEY(group_num) REFERENCES groups(group_num)
);
CREATE TABLE roles(
   group_num INT AUTO_INCREMENT NOT NULL,
   role_num TINYINT NOT NULL,
   role_name VARCHAR(100) NOT NULL,
   do_num TINYINT DEFAULT 1,

   PRIMARY KEY(group_num, role_num),
   FOREIGN KEY(group_num) REFERENCES groups(group_num)
);

INSERT INTO roles VALUES(219.255.158.170, 1, ' ', 1);
INSERT INTO roles VALUES(219.255.158.170, 2, ' ', 2);
INSERT INTO roles VALUES(219.255.158.170, 3, ' ', 2);
INSERT INTO roles VALUES(219.255.158.170, 4, ' ', 1);
INSERT INTO roles VALUES(219.255.158.170, 5, ' ', 1);
INSERT INTO roles VALUES(219.255.158.170, 6, ' ', 1);
INSERT INTO roles VALUES(219.255.158.170, 7, ' ', 1);
INSERT INTO roles VALUES(219.255.158.170, 8, ' ', 1);
INSERT INTO roles VALUES(219.255.158.170, 9, ' ', 1);

INSERT INTO members VALUES(219.255.158.170,1,'','','','','');
INSERT INTO members VALUES(219.255.158.170,1,'','','','','');
INSERT INTO members VALUES(219.255.158.170,1,'','','','','');
INSERT INTO members VALUES(219.255.158.170,1,'','','','','');
INSERT INTO members VALUES(219.255.158.170,1,'','','','','');
INSERT INTO members VALUES(219.255.158.170,1,'','','','','');
INSERT INTO members VALUES(219.255.158.170,1,'','','','','');
INSERT INTO members VALUES(219.255.158.170,1,'','','','','');
INSERT INTO members VALUES(219.255.158.170,1,'','','','','');

