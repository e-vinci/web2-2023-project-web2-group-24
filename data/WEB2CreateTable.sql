DROP SCHEMA IF EXISTS web2 CASCADE ;
CREATE SCHEMA web2;

CREATE TABLE web2.utilisateurs
(
    no_utilisateur  SERIAL PRIMARY KEY NOT NULL,
    nom_utilisateur VARCHAR(30)      NOT NULL UNIQUE
        CHECK ( utilisateurs.nom_utilisateur <> '' ),
    email           VARCHAR(60)        NOT NULL UNIQUE
        CHECK ( utilisateurs.email SIMILAR TO '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]+'),
    mdp             VARCHAR(100)       NOT NULL
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
                                  categorie_preferee CHAR(4) REFERENCES web2.categories(id_categorie) NULL
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


INSERT INTO web2.utilisateurs(nom_utilisateur, email, mdp) VALUES ('Robin', 'greg.laplume@gmail.com','$2b$10$0uPAIotQVk3n2uQm0d.n0ukJH8zoui8S9mAbUjDHa5fePDNPVyEfO');
INSERT INTO web2.statistiques(utilisateur, nb_questions_posees, nb_parties_jouees, nb_victoire, categorie_preferee) VALUES (1,10,5,2,'ENSE');


INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Après avoir fini les 3 années de bachelier en instituteur primaire, nous sommes également diplomé comme maître spécial de religion',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Il y a des cours d''éducation corporelle', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Les études d''instituteur primaire se déroulent désormais en 4 ans',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Il faut d''abord avoir fait des études d''instituteur maternelle pour entamer celles d''instituteur primaire',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Il existe un cours d''éveil qui est constitué uniquement de ces deux matières : géographie et histoire',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Les cours de psychologie permettent de comprendre plus facilement les comportement de chacun (HPI, TDAH, ...)',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Les instituteurs primaires sortants de la Haute Ecole Vinci sont capables de donner cours de religion', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Dans cette formation il y a des cours de théâtre', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Dans cette formation, il n''y a que deux stages en BAC3' , FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Dans cette formation, durant le BAC2 il y a un mois de stage où 80% de l''horaire d''une classe est pris en charge par un étudiant',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('ENSE','Dans cette formation, il n''y pas de cours de musique et d''art plastique. Ces cours sont réservés uniquement aux cursus d''instituteur maternelle',FALSE);

INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'La radiographie est une modalité d’imagerie qui utilise des ondes sonores pour créer des images du corps humain', FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Les rayons x sont utilisés dans une tomographie par ordinateur', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Une IRM est une modalité d’imagerie utilisant un champ magnétiqque et des ondes radio pour créer des images détaillées du corps', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Les rayons ultraviolets sont utilisés dans la spectroscopie par résonance magnétique ', FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'On utilise les Rayons gamma pour détecter la radioactivité du corps.', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'L’Angiographie est utilisée pour détecter les vaisseaux sanguins', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Une échographie est souvent utilisée pour l’évaluation du métabolisme cellulaire', FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Une radiographie est particulièrement utile pour détecter les fractures osseuses', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Les os longs, tels que le fémur, sont principalement composés de cartilage',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Le système nerveux autonome contrôle les fonctions involontaires telles que la respiration et la digestion',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Les reins sont situés dans la cavité thoracique',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Les articulations immobiles sont également appelées synoviales',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Le système lymphatique joue un rôle important dans la coagulation sanguine',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'L''oesophage transporte les aliments de l''estomac vers l''intestin grêle',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Le foie est l''organe principal de la digestion des lipides',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Le muscle cardiaque est strié, similaire aux muscles squelettiques',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Les alvéoles pulmonaires sont les sites d''échange gazeux dans les poumons',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) VALUES ('IMGM', 'Le cortex cérébral est la partie la plus profonde du cerveau',FALSE);

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
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Un e-mail génère environ 4g de CO2', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','La consommation de vidéos en streaming génère 300 millions de tonnes de CO2 par an ', TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','TDD signifie To Do Documentation', FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFO','Un framework est un schéma des différentes pages d’un site web ', FALSE);

INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','Les agonistes sont des substances qui bloquent les récepteurs cellulaires',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','Les médicaments génériques ont les mêmes ingrédients actifs que les médicaments de marque',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','La pharmacocinétique étudie la manière dont le corps absorbe, distribue, métabolise et excrète les médicaments',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','Les diurétiques sont des médicaments qui augmentent la pression artérielle',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','L''obtention d''un diplôme en soins infirmiers nécessite des stages pratiques en milieu hospitalier',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','Les infirmiers ne sont pas autorisés à effectuer des prélèvements sanguins',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','Les étudiants en soins infirmiers n''étudient pas l''éthique médicale',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','Les infirmiers ne peuvent pas diagnostiquer des maladies',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','Les antihistaminiques sont couramment prescrits pour réduire la fièvre',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','Les étudiants en soins infirmiers n''apprennent pas à effectuer des gestes de premiers secours',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','Les mitochondries sont les principaux sites de la photosynthèse chez les plantes',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','L''ADN est une molécule à double brin constituée de quatre bases : adénine, cytosine, guanine et uracile',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','Les protéines sont synthétisées à partir d''acides aminés liés par des liaisons peptidiques',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','La mitose est le processus de division cellulaire qui produit des cellules filles génétiquement identiques à la cellule mère',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','Les cellules procaryotes, telles que les bactéries, ont un noyau délimité par une membrane',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','La dignité du patient doit être respectée en toutes circonstances, même lors de soins intimes',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','La confidentialité des informations médicales du patient peut être partagée librement entre les membres de l''équipe médicale sans consulter le patient',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','L''autonomie du patient implique le respect de son droit à prendre des décisions informées sur sa propre santé',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','Les professionnels de la santé peuvent négliger le consentement éclairé du patient s''ils estiment que le traitement est d''une importance vitale',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('INFI','L''hygiène personnelle du patient n''affecte pas son bien-être émotionnel et mental',FALSE);

INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Le travail d’équilibre en renforcement permet de prévenir des blessures',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Le travail en excentrique permet d’améliorer la souplesse',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Au plus le tronc est penché lors d’un squat, au plus les quadriceps travaillent',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Faire de la course à pied pour perdre du poids est plus efficace que pratiquer le HIIT',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Le cuboïde est un os présent dans la main',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Lorsque l’on fait un sprint, la filière énergétique aérobie est principalement utilisée',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Le système endocrinien à une fonction de régulateur dans l’organisme',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','En musculation, l’expiration se fait le plus souvent dans la phase excentrique du mouvement',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Les crunch sont à éviter car créent une hyper pression abdominales',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Le rôle principal de la coiffe des rotateurs et de stabiliser l’articulation de l’épaule qui est très instable',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','La coordination est la base de l’apprentissage du cerveau et donc très importante à travailler chez les enfants',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Les femmes qui viennent d’accoucher ont souvent une mauvaise posture',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Il est dangereux pour les personnes lombalgiques de soulever des poids en étant accroupi et en ayant le dos arrondi',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Le travail isométrique en musculation augmente l’hypertrophie chez les personnes expérimentées',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Les genoux ne peuvent pas dépasser les orteils lors d’un squat',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Dans le muscle strié squelettique, la myofibrille est la plus petite unité fonctionnelle du muscle',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','Le produit final de la glycolyse est le pyruvate',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('COSP','L’action principale du triceps brachial est l’extension du bras',TRUE);

INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Les lipides sont des macronutriments qui fournissent une source d''énergie dense',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Les acides aminés sont les unités de base des glucides',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Les antioxydants sont des composés qui favorisent l''oxydation des cellules',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Les vitamines liposolubles, comme la vitamine A, peuvent être stockées dans le corps',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','La réaction de Maillard, responsable du brunissement des aliments lors de la cuisson, est une réaction entre les protéines et les sucres',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Les bactéries pathogènes peuvent se multiplier rapidement dans les aliments à température ambiante',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','La date de péremption indiquée sur les emballages des aliments est toujours la même que la date limite de consommation recommandée',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Il est sûr de décongeler de la viande à température ambiante pendant plusieurs heures',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Laver les fruits et légumes sous l''eau courante suffit pour éliminer les pesticides',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Les restes alimentaires peuvent être conservés en toute sécurité dans le réfrigérateur pendant une semaine',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Les régimes riches en fibres peuvent contribuer à la prévention de la constipation',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','La plupart des graisses saturées proviennent d''aliments d''origine végétale',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','La vitamine D est principalement obtenue à partir de la nourriture, et non de l''exposition au soleil',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Les diététiciens recommandent généralement de limiter la consommation de fruits en raison de leur teneur en sucre',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Les protéines sont essentielles pour la croissance et la réparation des tissus dans le corps humain',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Le cholestérol HDL est souvent appelé "mauvais cholestérol"',FALSE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','L''hypertension artérielle est un facteur de risque majeur de maladies cardiovasculaires',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Les triglycérides sont une forme de graisse présente dans le sang et peuvent augmenter le risque de maladies cardiovasculaires',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Les régimes riches en acides gras oméga-3 peuvent contribuer à la santé cardiovasculaire',TRUE);
INSERT INTO web2.questions(categorie, question, valeur) values ('DIET','Le tabagisme n''a aucun impact sur le risque de maladies cardiovasculaires',FALSE);


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