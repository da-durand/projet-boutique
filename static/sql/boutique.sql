DROP DATABASE IF EXISTS Boutique;
CREATE DATABASE Boutique;
USE Boutique;

DROP TABLE IF EXISTS Produit ;
CREATE TABLE Produit (id_Produit INT AUTO_INCREMENT NOT NULL,
nom_Produit VARCHAR(100),
photo_Produit VARCHAR(500),
description_Produit VARCHAR(1000),
prix_HT_Produit INT(10),
stock_Produit INT(10),
id_Catalog INT NOT NULL,
id_TVA INT NOT NULL,
PRIMARY KEY (id_Produit));

DROP TABLE IF EXISTS Panier ;
CREATE TABLE Panier (id_Panier INT AUTO_INCREMENT NOT NULL,
utilisateur_id_utilisateur INT NOT NULL,
PRIMARY KEY (id_Panier));

DROP TABLE IF EXISTS Catalog ;
CREATE TABLE Catalog (id_Catalog INT AUTO_INCREMENT NOT NULL,
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
ALTER TABLE Utilisateur ADD CONSTRAINT FK_Utilisateur_panier_id_panier FOREIGN KEY (panier_id_panier) REFERENCES Panier (id_Panier);
ALTER TABLE Ligne_Panier ADD CONSTRAINT FK_Ligne_Panier_id_Produit FOREIGN KEY (id_Produit) REFERENCES Produit (id_Produit);
ALTER TABLE Ligne_Panier ADD CONSTRAINT FK_Ligne_Panier_id_Panier FOREIGN KEY (id_Panier) REFERENCES Panier (id_Panier);