# Photo Viewer App

사진 조회 및 표시 기능을 제공하는 웹 애플리케이션입니다.터보레포를 활용한 모노레포 구조로 구현되었으며, UI 패키지, 웹 애플리케이션, 스토리북으로 구성되어 있습니다.

## 기술 스택

- **프레임워크**: Next.js (App Router)
- **언어**: TypeScript
- **스타일링**: TailwindCSS
- **상태 관리**: Zustand
- **API 통신**: TanStack Query (React Query), Axios
- **모노레포 관리**: Turborepo
- **패키지 매니저**: pnpm
- **UI 문서화**: Storybook
- **코드 품질**: ESLint, Prettier

## 구조

```
photo-viewer-app/
├── apps/
│   ├── web/                # 웹 애플리케이션 (Next.js)
│   └── storybook/          # 스토리북
├── packages/
│   └── ui/                 # 공유 UI 컴포넌트
└── turbo.json              # 터보레포 설정
```

## 기능

- 메인 페이지에서 사진 조회 버튼 클릭
- API 통신을 통한 사진 정보 조회
- 조회된 사진 정보 결과 페이지 표시
- 디바운스 적용된 API 호출
- 로딩 상태 애니메이션
- 스켈레톤 UI
- 조회 이력에 따른 자동 페이지 이동
- 사진 배경 적용
- 404 페이지

## 설치 및 실행

### 설치

```bash
# 저장소 클론
git clone https://github.com/FiveBirdSilver/seeun-openplan-fe.git
cd seeun-openplan-fe

# 의존성 설치
pnpm install
```

### 개발 환경 실행

```bash
# 모든 워크스페이스 실행
pnpm dev

# 개별 워크스페이스 실행
pnpm --filter web dev
pnpm --filter storybook dev
```

## 배포
- 웹 애플리케이션: Vercel을 통해 배포
- Storybook: Vercel 또는 Netlify를 통해 배포 가능
