CREATE DATABASE Chapter;

USE Chapter; 

CREATE TABLE Livros
(
	id INT PRIMARY KEY IDENTITY,
	Titulo VARCHAR (150) NOT NULL, 
	QuantidadePaginas INT, 
	Disponivel BIT

);

INSERT INTO Livros (Titulo, QuantidadePaginas, Disponivel)
VALUES ('Titulo A', 120, 1),
	   ('Titulo B', 220,0);

SELECT * FROM Livros;

CREATE TABLE Usuarios
(
	Id INT PRIMARY KEY IDENTITY,
	Email VARCHAR (255) UNIQUE NOT NULL,
	Senha VARCHAR (120) NOT NULL,
	Tipo CHAR (10) NOT NULL
);


INSERT INTO Usuarios 
VALUES ('teste@email.com.br', '1234', '0');

SELECT * FROM Usuarios;

SELECT * FROM Usuarios WHERE Email= 'teste@email.com.br' AND Senha= '1234';