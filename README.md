# 개인 포트폴리오 웹사이트

Next.js App Router 기반 개인 포트폴리오 웹사이트입니다.

## 기술 스택

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5** (strict mode)
- **Tailwind CSS v4**
- **Radix UI** + **shadcn/ui**
- **Supabase** (`@supabase/supabase-js`)
- **TanStack Query v5**
- **react-markdown**
- **dayjs**

## 프로젝트 구조

```text
src/
├── app/              # 라우트, 페이지, API route
├── shared/
│   ├── ui/           # 재사용 UI 컴포넌트
│   ├── lib/
│   │   ├── api/      # TanStack Query 훅 (career, portfolio)
│   │   ├── supabase/ # Supabase 클라이언트 (server/client)
│   │   └── utils/    # 공통 유틸리티
│   ├── constants/    # 상수 정의
│   └── model/        # 도메인 타입
└── widgets/          # 레이아웃 컴포넌트(Header, Footer)
public/
└── images/portfolio/ # 포트폴리오 정적 이미지
```

## 주요 페이지

| 경로 | 설명 |
|------|------|
| `/` | 홈 (경력 섹션 포함) |
| `/career` | 경력 목록 |
| `/career/[id]` | 경력 상세 |
| `/portfolio` | 포트폴리오 목록 |
| `/portfolio/[id]` | 포트폴리오 상세 |

## API 라우트

| 경로 | 설명 |
|------|------|
| `/api/career` | 경력 목록 조회 |
| `/api/career/[id]` | 경력 단건 조회 |
| `/api/portfolio` | 포트폴리오 목록 조회 |
| `/api/portfolio/[id]` | 포트폴리오 단건 조회 |
| `/api/cron/ping` | Supabase keepalive (Bearer 토큰 인증) |

## 사전 요구사항

- Node.js 20+
- npm 10+

## 로컬 실행

1. 의존성 설치

```bash
npm install
```

2. 환경변수 파일 생성

```bash
cp .env.example .env.local
```

3. `.env.local` 값 설정

| 변수명 | 설명 |
|---|---|
| `SUPABASE_URL` | Supabase 프로젝트 URL (서버 전용) |
| `SUPABASE_ANON_KEY` | Supabase anon(publishable) key (서버 전용) |
| `APP_BASE_URL` | 앱 기본 URL, 프로토콜 제외 (예: `localhost:3000`, `example.com`) |
| `CRON_SECRET` | `/api/cron/ping` 보호용 Bearer 토큰 |

4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 확인합니다.

## 스크립트

```bash
npm run dev    # 개발 서버
npm run build  # 프로덕션 빌드
npm start      # 프로덕션 서버
npm run lint   # ESLint
```

## Keepalive(선택)

`/api/cron/ping` 엔드포인트는 `Authorization: Bearer <CRON_SECRET>` 헤더를 검증한 뒤 Supabase 연결을 확인합니다.  
GitHub Actions(`.github/workflows/supabase-keepalive.yml`)에서 3일마다 호출하도록 구성되어 있습니다.

필요한 GitHub Secrets:

- `APP_BASE_URL`
- `CRON_SECRET`

## 참고

- 테스트 프레임워크는 아직 설정되어 있지 않습니다.
- 경로 alias는 `@/* -> src/*`를 사용합니다.
