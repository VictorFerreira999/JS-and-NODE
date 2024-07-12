function falarDepoisDe(segundos, frase) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(frase) //A promisse aceita somente um parematro
      }, segundos * 1000)
   })
}

falarDepoisDe(3, 'Que legal!')
   .then(frase => frase.concat('?!?'))
   .then(outraFrase => console.log(outraFrase))
   .catch(e => console.log(e)) //tratar erros usando o reject
