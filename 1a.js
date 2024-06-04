console.log("Ejercicio 21: Verificar Anagramas");
// Descripción: Implementa una función que reciba dos cadenas y determine si son anagramas (tienen las mismas letras en diferente orden).
function areAnagrams(s1, s2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(s1) === normalize(s2);
}

// Ejemplo de uso
console.log("areAnagrams('listen', 'silent')"); // true
console.log("areAnagrams('hello', 'world')");   // false
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
console.log("***********");  // ***********
console.log("Ejercicio 22: Contar Palabras Únicas");
// Descripción: Implementa una función que reciba una cadena y devuelva el número de palabras únicas.
function countUniqueWords(s) {
    let words = s.toLowerCase().split(/\W+/);
    let uniqueWords = new Set(words);
    return uniqueWords.size;
}

// Ejemplo de uso
console.log("countUniqueWords('This is a test. This is only a test.')");  // 5
console.log(countUniqueWords("This is a test. This is only a test."));  // 5
console.log("***********");  // ***********
console.log("Ejercicio 23: Generar Números Primos");
// Descripción: Implementa una función que reciba un número N y devuelva una lista de los primeros N números primos.
function generatePrimes(n) {
    const primes = [];
    let num = 2;
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;

    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
}

// Ejemplo de uso
console.log("generatePrimes(5)");  // [2, 3, 5, 7, 11]
console.log(generatePrimes(5));  // [2, 3, 5, 7, 11]
console.log("***********");  // ***********
console.log("Ejercicio 24: Intersección de Dos Listas");
// Descripción: Implementa una función que reciba dos listas y devuelva una nueva
//  lista que contenga los elementos comunes a ambas listas.
function intersection(lst1, lst2) {
    return lst1.filter(value => lst2.includes(value));
}

// Ejemplo de uso
console.log("intersection([1, 2, 3, 4], [3, 4, 5, 6])");  // [3, 4]
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));  // [3, 4]
console.log("***********");  // ***********
console.log("Ejercicio 25: Contar Caracteres Repetidos");
// Descripción: Implementa una función que reciba una cadena y devuelva un objeto con el conteo de cada carácter que se repite.
function countRepeatedChars(s) {
    let countDict = {};
    for (let char of s) {
        countDict[char] = (countDict[char] || 0) + 1;
    }
    return Object.fromEntries(Object.entries(countDict).filter(([char, count]) => count > 1));
}

// Ejemplo de uso
console.log("countRepeatedChars('hello world')");  // { l: 3, o: 2 }
console.log(countRepeatedChars("hello world"));  // { l: 3, o: 2 }
console.log("***********");  // ***********
console.log("Ejercicio 26: Suma de Matrices");
// Descripción: Implementa una función que reciba dos matrices y devuelva la suma de ambas matrices.
function addMatrices(matrix1, matrix2) {
    return matrix1.map((row, i) => row.map((val, j) => val + matrix2[i][j]));
}

// Ejemplo de uso
console.log("addMatrices([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[9, 8, 7], [6, 5, 4], [3, 2, 1]] )");  // [[10, 10, 10], [10, 10, 10], [10, 10, 10]]
console.log(addMatrices(
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    [[9, 8, 7], [6, 5, 4], [3, 2, 1]]
));  // [[10, 10, 10], [10, 10, 10], [10, 10, 10]]
console.log("***********");  // ***********
console.log("Ejercicio 27: Aplanar una Lista de Listas");
// Descripción: Implementa una función que reciba una lista de listas y devuelva una lista aplanad
function flatten(lst) {
    return lst.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
}

// Ejemplo de uso
console.log("flatten([1, [2, [3, 4], 5], 6])");  // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2, [3, 4], 5], 6]));  // [1, 2, 3, 4, 5, 6]
console.log("***********");  // ***********
console.log("Ejercicio 28: Calcular la Moda de una Lista");
// Descripción: Implementa una función que reciba una lista de números y devuelva la moda (el número que más se repite).
function calculateMode(lst) {
    let countDict = {};
    for (let num of lst) {
        countDict[num] = (countDict[num] || 0) + 1;
    }
    let maxCount = Math.max(...Object.values(countDict));
    return Number(Object.keys(countDict).find(key => countDict[key] === maxCount));
}

// Ejemplo de uso
console.log("calculateMode([1, 2, 2, 3, 4, 4, 4, 5])");  // 4
console.log(calculateMode([1, 2, 2, 3, 4, 4, 4, 5]));  // 4
console.log("***********");  // ***********
console.log("Ejercicio 29: Invertir Palabras en una Cadena");
// Descripción: Implementa una función que reciba una cadena y devuelva la cadena con el orden de las palabras invertido.
function reverseWords(s) {
    return s.split(' ').reverse().join(' ');
}

// Ejemplo de uso
console.log("reverseWords('hello world this is a test')");  // "test a is this world hello"
console.log(reverseWords("hello world this is a test"));  // "test a is this world hello"
console.log("***********");  // ***********
console.log("Ejercicio 30: Verificar Subcadena");
// Descripción: Implementa una función que reciba dos cadenas y determine si la segunda cadena es una subcadena de la primera.
function isSubstring(str, sub) {
    return str.includes(sub);
}

// Ejemplo de uso
console.log(isSubstring("hello world", "world"));  // true
console.log(isSubstring("hello world", "goodbye")); // false
console.log("***********");  // ***********



