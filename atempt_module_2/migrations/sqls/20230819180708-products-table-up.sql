/* Replace with your SQL commands */
CREATE TABLE products (
	id int4 NULL,
	descrip varchar(200) NULL,
	price int4 NULL,
	stock int4 NULL
);
INSERT INTO public.products (id,descrip,price,stock) VALUES
	 (1,'pen',100,100),
	 (2,'ruler',100,100),
	 (3,'books',1600,100);