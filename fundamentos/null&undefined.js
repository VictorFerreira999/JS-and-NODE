// undefined é atribuído automaticamente pelo JavaScript.
// null é atribuído explicitamente pelo programador.

//undefined
let a;
console.log(a); // undefined

const obj = {};
console.log(obj.property); // undefined

function noReturn() {}
console.log(noReturn()); // undefined

//null
let b = null;
console.log(b); // null

let obj1 = { key: 'value' };
obj1 = null;
console.log(obj1); // null

let data = null;
// Data will be assigned later
data = fetchData();

//Exemplo Prático
const fs = require('fs');

function readJSONFile(filePath) {
    try {
        let data = fs.readFileSync(filePath, 'utf8');
        let json = JSON.parse(data);
        return json;
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error('Invalid JSON syntax:', error.message);
        } else if (error.code === 'ENOENT') {
            console.error('File not found:', error.message);
        } else {
            console.error('An unexpected error occurred:', error.message);
        }
        return null;
    } finally {
        console.log('File read attempt finished.');
    }
}

let data2 = readJSONFile('data.json');
if (data2) {
    console.log('JSON data:', data2);
} else {
    console.log('Failed to read or parse JSON file.');
}
