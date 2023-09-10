CREATE TABLE ORDERS (ID_ORDER INT4,
	             IDCUST INT4,
	             STATUS_ORDER INT4,
	             DATE date);
	
CONSTRAINT fk_customer
FOREIGN KEY(idcust) 
REFERENCES users(idlogin);

/* Replace with your SQL commands */
CREATE TABLE orders_detail (
	id int4 NULL,
	iddetail int4,
--	idcust int4 NULL,
	idprod int4 NULL,
	quantity int4 NULL,
	statusorder int4 NULL
);


   
CONSTRAINT fk_product
FOREIGN KEY(idprod) 
   REFERENCES products(id);


