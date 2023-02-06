const getFlagValue = require ("./flags");
console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`);

//O caminho do terminal tem que ser o mesmo da aplicação Node: C:\Users\filip\Documents\Rocketseat\NODE\Desafio
// Para só depois rodar as flags: node greetings --name Filipe --greeting "Tudo bem com vc?"