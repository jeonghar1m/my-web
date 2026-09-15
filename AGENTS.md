# AGENTS.md

이 저장소에서 작업하는 AI 에이전트를 위한 프로젝트 가이드입니다. 세부 규칙은 `.ai/rules/` 아래 문서를 작업 성격에 맞게 참조합니다.

## 적용 원칙

- 규칙은 신규 코드와 현재 수정하는 코드에 우선 적용합니다.
- 기존 코드의 규칙 위반은 현재 작업 범위에 포함되는 작은 수정만 함께 처리합니다.
- 대규모 정리는 기능 변경과 분리한 리팩터링 작업으로 진행합니다.
- 규칙과 실제 코드가 충돌하면 실제 동작과 최신 프로젝트 구성을 먼저 확인하고 규칙 문서를 함께 갱신합니다.

## Communication

- 계획과 설명은 한국어를 우선 사용합니다.
- 경로 약어를 임의로 만들지 않고 전체 경로를 사용합니다.

## Project Overview

- Next.js 16 App Router, React 19, TypeScript 5 strict mode
- Tailwind CSS 4, Radix UI, shadcn/ui
- TanStack React Query 5, Supabase
- Vercel Analytics, Speed Insights, Blob, Flags
- 경로 별칭 `@/*`는 `src/*`에 매핑

## 작업별 규칙

| 작업 | 참조 파일 |
| --- | --- |
| 실행·빌드·검증 명령 | `.ai/rules/commands.md` |
| App Router·컴포넌트 경계·프로젝트 구조 | `.ai/rules/architecture.md` |
| React Query·서버 데이터 패칭 | `.ai/rules/data-fetching.md` |
| 파일·식별자 명명 | `.ai/rules/directory/naming.md` |
| 공유·피처 디렉터리와 colocation | `.ai/rules/directory/structure.md` |
| `_context`·`_constants`·임시 mock | `.ai/rules/directory/patterns.md` |
| barrel export | `.ai/rules/export/barrel-export.md` |
| 컴포넌트 export | `.ai/rules/export/component-export.md` |
| 훅·유틸 배치 | `.ai/rules/export/hooks-utils-pattern.md` |
| TypeScript 코딩 패턴 | `.ai/rules/typescript/patterns.md` |
| TypeScript 타입 선언 | `.ai/rules/typescript/types.md` |
| API/DB 타입과 화면 모델 | `.ai/rules/domain-model.md` |
| Link와 프로그래매틱 이동 | `.ai/rules/navigation.md` |
| 리팩터링·공통화 | `.ai/rules/refactoring.md` |
| 시멘틱 HTML·접근성 | `.ai/rules/semantic-html.md` |
| Tailwind CSS 4 | `.ai/rules/tailwind.md` |
| 테스트 도입·작성 | `.ai/rules/testing.md` |
| 커밋·PR·보안 | `.ai/rules/workflow.md` |

## Git Commit Author

- Name: `Jeong Harim`
- Email: `me@jeongharim.dev`
- 로컬 커밋에서는 author와 committer를 모두 위 값으로 지정합니다.

