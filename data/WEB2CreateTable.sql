DROP SCHEMA IF EXISTS web2 CASCADE ;
CREATE SCHEMA web2;

CREATE TABLE web2.utilisateurs(
                                  no_utilisateur SERIAL PRIMARY KEY NOT NULL,
                                  nom VARCHAR(30) NOT NULL
                                      CHECK ( utilisateurs.nom <> '' ),
                                  prenom VARCHAR(30) NOT NULL
                                      CHECK ( utilisateurs.prenom<> '' ),
                                  email VARCHAR(60) NOT NULL UNIQUE
                                      CHECK ( utilisateurs.email SIMILAR TO '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]+'),
                                  mdp VARCHAR(60) NOT NULL
                                      CHECK ( utilisateurs.mdp <> '' )
);

CREATE TABLE web2.categories(
                                id_categorie CHAR(4) PRIMARY KEY NOT NULL
                                    CHECK ( categories.id_categorie SIMILAR TO '[A-Z]{4}'),
                                nom_categorie VARCHAR(30) NOT NULL
);

CREATE TABLE web2.statistiques(
                                  utilisateur INTEGER PRIMARY KEY REFERENCES web2.utilisateurs(no_utilisateur) NOT NULL,
                                  nb_questions_posees INTEGER DEFAULT 0 NOT NULL
                                      CHECK ( statistiques.nb_questions_posees >= 0 ),
                                  nb_parties_jouees INTEGER DEFAULT 0 NOT NULL
                                      CHECK ( statistiques.nb_parties_jouees >= 0 ),
                                  nb_victoire INTEGER DEFAULT 0 NOT NULL
                                      CHECK ( statistiques.nb_victoire >=0 ),
                                  categorie_preferee CHAR(4) REFERENCES web2.categories(id_categorie) NOT NULL
);

CREATE TABLE web2.questions(
                               no_question SERIAL PRIMARY KEY NOT NULL,
                               categorie CHAR(4) REFERENCES web2.categories(id_categorie) NOT NULL ,
                               question VARCHAR(200) NOT NULL,
                               valeur BOOLEAN NOT NULL
);



INSERT INTO web2.categories(id_categorie, nom_categorie) VALUES ('INFO', 'INFORMATIQUE');
INSERT INTO web2.categories(id_categorie, nom_categorie) VALUES ('DIET', 'DIETETIQUE');--
INSERT INTO web2.categories(id_categorie, nom_categorie) VALUES ('INFI', 'INFIRMIER');--
INSERT INTO web2.categories(id_categorie, nom_categorie) VALUES ('COSP', 'COACHING SPORTIF');
INSERT INTO web2.categories(id_categorie, nom_categorie) VALUES ('IMGM', 'IMAGERIE MEDICALE');
INSERT INTO web2.categories(id_categorie, nom_categorie) VALUES ('ENSE', 'ENSEIGNANT');


INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Après avoir fini les 3 années de bachelier en instituteur primaire, nous sommes également diplomé comme maître spécial de religion',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Il y a des cours d''éducation corporelle', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Les études d''instituteur primaire se déroulent désormais en 4 ans',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Il faut d''abord avoir faut des études d''instituteur maternelle pour entamer celles d''instituteur primaire',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Il existe un cours d''éveil qui est constitué uniquement de ces deux matières : géographie et histoire',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Les cours de psychologie permettent de comprendre plus facilement les comportement de chacun (HPI, TDAH, ...)',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Les instituteurs primaires sortants de la Haute Ecole Vinci sont capables de donner cours de religion', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Dans cette formation il y a des cours de théâtre', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Dans cette formation, il n''y a que deux stages en BAC3' , FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Dans cette formation, durant le BAC2 il y a un mois de stage où 80% de l''horaire d''une classe est pris en charge par un étudiant',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Dans cette formation, il n''y pas de cours de musique et d''art plastique. Ces cours sont réservés uniquement aux cursus d''instituteur maternelle',FALSE);




INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Le terme « bug » en informatique vient d''insectes qui faisaient griller les lampes des premiers ordinateurs', TRUE );
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','En programmation une chaine de charactères (un texte) est appelée « String »', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Le software est l''ensemble des éléments matériels d''un système informatique', FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Le langage assembleur est un langage de programmation de haut niveau.', FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','1 Gigaoctet est égal à 1000 Megaoctet.', FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','On trouve des systèmes d''exploitation dans les avions', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Le premier ordinateur pesait 50 tonnes', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Le nombre 3 s''écrit 0100 en binaire', FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Le langage de programmation le plus populaire en 2023 est Python', FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Le langage de requêtes SQL est principalement utiliser pour manipuler des bases de données relationnelles.', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','A la Haute École, le cours d’APOO signifie « Analyse et programmation orienté ordonnanceur »', FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Le langage de programmation Java doit son nom au café que beaucoup de développeurs apprécient ', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','La Commission nationale de l''informatique et des libertés (CNIL) a condamné l''entreprise Google à payer deux amendes d''un montant total de 100 millions d''euros pour non-respect des règles RGPD', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Les polices d’écriture sans-serif facilitent la lecture aux mal-voyants', FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Les requêtes post servent à envoyer des données au serveur', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Le format fichier PNG est principalement utilisé pour des fichiers audio compressés', FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Un email génère environ 4g de CO2', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','La consommation de vidéos en streaming génère 300 millions de tonnes de CO2 par an ', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','TDD signifie To Do Documentation', FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Un framework est un schéma des différentes pages d’un site web ', FALSE);

