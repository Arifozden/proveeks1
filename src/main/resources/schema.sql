CREATE TABLE Melding
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    veistrekning VARCHAR(3) NOT NULL,
    fraSted VARCHAR(255) NOT NULL,
    tilSted VARCHAR(255) NOT NULL,
    fraDatoTid VARCHAR(255) NOT NULL,
    tilDatoTid VARCHAR(255) NOT NULL,
    melding VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
