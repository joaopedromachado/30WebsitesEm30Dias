var nickname = ["SugarDaddy69","LemonSqueezy","Zeca Paugordinho","Pitbullzado","Toushirou","Takamassa Nomuro","SlayerOfNoobs","100Carinho","CorongaVairus","20Comer70Correr","Braddock","DerbyInMyBody","CharutoUzucrack","Drazio Vrau Nelas","PowerGuido","Matue","Dalsin","Funky","NegãoDuZap","KnightOfNight","Noob Supremo","VulgoMalvadão","Wolfric","Kynsed","Cassius","Karnos","Bellix","Pescotapa","Ragnaros","Ragnarok","LordOfDarkness","Cornelius","Asura","Pocahontas","TodoNicolasCagezinho","PaulãoDaCarrocinha","RobertinhaDaLaje","Xaolim","Messias Salnorabo","Dope","ElUsGuri","Cacetinho","E-grilo","20Matar70Correr","Paulo Briff Cado","CebolinhaDoClime","GauchoDeAp","Kotuka Teu Oku","Patatrafico","100CensuraLixo","Kirito","GudangDeChocolate","100%Raiz","ReiLacoste","Patatiro","Paulaku","Funkeiro150bpm","Lolzeiro","YasuoZeroBarra20","MilGrau100","Jacinto Leite no Rego","ImmortalKing","Sparkie","SuperSaiaJeans","RasgaKu","Mog","FreeFireÉRuim","ElMatador","ChavosoMeiaNaCanela"];

var nicknameLength = nickname.length

var resultado = document.querySelector("#nickname_result");


function gerarNick() {
    var randomNickname = Math.floor(Math.random() * nicknameLength)
    resultado.innerHTML = nickname[randomNickname];
}