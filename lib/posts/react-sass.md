![intro](https://user-images.githubusercontent.com/57896501/125187724-fb465280-e26b-11eb-9afe-0bb5249d7a63.png)
가끔 html을 사용하다보면 css로 구현할려면 뭔가 귀찮은게 있습니다.  
그럴때마다 저는 sass를 사용합니다. 딱히 적용방법이 어렵지 않고 무엇보다도 문법이 쉽습니다.  
그래서 이번 포스트에서는 react에 sass를 적용하는 방법을 알려드리도록 하겠습니다.

## ❗ 시작 전

sass의 문법을 따로 다루지는 않습니다. 추후 sass 문법에 대해 예정입니다.

## 🎠 React + Sass

이제 본론으로 넘어가서 React에 Sass를 추가해봅시다.  
먼저 React 프로젝트를 생성해주시고 `src`폴더를 비워주세요.

```bash
$yarn create react-app reactsass # npx create-react-app reactsass
$cd reactsass
$del src # rm src
```

그리고 `src/index.jsx`를 생성하고 아래 코드를 입력해주세요.

```jsx
// src/index.jsx
import ReactDOM from 'react-dom';
import React from 'react';

import './style.scss';

ReactDOM.render(
  <>
    <h1>Hello, World!</h1>
    <p>React + Sass</p>
  </>,
  document.getElementById('root')
);
```

그 다음에 `src/style.scss`를 생성해주세요.

```sass
$hcolor: red;
$pcolor: blue;

h1 {
  color: $hcolor;
}
p {
  color: $pcolor;
}
```

## 🎮 node-sass 설치하기

이제 sass를 적용해줍시다! 아래 명령어를 입력해주세요.

```bash
$yarn add node-sass # npm install node-sass
```

이제 react 프로젝트를 실행시켜보세요!

## 🤔 오류 해결

위 코드를 그대로 실행시키면 `node-sass`에서 오류가 납니다.

```txt
./src/style.scss (./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/style.scss)
Node Sass version 6.0.1 is incompatible with ^4.0.0 || ^5.0.0.
```

위 에러는 `node-sass < 5.0`으로 재설치하면 해결 가능합니다. - [출처](https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0)

```bash
$yarn remove node-sass
$yarn add node-sass@4.14.1
```

> 결과

![image](https://user-images.githubusercontent.com/57896501/125187470-ca195280-e26a-11eb-8e9f-60926a23e351.png)

.. 원하는 결과가 나옵니다!
