# Next.js Custom Template

Next.js + TypeScript + Tailwind CSS + ESLint + Prettier + Husky + lint-staged 가 세팅된 커스텀 템플릿입니다.

## 포함된 스택

| 항목 | 버전 |
|------|------|
| Next.js | 16.2.3 |
| React | 19.2.4 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| ESLint | ^9 |
| Prettier | ^3 |
| Husky | ^9 |
| lint-staged | ^16 |

## 사용 방법

### A. CNA 방식
```bash
npx create-next-app@latest my-app -e <this gitHub>
cd my-app
npx husky init // husky 세팅(git init 이슈 해결)
```

### B. 최신 버전으로 초기화

의존성을 모두 최신 버전으로 올리고 싶을 때:

```bash
npx npm-check-updates -u
npm install
npm run dev
```

- `npx npm-check-updates -u` — `package.json`의 모든 버전을 최신으로 업데이트
- `npm install` — 업데이트된 버전으로 재설치

> `npm update`는 `package.json`에 명시된 semver 범위(`^`, `~`) 안에서만 올라가므로 메이저 버전 업그레이드가 안 됩니다. `npm-check-updates`를 사용해야 메이저 버전까지 전부 올라갑니다.

### 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000` 에서 확인하세요.

## 스크립트

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 실행
```

## 코드 품질 도구

### Husky + lint-staged

`git commit` 시 자동으로 아래 작업이 실행됩니다:

- `*.{js,jsx,ts,tsx}` — ESLint 자동 수정 + Prettier 포맷팅
- `*.{json,css,md}` — Prettier 포맷팅

관련 파일:

- `.husky/pre-commit` — pre-commit 훅
- `package.json` → `lint-staged` 필드 — 대상 파일별 실행 명령

### Prettier

`prettier-plugin-tailwindcss`가 포함되어 있어 Tailwind 클래스 자동 정렬이 적용됩니다.

## 프로젝트 구조

```
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 홈 페이지
│   └── globals.css     # 전역 스타일
├── .husky/
│   └── pre-commit      # git commit 훅
├── eslint.config.mjs   # ESLint 설정
├── postcss.config.mjs  # PostCSS 설정
└── tsconfig.json       # TypeScript 설정
```
