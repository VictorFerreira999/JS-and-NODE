//Sintaxe
try {
   // Código que pode gerar uma exceção
} catch (error) {
   // Código para tratar a exceção
} finally {
   // Código que será executado sempre
}

//exemplo
try {
   let result = someFunction();
   console.log(result);
} catch (error) {
   console.error('An error occurred:', error.message);
} finally {
   console.log('Execution completed.');
}

//Manipulando Erros Específicos
try {
   JSON.parse('Invalid JSON string');
} catch (error) {
   if (error instanceof SyntaxError) {
       console.error('JSON Syntax Error:', error.message);
   } else {
       console.error('An unexpected error occurred:', error.message);
   }
}
