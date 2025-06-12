const quizData = {
  categories: ["저축", "투자", "대출", "보험"],
  quizzes: [
    // 저축 카테고리
    {
      id: 1,
      category: "저축",
      difficulty: "쉬움",
      question: "💬 친구 민수: \"매달 월급을 받으면 다 써버려... 나 어떻게 하지?\"\n👉 어떤 금융상품을 추천할까?",
      choices: ["적금", "정기예금", "펀드", "대출"],
      correct: "적금"
    },
    {
      id: 2,
      category: "저축",
      difficulty: "보통",
      question: "🧠 수빈이: \"이자 계산할 때 유리한 방식이 있다던데...?\"\n👉 당신의 설명은?",
      choices: ["복리", "단리", "변동금리", "고정금리"],
      correct: "복리"
    },
    {
      id: 3,
      category: "저축",
      difficulty: "어려움",
      question: "😰 민재: \"급할 때 꺼내쓸 돈을 어디에 넣어야 할까?\"\n👉 가장 적합한 금융상품은?",
      choices: ["수시입출금 통장", "정기예금", "펀드", "채권"],
      correct: "수시입출금 통장"
    },
    {
      id: 4,
      category: "저축",
      difficulty: "쉬움",
      question: "📦 한솔: \"예금도 하고, 필요하면 대출도 받을 수 있는 통장이 있대! 그게 뭐였더라?\"",
      choices: ["마이너스 통장", "적립식 펀드", "통장 정기예금", "정기 적금"],
      correct: "마이너스 통장"
    },
    {
      id: 5,
      category: "저축",
      difficulty: "보통",
      question: "💡 연우: \"세금을 줄이면서 저축할 수 있는 방법이 있다던데?\"\n👉 어떤 절세형 상품일까?",
      choices: ["소득세", "부가가치세", "취득세", "재산세"],
      correct: "소득세"
    },

    // 투자 카테고리
    {
      id: 6,
      category: "투자",
      difficulty: "쉬움",
      question: "📘 진우: \"ETF? 그게 뭘 줄인 거야?\"\n👉 올바른 뜻은?",
      choices: ["Exchange Traded Fund", "Equity Transfer Fund", "Economy Trade Fund", "Exchange Trade Finance"],
      correct: "Exchange Traded Fund"
    },
    {
      id: 7,
      category: "투자",
      difficulty: "보통",
      question: "📈 수아: \"주식 시장에서 대표 지수를 뭐라고 해?\"\n👉 정답은?",
      choices: ["KOSPI", "CPI", "CD", "ETF"],
      correct: "KOSPI"
    },
    {
      id: 8,
      category: "투자",
      difficulty: "어려움",
      question: "📊 하민: \"여러 곳에 투자하면 뭐가 좋지?\"\n👉 분산 투자의 핵심 목적은?",
      choices: ["수익률 증가", "위험 감소", "거래 비용 절감", "세금 우대 혜택"],
      correct: "위험 감소"
    },
    {
      id: 9,
      category: "투자",
      difficulty: "쉬움",
      question: "🎯 해린: \"특정 가격에 거래할 수 있는 권리가 있다던데?\"\n👉 어떤 금융 상품일까?",
      choices: ["옵션", "선물", "스왑", "주식"],
      correct: "옵션"
    },
    {
      id: 10,
      category: "투자",
      difficulty: "보통",
      question: "🧑‍💼 태민: \"펀드 매니저가 열심히 관리해주는 펀드는 뭐지?\"\n👉 해당 유형은?",
      choices: ["액티브 펀드", "패시브 펀드", "ETF", "리츠(REITs)"],
      correct: "액티브 펀드"
    },

    // 대출 카테고리
    {
      id: 11,
      category: "대출",
      difficulty: "쉬움",
      question: "📆 도윤: \"매달 같은 금액을 내고 있어. 이게 무슨 방식이야?\"",
      choices: ["원리금 균등 상환", "원금 균등 상환", "만기 일시 상환", "변동 상환"],
      correct: "원리금 균등 상환"
    },
    {
      id: 12,
      category: "대출",
      difficulty: "보통",
      question: "🏠 해나: \"집 살 때 대출 한도는 뭘 보고 정하지?\"",
      choices: ["DSR", "LTV", "DTI", "금리"],
      correct: "LTV"
    },
    {
      id: 13,
      category: "대출",
      difficulty: "어려움",
      question: "📉 지윤: \"요즘 대출 금리가 자꾸 바뀌어... 무슨 대출인 거야?\"",
      choices: ["변동금리 대출", "고정금리 대출", "혼합금리 대출", "주택담보대출"],
      correct: "변동금리 대출"
    },
    {
      id: 14,
      category: "대출",
      difficulty: "쉬움",
      question: "💳 소윤: \"필요할 때 조금씩 쓰는 대출은 뭐였지?\"",
      choices: ["마이너스 통장 대출", "정기예금 대출", "모기지론", "주택담보대출"],
      correct: "마이너스 통장 대출"
    },
    {
      id: 15,
      category: "대출",
      difficulty: "보통",
      question: "🔍 현우: \"DSR이 뭐야? 은행에서 자꾸 물어보던데?\"",
      choices: ["대출자의 상환 능력", "부동산 가치", "금리 변동률", "은행 수익성"],
      correct: "대출자의 상환 능력"
    },

    // 보험 카테고리
    {
      id: 16,
      category: "보험",
      difficulty: "쉬움",
      question: "🚗 태형: \"방금 사고 났는데 보험 되겠지?\"\n👉 어떤 보험일까?",
      choices: ["자동차보험", "생명보험", "화재보험", "실손보험"],
      correct: "자동차보험"
    },
    {
      id: 17,
      category: "보험",
      difficulty: "보통",
      question: "⏳ 예진: \"보험료 못 내면 당장 효력이 없어지는 건 아니래. 그 기간이 뭐지?\"",
      choices: ["유예기간", "면책기간", "납입기간", "보장기간"],
      correct: "유예기간"
    },
    {
      id: 18,
      category: "보험",
      difficulty: "어려움",
      question: "🏥 아라: \"아플 때 치료비를 받을 수 있는 보험이 있대. 이름이 뭐야?\"",
      choices: ["실손보험", "연금보험", "화재보험", "자동차보험"],
      correct: "실손보험"
    },
    {
      id: 19,
      category: "보험",
      difficulty: "쉬움",
      question: "🕊️ 은우: \"사망하면 유가족에게 돈이 나오는 보험 있잖아?\"\n👉 그 이름은?",
      choices: ["생명보험", "화재보험", "실손보험", "연금보험"],
      correct: "생명보험"
    },
    {
      id: 20,
      category: "보험",
      difficulty: "보통",
      question: "📑 재현: \"보험료는 왜 사람마다 금액이 다르지?\"\n👉 이유는?",
      choices: ["연령", "건강 상태", "보장 금액", "모두 해당"],
      correct: "모두 해당"
    }
  ]
};

export default quizData;
