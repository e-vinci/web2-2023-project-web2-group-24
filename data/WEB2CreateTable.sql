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
                                  categorie_preferee CHAR(3) REFERENCES web2.categories(id_categorie) NOT NULL
);

CREATE TABLE web2.questions(
                               no_question SERIAL PRIMARY KEY NOT NULL,
                               categorie CHAR(4) REFERENCES web2.categories(id_categorie) NOT NULL ,
                               question VARCHAR(200) NOT NULL,
                               valeur BOOLEAN NOT NULL
);



INSERT INTO web2.categories(id_categorie, nom_categorie) VALUES ('INFO', 'INFORMATIQUE');
INSERT INTO web2.categories(id_categorie, nom_categorie) VALUES ('DIET', 'DIETETIQUE');
INSERT INTO web2.categories(id_categorie, nom_categorie) VALUES ('INFI', 'INFIRMIER');
INSERT INTO web2.categories(id_categorie, nom_categorie) VALUES ('EDPH', 'EDUCATION PHYSIQUE');
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


/*
CREATE OR REPLACE FUNCTION web2.ajout_utilisateur() RETURN VOID AS $$
DECLARE
    no_utilisateur INTEGER;
BEGIN
    SELECT u.no_utilisateur FROM web2.utilisateurs u WHERE u.email = mail INTO no_utilisateur;
    IF (no_utilisateur !== NULL) THEN
    UPDATE web2.statistiques SET nb_questions_posees = nb_questions_posees + nb_question WHERE web2.statistiques.utilisateur = no_utilisateur;
    END IF;
    END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION web2.trigger_ajout_nb_questions() RETURNS TRIGGER AS $$
BEGIN
    IF (NEW.nb_questions_posees <= 0) THEN
        RAISE 'nombre de questions posées non valide';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_ajout_nb_questions BEFORE UPDATE ON web2.statistiques
    FOR EACH ROW EXECUTE PROCEDURE web2.trigger_ajout_nb_questions();


CREATE OR REPLACE FUNCTION web2.ajouter_nb_questions(nb_question INTEGER, mail INTEGER) RETURNS VOID AS $$
DECLARE
    no_utilisateur INTEGER;
BEGIN
    SELECT u.no_utilisateur FROM web2.utilisateurs u WHERE u.email = mail INTO no_utilisateur;
    IF (no_utilisateur !== NULL) THEN
    UPDATE web2.statistiques SET nb_questions_posees = nb_questions_posees + nb_question WHERE web2.statistiques.utilisateur = no_utilisateur;
    END IF;
    END;
$$ LANGUAGE plpgsql;

*/