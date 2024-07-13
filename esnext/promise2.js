
setTimeout(function() {
   console.log('Excultando Callback...')
   
   setTimeout(function() {
      console.log('Excultando Callback...')
      
      setTimeout(function() {
         console.log('Excultando Callback...')
      }, 2000)
   }, 2000)
}, 2000)

function esperarPor(tempo = 2000) {
   return new Promise(function(resolve) {
      setTimeout(function() {
         console.log('Excultando promise...')
         resolve('Vishhhh')
      }, tempo)
   })
}
esperarPor()
   .then(() => esperarPor())
   .then(esperarPor)