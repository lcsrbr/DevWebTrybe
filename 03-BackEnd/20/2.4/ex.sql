# Exercício 1: Insira as produções da Pixar na tabela Movies:

USE Pixar;
INSERT INTO Movies (title, director, year, length_minutes)
VALUES 
('Monstros SA', 'Pete Docter', '2001','92'),
('Procurando Nemo', 'John Lasseter', '2003', '107'),
('Os Incríveis', 'Brad Bird','2004','116'),
('WALL-E','Pete Docter','2008','104');

-- Exercício 2: O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Insira as informações à tabela BoxOffice.

USE Pixar;
INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES 
('9', '6.8', '450000000','370000000');

-- Exercício 3: O nome do diretor do filme "Procurando Nemo" está incorreto, ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o comando UPDATE.

SET SQL_SAFE_UPDATES = 0;
USE Pixar;
UPDATE Movies
SET director = 'Andrew Staton'
WHERE title = 'Procurando Nemo';

-- Exercício 4: O título do filme "Ratatouille" está incorreto na tabela Movies. Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando UPDATE.

SET SQL_SAFE_UPDATES = 0;
USE Pixar;
UPDATE Movies
SET title = 'Ratatouille', year = '2007'
WHERE title = 'ratatui';

SELECT * FROM Pixar.BoxOffice, Pixar.Movies WHERE id = movie_id;

-- Exercício 5: Insira as novas classificações abaixo na tabela BoxOffice, lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies:
-- Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
-- Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
-- WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.

USE Pixar;
INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES 
('8', '8.5', '300000000','250000000'),
('10', '7.4', '460000000','510000000'),
('11', '9.9', '290000000','280000000');

SELECT * FROM Pixar.Movies;

-- Exercício 6: Exclua da tabela Movies o filme "WALL-E".

SET SQL_SAFE_UPDATES = 0;

USE Pixar;
DELETE FROM BoxOffice
WHERE movie_id = '11';

DELETE FROM Movies
WHERE title = 'WALL-E';

-- Exercício 7: Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".

SET SQL_SAFE_UPDATES = 0;

USE Pixar;
DELETE FROM BoxOffice
WHERE movie_id IN ('2','9');

DELETE FROM Movies
WHERE director = 'Andrew Staton';

-- Exercício 8: Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
USE Pixar;
UPDATE BoxOffice
SET rating = '9.0' WHERE domestic_sales > '400000000'; 

-- Exercício 9: Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
USE Pixar;
UPDATE BoxOffice
SET rating = '6.0' WHERE domestic_sales > '200000000' AND international_sales < '300000000'; 
-- Exercício 10: Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
SET SQL_SAFE_UPDATES = 0;

USE Pixar;
DELETE FROM BoxOffice
WHERE movie_id IN (1,6,7,8);
DELETE FROM Movies
WHERE length_minutes < '100';