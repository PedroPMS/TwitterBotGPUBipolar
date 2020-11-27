# TwitterBot
Esse bot busca os últimos 200 tweets de uma página que atualiza preços de placas de vídeo, faz um filtro apenas para as que você gostaria de se informar e te encaminha por Whatsapp.

## Desenvolvimento

Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:

```shell
cd "diretorio de sua preferencia"
git clone https://github.com/PedroPMS/TwitterBotGPUBipolar
```

## Construção

Para construir o projeto com o Node, executar os comando abaixo:

```shell
npm install
```

O comando irá baixar todas as dependências do projeto.

## Dependências

Para o bot funcionar é necessário tem uma conta de desenvolvedo do Twitter, para ter acesso as chaves necessárias para configurar o bot. Você consegue elas aqui:

```shell
https://developer.twitter.com/en
```

Para encaminhar as atualizações por Whatsapp usa-se o Twilio, aqui você tem um tutorial de como conseguir configurar o Twilio.

```shell
https://www.twilio.com/blog/como-enviar-mensagem-whatsapp-com-javascript-node
```

Para o bot é necessário que você informe suas chaves: *TWILIO_ACCOUT_SID* e *TWILIO_AUTH_TOKEN*.

## Hospedagem

Caso queira hospedar seu bot numa máquina virtual, pode usar serviços como o Heroku que é grátis.

Tutorial de como usar o Heroku no link abaixo:

```shell
https://blog.geekhunter.com.br/heroku/
```

*O Procfile já está configurado caso use o Heroku.*
