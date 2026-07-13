# 스마트머니 가이드 (info.zipbabstudio.com) — 프로젝트 명세

## 프로젝트 개요

- **사이트명**: 스마트머니 가이드 (SmartMoney Guide)
- **한줄 소개**: 일상을 바꾸는 현명한 생활 금융 지식과 정부 지원 정보
- **주제**: 정부 지원금, 청년 정책, 소상공인 지원, 생활 절약, 금융 기초
- **타깃 독자**: 실속 있는 정부 혜택을 놓치고 싶지 않은 청년, 직장인, 주부, 소상공인
- **톤앤매너**: 신뢰감 있고 친절하며 과장 없는 정보형 문체
- **메인 컬러**: `#1E3A8A` (네이비)
- **서브 컬러(포인트)**: `#10B981` (에메랄드 그린)
- **운영자명(필명)**: 머니연구원
- **운영자 소개**: 복잡한 지원 정책과 금융 정보를 누구나 이해하기 쉽게 정리하는 금융 정보 큐레이터
- **연락 이메일**: hyosub19@naver.com (사이트 내 유일한 연락 수단)
- **기본 도메인 표기**: info.zipbabstudio.com
- **GitHub 저장소**: kimhyosub/money-zipbabstudio (main 브랜치 push 시 GitHub Actions가 자동으로 배포)

## 절대 지켜야 할 원칙

- YMYL 중에서도 위험한 영역(전문 의료 상담, 투자 리딩, 대출 알선, 법률 대리) 금지 — 누구나 접근 가능한 "생활 금융 팁 + 정부 지원금 신청 가이드"로 한정
- 확인되지 않은 정책 수치(지급액, 소득 기준 금액, 금리 등)를 구체적으로 단정하지 않는다. 대신 "정확한 금액/기준은 정부24·홈택스·고용센터 등 공식 채널에서 확인" 형태로 안내한다
- 가짜 후기·가짜 수치·가짜 자격·허위 경험담·키워드 스팸 금지
- lorem ipsum 등 더미 텍스트 금지 — 전부 자연스러운 한국어 실문장
- 과장/낚시 표현("완벽 정리", "무조건", "100%", "충격" 등) 금지
- 특정 금융 상품·기관을 홍보하거나 대신 신청을 알선하지 않는다
- 허위 회사 주소·전화번호 금지, 연락은 이메일만
- Google AdSense 스크립트(아래 참고)는 모든 페이지 `<head>`에 반드시 포함한다. 그 외의 임의 광고 코드·제3자 스크립트는 삽입하지 않는다
- 관리자 모드는 실제 보안 인증이 아님을 명확히 고지 (localStorage 기반 데모)
- 정책은 자주 개정되므로 "최신 정보는 공식 채널 확인 필요"라는 문구를 본문에 자연스럽게 포함

## 폴더 구조

```
/
  index.html
  about/index.html
  author/index.html
  contact/index.html
  categories/index.html
  categories/<slug>/index.html   (카테고리별 상세, 5개)
  posts/<slug>/index.html        (글 상세)
  columns/index.html
  columns/<slug>/index.html      (칼럼 상세)
  admin/index.html
  privacy/index.html
  terms/index.html
  disclaimer/index.html
  sitemap/index.html
  404.html
  robots.txt
  sitemap.xml
  rss.xml
  assets/
    css/style.css
    js/main.js
    js/auth.js
    js/admin.js
    icons/favicon.svg
  data/
    site.config.js
    categories.js
    posts.js
    columns.js
  automation/
    topic-queue.json   (자동 발행 파이프라인용 주제 큐)
    weekly-log.json     (주간 발행 이력, 매주 초기화)
```

## 카테고리 (5개)

1. `gov-subsidy` — 정부 지원금
2. `youth-policy` — 청년 정책
3. `small-biz` — 소상공인 지원
4. `living-saving` — 생활 절약
5. `finance-basics` — 금융 기초

## Google AdSense 스크립트 (모든 페이지 필수)

모든 HTML 페이지의 `<head>`에는 favicon 링크(`<link rel="icon" ...>`) 바로 다음 줄에 아래 스크립트가 반드시 포함되어야 한다. 새 글/칼럼/카테고리 페이지를 생성할 때도 빠뜨리지 않는다.

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8436574422662926"
     crossorigin="anonymous"></script>
```

## 글/칼럼 구성 요소 (기존 글 패턴 그대로 따를 것)

- 글: 제목, 요약, 작성자(스마트머니 가이드 편집팀), 발행일/수정일, 목차(toc), 본문(문제 제기→핵심 설명→실제 팁→주의사항→정리 순서의 h2), summary-box, mistake-box, checklist-box, 필요시 faq-box(+FAQPage JSON-LD), disclaimer-note, editor-box(운영자 머니연구원 소개), related-posts
- 칼럼: badge-column 배지, 글쓴이 머니연구원(Person JSON-LD), 목차 없이 자연스러운 관찰형 문단 2~3개 h2, disclaimer-note, editor-box, related-posts
- 모든 HTML은 기존 `posts/*/index.html`, `columns/*/index.html` 중 하나를 열어 구조를 그대로 재사용할 것 (head 메타, JSON-LD, class 구조 등)

## 자동 발행 파이프라인

`automation/topic-queue.json`에 카테고리별/칼럼별 사전 검증된 주제 큐가 있고, 예약 작업이 주기적으로 pending 항목을 하나씩 꺼내 글/칼럼을 작성·배포한다. 발행 후 `automation/weekly-log.json`에 이력을 남기고, 주간 요약 작업이 이를 정리해 보고한 뒤 초기화한다. 세부 규칙은 각 예약 작업(스케줄된 태스크)의 프롬프트에 명시되어 있다.

## 수정 위치 안내

- 사이트명/색상/이메일/운영자명: `data/site.config.js`
- 카테고리: `data/categories.js`
- 일반 글: `data/posts.js`
- 칼럼: `data/columns.js`
- 관리자 기본 문구: `assets/js/admin.js` 상단 상수 + `admin/index.html`
