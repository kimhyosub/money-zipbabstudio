# 스마트머니 가이드 (SmartMoney Guide)

일상을 바꾸는 현명한 생활 금융 지식과 정부 지원 정보를 정리하는 브랜드형 정보 사이트입니다. 프레임워크 없이 순수 HTML/CSS/JS로 만들어졌으며, 정적 파일만으로 바로 실행할 수 있습니다.

## 실행 방법

별도의 빌드 도구가 필요 없습니다. 아래 중 편한 방법으로 로컬에서 열어보면 됩니다.

- VS Code의 Live Server 확장 등으로 `index.html`을 열기
- 또는 이 폴더에서 `npx serve .` 같은 간단한 정적 서버 실행
- Replit에서 사용한다면 정적 사이트(Static Site) 템플릿으로 이 폴더를 그대로 업로드

모든 페이지는 절대경로(`/assets/...`, `/data/...`)를 기준으로 리소스를 불러오므로, 반드시 이 폴더의 루트를 웹 서버의 루트로 두고 실행해야 합니다.

## 폴더 구조

```
/
  index.html                  홈
  about/index.html            사이트 소개
  author/index.html           운영자 소개 + 칼럼 허브 (관리자 세션 감지)
  contact/index.html          문의하기
  categories/index.html       카테고리 목록
  categories/<slug>/index.html   카테고리별 상세 (5개)
  posts/<slug>/index.html     글 상세 (15개)
  columns/index.html          칼럼 목록
  columns/<slug>/index.html   칼럼 상세 (3개)
  admin/index.html            관리자 모드 (CMS-lite 데모)
  privacy/ terms/ disclaimer/ index.html   신뢰 페이지
  sitemap/index.html          HTML 사이트맵
  404.html
  robots.txt
  sitemap.xml
  assets/
    css/style.css
    js/main.js     공통 헤더/푸터/카드 렌더링
    js/auth.js     관리자 세션 감지 (localStorage 데모)
    js/admin.js    관리자 모드 전용 로직
    icons/favicon.svg
  data/
    site.config.js   사이트명/색상/이메일/운영자명 등 전역 설정
    categories.js    카테고리 5개 메타데이터
    posts.js         글 15개 메타데이터
    columns.js       칼럼 3개 메타데이터
```

## 자주 수정하게 될 위치

| 수정하고 싶은 것 | 파일 |
| --- | --- |
| 사이트명, 한줄 소개, 운영자명, 이메일, 메인/서브 컬러 | `data/site.config.js` |
| 카테고리 이름·설명 | `data/categories.js` (+ `categories/<slug>/index.html`의 텍스트) |
| 글 목록에 노출되는 요약 정보 | `data/posts.js` |
| 칼럼 목록에 노출되는 요약 정보 | `data/columns.js` |
| 실제 글 본문 | `posts/<slug>/index.html` |
| 실제 칼럼 본문 | `columns/<slug>/index.html` |
| 관리자 모드 기본 문구 | `assets/js/admin.js` 상단 및 `admin/index.html` |
| 색상(브랜드 컬러) | `assets/css/style.css`의 `:root` 변수(`--color-main`, `--color-accent` 등) |

`data/*.js`의 메타데이터와 실제 HTML 페이지 본문은 서로 분리되어 있습니다. 글 하나를 수정한다면 `posts/<slug>/index.html`의 본문을 고치고, 목록/홈에 보이는 요약과 수정일도 `data/posts.js`에서 함께 맞춰주는 것을 권장합니다.

## 운영자명 클릭 흐름

사이트 전반(footer, 홈 운영자 박스, 글 하단 편집자 박스, 운영자 소개 페이지 등)에서 운영자명 "김효섭"은 `/author/`로 연결되는 링크입니다.

- 일반 방문자: `/author/`에서 운영자 소개와 칼럼 목록을 보여줍니다.
- 관리자 세션이 있는 경우(`localStorage.getItem('smg_admin_session') === '1'`): 같은 페이지에 "새 칼럼 작성하기" 버튼이 추가로 노출되며, 클릭 시 `/admin/#columns/new`로 이동합니다.

## 관리자 모드(CMS-lite 데모)에 대한 중요한 안내

`/admin/`은 워드프레스 관리자 화면을 참고해 만든 **CMS-lite 데모**입니다. 실제 서비스에 사용하기 전에 아래 내용을 꼭 이해해 주세요.

- 로그인은 데모용입니다. 비밀번호 입력란에 무엇을 입력하든(또는 데모 로그인 버튼을 누르든) 로그인 처리가 되며, 실제 서버 인증이 아닙니다.
- 로그인 상태와 글/칼럼/카테고리/설정 데이터는 **이 브라우저의 localStorage**에만 저장됩니다. 데이터베이스가 없으므로 기기나 브라우저를 바꾸면 데이터가 유지되지 않습니다.
- 관리자 모드에서 글이나 칼럼을 "저장"해도 실제 배포된 `posts/`, `columns/` 폴더의 HTML 파일에는 반영되지 않습니다. 실제 사이트에 반영하려면 사이트 설정 화면의 JSON export 기능으로 데이터를 내려받은 뒤, 그 내용을 참고해 `data/*.js`와 해당 HTML 파일을 직접 수정해야 합니다.
- 추후 실제 서비스로 확장한다면 Supabase나 Firebase로 데이터베이스와 인증을 연동하거나, Decap CMS 같은 Git 기반 CMS로 전환하는 방향을 고려할 수 있습니다.

## 정책 주제 콘텐츠에 대한 안내

이 사이트는 정부 지원금, 청년 정책, 소상공인 지원, 생활 절약, 금융 기초 정보를 다루는 정보 제공 목적의 사이트입니다. 정책은 예고 없이 개정될 수 있으므로, 실제 신청 전에는 반드시 정부24·보조금24 등 공식 채널이나 담당 기관을 통해 최신 공고를 확인해야 합니다. 자세한 내용은 사이트 내 [면책고지](/disclaimer/) 페이지를 참고해 주세요.
