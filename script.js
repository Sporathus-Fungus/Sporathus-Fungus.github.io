fetch('data/teemo.json')
      .then(response => response.json())
      .then(data => {
        // Parte 1: preencher lista descritiva
        const statsList = document.getElementById('teemo-stats');
        statsList.innerHTML = '';
    
        const info = data.info;
        const stats = data.stats;
    
        const items = [
          `Função: ${data.tags.join(', ')}`,
          `Dificuldade: ${info.difficulty}`,
          `Ataque: ${info.attack}`,
          `Defesa: ${info.defense}`,
          `Magia: ${info.magic}`,
          `Vida: ${stats.hp}`,
          `Mana: ${stats.mp}`,
          `Velocidade de movimento: ${stats.movespeed}`,
          `Alcance de ataque: ${stats.attackrange}`,
          `Armadura: ${stats.armor}`,
          `Resistência mágica: ${stats.spellblock}`
        ];
    
        items.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          statsList.appendChild(li);
        });
    
        // Parte 2: controle de nível e stats dinâmicos
        baseStats = {
          hp: stats.hp,
          attackdamage: stats.attackdamage,
          armor: stats.armor,
          spellblock: stats.spellblock,
          movespeed: stats.movespeed
        };
    
        perLevelStats = {
          hp: stats.hpperlevel,
          attackdamage: stats.attackdamageperlevel,
          armor: stats.armorperlevel,
          spellblock: stats.spellblockperlevel,
          movespeed: 0
        };
    
        statElements = {
          hp: document.getElementById('hp'),
          attackdamage: document.getElementById('attackdamage'),
          armor: document.getElementById('armor'),
          spellblock: document.getElementById('spellblock'),
          movespeed: document.getElementById('movespeed')
        };
    
        updateStatsDisplay();
        setupLevelControl();
      })
      .catch(err => {
        document.getElementById('teemo-stats').innerHTML = '<li>Erro ao carregar estatísticas.</li>';
        console.error(err);
      });