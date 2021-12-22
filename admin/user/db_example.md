show tables;
select * from user;
desc user;
INSERT INTO user VALUES
('aaa@aaa.com','aaa','aaa123','aaa1','19000101','f','01000010001','seoul','yes','moderna'),
('bbb@bbb.com','bbb','bbb123','bbb1','19000202','m','01000020002','suwon','no','none'),
('ccc@ccc.com','ccc','ccc123','ccc1','19000303','f','01000030003','ilsan','yes','janssen');
COMMIT;

select * from user_vaccine;
desc user_vaccine;
insert into user_vaccine values
('moderna', 20210928, 'fever'),
('janssen', 20210912, 'muscle pain'),
('pfizer', 20211002, 'headache');
commit;