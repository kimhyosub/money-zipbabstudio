/**
 * 사이트 전역 설정
 * 사이트명 / 색상 / 이메일 / 운영자명 등을 여기서 한 번에 수정하면
 * assets/js/main.js가 모든 페이지의 헤더/푸터/메타에 반영합니다.
 */
window.SITE_CONFIG = {
  siteName: "스마트머니 가이드",
  englishName: "SmartMoney Guide",
  tagline: "일상을 바꾸는 현명한 생활 금융 지식과 정부 지원 정보",
  description:
    "스마트머니 가이드는 정부 지원금, 청년 정책, 소상공인 지원, 생활 절약, 금융 기초까지 실속 있는 생활 금융 정보를 정리하는 정보 사이트입니다. 신청 자격, 절차, 유의사항을 알기 쉽게 안내합니다.",
  domain: "info.zipbabstudio.com",
  url: "https://info.zipbabstudio.com",
  mainColor: "#1E3A8A",
  subColor: "#10B981",
  ownerName: "머니연구원",
  ownerBio: "복잡한 지원 정책과 금융 정보를 누구나 이해하기 쉽게 정리하는 금융 정보 큐레이터입니다.",
  ownerLongBio:
    "정부 정책 공고와 금융 상품 약관처럼 복잡하고 딱딱한 정보를 실생활에 바로 적용할 수 있는 형태로 정리해 온 콘텐츠 큐레이터입니다. 혜택을 몰라서 놓치는 사람이 없도록, 신청 자격과 절차를 최대한 쉬운 말로 전달하는 것을 목표로 스마트머니 가이드를 운영하고 있습니다.",
  contactEmail: "hyosub19@naver.com",
  foundedYear: 2026,
  editorialPrinciples: [
    "확인되지 않은 정책 정보나 수치는 다루지 않습니다.",
    "신청 자격과 절차는 최대한 이해하기 쉬운 표현으로 정리합니다.",
    "정책은 개정되는 경우가 많으므로 발행 이후에도 주기적으로 점검합니다.",
    "특정 상품이나 기관을 홍보하지 않고 정보 제공 목적에 집중합니다."
  ],
  nav: [
    { label: "홈", href: "/" },
    { label: "카테고리", href: "/categories/" },
    { label: "칼럼", href: "/columns/" },
    { label: "소개", href: "/about/" },
    { label: "문의", href: "/contact/" }
  ],
  footerLinks: [
    { label: "개인정보처리방침", href: "/privacy/" },
    { label: "이용약관", href: "/terms/" },
    { label: "면책고지", href: "/disclaimer/" },
    { label: "사이트맵", href: "/sitemap/" },
    { label: "운영자 소개", href: "/author/" }
  ]
};
