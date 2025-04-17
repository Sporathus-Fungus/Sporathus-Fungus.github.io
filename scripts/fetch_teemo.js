const fetch = require('node-fetch');
const fs = require('fs');

const RIOT_API_KEY = process.env.RIOT_API_KEY;
const BASE_URL = 'https://ddragon.leagueoflegends.com/cdn/14.8.1/data/pt_BR/champion/Teemo.json';

(async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Erro ao buscar dados do Teemo');

    const json = await response.json();
    const teemoData = json.data.Teemo;

    fs.writeFileSync('data/teemo.json', JSON.stringify(teemoData, null, 2));
    console.log('Dados do Teemo salvos com sucesso.');
  } catch (err) {
    console.error('Erro ao obter dados do Teemo:', err);
    process.exit(1);
  }
})();
