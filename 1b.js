console.log("Ejercicio 31: Implementar la Función FILE_UPLOAD");
// Descripción: Implementa una función FILE_UPLOAD que sube un archivo al servidor.
//  Si un archivo con el mismo nombre ya existe, lanza una excepción.
let server0 = new StorageServer();
try {
    server0.FILE_UPLOAD("test.txt", 100);
    server0.FILE_UPLOAD("test.txt", 200);  // Error: File already exists
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********

console.log("Ejercicio 32: Implementar la Función FILE_GET");
// Descripción: Implementa una función FILE_GET que devuelve el tamaño de un archivo dado. Si el archivo no existe, devuelve null.
StorageServer.prototype.FILE_GET = function(file_name) {
    return this.files[file_name] || null;
};

// Ejemplo de uso
console.log("server.FILE_GET('test.txt')");  // 100
console.log("server.FILE_GET('not_exist.txt')");  // null
console.log(server.FILE_GET("test.txt"));  // 100
console.log(server.FILE_GET("not_exist.txt"));  // null
console.log("***********");  // ***********

console.log("Ejercicio 33: Implementar la Función FILE_COPY");
// Descripción: Implementa una función FILE_COPY que copia un archivo de una ubicación a otra. 
// Si el archivo de origen no existe, lanza una excepción.
StorageServer.prototype.FILE_COPY = function(source, dest) {
    if (!this.files[source]) {
        throw new Error("Source file does not exist");
    }
    this.files[dest] = this.files[source];
};

// Ejemplo de uso
try {
    server.FILE_COPY("test.txt", "copy_test.txt");
    console.log(server.FILE_GET("copy_test.txt"));  // 100
    server.FILE_COPY("not_exist.txt", "copy_test.txt");  // Error: Source file does not exist
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********
console.log("Ejercicio 34: Comprobar la Existencia de un Archivo");
// Descripción: Implementa una función que reciba el nombre de un archivo y compruebe si existe en el servidor.
StorageServer.prototype.FILE_EXISTS = function(file_name) {
    return !!this.files[file_name];
};

// Ejemplo de uso
console.log("server.FILE_EXISTS('test.txt')");  // true
console.log("server.FILE_EXISTS('not_exist.txt')");  // false
console.log(server.FILE_EXISTS("test.txt"));  // true
console.log(server.FILE_EXISTS("not_exist.txt"));  // false
console.log("***********");  // ***********

console.log("Ejercicio 35: Listar Todos los Archivos");
// Descripción: Implementa una función que liste todos los archivos almacenados en el servidor.
StorageServer.prototype.LIST_FILES = function() {
    return Object.keys(this.files);
};

// Ejemplo de uso
console.log("server.LIST_FILES()");  // ["test.txt", "copy_test.txt"]
console.log(server.LIST_FILES());  // ["test.txt", "copy_test.txt"]
console.log("***********");  // ***********
console.log("Ejercicio 36: Eliminar un Archivo");
// Descripción: Implementa una función que elimine un archivo del servidor.
StorageServer.prototype.FILE_DELETE = function(file_name) {
    if (!this.files[file_name]) {
        throw new Error("File does not exist");
    }
    delete this.files[file_name];
};

// Ejemplo de uso
try {
    server.FILE_DELETE("test.txt");
    console.log(server.LIST_FILES());  // ["copy_test.txt"]
    server.FILE_DELETE("not_exist.txt");  // Error: File does not exist
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********
console.log("Ejercicio 37: Renombrar un Archivo");
// Descripción: Implementa una función que renombre un archivo en el servidor.
StorageServer.prototype.FILE_RENAME = function(old_name, new_name) {
    if (!this.files[old_name]) {
        throw new Error("File does not exist");
    }
    if (this.files[new_name]) {
        throw new Error("New file name already exists");
    }
    this.files[new_name] = this.files[old_name];
    delete this.files[old_name];
};

// Ejemplo de uso
try {
    server.FILE_RENAME("copy_test.txt", "renamed_test.txt");
    console.log(server.LIST_FILES());  // ["renamed_test.txt"]
    server.FILE_RENAME("not_exist.txt", "new_name.txt");  // Error: File does not exist
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********
console.log("Ejercicio 38: Obtener el Espacio Total Utilizado");
// Descripción: Implementa una función que devuelva el tamaño total de todos los archivos almacenados en el servidor.
StorageServer.prototype.TOTAL_SIZE = function() {
    return Object.values(this.files).reduce((total, size) => total + size, 0);
};

// Ejemplo de uso
console.log("server.TOTAL_SIZE()");  // 100
console.log(server.TOTAL_SIZE());  // 100
console.log("***********");  // ***********
console.log("Ejercicio 39: Verificar Si un Archivo Está Vacío");
// Descripción: Implementa una función que determine si un archivo está vacío (tamaño 0).
StorageServer.prototype.FILE_IS_EMPTY = function(file_name) {
    if (!this.files[file_name]) {
        throw new Error("File does not exist");
    }
    return this.files[file_name] === 0;
};
// Ejemplo de uso
try {
    server.FILE_UPLOAD("empty.txt", 0);
    console.log(server.FILE_IS_EMPTY("empty.txt"));  // true
    console.log(server.FILE_IS_EMPTY("renamed_test.txt"));  // false
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********
console.log("Ejercicio 40: Borrar Todos los Archivos");
// Descripción: Implementa una función que borre todos los archivos del servidor.
StorageServer.prototype.DELETE_ALL = function() {
    this.files = {};
};

// Ejemplo de uso
console.log("server.DELETE_ALL()");
console.log("server.LIST_FILES()");  // []
console.log("server.TOTAL_SIZE()");  // 0
server.DELETE_ALL();
console.log(server.LIST_FILES());  // []
console.log(server.TOTAL_SIZE());  // 0


class StorageServer {
    constructor() {
        this.files = {};
    }

    FILE_UPLOAD(file_name, size) {
        if (this.files[file_name]) {
            throw new Error("File already exists");
        }
        this.files[file_name] = size;
    }

    FILE_GET(file_name) {
        return this.files[file_name] || null;
    }

    FILE_COPY(source, dest) {
        if (!this.files[source]) {
            throw new Error("Source file does not exist");
        }
        this.files[dest] = this.files[source];
    }

    FILE_EXISTS(file_name) {
        return !!this.files[file_name];
    }

    LIST_FILES() {
        return Object.keys(this.files);
    }

    FILE_DELETE(file_name) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        delete this.files[file_name];
    }

    FILE_RENAME(old_name, new_name) {
        if (!this.files[old_name]) {
            throw new Error("File does not exist");
        }
        if (this.files[new_name]) {
            throw new Error("New file name already exists");
        }
        this.files[new_name] = this.files[old_name];
        delete this.files[old_name];
    }

    TOTAL_SIZE() {
        return Object.values(this.files).reduce((total, size) => total + size, 0);
    }

    FILE_IS_EMPTY(file_name) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        return this.files[file_name] === 0;
    }

    DELETE_ALL() {
        this.files = {};
    }

    FILE_WRITE(file_name, content) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        this.files[file_name] = content.length;
    }

    FILE_APPEND(file_name, content) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        this.files[file_name] += content.length;
    }

    FILE_TRUNCATE(file_name, size) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        if (size < 0) {
            throw new Error("Size must be non-negative");
        }
        this.files[file_name] = size;
    }

    FILE_IS_FULL(file_name, maxSize) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        return this.files[file_name] >= maxSize;
    }

    AVAILABLE_CAPACITY(maxCapacity) {
        let usedCapacity = this.TOTAL_SIZE();
        return maxCapacity - usedCapacity;
    }

    FILE_MOVE(source, dest) {
        if (!this.files[source]) {
            throw new Error("Source file does not exist");
        }
        if (this.files[dest]) {
            throw new Error("Destination file already exists");
        }
        this.files[dest] = this.files[source];
        delete this.files[source];
    }

    FILE_LINK(target, link) {
        if (!this.files[target]) {
            throw new Error("Target file does not exist");
        }
        if (this.files[link]) {
            throw new Error("Link name already exists");
        }
        this.files[link] = this.files[target];
    }

    FILE_COPY_VERIFY(source, dest) {
        this.FILE_COPY(source, dest);
        if (this.files[source] !== this.files[dest]) {
            throw new Error("File copy verification failed");
        }
    }

    FILE_UPLOAD_SAFE(file_name, size, maxCapacity) {
        if (this.TOTAL_SIZE() + size > maxCapacity) {
            throw new Error("Not enough space to upload file");
        }
        this.FILE_UPLOAD(file_name, size);
    }
}

// Ejemplo de uso
let server = new StorageServer();
try {
    server.FILE_UPLOAD("test.txt", 0);  // Crear archivo vacío
    server.FILE_WRITE("test.txt", "Hello, world!");
    console.log(server.FILE_GET("test.txt"));  // 13
    server.FILE_APPEND("test.txt", " More text");
    console.log(server.FILE_GET("test.txt"));  // 23
    server.FILE_TRUNCATE("test.txt", 5);
    console.log(server.FILE_GET("test.txt"));  // 5
    console.log(server.FILE_IS_FULL("test.txt", 5));  // true
    console.log(server.AVAILABLE_CAPACITY(100));  // Capacidad restante en el servidor
    server.FILE_MOVE("test.txt", "moved_test.txt");
    console.log(server.LIST_FILES());  // ["moved_test.txt"]
    server.FILE_LINK("moved_test.txt", "link_to_test.txt");
    console.log(server.LIST_FILES());  // ["moved_test.txt", "link_to_test.txt"]
    server.FILE_COPY_VERIFY("moved_test.txt", "verified_copy.txt");
    console.log(server.LIST_FILES());  // ["moved_test.txt", "link_to_test.txt", "verified_copy.txt"]
    server.FILE_UPLOAD_SAFE("large_file.txt", 100, 150);  // Error: Not enough space to upload file
} catch (error) {
    console.log(error.message);
}
