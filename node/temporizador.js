const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 8 * * 2', function () {
    console.log('Executando tarefa 1!', new Date().getSeconds());
}); 

// Aumentei o tempo de espera para garantir que a tarefa 1 seja executada pelo menos uma vez antes de ser cancelada
setTimeout(function () {
    tarefa1.cancel();
    console.log('Cancelando tarefa 1');
}, 10000); // 10 segundos

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = new schedule.Range(1, 5);
regra.hour = 8;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds());
});
