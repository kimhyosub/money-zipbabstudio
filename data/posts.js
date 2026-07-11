/**
 * 글(포스트) 메타데이터
 * 홈/카테고리/사이트맵 목록에 쓰이는 요약 정보입니다.
 * 실제 본문은 posts/<slug>/index.html에 직접 작성되어 있으며,
 * 본문을 수정할 때는 이 파일의 summary/updatedAt도 함께 맞춰주는 것을 권장합니다.
 */
window.POSTS = [
  {
    slug: "bogeumjari24-hidden-benefits",
    title: "정부24·보조금24 활용법: 내가 놓친 숨은 지원금 3분 만에 찾는 방법",
    summary:
      "정부24와 보조금24를 함께 쓰면 나에게 맞는 지원금을 훨씬 빠르게 찾을 수 있습니다. 조회부터 신청까지 기본 흐름을 정리했습니다.",
    category: "gov-subsidy",
    publishedAt: "2026-01-12",
    updatedAt: "2026-01-12",
    featured: true,
    hasFaq: true,
    related: ["earned-income-tax-credit-basic", "employment-support-type1-type2"]
  },
  {
    slug: "earned-income-tax-credit-basic",
    title: "근로장려금 신청 자격 요건과 지급액 산정 기준 기초 가이드",
    summary:
      "근로장려금은 소득과 재산 요건을 동시에 충족해야 받을 수 있습니다. 신청 자격과 대략적인 지급액 산정 기준을 정리했습니다.",
    category: "gov-subsidy",
    publishedAt: "2026-01-20",
    updatedAt: "2026-04-15",
    featured: false,
    hasFaq: false,
    related: ["bogeumjari24-hidden-benefits", "employment-support-type1-type2"]
  },
  {
    slug: "employment-support-type1-type2",
    title: "국민취업지원제도 1유형 2유형 차이점과 구직촉진수당 가이드",
    summary:
      "국민취업지원제도는 유형에 따라 지원 내용과 자격 요건이 다릅니다. 1유형과 2유형의 차이와 구직촉진수당 조건을 정리했습니다.",
    category: "gov-subsidy",
    publishedAt: "2026-02-03",
    updatedAt: "2026-02-03",
    featured: true,
    hasFaq: true,
    related: ["earned-income-tax-credit-basic", "job-stability-fund-insurance"]
  },
  {
    slug: "youth-hope-account-tips",
    title: "청년도약계좌 조건 및 만기 수령액 극대화하는 납입 팁",
    summary:
      "청년도약계좌는 납입 방식에 따라 만기 수령액 차이가 꽤 커집니다. 가입 조건과 납입 전략의 기본기를 정리했습니다.",
    category: "youth-policy",
    publishedAt: "2026-02-17",
    updatedAt: "2026-06-20",
    featured: true,
    hasFaq: true,
    related: ["youth-housing-dream-account", "credit-score-social-newbie"]
  },
  {
    slug: "youth-housing-dream-account",
    title: "청년 주택드림 청약통장 전환 방법과 대출 연계 혜택 요약",
    summary:
      "기존 청약통장을 청년 주택드림 청약통장으로 전환하면 대출 연계 혜택을 받을 수 있습니다. 전환 절차와 조건을 정리했습니다.",
    category: "youth-policy",
    publishedAt: "2026-02-25",
    updatedAt: "2026-02-25",
    featured: false,
    hasFaq: false,
    related: ["youth-hope-account-tips", "youth-rent-support-checklist"]
  },
  {
    slug: "youth-rent-support-checklist",
    title: "청년월세 특별지원 신청 서류 및 거주 요건 체크리스트",
    summary:
      "청년월세 특별지원은 거주 요건과 서류 준비가 까다로운 편입니다. 신청 전에 확인해야 할 체크리스트를 정리했습니다.",
    category: "youth-policy",
    publishedAt: "2026-03-05",
    updatedAt: "2026-05-18",
    featured: true,
    hasFaq: true,
    related: ["youth-hope-account-tips", "account-splitting-budget-system"]
  },
  {
    slug: "small-biz-loss-compensation-faq",
    title: "소상공인 손실보전금 및 경영안정자금 확인 시 자주 묻는 질문",
    summary:
      "손실보전금과 경영안정자금은 명칭이 비슷해 헷갈리는 경우가 많습니다. 자주 묻는 질문을 중심으로 차이를 정리했습니다.",
    category: "small-biz",
    publishedAt: "2026-03-14",
    updatedAt: "2026-03-14",
    featured: false,
    hasFaq: true,
    related: ["yellow-umbrella-deposit-guide", "job-stability-fund-insurance"]
  },
  {
    slug: "yellow-umbrella-deposit-guide",
    title: "노란우산공제 가입 혜택과 중도 해지 시 주의사항 정리",
    summary:
      "노란우산공제는 세제 혜택이 크지만 중도 해지 시 불이익도 있습니다. 가입 전에 알아두면 좋은 내용을 정리했습니다.",
    category: "small-biz",
    publishedAt: "2026-03-22",
    updatedAt: "2026-03-22",
    featured: false,
    hasFaq: false,
    related: ["small-biz-loss-compensation-faq", "deposit-savings-interest-diff"]
  },
  {
    slug: "job-stability-fund-insurance",
    title: "영세 자영업자를 위한 일자리 안정자금 및 고용보험료 지원 신청법",
    summary:
      "직원을 둔 영세 자영업자라면 일자리 안정자금과 고용보험료 지원을 함께 확인하는 것이 좋습니다. 신청 조건과 절차를 정리했습니다.",
    category: "small-biz",
    publishedAt: "2026-04-02",
    updatedAt: "2026-06-10",
    featured: true,
    hasFaq: false,
    related: ["small-biz-loss-compensation-faq", "yellow-umbrella-deposit-guide"]
  },
  {
    slug: "alddle-transport-card-plus",
    title: "알뜰교통카드 플러스 카드사별 혜택 비교 및 마일리지 적립법",
    summary:
      "알뜰교통카드 플러스는 이동 거리에 따라 마일리지가 적립되는 구조입니다. 카드사별 혜택 차이와 적립 요령을 정리했습니다.",
    category: "living-saving",
    publishedAt: "2026-04-11",
    updatedAt: "2026-04-11",
    featured: false,
    hasFaq: false,
    related: ["energy-cashback-electricity-saving", "mvno-plan-saving-tips"]
  },
  {
    slug: "energy-cashback-electricity-saving",
    title: "정부 주도 에너지캐시백 신청으로 전기요금 아끼는 실천 요령",
    summary:
      "에너지캐시백은 전년 대비 절감률에 따라 캐시백을 받는 제도입니다. 신청 방법과 절감률을 높이는 실천 요령을 정리했습니다.",
    category: "living-saving",
    publishedAt: "2026-04-19",
    updatedAt: "2026-07-01",
    featured: true,
    hasFaq: true,
    related: ["alddle-transport-card-plus", "mvno-plan-saving-tips"]
  },
  {
    slug: "mvno-plan-saving-tips",
    title: "통신비 세이빙: 알뜰폰 요금제 가입 시 꼭 확인해야 할 3가지",
    summary:
      "알뜰폰은 통신비를 크게 줄일 수 있지만 확인하지 않으면 오히려 불편할 수 있습니다. 가입 전 꼭 확인할 3가지를 정리했습니다.",
    category: "living-saving",
    publishedAt: "2026-04-28",
    updatedAt: "2026-04-28",
    featured: false,
    hasFaq: false,
    related: ["alddle-transport-card-plus", "energy-cashback-electricity-saving"]
  },
  {
    slug: "deposit-savings-interest-diff",
    title: "정기예금과 정기적금의 이자 계산 방식 차이점 및 유리한 선택법",
    summary:
      "정기예금과 정기적금은 이자 계산 방식이 근본적으로 다릅니다. 같은 금리라도 실수령 이자가 달라지는 이유를 정리했습니다.",
    category: "finance-basics",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-09",
    featured: false,
    hasFaq: true,
    related: ["account-splitting-budget-system", "credit-score-social-newbie"]
  },
  {
    slug: "credit-score-social-newbie",
    title: "신용점수 올리는 법: 사회초년생이 체크해야 할 신용 관리 습관",
    summary:
      "신용점수는 특별한 이벤트보다 꾸준한 습관에서 갈립니다. 사회초년생이 놓치기 쉬운 신용 관리 습관을 정리했습니다.",
    category: "finance-basics",
    publishedAt: "2026-05-20",
    updatedAt: "2026-07-03",
    featured: true,
    hasFaq: false,
    related: ["youth-hope-account-tips", "account-splitting-budget-system"]
  },
  {
    slug: "account-splitting-budget-system",
    title: "통장 쪼개기 개념과 고정지출 변동지출 관리하는 시스템 구축법",
    summary:
      "통장을 용도별로 나누면 고정지출과 변동지출을 관리하기가 훨씬 수월해집니다. 기본 개념과 시스템을 만드는 순서를 정리했습니다.",
    category: "finance-basics",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-08",
    featured: false,
    hasFaq: false,
    related: ["deposit-savings-interest-diff", "credit-score-social-newbie"]
  },
  {
    slug: "basic-livelihood-income-standard",
    title: "기초생활수급자 생계급여 신청 자격과 소득인정액 기본 개념",
    summary:
      "생계급여는 소득만이 아니라 재산까지 합산한 소득인정액을 기준으로 판단합니다. 소득인정액이 무엇인지와 기본 산정 구조를 정리했습니다.",
    category: "gov-subsidy",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    featured: false,
    hasFaq: true,
    related: ["earned-income-tax-credit-basic", "bogeumjari24-hidden-benefits"]
  },
  {
    slug: "youth-naeil-savings-account-guide",
    title: "청년내일저축계좌 가입 조건과 3년 만기 구조",
    summary:
      "청년내일저축계좌는 근로소득 요건을 충족하면 정부 매칭 지원금을 받을 수 있는 자산 형성 상품입니다. 가입 조건과 3년 만기까지의 구조를 정리했습니다.",
    category: "youth-policy",
    publishedAt: "2026-07-06",
    updatedAt: "2026-07-06",
    featured: false,
    hasFaq: true,
    related: ["youth-hope-account-tips", "youth-rent-support-checklist"]
  },
  {
    slug: "small-biz-policy-fund-loan-guide",
    title: "소상공인 정책자금 융자 신청 절차와 준비 서류",
    summary:
      "소상공인 정책자금 융자는 준비 서류와 신청 순서를 미리 알아두면 진행이 훨씬 수월합니다. 신청 절차와 챙겨야 할 서류를 정리했습니다.",
    category: "small-biz",
    publishedAt: "2026-07-07",
    updatedAt: "2026-07-07",
    featured: false,
    hasFaq: true,
    related: ["small-biz-loss-compensation-faq", "yellow-umbrella-deposit-guide"]
  },
  {
    slug: "car-mileage-tax-discount",
    title: "승용차 마일리지 제도로 자동차세 아끼는 법",
    summary:
      "승용차 마일리지 제도는 연간 주행거리가 적을수록 자동차세를 감면받는 제도입니다. 등록 방법과 감면율을 확인하는 요령을 정리했습니다.",
    category: "living-saving",
    publishedAt: "2026-07-07",
    updatedAt: "2026-07-07",
    featured: false,
    hasFaq: true,
    related: ["alddle-transport-card-plus", "energy-cashback-electricity-saving"]
  },
  {
    slug: "housing-subscription-interest-timing",
    title: "청약통장 이자, 언제부터 받을 수 있는지 기본 개념",
    summary:
      "청약통장은 예금·적금처럼 이자가 자동으로 지급되지 않고 정해진 시점에만 정산됩니다. 이자가 쌓이는 구조와 가입 기간별 적용 방식을 정리했습니다.",
    category: "finance-basics",
    publishedAt: "2026-07-07",
    updatedAt: "2026-07-07",
    featured: false,
    hasFaq: true,
    related: ["deposit-savings-interest-diff", "youth-housing-dream-account"]
  },
  {
    slug: "earned-income-credit-filing-timing-diff",
    title: "근로장려금 반기 신청과 정기 신청의 차이",
    summary:
      "근로장려금은 신청 시기에 따라 반기 신청과 정기 신청 중 하나를 고를 수 있습니다. 두 방식의 구조와 신청 시기별 장단점을 정리했습니다.",
    category: "gov-subsidy",
    publishedAt: "2026-07-07",
    updatedAt: "2026-07-07",
    featured: false,
    hasFaq: true,
    related: ["earned-income-tax-credit-basic", "employment-support-type1-type2"]
  },
  {
    slug: "youth-jeonse-loan-types-comparison",
    title: "청년 전세자금대출 종류별 한도 비교",
    summary:
      "청년을 위한 전세자금대출은 버팀목전세자금대출과 중소기업취업청년 전월세보증금대출 등 상품별로 조건과 한도 산정 방식이 다릅니다. 상품별 차이를 정리했습니다.",
    category: "youth-policy",
    publishedAt: "2026-07-08",
    updatedAt: "2026-07-08",
    featured: false,
    hasFaq: true,
    related: ["youth-housing-dream-account", "youth-rent-support-checklist"]
  },
  {
    slug: "credit-guarantee-foundation-basic-process",
    title: "신용보증재단 보증서 발급받는 기본 절차",
    summary:
      "신용보증재단 보증서는 담보나 신용이 부족한 소상공인이 대출을 받을 때 심사를 보완해주는 장치입니다. 보증서 발급까지의 기본 절차와 확인할 점을 정리했습니다.",
    category: "small-biz",
    publishedAt: "2026-07-09",
    updatedAt: "2026-07-09",
    featured: false,
    hasFaq: true,
    related: ["small-biz-policy-fund-loan-guide", "job-stability-fund-insurance"]
  },
  {
    slug: "happy-card-voucher-guide",
    title: "국민행복카드로 받는 지원금 종류와 사용처 확인하는 법",
    summary:
      "국민행복카드는 임신·출산·양육과 관련된 여러 정부 바우처를 한 장의 카드로 사용할 수 있게 해줍니다. 카드에 담기는 지원금 종류와 사용처를 확인하는 방법을 정리했습니다.",
    category: "living-saving",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-10",
    featured: false,
    hasFaq: true,
    related: ["bogeumjari24-hidden-benefits", "energy-cashback-electricity-saving"]
  },
  {
    slug: "isa-account-tax-exemption-basics",
    title: "ISA 계좌 비과세 한도와 기본 구조 이해하기",
    summary:
      "ISA 계좌는 유형에 따라 비과세 한도와 분리과세 방식이 달라집니다. 일반형·서민형 구분과 비과세·분리과세 구조의 기본 개념을 정리했습니다.",
    category: "finance-basics",
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-10",
    featured: false,
    hasFaq: true,
    related: ["deposit-savings-interest-diff", "credit-score-social-newbie"]
  },
  {
    slug: "overdraft-vs-credit-loan-interest-diff",
    title: "마이너스통장과 신용대출의 차이, 이자 계산 방식",
    summary:
      "마이너스통장과 신용대출은 둘 다 신용을 기반으로 한 대출이지만 이자가 붙는 방식이 근본적으로 다릅니다. 두 상품의 이자 계산 구조 차이를 정리했습니다.",
    category: "finance-basics",
    publishedAt: "2026-07-11",
    updatedAt: "2026-07-11",
    featured: false,
    hasFaq: true,
    related: ["deposit-savings-interest-diff", "credit-score-social-newbie"]
  },
  {
    slug: "culture-nuri-card-guide",
    title: "문화누리카드 신청 대상과 사용처 확인법",
    summary:
      "문화누리카드는 기초생활수급자와 차상위계층에게 문화·여행·체육 활동비를 지원하는 제도입니다. 발급 대상과 신청 방법, 가맹점 확인 요령을 정리했습니다.",
    category: "gov-subsidy",
    publishedAt: "2026-07-11",
    updatedAt: "2026-07-11",
    featured: false,
    hasFaq: true,
    related: ["bogeumjari24-hidden-benefits", "happy-card-voucher-guide"]
  }
];
