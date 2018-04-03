USE sakila; 

select  first_name, last_name
from actor;

select concat(UPPER(first_name), ' ', UPPER(last_name)) 
as 'Actor Name' from actor;

select  actor_id, first_name, last_name
from actor where first_name = 'Joe';

select * from actor
where last_name like '%gen%';

select * from actor
where last_name like '%li%'
order by last_name, first_name;

select country_id, country from country
where country in ('Afghanistan', 'Bangladesh', 'China');

alter table actor
add middle_name varchar(30);
select actor_id, first_name, middle_name, last_name, last_update from actor;


alter table actor
modify middle_name blob;

alter table actor
drop column middle_name;

select last_name, count(*) from actor
group by last_name;

select last_name, count(*) from actor
group by last_name
having count(last_name) > 2;

update actor
set first_name = 'HARPO'
where last_name = 'Williams' and first_name = 'GROUCHO';

select * from actor
where
last_name = 'Williams';

update actor
set first_name = 'GROUCHO'
where actor_id = 172 and first_name = 'HAPRO'

update actor
set first_name = 'MUCHO GROUCHO'
where actor_id = 172

select * from payment;
select * from customer;

select customer.customer_id, customer.first_name, customer.last_name, SUM(payment.amount) AS payment
from customer
join payment on
customer.customer_id = payment.customer_id
group by customer_id
order by last_name ASC;

select * from staff;
select * from address;

select staff.first_name, staff.last_name, address.address
from staff
join address on
staff.address_id = address.address_id;

select * from staff;
select * from payment;
select staff.first_name, staff.last_name, sum(payment.amount) as payment
from staff
join payment on
staff.staff_id = payment.staff_id
where Month(payment.payment_date) = 08 and year(payment.payment_date)=2005
group by staff.staff_id;

select * from film_actor;
select * from film;
select film_actor.film_id, film.title, count(film_actor.actor_id) as actor_count
from film
join film_actor on
film.film_id = film_actor.film_id
group by film_id;

select * from inventory;
select * from film;
select count(*) 
FROM inventory
WHERE film_id IN
	(SELECT film_id
	FROM film
    WHERE title = 'Hunchback Impossible')
    
SELECT * FROM payment;
SELECT * FROM customer;
SELECT customer.customer_id, customer.first_name, customer.last_name, SUM(payment.amount) AS payment_amount
FROM customer
JOIN payment ON
customer.customer_id = payment.customer_id
GROUP BY customer_id
ORDER BY last_name ASC;




