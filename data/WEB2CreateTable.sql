DROP SCHEMA IF EXISTS web2;
CREATE SCHEMA web2;

CREATE TABLE web2.utilisateurs(
                                  no_utilisateur SERIAL PRIMARY KEY NOT NULL,
                                  nom VARCHAR(30) NOT NULL
                                      CHECK ( utilisateurs.nom <> '' ),
                                  prenom VARCHAR(30) NOT NULL
                                      CHECK ( utilisateurs.prenom<> '' ),
                                  email VARCHAR(60) NOT NULL
                                      CHECK ( utilisateurs.email SIMILAR TO '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]+'),
                                  mdp VARCHAR(60) NOT NULL
                                      CHECK ( utilisateurs.mdp <> '' )
);

CREATE TABLE web2.categories(
                                id_categorie CHAR(3) PRIMARY KEY NOT NULL
                                    CHECK ( categories.id_categorie SIMILAR TO '[A-Z]{3}'),
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
                               categorie CHAR(3) REFERENCES web2.categories(id_categorie) NOT NULL ,
                               valeur BOOLEAN NOT NULL,
                               question VARCHAR(200) NOT NULL
);