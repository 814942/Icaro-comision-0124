# DDL (Data Definition Language)
-- Crear tabla houses
CREATE TABLE houses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    tagline VARCHAR(255)
);

-- Crear tabla characters
CREATE TABLE characters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    houseId INT,
    FOREIGN KEY (houseId) REFERENCES houses(id)
);

-- Agregar una columna en la tabla houses
ALTER TABLE houses ADD COLUMN region VARCHAR(255);

-- Modificar una columna en la tabla characters
ALTER TABLE characters MODIFY COLUMN firstname VARCHAR(100);

-- Eliminar tabla characters
DROP TABLE characters;

-- Eliminar tabla houses
DROP TABLE IF EXISTS houses;

