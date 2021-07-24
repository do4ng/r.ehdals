요즘 Skype를 제치고 Discord가 떡상중이죠.  
Skype도 충분히 좋은데 Discord가 더 평이 좋은 이유 중 하나가 Discord에서는 Bot Api를 제공하기 때문이라고 생각합니다.  
그래서 이번에는 Discordjs를 이용하여 Discord봇을 제작하는 방법을 알려드리려고 합니다.

## ❗ 시작 전 준비물

이번 글에서는 따로 봇 생성 방법을 다루지 않습니다.  
JS 기본 문법을 익히고 보시면 더 좋습니다.

- 봇 토큰
- 봇이 초대되있는 서버
- 코드를 작성할 수 있는 텍스트 편집기

## 📋 프로젝트 생성

이 강좌에서는 **yarn**을 사용합니다. **yarn**이 없는 경우 **npm**을 사용해도 됩니다.

```bash
mkdir discord-bot # 디렉토리 생성
cd discord-bot
yarn init -y # package.json 생성
yarn add discord.js # discord.js 모듈 설치
```

그리고 `package.json`에 아래 항목을 추가해주세요.

```json
// ...
"scripts": {
    "start": "node index"
}
// ...
```

이제 `index.js`를 생성한 뒤 수정해주세요.

```js
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  // 만약 메시지가 왔으면
  if (msg.content === 'ping') {
    // 그 메시지 내용이 ping이면
    msg.reply('pong'); // pong이라고 답하기
  }
});

client.login('YOUR_TOKEN_HERE');
```

실행해주세요!

```bash
yarn start
```

![image](https://user-images.githubusercontent.com/57896501/126419965-011e9aa4-3717-4b9c-9574-633bdcc94280.png)  
잘 작동합니다!

## 🎠 Ping(응답속도) 나타내기

`index.js`를 수정해주세요.

```js
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply(`\`${client.ws.ping}\`ms`); // 응답속도 보내기
  }
});

client.login('YOUR_TOKEN_HERE');
```

![image](https://user-images.githubusercontent.com/57896501/126420492-5182078a-7adf-45ae-b930-1d48dceab42c.png)

역시 잘 작동합니다!
