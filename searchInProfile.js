var config = require("./config.js");
var Twit = require("twit");
var Twitter = new Twit(config);

const listaPalavras = [
  "GTX 1650 SUPER",
  "GTX 1650 Super",
  "GTX 1660",
  "GTX 1660 Super",
  "GTX 1660 SUPER",
]; //Configure a lista de palavras

/* Configure um intervalo desejado (em microsegundos) - 30 minuto é o padrão */
setInterval(searchInProfile, 30 * 60 * 1000);

function searchInProfile() {
  var params = {
    //Configure o perfil que posta as atualizações sobre as placas
    Name: "GPU Bipolar // 🤖 BOT Fiscal unofficial do Ninja",
    screen_name: "@gpubipolar",
    count: 200, //Procurar quantos tweets? max: 200
  };

  Twitter.get(
    "statuses/user_timeline",
    params,
    function (error, tweets, response) {
      if (!error) {
        tweetsList = [];
        for (dat of tweets) {
          //Cria a lista dos teewts do perfil
          if (dat.in_reply_to_status_id == null) {
            tweetsList.push(dat.text);
          }
        }
        mensagemDivisao();
        setTimeout(() => {
          verificaTweetsRelevantes(tweetsList);
        }, 5000); //Espera 5 segundos para não bugar o layout das mensagens
      }
    }
  );
}

function verificaTweetsRelevantes(tweetsList) {
  for (tweet of tweetsList) {
    var input = tweet;
    for (palavra of listaPalavras) {
      //Verifica se o tweet é referente a placa que você quer
      if (input.includes(palavra)) {
        enviarAtualizacao(input);
      }
    }
  }
}

function enviarAtualizacao(input) {
  const client = require("twilio")(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_TOKEN
  );
  client.messages
    .create({
      from: "whatsapp:TWILIO_NUMERO_DE_TELEFONE",
      body: input,
      to: "whatsapp:SEU_NUMERO_DE_TELEFONE",
    })
    .then((message) => console.log(message.sid));
}

function mensagemDivisao() {
  const client = require("twilio")(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_TOKEN
  );
  client.messages
    .create({
      from: "whatsapp:TWILIO_NUMERO_DE_TELEFONE",
      body: "*-------------Atualizações-------------*",
      to: "whatsapp:SEU_NUMERO_DE_TELEFONE",
    })
    .then((message) => console.log(message.sid));
}
