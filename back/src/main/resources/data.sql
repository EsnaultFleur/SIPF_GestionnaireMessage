DROP TABLE IF EXISTS utilisateur;
CREATE TABLE utilisateur (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  nom VARCHAR(45) NOT NULL,
  prenom VARCHAR(45) NOT NULL
);
INSERT INTO utilisateur (nom, prenom) VALUES ('Test', 'Utilisateur1');

DROP TABLE IF EXISTS message;
CREATE TABLE message (
  id INT AUTO_INCREMENT PRIMARY KEY,
  dateDebut DATETIME NULL,
  dateFin DATETIME NULL,
  contenuHtml VARCHAR(500) NULL,
  icone VARCHAR(10) NULL
);

DROP TABLE IF EXISTS etiquette;
CREATE TABLE etiquette (
  id INT AUTO_INCREMENT PRIMARY KEY,
  libelle VARCHAR(45) NULL
);

DROP TABLE IF EXISTS message_etiquette;
CREATE TABLE message_etiquette (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idMessage INT NOT NULL,
  idEtiquette INT NOT NULL
);
ALTER TABLE message_etiquette ADD FOREIGN KEY (idMessage) REFERENCES message(id);
ALTER TABLE message_etiquette ADD FOREIGN KEY (idEtiquette) REFERENCES etiquette(id);

DROP TABLE IF EXISTS message_action;
CREATE TABLE message_action (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idMessage INT NOT NULL,
  idUtilisateur INT NOT NULL,
  typeAction VARCHAR(1) NOT NULL,
  dateAction DATETIME NULL
);
ALTER TABLE message_action ADD FOREIGN KEY (idMessage) REFERENCES message(id);
ALTER TABLE message_action ADD FOREIGN KEY (idUtilisateur) REFERENCES utilisateur(id);