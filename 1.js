console.log("Ejercicio 1: Manejo de Cadenas");
// Descripción: Implementa una función que recibe una cadena y devuelve la misma cadena pero con las vocales en mayúscula.
function capitalizeVowels(s) {
    const vowels = "aeiou";
    let result = "";
    for (let char of s) {
        if (vowels.includes(char)) {
            result += char.toUpperCase();
        } else {
            result += char;
        }
    }
    return result;
}
// Ejemplo de uso
console.log("hello world");  // hEllO wOrld
console.log(capitalizeVowels("hello world"));  // hEllO wOrld
console.log("***********");  // ***********
console.log("Ejercicio 2: Suma de Elementos en una Lista");
// Descripción: Implementa una función que reciba una lista de números y devuelva la suma de sus elementos.
function sumOfElements(lst) {
    let total = 0;
    for (let num of lst) {
        total += num;
    }
    return total;
}
// Ejemplo de uso
console.log("[1, 2, 3, 4, 5]");  // 15
console.log(sumOfElements([1, 2, 3, 4, 5]));  // 15
console.log("***********");  // ***********
console.log("Ejercicio 3: Números Pares en un Rango");
// Descripción: Implementa una función que reciba dos números y 
// devuelva una lista de todos los números pares en ese rango (incluyendo los límites).
function evenNumbersInRange(start, end) {
    let evens = [];
    for (let num = start; num <= end; num++) {
        if (num % 2 === 0) {
            evens.push(num);
        }
    }
    return evens;
}
// Ejemplo de uso
console.log("evenNumbersInRange(1, 10)");  // [2, 4, 6, 8, 10]
console.log(evenNumbersInRange(1, 10));  // [2, 4, 6, 8, 10]
console.log("***********");  // ***********
console.log("Ejercicio 4: Conteo de Palabras");
// Descripción: Implementa una función que reciba una cadena y devuelva un diccionario con el conteo de cada palabra.
function wordCount(s) {
    let words = s.split(' ');
    let countDict = {};
    for (let word of words) {
        if (countDict[word]) {
            countDict[word]++;
        } else {
            countDict[word] = 1;
        }
    }
    return countDict;
}
// Ejemplo de uso
console.log("wordCount('this is a test this is only a test')");  // {'this': 2, 'is': 2, 'a': 2, 'test': 2, 'only': 1}
console.log(wordCount("this is a test this is only a test"));  // {'this': 2, 'is': 2, 'a': 2, 'test': 2, 'only': 1}
console.log("***********");  // ***********
console.log("Ejercicio 5: Palíndromos");
// Descripción: Implementa una función que reciba una cadena y determine si es un palíndromo (se lee igual de adelante hacia atrás).
function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}
// Ejemplo de uso
console.log("isPalindrome('racecar')");  // true
console.log("isPalindrome('hello')");    // false
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log("***********");  // ***********
console.log("Ejercicio 6: Filtrado de Números Negativos");
// Descripción: Implementa una función que reciba una lista de números y devuelva una nueva lista que contenga solo los números positivos.
function filterPositiveNumbers(lst) {
    return lst.filter(num => num > 0);
}
// Ejemplo de uso
console.log("filterPositiveNumbers([1, -2, 3, -4, 5])");  // [1, 3, 5]
console.log(filterPositiveNumbers([1, -2, 3, -4, 5]));  // [1, 3, 5]
console.log("***********");  // ***********
console.log("Ejercicio 7: Conversión de Temperaturas");
// Descripción: Implementa una función que convierta una temperatura de grados Celsius a grados Fahrenheit.
function celsiusToFahrenheit(celsius) {
    // Formula de C° A F°
    return (celsius * 9/5) + 32;
}
// Ejemplo de uso
console.log("celsiusToFahrenheit(0)");   // 32.0
console.log("celsiusToFahrenheit(100)"); // 212.0
console.log(celsiusToFahrenheit(0));   // 32.0
console.log(celsiusToFahrenheit(100)); // 212.0
console.log("***********");  // ***********
console.log("Ejercicio 8: Factorial de un Número");
// Descripción: Implementa una función que calcule el factorial de un número entero no negativo.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
// Ejemplo de uso
console.log("factorial(5)");  // 120
console.log(factorial(5));  // 120
console.log("***********");  // ***********
console.log("Ejercicio 9: Búsqueda de Elemento");
// Descripción: Implementa una función que busque un elemento en una lista y devuelva su índice, o -1 si no se encuentra.
function findElement(lst, target) {
    for (let index = 0; index < lst.length; index++) {
        if (lst[index] === target) {
            return index;
        }
    }
    return -1;
}
// Ejemplo de uso
console.log("findElement([1, 2, 3, 4, 5], 3)");  // 2
console.log("findElement([1, 2, 3, 4, 5], 6)");  // -1
console.log(findElement([1, 2, 3, 4, 5], 3));  // 2
console.log(findElement([1, 2, 3, 4, 5], 6));  // -1
console.log("***********");  // ***********
console.log("Ejercicio 10: Inversión de una Cadena");
// Descripción: Implementa una función que reciba una cadena y devuelva la cadena invertida.
function reverseString(s) {
    return s.split('').reverse().join('');
}

// Ejemplo de uso
console.log("reverseString('hello')");  // olleh
console.log("reverseString('world')");  // dlrow
console.log(reverseString("hello"));  // olleh
console.log(reverseString("world"));  // dlrow
console.log("***********");  // ***********
console.log("Ejercicio 11: Encontrar el Número Máximo en una Lista");
// Descripción: Implementa una función que reciba una lista de números y devuelva el número máximo.
function findMax(lst) {
    let maxNum = lst[0];
    for (let num of lst) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    return maxNum;
}

// Ejemplo de uso
console.log("findMax([1, 5, 3, 9, 2])");  // 9
console.log(findMax([1, 5, 3, 9, 2]));  // 9
console.log("***********");  // ***********
console.log("Ejercicio 12: Contar Vocales en una Cadena");
// Descripción: Implementa una función que reciba una cadena y devuelva el número de vocales que contiene.
function countVowels(s) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Ejemplo de uso
console.log("countVowels('hello world')");  // 3
console.log(countVowels("hello world"));  // 3
console.log("***********");  // ***********
console.log("Ejercicio 13: Producto de Elementos en una Lista");
// Descripción: Implementa una función que reciba una lista de números y devuelva el producto de todos sus elementos.
function productOfElements(lst) {
    let product = 1;
    for (let num of lst) {
        product *= num;
    }
    return product;
}

// Ejemplo de uso
console.log("productOfElements([1, 2, 3, 4])");  // 24
console.log(productOfElements([1, 2, 3, 4]));  // 24
console.log("***********");  // ***********
console.log("Ejercicio 14: Filtrar Números Impares");
// Descripción: Implementa una función que reciba una lista de números y devuelva una nueva lista que contenga solo los números impares.
function filterOddNumbers(lst) {
    return lst.filter(num => num % 2 !== 0);
}
// Ejemplo de uso
console.log("filterOddNumbers([1, 2, 3, 4, 5])");  // [1, 3, 5]
console.log(filterOddNumbers([1, 2, 3, 4, 5]));  // [1, 3, 5]
console.log("***********");  // ***********
console.log("Ejercicio 15: Verificar Número Primo");
// Descripción: Implementa una función que reciba un número y determine si es un número primo.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Ejemplo de uso
console.log("isPrime(7)");  // true
console.log("isPrime(10)"); // false
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log("***********");  // ***********
console.log("Ejercicio 16: Ordenar una Lista");
// Descripción: Implementa una función que reciba una lista de números y devuelva la lista ordenada en orden ascendente.
function sortList(lst) {
    return lst.sort((a, b) => a - b);
}
// Ejemplo de uso
console.log("sortList([4, 2, 7, 1, 3])");  // [1, 2, 3, 4, 7]
console.log(sortList([4, 2, 7, 1, 3]));  // [1, 2, 3, 4, 7]
console.log("***********");  // ***********
console.log("Ejercicio 17: Generar una Lista de Números del 1 al N");
// Descripción: Implementa una función que reciba un número N y devuelva una lista de números del 1 al N.
function generateNumbers(n) {
    let numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }
    return numbers;
}

// Ejemplo de uso
console.log("generateNumbers(5)");  // [1, 2, 3, 4, 5]
console.log(generateNumbers(5));  // [1, 2, 3, 4, 5]
console.log("***********");  // ***********
console.log("Ejercicio 18: Convertir Horas a Segundos");
// Descripción: Implementa una función que reciba una cantidad de horas y las convierta en segundos.
function hoursToSeconds(hours) {
    return hours * 3600;
}

// Ejemplo de uso
console.log("hoursToSeconds(1)");   // 3600
console.log("hoursToSeconds(2.5)"); // 9000
console.log(hoursToSeconds(1));   // 3600
console.log(hoursToSeconds(2.5)); // 9000
console.log("***********");  // ***********
console.log("Ejercicio 19: Contar Elementos Mayores que un Valor");
// Descripción: Implementa una función que reciba una lista de números y un valor, y devuelva la 
// cantidad de elementos en la lista que son mayores que ese valor.
function countGreaterThan(lst, value) {
    let count = 0;
    for (let num of lst) {
        if (num > value) {
            count++;
        }
    }
    return count;
}

// Ejemplo de uso
console.log("countGreaterThan([1, 5, 3, 9, 2], 4)");  // 2
console.log(countGreaterThan([1, 5, 3, 9, 2], 4));  // 2
console.log("***********");  // ***********
console.log("Ejercicio 20: Encontrar el Elemento Mínimo en una Lista");
// Descripción: Implementa una función que reciba una lista de números y devuelva el número mínimo.
function findMin(lst) {
    let minNum = lst[0];
    for (let num of lst) {
        if (num < minNum) {
            minNum = num;
        }
    }
    return minNum;
}

// Ejemplo de uso
console.log("findMin([1, 5, 3, 9, 2])");  // 1
console.log(findMin([1, 5, 3, 9, 2]));  // 1
console.log("***********");  // ***********


