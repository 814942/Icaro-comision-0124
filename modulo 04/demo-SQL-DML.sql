# DML (Data Manipulation Language)
-- Insertar casas
INSERT INTO houses (name, tagline) VALUES 
('Stark', 'Winter is Coming'),
('Lannister', 'Hear Me Roar'),
('Targaryen', 'Fire and Blood'),
('Baratheon', 'Ours is the Fury');

-- Insertar personajes
INSERT INTO characters (firstname, lastname, houseId) VALUES 
('Eddard', 'Stark', 1),
('Robb', 'Stark', 1),
('Sansa', 'Stark', 1),
('Arya', 'Stark', 1),
('Jaime', 'Lannister', 2),
('Cersei', 'Lannister', 2),
('Tyrion', 'Lannister', 2),
('Daenerys', 'Targaryen', 3),
('Stannis', 'Baratheon', 4),
('Renly', 'Baratheon', 4);

-- Seleccionar todas las casas
SELECT * FROM houses;

-- Seleccionar todos los personajes
SELECT * FROM characters;

-- Seleccionar todos los personajes y sus casas
SELECT c.id, c.firstname, c.lastname, h.name as house_name
FROM characters c
JOIN houses h ON c.houseId = h.id;

-- Actualizar el tagline de una casa
UPDATE houses 
SET tagline = 'A Lannister Always Pays His Debts'
WHERE name = 'Lannister';

-- Actualizar el nombre de un personaje
UPDATE characters 
SET firstname = 'Jon', lastname = 'Snow', houseId = 1
WHERE firstname = 'Eddard' AND lastname = 'Stark';

-- Eliminar un personaje
DELETE FROM characters 
WHERE firstname = 'Renly' AND lastname = 'Baratheon';

-- Eliminar una casa
DELETE FROM houses 
WHERE name = 'Baratheon';