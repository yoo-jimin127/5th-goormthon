## 구름톤 GDS 예제

구름톤 GDS 실습을 위한 예제입니다.

### 준비

#### npmrc 세팅

1. [github personal access tokens](https://github.com/settings/tokens) 진입
1. read package 권한 획득한 토큰 생성
1. npmrc 편집

```shell
# vim으로 npmrc 열기
vim ~/.npmrc
#`:` 명령행 모드 켜기
#`i` insert 모드로 전환
@goorm-dev:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=[권한 획득한 github 토큰]
```

### 실행방법

```
$ npm start
```
