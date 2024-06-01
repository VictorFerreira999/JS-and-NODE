// Definindo a classe Animal
class Animal {
   constructor(nome, idade) {
     this.nome = nome;
     this.idade = idade;
   }
 
   fazerSom() {
     console.log(`${this.nome} está fazendo um som.`);
   }
 }
 
 // Criando uma instância de Animal
 const animal1 = new Animal('Rex', 5);
 animal1.fazerSom(); // Rex está fazendo um som.
 
 // Definindo a subclasse Cachorro que herda de Animal
 class Cachorro extends Animal {
   constructor(nome, idade, raca) {
     super(nome, idade);
     this.raca = raca;
   }
 
   fazerSom() {
     console.log(`${this.nome} está latindo.`);
   }
 }
 
 // Criando uma instância de Cachorro
 const cachorro1 = new Cachorro('Max', 3, 'Labrador');
 cachorro1.fazerSom(); // Max está latindo.
 
 // Definindo a classe Gato com encapsulamento
 class Gato {
   #nome; // Propriedade privada
   constructor(nome, idade) {
     this.#nome = nome;
     this.idade = idade;
   }
 
   obterNome() {
     return this.#nome;
   }
 
   fazerSom() {
     console.log(`${this.obterNome()} está miando.`);
   }
 }
 
 // Criando uma instância de Gato
 const gato1 = new Gato('Whiskers', 2);
 gato1.fazerSom(); // Whiskers está miando.
 // console.log(gato1.#nome); // Erro: não é possível acessar a propriedade privada
 
 // Definindo a classe Passaro que herda de Animal
 class Passaro extends Animal {
   fazerSom() {
     console.log(`${this.nome} está cantando.`);
   }
 }
 
 // Criando instâncias de Passaro e Gato
 const passaro1 = new Passaro('Piu', 1);
 const gato2 = new Gato('Garfield', 4);
 
 // Lista de diferentes animais
 const animais = [cachorro1, passaro1, gato2];
 
 // Demonstrando polimorfismo
 animais.forEach(animal => animal.fazerSom());
 // Max está latindo.
 // Piu está cantando.
 // Garfield está miando.
 