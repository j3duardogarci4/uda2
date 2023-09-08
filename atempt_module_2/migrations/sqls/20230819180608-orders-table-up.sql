/* Replace with your SQL commands */
CREATE TABLE orders (
	id int4 NULL,
	idcust int4 NULL,
	idprod int4 NULL,
	quantity int4 NULL,
	statusorder int4 NULL
);

CONSTRAINT fk_customer
FOREIGN KEY(idcust) 
   REFERENCES users(idlogin);
CONSTRAINT fk_product
FOREIGN KEY(idprod) 
   REFERENCES products(id);


