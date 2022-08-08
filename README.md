# DODAMDODAM Web Component Library

# 설치 방법

1. npm registry 설정

```
npm config set registry=https://npm.pkg.github.com/Team-B1ND
```

2. npm authToken 설정

- 깃허브 mdev_team 계정 접속 -> settings -> developer settings -> personal access token -> 도담 컴포넌트 라이브러리 token 발급 후 복사

```
npm config set //npm.pkg.github.com/:_authToken=발급받은토큰
npm config set //registry.npmjs.org/:_authToken=발급받은토큰
```

3. 라이브러리 설치

```
npm i --legacy-peer-deps @team-b1nd/dodamdodam_web_component_library
```
