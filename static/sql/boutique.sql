DROP DATABASE IF EXISTS Boutique;
CREATE DATABASE Boutique;
USE Boutique;

DROP TABLE IF EXISTS Produit ;
CREATE TABLE Produit (id_Produit INT AUTO_INCREMENT NOT NULL,
nom_Produit VARCHAR(100),
description_Produit VARCHAR(1000),
prix_HT_Produit INT(10),
stock_Produit INT(10),
id_Catalog INT NOT NULL,
id_TVA INT NOT NULL,
PRIMARY KEY (id_Produit));

DROP TABLE IF EXISTS Photo ;
CREATE TABLE Photo (id_Photo INT AUTO_INCREMENT NOT NULL,
url_Photo VARCHAR(500),
id_Produit INT NOT NULL,
PRIMARY KEY (id_Photo));

DROP TABLE IF EXISTS Panier ;
CREATE TABLE Panier (id_Panier INT AUTO_INCREMENT NOT NULL,
utilisateur_id_utilisateur INT NOT NULL,
PRIMARY KEY (id_Panier));

DROP TABLE IF EXISTS Catalog ;
CREATE TABLE Catalog (id_Catalog INT AUTO_INCREMENT NOT NULL,
label VARCHAR(50),
PRIMARY KEY (id_Catalog));

DROP TABLE IF EXISTS TVA ;
CREATE TABLE TVA (id_TVA INT AUTO_INCREMENT NOT NULL,
pourcentage_TVA INT(3),
PRIMARY KEY (id_TVA));

DROP TABLE IF EXISTS Utilisateur ;
CREATE TABLE Utilisateur (id_Utilisateur INT AUTO_INCREMENT NOT NULL,
nom_Utilisateur VARCHAR(50),
prenom_Utilisateur VARCHAR(50),
age_Utilisateur INT(3),
panier_id_panier INT,
PRIMARY KEY (id_Utilisateur));

DROP TABLE IF EXISTS Ligne_Panier ;
CREATE TABLE Ligne_Panier (id_Produit INT AUTO_INCREMENT NOT NULL,
id_Panier INT NOT NULL,
quantité_ajouter INT(5),
PRIMARY KEY (id_Produit,
 id_Panier));

ALTER TABLE Produit ADD CONSTRAINT FK_Produit_id_Catalog FOREIGN KEY (id_Catalog) REFERENCES Catalog (id_Catalog);

ALTER TABLE Produit ADD CONSTRAINT FK_Produit_id_TVA FOREIGN KEY (id_TVA) REFERENCES TVA (id_TVA);
ALTER TABLE Panier ADD CONSTRAINT FK_Panier_utilisateur_id_utilisateur FOREIGN KEY (utilisateur_id_utilisateur) REFERENCES Utilisateur (id_Utilisateur);
ALTER TABLE Photo ADD CONSTRAINT FK_Photo_id_Produit FOREIGN KEY (id_Produit) REFERENCES Produit (id_Produit);
ALTER TABLE Utilisateur ADD CONSTRAINT FK_Utilisateur_panier_id_panier FOREIGN KEY (panier_id_panier) REFERENCES Panier (id_Panier);
ALTER TABLE Ligne_Panier ADD CONSTRAINT FK_Ligne_Panier_id_Produit FOREIGN KEY (id_Produit) REFERENCES Produit (id_Produit);
ALTER TABLE Ligne_Panier ADD CONSTRAINT FK_Ligne_Panier_id_Panier FOREIGN KEY (id_Panier) REFERENCES Panier (id_Panier);






INSERT INTO Catalog (label) VALUES
("Catalogue Jeux vidéo");


INSERT INTO TVA (pourcentage_TVA) VALUES
(20);


INSERT INTO Produit (nom_Produit, description_Produit, prix_HT_Produit, stock_Produit, id_Catalog, id_TVA) VALUES
("Red Dead Redemption 2", "Lorem ipsum ce jeu est trop cool", 60, 83, 1, 1),
("Star Citizen", "Lorem ipsum ce jeu est trop cool", 30, 184, 1, 1),
("Halo Reach", "Lorem ipsum ce jeu est trop cool", 5, 800, 1, 1),
("Minecraft", "Lorem ipsum ce jeu est trop cool", 30, 83, 1, 1),
("Pokemon MMO 3D", "Lorem ipsum ce jeu est trop cool", 1, 0, 1, 1);

INSERT INTO Utilisateur (nom_Utilisateur, prenom_Utilisateur, age_Utilisateur) VALUES
("Lepen", "Jean Marie", 666),
("Zoubi", "Philipon", 9);

INSERT INTO Photo (url_Photo, id_Produit) VALUES
("./static/img/image.png", 1);



