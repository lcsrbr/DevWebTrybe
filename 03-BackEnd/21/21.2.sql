USE sakila;
-- INNER JOIN
-- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.

SELECT a.actor_id, CONCAT(a.first_name, " ", a.last_name), f.film_id
FROM actor AS a
INNER JOIN film_actor AS f 
ON a.actor_id = f.actor_id;

-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.

SELECT CONCAT(s.first_name,' ', s.last_name) 'name', CONCAT(a.address,', ', a.district) 'address'
FROM staff AS s
INNER JOIN address AS a ON a.address_id = s.address_id;

-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.

SELECT
    c.customer_id,
    c.first_name,
    c.email,
    c.address_id,
    a.address
FROM
    customer AS c
INNER JOIN
    address AS a ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

-- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm “rene” em seus nomes. As informações podem ser encontradas nas tabelas address e customer.

SELECT
    c.first_name, c.email, c.address_id, a.address, a.district
FROM
    customer AS c
INNER JOIN
    address AS a ON c.address_id = a.address_id
WHERE
    a.district = 'California'
        AND c.first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.

SELECT
    c.first_name,
    COUNT(a.address) AS `quantidade de endereço`
FROM
    customer c
INNER JOIN
    address AS a ON a.address_id = c.address_id
WHERE
    c.active = 1
GROUP BY
    c.customer_id
ORDER BY
    first_name DESC,
    last_name DESC;


-- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT
    stf.first_name,
    stf.last_name,
    AVG(pay.amount) AS `Média de pagamento`
FROM
    staff AS stf
INNER JOIN
    payment pay ON stf.staff_id = pay.staff_id
WHERE
    YEAR(pay.payment_date) = 2006
GROUP BY stf.staff_id;

-- Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.

SELECT
    a.actor_id,
    a.first_name,
    f.film_id,
    f.title
FROM
    actor AS a
INNER JOIN
    film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN
    film AS f ON f.film_id = fa.film_id;

-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.

SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
	employees AS Employee
INNER JOIN
	employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHERE
	employee.department_id <> manager.department_id;

-- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
USE hr;

SELECT CONCAT(m.first_name,' ', m.last_name) AS 'gerente',  COUNT(e.first_name) AS 'gerenciados'
FROM employees AS m
INNER JOIN employees AS e ON e.manager_id = m.employee_id
GROUP BY m.employee_id;

-- Funcionario e seu respectivo gerente 

USE hr;

SELECT CONCAT(e.first_name,' ', e.last_name) AS 'empregado', CONCAT(m.first_name,' ', m.last_name) AS 'gerente'
FROM employees AS e
INNER JOIN employees AS m WHERE 	e.employee_id = m.manager_id

-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT
    m.title, b.domestic_sales, b.international_sales
FROM
    movies m
        INNER JOIN
    boxoffice b ON b.movie_id = m.id;
    --OU
SELECT title, domestic_sales, international_sales FROM BoxOffice, Movies WHERE movie_id = id;

-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT
    m.title,
    (b.domestic_sales + b.international_sales) AS "Vendas"
FROM
    movies m
        INNER JOIN
    boxoffice b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;
    --OU
SELECT title, (domestic_sales + international_sales) AS 'vendas' FROM BoxOffice, Movies WHERE movie_id = id AND international_sales > domestic_sales;

-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.

SELECT title, rating FROM Movies, BoxOffice WHERE movie_id = id ORDER BY rating DESC;
-- OU
SELECT
    m.title, b.rating
FROM
    Movies m
INNER JOIN
    BoxOffice b ON b.movie_id = m.id
ORDER BY b.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    theater t
LEFT JOIN
    movies m ON t.id = m.theater_id
ORDER BY t.name;

 -- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT
    t.name,
    t.location,
    m.theater_id,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Theater t
RIGHT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.name;

 -- 🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.

SELECT a.*, rating FROM Movies AS a, BoxOffice WHERE id = movie_id AND rating > 8 AND theater_id IS NOT NULL

--OU

USE pixar;

SELECT
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    movies m
INNER JOIN
    boxoffice b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;