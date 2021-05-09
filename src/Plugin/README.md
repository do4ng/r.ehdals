# @r.ehdals/plugin

## 새로운 플러그인 제작
1. 먼저 `Plugin`폴더안에 원하는 이름의 폴더와 js파일을 생성합니다.  
2. 제작한 파일에 `template/app.js`의 내용을 복사/붙여넣기합니다.
3. 다음으로 `__name__` 변수를 수정합니다.
4. `core/app.js`에서 제작한 파일을 임포트한 뒤, `PluginMain`함수에 제작한 파일을 실행하는 코드를 적어주세요.

## 주의
플러그인 제목 앞에 "plugin-"을 붙여주세요. (충돌 위험이 있습니다.)  
예) test -> plugin-test

## 예시
예시로 `console`라는 플러그인을 제작해두었습니다.  

## Api
**ConsoleApi** : 콘솔 API입니다.  
개발자 모드에서 특정 플러그인을 더 쉽게 구분할 수 있게 도와줍니다.  
[ConsoleApi](./core/api/console.js)