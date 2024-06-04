class Lancamento{
   constructor(nome = 'Genérico', valor = 0) {
      this.nome = nome
      this.valor = valor
   }
}

class ClicoFinanceiro {
   constructor(mes, ano) {
      this.mes = mes
      this.ano = ano
      this.lancamentos = []
   }

   addLancamentos(...lancamentos) {
      lancamentos.forEach( l => this.lancamentos.push(l))
   }

   sumario() {
      let valorCondolidado = 0
      this.lancamentos.forEach(l => {valorCondolidado += l.valor})
      return valorCondolidado 
   }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('luz', -220)
const contas = new ClicoFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())