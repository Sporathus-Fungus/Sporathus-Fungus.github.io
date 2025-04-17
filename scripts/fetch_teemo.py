import requests
import json
import os

# URL da Riot para dados do Teemo (não exige API Key)
url = "https://ddragon.leagueoflegends.com/cdn/14.7.1/data/pt_BR/champion/Teemo.json"

response = requests.get(url)
if response.status_code == 200:
    teemo_data = response.json()

    os.makedirs("data", exist_ok=True)
    with open("data/teemo.json", "w", encoding="utf-8") as f:
        json.dump(teemo_data, f, ensure_ascii=False, indent=2)

    print("✅ Dados do Teemo atualizados!")
else:
    print(f"❌ Erro ao buscar dados: {response.status_code}")
