CREATE TABLE `socio` (
  `idsocio` integer PRIMARY KEY,
  `nombre` varchar(255),
  `telefono` varchar(255)
);

CREATE TABLE `barco` (
  `num_matricula` integer PRIMARY KEY,
  `nombre` varchar(255),
  `amarre` integer,
  `idsocio` integer
);

CREATE TABLE `salidas` (
  `idsalida` integer PRIMARY KEY,
  `fecha` datetime,
  `destino` varchar(255),
  `num_matricula` integer,
  `idpatron` integer
);

CREATE TABLE `patron` (
  `idpatron` integer PRIMARY KEY,
  `nombre` varchar(255)
);

ALTER TABLE `barco` ADD FOREIGN KEY (`idsocio`) REFERENCES `socio` (`idsocio`);

ALTER TABLE `salidas` ADD FOREIGN KEY (`num_matricula`) REFERENCES `barco` (`num_matricula`);

ALTER TABLE `salidas` ADD FOREIGN KEY (`idpatron`) REFERENCES `patron` (`idpatron`);
