use bibliotecasdb;
CREATE TABLE Libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    año_publicacion YEAR NOT NULL,
    disponibilidad BOOLEAN DEFAULT TRUE,
    createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp
);

CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    tipo ENUM('admin', 'usuario') DEFAULT 'usuario',
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp
);

CREATE TABLE Prestamos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha_prestamo DATE NOT NULL,
    estado ENUM('pendiente', 'devuelto', 'atrasado') DEFAULT 'pendiente',
    id_usuario INT,
    id_libro INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
    FOREIGN KEY (id_libro) REFERENCES Libros(id),
        createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp
);

/*Informe de los libros más solicitados*/

SELECT L.titulo, COUNT(P.id_libro) AS cantidad_prestamos
FROM Libros L
JOIN Prestamos P ON L.id = P.id_libro
GROUP BY L.id
ORDER BY cantidad_prestamos DESC;



/*Informe de los préstamos más recientes*/

SELECT U.nombre, L.titulo, P.fecha_prestamo
FROM Prestamos P
JOIN Usuarios U ON P.id_usuario = U.id
JOIN Libros L ON P.id_libro = L.id
ORDER BY P.fecha_prestamo DESC;

