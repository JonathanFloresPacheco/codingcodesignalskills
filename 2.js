console.log("Ejercicio 1: Implementar un Sistema de Permisos para Archivos");
// Descripción: Implementa un sistema de permisos que permita a los usuarios leer, escribir o ejecutar archivos. 
// Cada archivo tendrá permisos asignados a diferentes usuarios.
class StorageServer {
    constructor() {
        this.files = {};
        this.permissions = {}; // {file_name: {user: [permissions]}}
    }
    SET_QUOTA(user, quota) {
        this.quotas[user] = quota;
        this.userUsage[user] = 0;
    }

    FILE_UPLOAD(file_name, size, user) {
        if (this.files[file_name]) {
            throw new Error("File already exists");
        }
        this.files[file_name] = size;
        this.permissions[file_name] = { [user]: ['read', 'write', 'execute'] };
    }

    FILE_WRITE(file_name, content) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        const newSize = content.length;
        this.files[file_name] = newSize;
        const currentVersion = this.versions[file_name].length + 1;
        this.versions[file_name].push({ size: newSize, version: currentVersion });
    }

    GET_VERSION(file_name, version) {
        if (!this.versions[file_name]) {
            throw new Error("File does not exist");
        }
        return this.versions[file_name].find(v => v.version === version) || null;
    }

    SET_PERMISSIONS(file_name, user, permissions) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        this.permissions[file_name][user] = permissions;
    }

    CHECK_PERMISSIONS(file_name, user, permission) {
        if (!this.permissions[file_name] || !this.permissions[file_name][user]) {
            return false;
        }
        return this.permissions[file_name][user].includes(permission);
    } 
    COMPRESS(file_name) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        this.files[file_name].size = Math.floor(this.files[file_name].size / 2);
        this.files[file_name].compressed = true;
    }

    DECOMPRESS(file_name) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        if (!this.files[file_name].compressed) {
            throw new Error("File is not compressed");
        }
        this.files[file_name].size *= 2;
        this.files[file_name].compressed = false;
    }

    GET_LOG() {
        return this.log;
    }

    GET_USAGE(user) {
        return this.userUsage[user] || 0;
    }

    BACKUP(file_name) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        this.backup[file_name] = this.files[file_name];
    }

    RESTORE(file_name) {
        if (!this.backup[file_name]) {
            throw new Error("Backup does not exist");
        }
        this.files[file_name] = this.backup[file_name];
    } 
    ADD_REPLICA(file_name, serverID) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        this.replicas[file_name].push(serverID);
    }

    GET_REPLICAS(file_name) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
    }

    RESTORE_FROM_TRASH(file_name) {
        if (!this.trash[file_name]) {
            throw new Error("File does not exist in trash");
        }
        this.files[file_name] = this.trash[file_name];
        delete this.trash[file_name];
    }
    ENCRYPT(file_name, key) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        this.encryptedFiles[file_name] = { ...this.files[file_name], key };
        this.files[file_name].encrypted = true;
    }

    DECRYPT(file_name, key) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        if (!this.files[file_name].encrypted || this.encryptedFiles[file_name].key !== key) {
            throw new Error("Invalid key or file is not encrypted");
        }
        delete this.encryptedFiles[file_name];
        this.files[file_name].encrypted = false;
    }

    ADD_MONITOR(file_name, user) {
        if (!this.files[file_name]) {
            throw new Error("File does not exist");
        }
        this.monitors[file_name].push(user);
    }

    NOTIFY_MONITORS(file_name) {
        if (!this.monitors[file_name]) {
            return;
        }
        this.monitors[file_name].forEach(user => {
            console.log(`Notification to ${user}: ${file_name} has been modified`);
        });
    }
}

// Ejemplo de uso
let server = new StorageServer();
try {
    server.FILE_UPLOAD("test.txt", 100, "admin");
    server.SET_PERMISSIONS("test.txt", "user1", ["read"]);
    console.log(server.CHECK_PERMISSIONS("test.txt", "user1", "read")); // true
    console.log(server.CHECK_PERMISSIONS("test.txt", "user1", "write")); // false
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********
console.log("Ejercicio 2: Implementar Versionado de Archivos");
// Descripción: Implementa un sistema de versionado que mantenga versiones anteriores de los archivos cuando se realizan cambios.
// let server = new StorageServer();
try {
    server.FILE_UPLOAD("test.txt", 100);
    server.FILE_WRITE("test.txt", "New content");
    console.log(server.GET_VERSION("test.txt", 1)); // { size: 100, version: 1 }
    console.log(server.GET_VERSION("test.txt", 2)); // { size: 11, version: 2 }
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********
console.log("Ejercicio 3: Compresión y Descompresión de Archivos");
// Descripción: Implementa métodos para comprimir y descomprimir archivos utilizando un algoritmo de compresión simple.
try {
    server.FILE_UPLOAD("test.txt", 100);
    server.COMPRESS("test.txt");
    console.log(server.files["test.txt"]); // { size: 50, compressed: true }
    server.DECOMPRESS("test.txt");
    console.log(server.files["test.txt"]); // { size: 100, compressed: false }
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********
console.log("Ejercicio 4: Implementar un Sistema de Log");
// Descripción: Implementa un sistema de log para registrar todas las acciones realizadas sobre los archivos.
try {
    server.FILE_UPLOAD("test.txt", 100);
    console.log(server.GET_LOG()); // ["Uploaded test.txt with size 100"]
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********
console.log("Ejercicio 5: Implementar un Sistema de Cuotas");
// Descripción: Implementa un sistema de cuotas que limite la cantidad total de almacenamiento que un usuario puede utilizar.
try {
    server.SET_QUOTA("user1", 200);
    server.FILE_UPLOAD("test.txt", 100, "user1");
    server.FILE_UPLOAD("test2.txt", 150, "user1"); // Error: Quota exceeded
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********
console.log("Ejercicio 6: Implementar un Sistema de Copia de Seguridad");
// Descripción: Implementa un sistema de copia de seguridad que guarde copias de los archivos en una ubicación de respaldo.
try {
    server.FILE_UPLOAD("test.txt", 100);
    server.BACKUP("test.txt");
    server.FILE_DELETE("test.txt");
    server.RESTORE("test.txt");
    console.log(server.FILE_GET("test.txt")); // 100
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********
console.log("Ejercicio 7: Implementar un Sistema de Replicación de Archivos");
// Descripción: Implementa un sistema de replicación que cree copias de los archivos en múltiples servidores.
try {
    server.FILE_UPLOAD("test.txt", 100);
    server.ADD_REPLICA("test.txt", "Server1");
    console.log(server.GET_REPLICAS("test.txt")); // [100, "Server1"]
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********
console.log("Ejercicio 8: Implementar un Sistema de Restauración de Archivos Borrados");
// Descripción: Implementa un sistema que permita restaurar archivos borrados de una papelera de reciclaje.
try {
    server.FILE_UPLOAD("test.txt", 100);
    server.FILE_DELETE("test.txt");
    server.RESTORE_FROM_TRASH("test.txt");
    console.log(server.FILE_GET("test.txt")); // 100
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********
console.log("Ejercicio 9: Implementar un Sistema de Encriptación de Archivos");
// Descripción: Implementa un sistema de encriptación para proteger el contenido de los archivos.
try {
    server.FILE_UPLOAD("test.txt", 100);
    server.ENCRYPT("test.txt", "secretKey");
    console.log(server.files["test.txt"]); // { size: 100, encrypted: true }
    server.DECRYPT("test.txt", "secretKey");
    console.log(server.files["test.txt"]); // { size: 100, encrypted: false }
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********
console.log("Ejercicio 10: Implementar un Sistema de Monitoreo de Archivos");
// Descripción: Implementa un sistema que monitoree cambios en los archivos y notifique a los usuarios.
try {
    server.FILE_UPLOAD("test.txt", 100);
    server.ADD_MONITOR("test.txt", "user1");
    server.FILE_WRITE("test.txt", "New content"); // Notificación a user1
} catch (error) {
    console.log(error.message);
}
console.log("***********");  // ***********