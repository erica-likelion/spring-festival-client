import AI from '@/assets/images/booth/ai.webp';
import AI_POSTER from '@/assets/images/booth/ai-poster.webp';
import TRAFFIC from '@/assets/images/booth/traffic.webp';
import TRAFFIC_POSTER from '@/assets/images/booth/traffic-poster.webp';
import BIO from '@/assets/images/booth/bio.webp';
import BIO_POSTER from '@/assets/images/booth/bio-poster.webp';
import CHEMICAL from '@/assets/images/booth/chemical.webp';
import CHEMICAL_POSTER from '@/assets/images/booth/chemical-poster.webp';
import COMPUTER from '@/assets/images/booth/computer.webp';
import COMPUTER_POSTER from '@/assets/images/booth/computer-poster.webp';
import CONVERGENCE from '@/assets/images/booth/convergence.webp';
import CONVERGENCE_POSTER from '@/assets/images/booth/convergence-poster.webp';
import DESIGN from '@/assets/images/booth/design.webp';
import DESIGN_POSTER from '@/assets/images/booth/design-poster.webp';
import ELECTRON from '@/assets/images/booth/electron.webp';
import ELECTRON_POSTER from '@/assets/images/booth/electron-poster.webp';
import ENERGY from '@/assets/images/booth/energy.webp';
import ENERGY_POSTER from '@/assets/images/booth/energy-poster.webp';
import MEDIA from '@/assets/images/booth/media.webp';
import MEDIA_POSTER from '@/assets/images/booth/media-poster.webp';
import MACHINE from '@/assets/images/booth/machine.webp';
import MACHINE_POSTER from '@/assets/images/booth/machine-poster.webp';
import HORIZON from '@/assets/images/booth/horizontal.webp';
import HORIZON_POSTER from '@/assets/images/booth/horizontal-poster.webp';
import PARMACY from '@/assets/images/booth/pharmacy.webp';
import PARMACY_POSTER from '@/assets/images/booth/pharmacy-poster.webp';
import STATEGY from '@/assets/images/booth/strategy.webp';
import STATEGY_POSTER from '@/assets/images/booth/strategy-poster.webp';
import ROBOT from '@/assets/images/booth/robot.webp';
import ROBOT_POSTER from '@/assets/images/booth/robot-poster.webp';
import INTELLIGENCE from '@/assets/images/booth/intelligence.webp';
import INTELLIGENCE_POSTER from '@/assets/images/booth/intelligence-poster.webp';
import ARCHITECTURE from '@/assets/images/booth/architecture.webp';
import ARCHITECTURE_POSTER from '@/assets/images/booth/architecture-poster.webp';
import MARINE from '@/assets/images/booth/marine.webp';
import MARINE_POSTER from '@/assets/images/booth/marine-poster.webp';
import SMART from '@/assets/images/booth/smart.webp';
import SMART_POSTER from '@/assets/images/booth/smart-poster.webp';
import OCC from '@/assets/images/booth/occ.webp';
import OCC_POSTER from '@/assets/images/booth/occ-poster.webp';
import INDUSTRIAL from '@/assets/images/booth/industrial.webp';
import INDUSTRIAL_POSTER from '@/assets/images/booth/industrial-poster.webp';
import SPORT from '@/assets/images/booth/sport.webp';
import SPORT_POSTER from '@/assets/images/booth/sport-poster.webp';
import MAHA from '@/assets/images/booth/maha.webp';
import MAHA_POSTER from '@/assets/images/booth/maha-poster.webp';
import INSURANCE from '@/assets/images/booth/insurance.webp';
import INSURANCE_POSTER from '@/assets/images/booth/insurance-poster.webp';
import SEMI from '@/assets/images/booth/semiconductor.webp';
import SEMI_POSTER from '@/assets/images/booth/semiconductor-poster.webp';
import ARCHITECTURE_ENV from '@/assets/images/booth/architecture-env.webp';
import ARCHITECTURE_ENV_POSTER from '@/assets/images/booth/architecture-env-poster.webp';
export const BOOTH_LIST = [
  {
    id: 1,
    locate: 'EP.04',
    type: '학생회 주점',
    affiliation: '인공지능학과 학생회',
    pubName: '나 지피틴데 안 추ㅣㅎㅆ다',
    menu: {
      main: [
        {
          name: '항정삼합',
          describtion: '항정업! 두부업! 김치업! 삼합업!',
          price: '20,900 원',
        },
        {
          name: '우삼겹 숙주볶음',
          describtion: '현숙이가 지숙이 머리볶아주다 잘못 볶은 우삼겹숙주볶음',
          price: '15,900 원',
        },
        {
          name: '오징어 김치전',
          describtion: '안먹으면 마담에게 싹싹 빌어야하는 오징어싹싹김치전',
          price: '14,900 원',
        },
        { name: '칼칼오뎅탕', describtion: '홍박사의 칼칼오뎅탕을 아세요?', price: '14,900 원' },
      ],
      side: [
        {
          name: '모듬소세지',
          describtion: '봉쥬르 모듬 소세쥬 드 라따뚜이',
          price: '13,900 원',
        },
        {
          name: '해장라면',
          describtion: '파괴왕의 숙취 파괴 라면',
          price: '5,900 원',
        },
        { name: '치즈계란말이', describtion: '관식이의 폭싹 계란말았수다', price: '12,900 원' },
      ],
      sub: [
        {
          name: '알고리주',
          describtion: '알고리주',
          price: '5,000 원',
        },
        {
          name: '미숫가루',
          describtion: '미숫가루',
          price: '5,000 원',
        },
        {
          name: '물',
          describtion: '',
          price: '1,000 원',
        },
        {
          name: '공깃밥',
          describtion: '',
          price: '2,000 원',
        },
        {
          name: '콜라',
          describtion: '',
          price: '2,000 원',
        },
        {
          name: '사이다',
          describtion: '',
          price: '2,000 원',
        },
      ],
    },
    takeout: true,
    profileImage: AI,
    posterImage: AI_POSTER,
  },
  {
    id: 2,
    type: '학생회 주점',
    locate: 'EP.18',
    affiliation: '미디어학과 학생회',
    pubName: '차린건 여정도 지만',
    menu: {
      main: [
        { name: '관자버터야채볶음', describtion: '#달달고소 #맥주안주', price: '18,000 원' },
        {
          name: '오징어&골뱅이 무침',
          describtion: '#매콤달콤 #젓가락_멈추지_않는',
          price: '16,000 원',
        },
        { name: '삼겹두부김치', describtion: '#기본에충실한 #안주의정석', price: '15,000 원' },
        { name: '무뼈국물닭발', describtion: '#매콤쫄깃야들 #소주안주200%', price: '20,000 원' },
      ],
      side: [
        { name: '콘치즈', describtion: "#직원's PICK #퍼먹", price: '5,000 원' },
        { name: '김가루주먹밥', describtion: '#햇반2개양 #한국인은_밥심', price: '5,000 원' },
      ],
      sub: [
        { name: '칵테일 3종', describtion: '#피치피치 #모히토 #블루큐라소', price: '4,500 원' },
        {
          name: '탄산음료 뚱캔 350ml',
          describtion: '#콜라 #사이다',
          price: '3,000 원',
        },
        { name: '물 2L', describtion: '#생명수 #술_마실_때_물_필수', price: '2,500 원' },
      ],
    },
    takeout: true,
    profileImage: MEDIA,
    posterImage: MEDIA_POSTER,
  },
  {
    id: 3,
    type: '학생회 주점',
    locate: 'EP.05',
    affiliation: '기계공학과 학생회',
    pubName: '나는 술로',
    menu: {
      main: [
        {
          name: "나만 '지쿄바'",
          describtion: '매콤한 숯불맛 치킨',
          price: '20,000 원',
        },
        {
          name: "'삼겹’먹고 나랑 사겹",
          describtion: '부드러운 대패삼겹과 아삭한 숙주의 만남',
          price: '20,000 원',
        },
      ],
      side: [
        {
          name: "왜 자꾸 '튀ㅇ김’",
          describtion: '바삭바삭 모듬 튀김',
          price: '13,000 원',
        },
        {
          name: "너랑 '황 도'망칠까?",
          describtion: '입 안 가득 퍼지는 시원한 황도',
          price: '6,000 원',
        },
        {
          name: "언제든지 너'라면'",
          describtion: '속이 확 풀리는 기계식 라면',
          price: '8,000 원',
        },
      ],
      sub: [
        {
          name: "고백해볼'레 몬'난나지만",
          describtion: '상큼하게 톡! 레몬 소주',
          price: '5,000 원',
        },
      ],
    },
    takeout: false,
    profileImage: MACHINE,
    posterImage: MACHINE_POSTER,
  },
  {
    id: 4,
    type: '학생회 주점',
    locate: 'EP.24',
    affiliation: '에너지바이오학과 학생회',
    pubName: '에바레스트 산악회',
    menu: {
      main: [
        { name: '홍관식 불막창', describtion: '', price: '16,000 원' },
        { name: '윤금희 김치전', describtion: '', price: '14,000 원' },
        { name: '양복자 오뎅탕', describtion: '', price: '13,000 원' },
      ],
      side: [
        { name: '김치볶음밥', describtion: '', price: '8,000 원' },
        { name: '참기름물만두', describtion: '', price: '9,000 원' },
        { name: '아이스황도', describtion: '', price: '8,000 원' },
        { name: '라면', describtion: '', price: '4,000 원' },
      ],
      sub: [
        {
          name: '이온음료 (1.5L)',
          describtion: '',
          price: '4,000 원',
        },
        {
          name: '탄산음료',
          describtion: '',
          price: '2,500 원',
        },
        {
          name: '생수',
          describtion: '',
          price: '1,500 원',
        },
      ],
    },
    takeout: false,
    profileImage: ENERGY,
    posterImage: ENERGY_POSTER,
  },
  {
    id: 5,
    type: '학회 주점',
    locate: 'EP.20',
    affiliation: '경제학부 학회 수평사고',
    pubName: '그 시절 우리가 사랑했던 수사',
    menu: {
      main: [
        {
          name: '우삼겹숙(주)볶음',
          describtion: '고소한 우삼겹과 아삭한 숙주를 간장 베이스로 볶아낸 안주',
          price: '16,000 원',
        },
        { name: '오돌뼈', describtion: '매콤하게 양념된 돼지 연골 볶음 안주', price: '17,000 원' },
        {
          name: 'ㄱㅖ란토스트',
          describtion: '달걀과 식빵을 부드럽게 구워낸 안주',
          price: '7,000 원',
        },
        {
          name: '모둠 소시지',
          describtion: '다양한 소시지를 한 접시에 담은 육즙 가득한 모둠 소시지!',
          price: '14,000 원',
        },
      ],
      side: [
        {
          name: 'self (주)먹밥',
          describtion: '재료를 넣어 동그랗게 만든 한입 크기의 간편 밥 요리',
          price: '4,000 원',
        },
        {
          name: 'ㅎㅐ장만두ㄹr면',
          describtion: '얼큰한 국물로 속을 풀어주는 매콤한 라면',
          price: '8,000 원',
        },
        {
          name: '콘치즈',
          describtion: '달콤한 옥수수에 치즈를 얹어 노릇하게 구운 고소한 사이드 메뉴',
          price: '8,000 원',
        },
      ],
      sub: [
        { name: '음료수', describtion: '', price: '3,000 원' },
        { name: '물', describtion: '', price: '2,000 원' },
      ],
    },
    takeout: false,
    profileImage: HORIZON,
    posterImage: HORIZON_POSTER,
  },
  {
    id: 6,
    type: '학생회 주점',
    locate: 'EP.21',
    affiliation: '약학대학 학생회',
    pubName: '냥약랜드',
    menu: {
      main: [
        {
          name: '우삼겹 숙주 볶음',
          describtion: '간장과 굴소스로 볶아낸 고소한 우삼겹과 숙주 안주',
          price: '18,000 원',
        },
        {
          name: '치즈김치 볶음밥',
          describtion: '시판 김치볶음밥에 고소한 치즈를 더한 메뉴',
          price: '10,000 원',
        },
        {
          name: '모듬 소세지',
          describtion: '여러 가지 시판 소세지를 조리한 간단한 안주',
          price: '16,000 원',
        },
        {
          name: '어묵탕',
          describtion: '시판 어묵탕 밀키트로 만든 따뜻한 국물 안주',
          price: '13,000 원',
        },
      ],
      side: [
        {
          name: '라면',
          describtion: '진라면(매운맛)을 끓여낸 얼큰한 라면 메뉴',
          price: '4,000 원',
        },
        {
          name: '팽이베이컨말이',
          describtion: '팽이버섯을 베이컨으로 말아 구워낸 사이드 메뉴',
          price: '8,000 원',
        },
        {
          name: '아이스황도',
          describtion: '시원한 사이다와 황도캔을 섞은 음료 디저트',
          price: '7,000 원',
        },
        {
          name: '나초&치즈소스',
          describtion: '나초 과자에 치즈소스를 얹어 서빙하는 간단한 안주',
          price: '5,000 원',
        },
      ],
      sub: [
        {
          name: '제로콜라',
          describtion: '',
          price: '3,000 원',
        },
        {
          name: '사이다',
          describtion: '',
          price: '3,000 원',
        },
        {
          name: '생수 500ml',
          describtion: '',
          price: '1,000 원',
        },
      ],
    },
    takeout: false,
    profileImage: PARMACY,
    posterImage: PARMACY_POSTER,
  },
  {
    id: 7,
    type: '학생회 주점',
    locate: 'EP.11',
    affiliation: '배터리소재화학공학과 학생회',
    pubName: '백설공주와 화목한 난쟁이들',
    menu: {
      main: [
        {
          name: '사골마라탕',
          describtion: '너무 예뻐져도 놀라지 마라탕',
          price: '19,000 원',
        },
        {
          name: '닭다리살 구이',
          describtion: '백설공주가 직접 사냥한 닭구이',
          price: '18,000 원',
        },
        {
          name: '스팸감자전',
          describtion: '난쟁이가 캐온 스팸감자전',
          price: '15,000 원',
        },
        {
          name: '우삼겹 숙주볶음',
          describtion: '잠자는 공주 깨우삼겹숙주볶음',
          price: '18,000 원',
        },
      ],
      side: [
        {
          name: '숙주 라면',
          describtion: '내가 배화공주라면~?',
          price: '5,000 원',
        },
        {
          name: '불닭',
          describtion: '맵부심 왕비의 불닭볶음면',
          price: '5,000 원',
        },
        {
          name: '타코 나쵸',
          describtion: '난쟁이의 비상식량',
          price: '7,000 원',
        },
      ],
      sub: [
        { name: '물', describtion: '깊은 산속 옹달샘', price: '1,000 원' },
        { name: '음료수', describtion: '공주도 탄산은 못참지', price: '2,000 원' },
      ],
    },
    takeout: false,
    profileImage: CHEMICAL,
    posterImage: CHEMICAL_POSTER,
  },
  {
    id: 8,
    type: '학생회 주점',
    locate: 'EP.17',
    affiliation: '컴퓨터학부 학생회',
    pubName: '전 어때요',
    menu: {
      main: [
        {
          name: '부추전',
          describtion: '부침가루, 튀김가루, 전분가루, 오징어, 부추를 사용하여 구운 전',
          price: '12,000 원',
        },
        {
          name: '김치전',
          describtion: '부침가루, 튀김가루, 전분가루, 오징어, 김치로 만든 전',
          price: '12,000 원',
        },
        {
          name: '옥수수전',
          describtion: '옥수수콘, 튀김가루, 연유를 사용해 구운 달콤한 전',
          price: '10,000 원',
        },
        {
          name: '두부김치',
          describtion: '김치, 대패삼겹살, 두부, 마늘과 각종 조미료로 조리한 메뉴',
          price: '15,000 원',
        },
        {
          name: '순대볶음',
          describtion: '찰순대, 깻잎, 양파, 양배추, 조미료와 함께 볶은 메뉴',
          price: '15,000 원',
        },
        {
          name: '대패삼겹숙주볶음',
          describtion: '대패삼겹살, 숙주, 양파, 청양고추, 조미료와 함께 볶은 메뉴',
          price: '15,000 원',
        },
      ],
      side: [
        {
          name: '황도',
          describtion: '황도 통조림을 접시에 담아 제공하는 디저트 메뉴',
          price: '7,000 원',
        },
        {
          name: '아이스크림 콘',
          describtion: '콘 과자 위에 아이스크림 믹스를 얹어 주는 메뉴',
          price: '3,000 원',
        },
        {
          name: '뻥스크림',
          describtion: '현미 뻥튀기 사이에 아이스크림 믹스를 얹은 디저트',
          price: '5,000 원',
        },
        {
          name: '컴퓨터아이스크림의정석',
          describtion: '초코쉘, 그레놀라와 함께 접시에 담아주는 아이스크림 메뉴',
          price: '10,000 원',
        },
      ],
      sub: [
        {
          name: '펩시제로',
          describtion: '',
          price: '2,500 원',
        },
        {
          name: '칠성사이다',
          describtion: '',
          price: '2,500 원',
        },
        {
          name: '생수',
          describtion: '',
          price: '2,000 원',
        },
        {
          name: '매실원액, 홍초원액, 헛개수원액',
          describtion: '각 원액을 소주나 물에 타서 제공하는 음료 메뉴',
          price: '2,000 원',
        },
        {
          name: '원액 3종 세트',
          describtion: '매실, 홍초, 헛개수 원액을 세트로 제공하는 메뉴',
          price: '5,000 원',
        },
      ],
    },
    takeout: false,
    profileImage: COMPUTER,
    posterImage: COMPUTER_POSTER,
  },
  {
    id: 9,
    type: '학생회 주점',
    locate: 'EP.15',
    affiliation: '교통물류공학과 학생회',
    pubName: 'Kㅛ통에Bㅏㅂ과 술 Oㅣㅆ어요',
    menu: {
      main: [
        {
          name: '닭목살 소금구이',
          describtion: '이정후 선수도 메이저리그에서 그리워하는 맛',
          price: '18,000 원',
        },
        {
          name: '닭발 + 치즈떡구이',
          describtion: '오타니 쇼헤이 선수가 말하다 "우마이"',
          price: '18,000 원',
        },
        {
          name: '훈제오리 + 부추무침',
          describtion: '이대호 선수도 이거 먹고 복귀각 세우게 하는 그 맛',
          price: '18,000 원',
        },
        {
          name: '곱창볶음',
          describtion: '김도영 선수가 말하다. "곱창아 니땀시 살어야"',
          price: '15,000 원',
        },
      ],
      side: [
        {
          name: '치즈 계란말이',
          describtion: '치즈와 함께 늘어나는 우리 구단 승률',
          price: '7,000 원',
        },
        {
          name: '해물라면',
          describtion: '우리 구단이 질 때면 내 속 대신 끓어주는 해물들',
          price: '8,000 원',
        },
        {
          name: '버터갈릭 감자튀김',
          describtion: '이 튀김 먹고나면 우리 구단 도루할 때 잘 튀튀',
          price: '8,000 원',
        },
      ],
      sub: [
        {
          name: '음료',
          describtion: '제로콜라, 갈배, 사이다',
          price: '2,000 원',
        },
        {
          name: '물 500ml',
          describtion: '',
          price: '1,000 원',
        },
      ],
    },
    takeout: true,
    profileImage: TRAFFIC,
    posterImage: TRAFFIC_POSTER,
  },
  {
    id: 10,
    type: '학생회 주점',
    locate: 'EP.01',
    affiliation: '국방전략기술공학과 학생회',
    pubName: '마구 먹구 마구 마셔',
    menu: {
      main: [
        {
          name: '빠다꼬치',
          describtion: '(순한맛 닭꼬치)',
          price: '17,900 원',
        },
        {
          name: '불빠다꼬치',
          describtion: '(매운맛 닭꼬치)',
          price: '17,900 원',
        },
        {
          name: '염통빠따꼬치',
          describtion: '쫄깃한 염통꼬치',
          price: '12,900 원',
        },
        {
          name: '빠따꼬치세트',
          describtion: '(순한맛 매운맛 반반)',
          price: '19,900 원',
        },
        {
          name: '염통빠따세트',
          describtion: '(닭꼬치 염통 반반)',
          price: '22,900 원',
        },
        {
          name: '육회말 투아웃',
          describtion: '신선한 육회를 듬뿍 담은 메뉴',
          price: '18,900 원',
        },
        {
          name: '두부삼겹도루치기',
          describtion: '두부, 삼겹살, 김치를 함께 볶은 안주',
          price: '15,900 원',
        },
      ],
      side: [
        {
          name: '축구보단 야구가 나쵸',
          describtion: '야구 안주에 딱 맞는 바삭한 나쵸',
          price: '11,900 원',
        },
        {
          name: '이대호오옴런볼아이스크림',
          describtion: '홈런볼이 들어간 시원한 아이스크림',
          price: '8,900 원',
        },
        {
          name: '류현진라면',
          describtion: '든든하게 먹는 라면 한 그릇',
          price: '6,900 원',
        },
      ],
      sub: [
        {
          name: '탄산음료',
          describtion: '',
          price: '2,000 원',
        },
        {
          name: '생수',
          describtion: '',
          price: '1,000 원',
        },
        {
          name: '헛개보이',
          describtion: '',
          price: '????',
        },
      ],
    },
    takeout: true,
    profileImage: STATEGY,
    posterImage: STATEGY_POSTER,
  },
  {
    id: 11,
    type: '학생회 주점',
    locate: 'EP.12',
    affiliation: '로봇공학과 학생회',
    pubName: '(주) 로봇산업',
    menu: {
      main: [
        { name: '중장비 콤보세트 - 숯불 닭꼬치, 어묵탕', describtion: '', price: '28,000 원' },
        { name: '야간 작업 야식세트 - 닭발, 주먹밥, 계란찜', describtion: '', price: '23,000 원' },
        { name: '조기퇴근세트 - 냉제육, 골뱅이소면', describtion: '', price: '27,000 원' },
        { name: '레전드 닭꼬치', describtion: '', price: '16,000 원' },
        { name: '레전드 닭발', describtion: '', price: '18,000 원' },
        { name: '레전드 훈제오리', describtion: '', price: '18,000 원' },
        { name: '레전드 냉제육', describtion: '', price: '18,000 원' },
        { name: '레전드 김치찌개', describtion: '', price: '13,000 원' },
        { name: '레전드 어묵탕', describtion: '', price: '15,000 원' },
        { name: '레전드 순두부 해장라면', describtion: '', price: '7,000 원' },
        { name: '레전드 감자튀김 (뿌링클 시즈닝 +1,000원)', describtion: '', price: '8,000 원' },
        { name: '레전드 크리스피 순살 치킨', describtion: '', price: '14,000 원' },
      ],
      side: [
        { name: '레전드 설탕토마토', describtion: '', price: '5,000 원' },
        { name: '레전드 빙수', describtion: '', price: '6,000 원' },
        { name: '레전드 골뱅이 소면', describtion: '', price: '13,000 원' },
        { name: '레전드 계란찜', describtion: '', price: '4,000 원' },
        { name: '레전드 주먹밥', describtion: '', price: '4,000 원' },
      ],
      sub: [
        { name: '레전드 음료', describtion: '콜라, 사이다, 갈배, 식혜', price: '2,000 원' },
        { name: '레전드 물', describtion: '', price: '1,000 원' },
      ],
    },
    takeout: false,
    profileImage: ROBOT,
    posterImage: ROBOT_POSTER,
  },
  {
    id: 12,
    type: '학생회 주점',
    affiliation: '융합시스템공학과 학생회',
    pubName: '시선',
    locate: 'EP.23',
    menu: {
      main: [
        { name: '야끼우동', describtion: '', price: '15,900 원' },
        { name: '대패숙주볶음', describtion: '오리지널 / 마라', price: '14,900 원' },
        { name: '나가사끼 짬뽕', describtion: '', price: '17,900 원' },
      ],
      side: [
        { name: '계란말이', describtion: '', price: '9,900 원' },
        { name: '아이스 황도', describtion: '', price: '8,900 원' },
        { name: '콘치즈', describtion: '', price: '7,900 원' },
      ],
      sub: [{ name: '물', describtion: '', price: '1,000 원' }],
    },
    takeout: true,
    profileImage: CONVERGENCE,
    posterImage: CONVERGENCE_POSTER,
  },
  {
    id: 13,
    type: '학생회 주점',
    locate: 'EP.19',
    affiliation: '지능정보양자공학전공 학생회',
    pubName: '냥자역학: 주량측정불가',
    menu: {
      main: [
        { name: '대패삼겹두부김치', describtion: '', price: '17,900 원' },
        { name: '소세지야채볶음', describtion: '', price: '13,900 원' },
        {
          name: '가라아게',
          describtion: '케이준 감자튀김과 가라아게 함께 제공',
          price: '12,900 원',
        },
      ],
      side: [
        { name: '묵사발', describtion: '', price: '10,000 원' },
        { name: '황도', describtion: '', price: '7,900 원' },
        { name: '주먹밥(셀프)', describtion: '', price: '3,000 원' },
      ],
      sub: [
        { name: 'DIY하이볼', describtion: '자몽, 청포도 (소주는 셀프)', price: '3,500 원' },
        {
          name: '음료',
          describtion: '콜라, 제로콜라, 사이다',
          price: '2,000 원',
        },
        {
          name: '생수',
          describtion: '',
          price: '1,000 원',
        },
      ],
    },
    takeout: true,
    profileImage: INTELLIGENCE,
    posterImage: INTELLIGENCE_POSTER,
  },
  {
    id: 14,
    locate: 'EP.06',
    type: '학생회 주점',
    affiliation: '건설환경공학과 학생회',
    pubName: '13주차 술체역학',
    menu: {
      main: [
        {
          name: '보쌈',
          describtion: '',
          price: '25,000 원',
        },
        {
          name: '김치전',
          describtion: '치즈 추가 시 1000원 추가',
          price: '11,900 원',
        },
        {
          name: '오뎅탕',
          describtion: '오뎅탕 및 매운오뎅탕의 경우, 우동사리 추가 시 2000원 추가',
          price: '12,000 원',
        },
        {
          name: '매운오뎅탕',
          describtion: '오뎅탕 및 매운오뎅탕의 경우, 우동사리 추가 시 2000원 추가',
          price: '12,500 원',
        },
        {
          name: '공대 3 종 세트 - 돈까스, 공대라면, 용암볶음밥',
          describtion: '3종을 세트로 모두 시킬 시 더 쌈',
          price: '29,900 원',
        },
      ],
      side: [
        {
          name: '돈까스',
          describtion: '돈까스의 경우, 소스는 셀프',
          price: '15,900 원',
        },
        {
          name: '공대라면',
          describtion: '공대라면의 경우, 치즈가 용암처럼 흘러내림',
          price: '6,500 원',
        },
        {
          name: '용암볶음밥',
          describtion: '용암볶음밥의 경우 치즈가 용암처럼 흘러내림',
          price: '8,500 원',
        },
        {
          name: '나쵸 (+치즈소스)',
          describtion: '',
          price: '6,900 원',
        },
        {
          name: '콘치즈',
          describtion: '',
          price: '8,900 원',
        },
        {
          name: '모둠튀김',
          describtion: '',
          price: '13,900 원',
        },
        {
          name: '소떡소떡',
          describtion: '1개 4,000원 3개 10,000원',
          price: '4,000 원',
        },
      ],
      sub: [
        {
          name: '콜라',
          describtion: '',
          price: '2,000 원',
        },
        {
          name: '사이다',
          describtion: '',
          price: '2,000 원',
        },
        {
          name: '생수',
          describtion: '',
          price: '1,500 원',
        },
      ],
    },
    takeout: false,
    profileImage: ARCHITECTURE_ENV,
    posterImage: ARCHITECTURE_ENV_POSTER,
  },
  {
    id: 15,
    type: '학생회 주점',
    locate: 'EP.26',
    affiliation: '보험계리학과 학생회',
    pubName: '냉3 4먹으러 5것지',
    menu: {
      main: [
        { name: '냉삼 1인분 200g', describtion: '(+ 김치 콩나물 볶음 제공)', price: '14,000 원' },
        { name: '우삼겹 숙주볶음', describtion: '', price: '14,000 원' },
        { name: '김치찌개', describtion: '', price: '9,000 원' },
      ],
      side: [
        { name: '소세지 3줄', describtion: '', price: '5,000 원' },
        { name: '면사리 추가', describtion: '', price: '2,000 원' },
        { name: '공깃밥', describtion: '', price: '2,000 원' },
        { name: '마시멜로우', describtion: '', price: '1,500 원' },
        { name: '황도', describtion: '', price: '4,000 원' },
      ],
      sub: [{ name: '음료수', describtion: '', price: '2,000 원' }],
    },
    takeout: false,
    profileImage: INSURANCE,
    posterImage: INSURANCE_POSTER,
  },
  {
    id: 16,
    type: '동아리 주점',
    locate: 'EP.14',
    affiliation: '중앙동아리 MAHA',
    pubName: '그시절 캔마하(CANMAHA)',
    menu: {
      main: [
        {
          name: '지존통마늘부추삼겹',
          describtion:
            '지존장난아니게 맛있는 훈제삼겹살과 부추무침, 그리고 구운 통마늘을 곁들인, 캔모아 생각은 안나지만 지대 맛있는 최고의 캔마하 스폐셜 메뉴!! 막이래 ㅋㅋ',
          price: '18,000 원',
        },
        {
          name: '뽀대작살 삼겹비빔면',
          describtion:
            '이거 뽀대 장난아니게 작살난거 대박 ㅋㅋ 삼겹이랑 비빔면 조합 믿어지삼?! 우왕ㅋ굳ㅋ임 오나전 ㅋㅋ~ 이거를 안먹으면 안습인거야~~ T^T',
          price: '16,000 원',
        },
        {
          name: '안습매콤떡볶이세트',
          describtion:
            '매콤짭짤달달 먹으면 감동의 안습 조심하삼 ㅋㅋ 이거 안먹는 사람 뭥미? 완전 지못미 ㅠㅠ 국물적신 치즈스틱 냄새 맡으면 누워있던 잉여인간도 벌떡돋네;; 꼭 시키삼;;',
          price: '15,000 원',
        },
        {
          name: '오나전 반반전',
          describtion:
            '오나전 예쁜 비주얼에 오나전 맛있는 맛까지 헐~~ㅋㅋ 호불호 없는 감자전이랑 김치전 반반메뉴 선정 작살이다;; 이거 하나면 두 가지 맛?? 님 좀 짱인듯 ㅋㅋ KIN',
          price: '13,000 원',
        },
      ],
      side: [
        {
          name: '대박소문난 해물라면',
          describtion: '라면과 해물믹스를 같이 끓여 판매',
          price: '9,000 원',
        },
        {
          name: '지대므흣 워킹타코',
          describtion: '시판 도리토스 위에 햄, 양파, 토마토, 콘을 올려 판매',
          price: '8,000 원',
        },
        {
          name: '뷁설탕 토스트',
          describtion: '토스트기에 구운 식빵을 설탕과 크림을 올려 판매',
          price: '5,000 원',
        },
        {
          name: '엽기 하이볼 메이커',
          describtion: '큰 물통에 아이스티와 슬라이스레몬을 넣어 각자 만들어 마실 수 있게 판매',
          price: '4,000 원',
        },
      ],
      sub: [
        {
          name: '사이다',
          describtion: '',
          price: '3,000 원',
        },
        {
          name: '제로콜라',
          describtion: '',
          price: '3,000 원',
        },
        {
          name: '마N',
          describtion: '고개 꺾어서 보삼 KIN~',
          price: '1,000 원',
        },
      ],
    },
    takeout: true,
    profileImage: MAHA,
    posterImage: MAHA_POSTER,
  },
  {
    id: 17,
    type: '학생회 주점',
    locate: 'EP.16',
    affiliation: '전자공학부 학생회',
    pubName: '폭싹 취EE했수다',
    menu: {
      main: [
        {
          name: '대패숙주볶았수다',
          describtion: '# 자꾸 아찔한 이 "대패" 위험한 이 "숙주"',
          price: '18,900 원',
        },
        {
          name: '닭목살구웠수다',
          describtion: '# 지독하게 너무 지독하게 "닭목살" 사랑했나봐~',
          price: '18,900 원',
        },
        {
          name: '오돌뼈볶았수다',
          describtion: '# 오돌뼈 사랑했나봐.. 잊을 수 없나봐..',
          price: '17,900 원',
        },
      ],
      side: [
        {
          name: '해장라면끓였수다',
          describtion: '# 오직 너에게만 감!동!적인 "라면"',
          price: '4,900 원',
        },
        {
          name: '캔땄수다',
          describtion: '# 술자리의 끝을 장식하는 퀸카 "황도파인"',
          price: '5,900 원',
        },
      ],
      sub: [
        {
          name: '캔음료',
          describtion: '',
          price: '2,000 원',
        },
        {
          name: '물',
          describtion: '',
          price: '1,000 원',
        },
      ],
    },
    takeout: false,
    profileImage: ELECTRON,
    posterImage: ELECTRON_POSTER,
  },
  {
    id: 18,
    type: '학생회 주점',
    locate: 'EP.03',
    affiliation: '해양융합공학과 학생회',
    pubName: '폭주어선',
    menu: {
      main: [
        {
          name: '모둠세트',
          describtion: '숙성연어회와 참치타다끼가 함께 나오는 모둠.',
          price: '22,900 원',
        },
        {
          name: '숙성연어회(곤부지메)',
          describtion:
            '꿈연에서 직접 공수해온 곤부지메 방식으로 숙성한 연어. 곤부지메란 일본의 전통적인 요리 기법으로, 생선을 다시마에 감싸 숙성시키는 방법.',
          price: '22,900 원',
        },
        {
          name: '참치타다끼',
          describtion:
            '겉만 익히고 토치로 불맛을 내어 비린맛 없이 부드러운 참치타다끼. 단, 토치 사용이 불가능하면 통깨를 입혀 겉만 살짝 구운 부드러운 참치타다끼.',
          price: '21,900 원',
        },
      ],
      side: [
        {
          name: '회덮밥',
          describtion: '참치회를 풍부히 잘라 야채와 특제소스와 함께 비벼먹는 맛있는 덮밥',
          price: '7,900 원',
        },
        {
          name: '대새라면',
          describtion: '흰다리새우머리로 육수를 내어 맛있게 끓여낸 라면',
          price: '6,900 원',
        },
        {
          name: '황도&후르츠',
          describtion: '시원한 탄산수에 실한 황도와 후르츠를 넣은 상쾌한 후식',
          price: '6,900 원',
        },
        {
          name: '콘치즈',
          describtion: '옥수수에 자연산 치즈와 마요네즈를 더해 고소하고 달콤한 사이드메뉴',
          price: '5,900 원',
        },
      ],
      sub: [
        {
          name: '유자소다',
          describtion: '',
          price: '5,000 원',
        },
        {
          name: '제로콜라',
          describtion: '',
          price: '2,000 원',
        },
        {
          name: '물',
          describtion: '',
          price: '1,500 원',
        },
      ],
    },
    takeout: true,
    profileImage: MARINE,
    posterImage: MARINE_POSTER,
  },
  {
    id: 19,
    type: '학회 주점',
    locate: 'EP.22',
    affiliation: '건설환경공학과 OCC 학회',
    pubName: '닭치고 한 잔',
    menu: {
      main: [
        {
          name: '파닭전',
          describtion: '대파와 닭고기를 바삭하게 부쳐낸 고소한 한국식 전',
          price: '',
        },
        {
          name: '닭목살구이',
          describtion: '탱글한 닭목살을 구워낸 별미 (소금, 간장, 양념 중 선택 가능)',
          price: '',
        },
        {
          name: '떡도리탕',
          describtion: '매콤한 순살 닭과 쫄깃한 떡이 어우러진 매콤한 국물 요리',
          price: '',
        },
      ],
      side: [
        {
          name: '불닭 오믈렛',
          describtion: '부드러운 오믈렛 속 매콤한 불닭과 달콤한 콘치즈가 가득~',
          price: '',
        },
        {
          name: '닭똥집볶음',
          describtion: '쫄깃한 닭똥집과 신선한 야채가 어우러진 담백한 볶음 요리',
          price: '',
        },
        {
          name: '둥지튀김',
          describtion: '바삭한 감자튀김 위에 가라아게를 얹은 둥지',
          price: '',
        },
        {
          name: '눈꽃닭교자',
          describtion: '닭고기로 꽉 찬 눈꽃만두, 파닭전 간장에 찍어먹으면 별미~',
          price: '',
        },
        {
          name: '초계국수',
          describtion: '시원한 육수에 살얼음까지~ 깔끔하고 상쾌한 국수',
          price: '',
        },
        {
          name: '계 맛있는 라면',
          describtion: '진한 국물에 숙주와 닭가슴살을 얹은 라면',
          price: '',
        },
        {
          name: '만두계란탕',
          describtion: '부드러운 계란과 만두가 어우러진 깔끔한 계란탕',
          price: '',
        },
        {
          name: '아이스크림',
          describtion: '달콤한 바닐라 아이스크림. 주문량이 많으면 뭔가 있을지도~?',
          price: '',
        },
      ],
      sub: [
        {
          name: '콜라 / 제로 콜라 / 물',
          describtion: '',
          price: '',
        },
      ],
    },
    takeout: false,
    profileImage: OCC,
    posterImage: OCC_POSTER,
  },
  {
    id: 20,
    type: '학생회 주점',
    locate: 'EP.08',
    affiliation: '바이오신약융합학부 학생회',
    pubName: '모여봐요 술꾼의 숲',
    menu: {
      main: [
        {
          name: '보쌈김치(대, 3-4인)',
          describtion: '보쌈이랑 김치랑 친구했큐룽♪',
          price: '26,900 원',
        },
        {
          name: '보쌈김치(중, 1-2인)',
          describtion: '보쌈이랑 김치랑 친구했큐룽♪',
          price: '18,900 원',
        },
        {
          name: '우삼겹숙주볶음',
          describtion: '여울’s PICK 우삼숙…★',
          price: '17,900 원',
        },
        {
          name: '치즈불닭',
          describtion: '도루묵씨의 화끈한 치즈불닭',
          price: '21,900 원',
        },
      ],
      side: [
        {
          name: '순두부라면',
          describtion: '라면끓였따우 순둡넜띠',
          price: '6,500 원',
        },
        {
          name: '순두부계란탕',
          describtion: '콩돌밤돌이 끓인 순두부계란탕',
          price: '7,800 원',
        },
        {
          name: '치즈 옥수수',
          describtion: '달콤치즈 옥수수 온천',
          price: '6,500 원',
        },
        {
          name: '나쵸',
          describtion: '빠삭빠삭 마을나쵸',
          price: '5,000 원',
        },
        {
          name: '닭꼬치',
          describtion: '꼬치 꼬치 묻지 마요, 우리 닭꼬치 맛있으니까 -_-',
          price: '8,000 원',
        },

        {
          name: '화채',
          describtion: '‘시원하고 달달해요, 뽀드득!’ 뽀야미의 뽀드득 화채',
          price: '5,000 원',
        },

        {
          name: '매실빛 노을(매실 베이스)',
          describtion: '과일주(매실) 한잔, 파샵파샵!',
          price: '5,000 원',
        },
        {
          name: '새벽의 별똥별(망고 베이스)',
          describtion: '과일주(망고) 한잔, 파샵파샵!',
          price: '5,000 원',
        },
      ],
      sub: [
        {
          name: '음료수',
          describtion: '너굴상점 시원음료',
          price: '2,000 원',
        },
        {
          name: '생수',
          describtion: '갈증이 가셨다!',
          price: '1,000 원',
        },
      ],
    },
    takeout: true,
    profileImage: BIO,
    posterImage: BIO_POSTER,
  },
  {
    id: 21,
    type: '학생회 주점',
    locate: 'EP.07',
    affiliation: '스마트융합공학부 학생회',
    pubName: "이랏'스융'마세",
    menu: {
      main: [
        {
          name: '대패숙주볶음',
          describtion: '지금까지 이런 맛은 없었다. 이것은 대패인가 숙주인가 "대패숙주볶음"',
          price: '18,900 원',
        },
        {
          name: '불막창',
          describtion:
            '불타는 입맛을 위한 경건한 선택. 고소하고 쫄깃한 불막창, 이건 진심을 담아 먹어야 해.',
          price: '22,900 원',
        },
        {
          name: '오뎅탕',
          describtion:
            '따끈한 국물 한 입에 피로가 풀리는 마법. 탕탕 울리는 맛에, 오늘도 오뎅에게 마음 뺏긴다.',
          price: '18,900 원',
        },
        {
          name: '김치전',
          describtion: '비 오는 날엔 나만 찾아줘. 바삭함과 매콤함을 품은 김치전, 자존감 만렙 간식!',
          price: '14,900 원',
        },
      ],
      side: [
        {
          name: '계란말이',
          describtion:
            '말랑말랑하고 촉촉한 그 계란말이. 그냥 계란이 아니야, ‘걔’란말이야. 한 입에 반할 걸?',
          price: '9,900 원',
        },
        {
          name: '연유토스트',
          describtion:
            '입안 가득 퍼지는 달콤함. 빵 위에 눈처럼 내린 연유, 이건 휴식이야. 당 충전 완료.',
          price: '5,900 원',
        },
        {
          name: '주먹밥',
          describtion: '랄프가 만든 왕 큰 "주먹밥". 피곤한 하루, 허기진 마음을 달래줄 힐링 덩어리.',
          price: '4,900 원',
        },
        {
          name: '라면',
          describtion: '사장도 반할 수밖에 없는 한입의 힘! 국룰의 맛!',
          price: '5,900 원',
        },
        {
          name: '파인샤베트',
          describtion:
            '샤르르 녹는 시원한 매력에 감사하게 돼요. 파인애플 향 가득한 얼음의 여신, 디저트의 피날레.',
          price: '8,900 원',
        },
      ],
      sub: [
        {
          name: '타먹는 미숫가루 소주',
          describtion: '소주는 별도 지참',
          price: '4,900 원',
        },
        {
          name: '음료수',
          describtion: '제로콜라, 사이다, 갈아만든배',
          price: '3,000 원',
        },
        {
          name: '물',
          describtion: '',
          price: '1,000 원',
        },
      ],
    },
    takeout: true,
    profileImage: SMART,
    posterImage: SMART_POSTER,
  },
  {
    id: 22,
    type: '학생회 주점',
    locate: 'EP.02',
    affiliation: '건축학부 학생회',
    pubName: '홍문으로들었소',
    menu: {
      main: [
        { name: '두부 김치', describtion: '', price: '16,000 원' },
        { name: '제육 볶음', describtion: '', price: '16,000 원' },
        { name: '숙주 대패', describtion: '', price: '16,000 원' },
      ],
      side: [
        { name: '김치전', describtion: '', price: '9,000 원' },
        { name: '묵사발', describtion: '', price: '9,000 원' },
        { name: '황도', describtion: '', price: '9,000 원' },
        { name: '불라면', describtion: '', price: '6,000 원' },
        { name: '주먹밥', describtion: '', price: '4,000 원' },
      ],
      sub: [
        {
          name: '건축주',
          describtion: '홍초 원액 + 사이다',
          price: '4,000 원',
        },
        {
          name: '미숫가루',
          describtion: '',
          price: '4,000 원',
        },
        {
          name: '탄산음료',
          describtion: '콜라/사이다',
          price: '2,500 원',
        },
        {
          name: '생수(500ml)',
          describtion: '',
          price: '1,500 원',
        },
      ],
    },
    takeout: false,
    profileImage: ARCHITECTURE,
    posterImage: ARCHITECTURE_POSTER,
  },
  {
    id: 23,
    type: '디자인대학 주점',
    locate: 'EP.09',
    affiliation: '디자인대학 연합',
    pubName: '디대는 못말려! - 오늘도 과제는 미제출?! 전설의 주점 대작전!',
    menu: {
      main: [
        {
          name: '치즈 닭갈비 + 콘치즈 + 랜덤음료수',
          describtion: 'A+보다 짜릿한 치즈 닭갈비 + 콘치즈 + 랜덤음료수',
          price: '25,000 원',
        },
        {
          name: '치즈 닭갈비 + 오뎅탕 + 랜덤음료수',
          describtion: 'A+보다 짜릿한 치즈 닭갈비 + 오뎅탕 + 랜덤음료수',
          price: '26,000 원',
        },
        {
          name: '닭갈비',
          describtion: 'A+보다 짜릿한 닭갈비',
          price: '18,000 원',
        },
        {
          name: '무뼈닭발',
          describtion: '주먹 돌리기! 봉미선의 분노 무뼈 닭발',
          price: '18,000 원',
        },
        {
          name: '치즈추가',
          describtion: '',
          price: '2,000 원',
        },
      ],
      side: [
        {
          name: '콘치즈',
          describtion: '액션빔으로 녹인 콘치즈',
          price: '7,000 원',
        },
        {
          name: '짜계치',
          describtion: '부리부리 짜계치',
          price: '8,000 원',
        },
        {
          name: '오뎅탕',
          describtion: '신형만’s 최애 안주 오뎅탕',
          price: '8,000 원',
        },
        {
          name: '묵사발',
          describtion: '두목님이 말아주는 묵사발',
          price: '12,500 원',
        },
        {
          name: '두부김치',
          describtion: '와르르 두부김치',
          price: '12,500 원',
        },
        {
          name: '셀프주먹밥',
          describtion: '훈이(셀프주먹밥)',
          price: '3,000 원',
        },
      ],
      sub: [
        {
          name: '아이스초코',
          describtion: '',
          price: '3,000 원',
        },
        {
          name: '아이스티',
          describtion: '',
          price: '3,000 원',
        },
        {
          name: '콜라 뚱캔',
          describtion: '',
          price: '2,500 원',
        },
        {
          name: '사이다 뚱캔',
          describtion: '',
          price: '2,500 원',
        },
        {
          name: '토닉워터',
          describtion: '',
          price: '4,500 원',
        },
      ],
    },
    takeout: true,
    profileImage: DESIGN,
    posterImage: DESIGN_POSTER,
  },
  {
    id: 24,
    type: '학생회 주점',
    locate: 'EP.13',
    affiliation: '산업경영공학과 학생회',
    pubName: '응답하라 일구구산',
    menu: {
      main: [
        {
          name: '삼겹숙주볶음',
          describtion: '삼겹은 기름지고, 너는 내 마음을 지져',
          price: '15,000 원',
        },
        {
          name: '볶음우동',
          describtion: '우동처럼 오동통 불어버린 설레는 내 맘',
          price: '14,000 원',
        },
        {
          name: '로제 떡볶이',
          describtion: '내 맘은 크림 같았는데, 넌 계속 맵게만 굴더라?',
          price: '14,000 원',
        },
        {
          name: '꼬소염(꼬치+소시지+염통)',
          describtion: '심장을 쿡 찌르는 맛이랄까.,. 꼬치에 꽂히는 건 줄 알았는데, 너였어.',
          price: '14,000 원',
        },
      ],
      side: [
        {
          name: '염통꼬치',
          describtion: '양 염통꼬치 8개',
          price: '6,000 원',
        },

        {
          name: '콘치즈',
          describtion: '우리 사이도 치즈처럼… 조금만 더 늘어났으면.',
          price: '6,000 원',
        },
        {
          name: '감튀 + 팝콘치킨',
          describtion: '같이 먹는 순간, 추억도 바삭해져.',
          price: '6,000 원',
        },
        {
          name: '연유 토마토',
          describtion: '식후엔 연초 말고 연(유)토(마토)',
          price: '5,000 원',
        },
        {
          name: '나쵸 프레첼+시즈닝',
          describtion: '나의 초-크초크한 프레체ㄹ',
          price: '4,000 원',
        },
        {
          name: '라면',
          describtion: '그 밤에 먹던 라면 기억나? 아직도 끓고 있어, 내 마음',
          price: '4,000 원',
        },
      ],
      sub: [
        {
          name: '음료수',
          describtion: '사이다 / 콜라 / 제로 콜라',
          price: '2,000 원',
        },
        {
          name: '물',
          describtion: '',
          price: '1,000 원',
        },
      ],
    },
    takeout: false,
    profileImage: INDUSTRIAL,
    posterImage: INDUSTRIAL_POSTER,
  },
  {
    id: 25,
    type: '학생회 주점',
    locate: 'EP.10',
    affiliation: '예체능대학 학생회',
    pubName: '뭉쳐야 예체대',
    menu: {
      main: [
        {
          name: '돼지 GOAL~비 (+주먹밥)',
          describtion: '양념돼지갈비와 주먹밥 세트',
          price: '21,900 원',
        },
        {
          name: '육회 상쾌 통쾌',
          describtion: '육회',
          price: '18,900 원',
        },
        {
          name: '닭파닭파',
          describtion: '왕 닭꼬치 / 3개: 16,900원, 6개: 29,900원',
          price: '16,900 원',
        },
      ],
      side: [
        {
          name: '호~오우! 뎅탕',
          describtion: '오뎅탕',
          price: '8,000 원',
        },
        {
          name: '마이콘 치즈',
          describtion: '콘치즈',
          price: '8,000 원',
        },
        {
          name: '씩씩한 점보 짜파게티 & 파김치',
          describtion: '짜파게티 2개 + 파김치',
          price: '12,000 원',
        },
        {
          name: '음~ 밥해 주먹밥',
          describtion: '주먹밥 (김가루 + 밥)',
          price: '4,000 원',
        },
        {
          name: '황희찬의 황도',
          describtion: '후르츠칵테일 + 황도',
          price: '8,000 원',
        },
        {
          name: '아이슛~!크림',
          describtion: '3색 아이스크림',
          price: '6,000 원',
        },
        {
          name: '가르나쵸',
          describtion: 'DORITOS 위에 토핑과 소스를 얹어서 만들어주는 과자 나쵸',
          price: '10,000 원',
        },
        {
          name: 'HIDDEN MENU',
          describtion: '발롱도르 세트',
          price: '159,000 원',
        },
      ],
      sub: [
        {
          name: '음료수',
          describtion: '갈아만든배 / 콜라 / 제로콜라 / 사이다',
          price: '2,500 원',
        },
        {
          name: '생수',
          describtion: '',
          price: '1,500 원',
        },
      ],
    },
    takeout: false,
    profileImage: SPORT,
    posterImage: SPORT_POSTER,
  },
  {
    id: 26,
    type: '학생회 주점',
    locate: 'EP.25',
    affiliation: '차세대반도체융합공학부 학생회',
    pubName: 'śemi ázit',
    menu: {
      main: [
        {
          name: '매콤크림감바스우동',
          describtion: '(2인분)',
          price: '21,900 원',
        },
        {
          name: '대패삼겹덮밥',
          describtion: '(1~2인분)',
          price: '17,900 원',
        },
        {
          name: '냉모밀',
          describtion: '(1~2인분)',
          price: '15,900 원',
        },
      ],
      side: [
        {
          name: '불닭볶음밥',
          describtion: '',
          price: '7,900 원',
        },
        {
          name: '어묵칩',
          describtion: '',
          price: '4,900 원',
        },
        {
          name: '라면',
          describtion: '',
          price: '4,900 원',
        },
        {
          name: '호떡 아이스크림',
          describtion: '',
          price: '7,900 원',
        },
      ],
      sub: [
        {
          name: '블루 크림 소다 하이볼',
          describtion: '술커마 SIGNATURE',
          price: '5,400 원',
        },
        {
          name: '패션후르츠 하이볼',
          describtion: '술커마 SIGNATURE',
          price: '4,900 원',
        },
        {
          name: '자몽 하이볼',
          describtion: '술커마 SIGNATURE',
          price: '4,900 원',
        },
        {
          name: '음료수',
          describtion: '제로콜라 / 사이다',
          price: '2,000 원',
        },
        {
          name: '물',
          describtion: '',
          price: '1,000 원',
        },
      ],
    },
    takeout: false,
    profileImage: SEMI,
    posterImage: SEMI_POSTER,
  },
] as const;

export const BOOTH_LIST_LIKECOUNT = [
  {
    id: 1,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 2,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 3,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 4,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 5,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 6,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 7,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 8,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 9,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 10,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 11,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 12,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 13,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 14,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 15,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 16,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 17,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 18,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 19,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 20,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 21,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 22,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 23,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 24,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 25,
    likeCount: 0,
    updateCount: 0,
  },
  {
    id: 26,
    likeCount: 0,
    updateCount: 0,
  },
];
