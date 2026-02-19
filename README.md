# 개인 포트폴리오 웹사이트

Next.js 기반의 개인 포트폴리오 웹사이트입니다.

## 기술 스택

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5** (strict mode)
- **Tailwind CSS v4**
- **Radix UI** + **shadcn/ui**
- **dayjs** / **lucide-react** / **react-icons**

## 프로젝트 구조

```
src/
├── app/           # Next.js App Router 페이지 및 라우트별 컴포넌트
├── shared/        # 공통 코드: ui/, lib/utils.ts, model/
└── widgets/       # 레이아웃 컴포넌트 (Header, Footer)
```

## 페이지

| 경로 | 설명 |
|------|------|
| `/` | 홈 (경력 섹션 포함) |
| `/portfolio` | 포트폴리오 목록 |
| `/portfolio/[id]` | 포트폴리오 상세 |

## 개발 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 주요 명령어

```bash
npm run dev    # 개발 서버 실행
npm run build  # 프로덕션 빌드
npm start      # 프로덕션 서버 실행
npm run lint   # ESLint 검사
```
