# Commands

## npm scripts

```bash
npm run dev
npm run build
npm start
npm run lint
```

- 패키지 매니저는 `package-lock.json`에 맞춰 npm을 사용합니다.
- 의존성 설치는 `npm ci`, 의존성 변경은 `npm install`을 사용합니다.
- 현재 테스트 스크립트는 없습니다. 존재하지 않는 명령을 성공한 검증처럼 보고하지 않습니다.
- 코드 변경 뒤에는 최소한 `npm run lint`를 실행하고, 빌드에 영향을 주는 변경은 `npm run build`도 확인합니다.
- 저장소의 기본 줄 끝은 LF를 유지합니다. 대규모 줄 끝 변환을 만들지 않습니다.

