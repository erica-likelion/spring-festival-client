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
import INSURANCE_POSTER from '@/assets/images/booth/insurance-poster.webp';
import SEMI from '@/assets/images/booth/semiconductor.webp';
import SEMI_POSTER from '@/assets/images/booth/semiconductor-poster.webp';

export const BOOTH_LIST = [
  {
    id: 1,
    affiliation: '미디어학과 학생회',
    pubName: '차린건 여정도 지만',
    menu: {
      main: ['관자 버터 야채 볶음', '무뼈 국물 닭발', '오징어&골뱅이 무침'],
      side: ['삼겹두부김치', '콘치즈', '김가루 주먹밥'],
      sub: [],
    },
    takeout: true,
    profileImage: MEDIA,
    posterImage: MEDIA_POSTER,
  },
  {
    id: 2,
    affiliation: '전자공학부 학생회',
    pubName: '폭싹 취EE했수다',
    menu: {
      main: [
        '대패숙주볶았수다 - 대패 삼겹과 숙주를 재료로 한 대표메뉴',
        '닭목살 구웠수다 - 닭목살과 파를 불향을 입혀 구운 시그니처 메뉴',
        '오돌뼈볶았수다 - 매콤한 오돌뼈와 파를 함께 볶고 불향을 입힌 감초 메뉴',
      ],
      side: [
        '해장라면끓였수다 - 숙주와 파, 고추를 넣어 조리한 해장 라면',
        '캔땄수다 - 술자리 끝을 장식하는 황도와 파인애플',
      ],
      sub: [],
    },
    takeout: false,
    profileImage: ELECTRON,
    posterImage: ELECTRON_POSTER,
  },
  {
    id: 3,
    affiliation: '기계공학과 학생회',
    pubName: '나는 술로',
    menu: {
      main: [
        '나만 ‘지쿄바’ : 닭갈비의 고장 사람이 만든 특제 양념소스를 이용한 닭다리살 요리.',
        '‘삼겹’먹고 나랑 사겹 : 만능간장소스를 이용한 대패삼겹살 숙주볶음. 여기에 불맛까지 더하니 금상첨화.',
      ],
      side: [
        '왜 자꾸 ‘튀ㅇ김’? : 케이준 양념감자와 테이터토츠, 가라아게까지 더했다!',
        '언제든지 너‘라면’: 라면과 물만두의 만남. 술과 해장을 동시에?',
        '고백해볼‘레 몬’난나지만 : 레몬가루와 레몬즙을 이용한 원액을 제공, 소주와 섞어 마시면 이것은 음료수인가 술인가.',
        '너랑 ‘황 도’망칠까? : 술자리에서 시키면 욕먹지만 사실 모두 사랑하는 대표 메뉴',
      ],
      sub: [],
    },
    takeout: false,
    profileImage: MACHINE,
    posterImage: MACHINE_POSTER,
  },
  {
    id: 4,
    affiliation: '에너지바이오학과 학생회',
    pubName: '에바레스트 산악회',
    menu: {
      main: ['홍관식 불막창', '윤금희 김치전', '양복자 오뎅탕'],
      side: ['김치볶음밥', '참기름물만두', '아이스황도', '라면'],
      sub: [],
    },
    takeout: false,
    profileImage: ENERGY,
    posterImage: ENERGY_POSTER,
  },
  {
    id: 5,
    affiliation: '경제학부 학회 수평사고',
    pubName: '그 시절 우리가 사랑했던 수사',
    menu: {
      main: [
        '우삼겹숙주볶음: 고소한 우삼겹과 아삭한 숙주를 간장 베이스로 볶아낸 안주',
        '오돌뼈: 매콤하게 양념된 돼지 연골 볶음 안주',
        '계란토스트: 달걀과 식빵을 부드럽게 구워낸 안주',
      ],
      side: [
        '주먹밥: 재료를 넣어 동그랗게 만든 한입 크기의 간편 밥 요리',
        '해장라면: 얼큰한 국물로 속을 풀어주는 매콤한 라면',
        '콘치즈: 달콤한 옥수수에 치즈를 얹어 노릇하게 구운 고소한 사이드 메뉴',
      ],
      sub: [],
    },
    takeout: false,
    profileImage: HORIZON,
    posterImage: HORIZON_POSTER,
  },
  {
    id: 6,
    affiliation: '약학대학 학생회',
    pubName: '냥약랜드',
    menu: {
      main: [
        '우삼겹숙주볶음: 간장과 굴소스 볶음',
        '치즈김치볶음밥: 시판 김치볶음밥에 치즈 추가',
        '모듬소세지: 시판 소세지 조리',
      ],
      side: [
        '어묵탕: 시판 어묵탕 밀키트',
        '라면: 진라면(매운맛)',
        '팽이베이컨말이: 베이컨으로 팽이버섯을 말아서 구워서 조리',
        '아이스황도: 사이다+황도캔',
        '나초&치즈소스: 나초과자에 치즈소스 뿌려서 서빙',
        '[기타]',
        '솜사탕',
      ],
      sub: [],
    },
    takeout: false,
    profileImage: PARMACY,
    posterImage: PARMACY_POSTER,
  },
  {
    id: 7,
    affiliation: '배터리소재화학공학과 학생회',
    pubName: '백설공주와 화목한 난쟁이들',
    menu: {
      main: [
        '사골마라탕 - 너무 예뻐져도 놀라지 마라탕',
        '닭다리살구이 - 백설공주가 직접 사냥한 닭구이',
        '우삼겹숙주볶음 - 잠자는 공주 깨우삼겹숙주볶음',
      ],
      side: [
        '스팸감자전 - 난쟁이가 캐온 스팸감자전',
        '숙주라면 - 내가 배화공주라면~?',
        '불닭볶음면 - 맵부심 왕비의 불닭볶음면',
        ', 타코나쵸 - 난쟁이의 비상식량',
      ],
      sub: [],
    },
    takeout: false,
    profileImage: CHEMICAL,
    posterImage: CHEMICAL_POSTER,
  },
  {
    id: 8,
    affiliation: '컴퓨터학부 학생회',
    pubName: '전 어때요',
    menu: {
      main: [
        '부추전 - 부침가루, 튀김가루, 전분가루, 오징어, 부추를 사용하여 구운 전',
        '두부김치 - 김치, 대패삼겹살, 두부, 마늘을 메인으로 조미료(고춧가루, 설탕, 올리고당, 간장, 참기름 등)와 함께 조리한 메뉴',
        '대패삼겹숙주볶음 - 대패삼겹살, 숙주를 메인으로 양파, 청양고추가 곁들어지고 조미료(다진마늘, 진간장, 맛술, 굴소스, 설탕 등)와 볶은 메뉴',
      ],
      side: [
        '김치전 - 부침가루, 튀김가루, 전분가루, 오징어, 김치를 사용하여 구운 전',
        '옥수수전 - 옥수수콘, 튀김가루, 연유를 사용하여 구운 전',
        '순대볶음 - 찰순대, 깻잎, 양파, 양배추를 메인으로 조미료(설탕, 고춧가루, 진간장, 올리고당, 고추장, 다진마늘 등)와 함께 볶은 메뉴',
        '황도 - 황도 통조림을 사용하여 접시에 담아 제공하는 메뉴',
        '아이스크림 콘 - 아이스크림 믹스, 콘 과자를 사용하여 과자 위에 아이스크림을 얹어 주는 메뉴',
        '뻥스크림 - 아이스크림 믹스, 현미 뻥튀기를 사용하여 뻥튀기 사이에 아이스크림을 얹어 주는 메뉴',
        '컴퓨터아이스크림의정석 - 아이스크림 믹스, 초코쉘, 그레놀라 등으로 아이스크림을 접시에 담아주는 메뉴',
        '매실원액, 홍초원액, 헛개수원액 - 각 원액을 소주 1병(매실,홍초) 혹은 물 500ml(헛개수)에 타주는 메뉴',
        '원액 3종 세트 - 원액 3개를 1세트로 주는 메뉴',
      ],
      sub: [],
    },
    takeout: false,
    profileImage: COMPUTER,
    posterImage: COMPUTER_POSTER,
  },
  {
    id: 9,
    affiliation: '교통물류공학과 학생회',
    pubName: 'Kㅛ통에Bㅏㅂ과 술 Oㅣㅆ어요',
    menu: {
      main: [
        '닭목살 소금구이 - 이정후 선수도 메이저리그에서 그리워하는 맛',
        '닭발 + 치즈떡구이 - 오타니 쇼헤이 선수가 말하다 "우마이"',
        '훈제오리 + 부추무침 - 이대호 선수도 이거 먹고 복귀각 세우게 하는 그 맛',
      ],
      side: [
        '곱창볶음 - 김도영 선수가 말하다. "곱창아 니땀시 살어야"',
        '치즈 계란말이 - 치즈와 함께 늘어나는 우리 구단 승률',
        '해물라면 - 우리 구단이 질 때면 내 속 대신 끓어주는 해물들',
        '버터갈릭 감자튀김 - 이 튀김 먹고나면 우리 구단 도루할 때 잘 튀튀',
      ],
      sub: [],
    },
    takeout: true,
    profileImage: TRAFFIC,
    posterImage: TRAFFIC_POSTER,
  },
  {
    id: 10,
    affiliation: '국방전략기술공학과 학생회',
    pubName: '마구먹고 마구마셔',
    menu: {
      main: ['빠따꼬치-순한맛 닭꼬치', '두부삼겹도루치기-두부삼겹김치', '육회말 투아웃-육회'],
      side: [
        '불빠따꼬치-매운맛 닭꼬치',
        '염통빠따세트-염통+닭꼬치',
        '빠따꼬치세트-매운맛 순한맛 반반',
        '염통빠따꼬치-염통꼬치',
        '축구보단야구가나쵸-나쵸',
        '이대호홈런볼아이스크림-홈런볼이 들어간 아이스크림',
        '류현진라면-라면',
      ],
      sub: [],
    },
    takeout: true,
    profileImage: STATEGY,
    posterImage: STATEGY_POSTER,
  },
  {
    id: 11,
    affiliation: '로봇공학과 학생회',
    pubName: '(주) 로봇산업',
    menu: {
      main: ['레전드 닭꼬치 16,000원', '레전드 훈제오리 18,000원', '레전드 냉제육 18,000원'],
      side: [
        '레전드 닭발 18,000원',
        '레전드 김치찌개 13,000원',
        '레전드 어묵탕 15,000원',
        '레전드 순두부 해장라면 7,000원',
        '레전드 감자튀김 (뿌링클 시즈닝 +1,000원) 8,000원',
        '레전드 크리스피 순살 치킨 14,000원',
        '레전드 설탕토마토 5,000원',
        '레전드 빙수 6,000원',
        '레전드 골뱅이 소면 13,000원',
        '레전드 계란찜 4,000원',
        '레전드 주먹밥 4,000원',
      ],
      sub: [
        '중장비 콤보세트 28,000원',
        '- 숯불 닭꼬치, 어묵탕',
        '야간 작업 야식세트 23,000원',
        '- 닭발, 주먹밥, 계란찜',
        '조기퇴근세트 27,000원',
        '- 냉제육, 골뱅이소면',
      ],
    },
    takeout: false,
    profileImage: ROBOT,
    posterImage: ROBOT_POSTER,
  },
  {
    id: 12,
    affiliation: '융합시스템공학과 학생회',
    pubName: '시선',
    menu: {
      main: [
        '야끼우동',
        '나가사끼 짬뽕',
        '대패숙주볶음',
        '{사이드메뉴]',
        '콘치즈',
        '계란말이',
        '황도',
      ],
      side: [],
      sub: [],
    },
    takeout: true,
    profileImage: CONVERGENCE,
    posterImage: CONVERGENCE_POSTER,
  },
  {
    id: 13,
    affiliation: '지능정보양자공학전공 학생회',
    pubName: '냥자역학: 주량측정불가',
    menu: {
      main: [
        '대패삼겹두부김치',
        '소세지야채볶음',
        '가라아게 - 케이준 감자튀김과 가라아게 함께 제공',
      ],
      side: [
        '묵사발',
        '황도',
        '주먹밥(셀프)',
        'DIY하이볼 - 손님이 소주 가져오면 시럽+토닉워터 타주는',
      ],
      sub: [],
    },
    takeout: true,
    profileImage: INTELLIGENCE,
    posterImage: INTELLIGENCE_POSTER,
  },
  {
    id: 14,
    affiliation: '건설환경공학과 학생회',
    pubName: '13주차 술체역학',
    menu: {
      main: [
        '보쌈',
        '김치전',
        '오뎅탕, 매운오뎅탕 - 오뎅탕 및 매운오뎅탕의 경우, 우동사리 추가 시 2000원 추가)',
      ],
      side: [
        '공대 3대세트 - 돈까스, 공대라면, 용암볶음밥 - 용암볶음밥의 경우 치즈가 용암처럼 흘러내림, 3종을 세트로 모두 시킬 시 더 쌈',
        '나쵸 (+치즈소스), 콘치즈, 모둠튀김, 소떡소떡 - 소떡소떡의 경우 테이크아웃으로 들고다니면서 먹을 수 있음',
      ],
      sub: [],
    },
    takeout: false,
    profileImage: ARCHITECTURE,
    posterImage: ARCHITECTURE_POSTER,
  },
  {
    id: 15,
    affiliation: '보험계리학과 학생회',
    pubName: '냉3 4먹으러 5것지',
    menu: {
      main: ['냉삼 200g (+ 김치 콩나물 볶음 제공)', '우삼겹 숙주볶음 200g', '김치찌개'],
      side: [
        '소세지 3줄',
        '면사리 추가 (김치찌개에 추가)',
        '공깃밥',
        '마시멜로우',
        '황도',
        '음료수',
      ],
      sub: [],
    },
    takeout: false,
    profileImage: 'N',
    posterImage: INSURANCE_POSTER,
  },
  {
    id: 16,
    affiliation: '중앙동아리 MAHA',
    pubName: '그시절 캔마하(CANMAHA)',
    menu: {
      main: [
        '지존 통마늘훈제삼겹살 - 통마늘과 훈제삼겹살을 에어프라이기에 같이 구워 판매',
        '뽀대작살 삼겹비빔면 - 삼겹살과 비빔면을 삶아 함께 판매',
        '안습매콤 떡볶이세트 - 떡볶이에 튀김을 에어프라이어에 조리해 함께 판매',
      ],
      side: [
        '오나전 반반전 - 김치전과 감자전을 동시에 반씩 구운 후 위에 고추, 파 등을 올려 판매',
        '대박 소문난 해물라면 - 라면과 해물믹스를 같이 끓여 판매',
        '지대므흣 워킹타코 - 시판 도리토스 위에 햄, 양파, 토마토, 콘을 올려 판매',
        '뷁설탕 토스트 - 토스트기에 구운 식빵을 설탕과 크림을 올려 판매',
        '엽기 하이볼 메이커 - 큰 물통에 아이스티와 슬라이스레몬을 넣어 각자 만들어 마실 수 있게 판매',
      ],
      sub: [],
    },
    takeout: true,
    profileImage: MAHA,
    posterImage: MAHA_POSTER,
  },
  {
    id: 17,
    affiliation: '인공지능학과 학생회',
    pubName: '나 지피틴데 안 추ㅣㅎㅆ다',
    menu: {
      main: [
        '항정삼합 : 항정업! 두부업! 김치업! 삼합업! (항정삼합)',
        '오징어 김치전 : 안먹으면 마담에게 싹싹 빌어야하는 오징어싹싹김치전',
        '우삼겹숙주볶음 : 현숙이가 지숙이 머리볶아주다 잘못 볶은 우삼겹숙주볶음',
      ],
      side: [
        '얼큰오뎅탕 : 홍박사의 얼큰오뎅탕을 아세요?',
        '라면 : 파괴왕의 숙취 파괴 라면',
        '치즈계란말이 : 관식이의 폭싹 계란말았수다',
        '모듬소세지(사이드감튀) : 봉쥬르 모듬 소세쥬 드 라따뚜이',
        '수제포도시럽, 수제미숫가루원액',
      ],
      sub: [],
    },
    takeout: false,
    profileImage: AI,
    posterImage: AI_POSTER,
  },
  {
    id: 18,
    affiliation: '해양융합공학과 학생회',
    pubName: '폭주어선',
    menu: {
      main: [
        '- 숙성연어회(22900원): 꿈연에서 직접 공수해온 곤부지메 방식으로 숙성한 연어. *곤부지메란?* 일본의 전통적인 요리 기법으로, 생선을 다시마에 감싸 숙성시키는 방법.',
        '- 참치타다끼(21900원): 겉만 익히고 토치로 불맛을 내어 비린맛 없이 부드러운 참치타다끼. 단, 토치 사용이 불가능하면 통깨를 입혀 겉만 살짝 구운 부드러운 참치타다끼.',
        '- 모둠세트(22900원): 숙성연어회와 참치타다끼가 같이나가는 모둠.',
      ],
      side: [
        '- 회덮밥(7900원): 참치회를 풍부히 잘라 야채와 특제소스와 함께 비벼먹는 맛있는 덮밥',
        '- 대새(새우대가리)라면(6900원): 흰다리새우머리로 육수를 내어 맛있게 끓여낸 라면',
        '- 황도&후르츠(6900원): 시원한 탄산수에 실한황도와 후르츠를 넣은 상쾌한 후식',
        '- 콘치즈(5900원): 옥수수에 자연산치즈와 마요네즈를 더해 고소하고 달콤한 사이드메뉴.',
      ],
      sub: [],
    },
    takeout: true,
    profileImage: MARINE,
    posterImage: MARINE_POSTER,
  },
  {
    id: 19,
    affiliation: '건설환경공학과 OCC 학회',
    pubName: '닭치고 한 잔',
    menu: {
      main: [
        '파닭전 - 대파와 닭고기를 바삭하게 부쳐낸 고소한 한국식 전',
        '닭목살구이 - 탱글한 닭목살을 구워낸 별미',
        '떡도리탕 - 매콤한 순살 닭과 쫄깃한 떡이 어우러진 매콤한 국물 요라',
      ],
      side: [
        '불닭 오믈렛 - 부드러운 오믈렛 속 매콤한 불닭과 달콤한 콘치즈가 가득~',
        '닭똥집볶음 - 쫄깃한 닭똥집과 신선한 야채가 어우러진 담백한 볶음 요리',
        '둥지튀김 - 바삭한 감자튀김 위에 가라아게를 얹은 둥지',
        '눈꽃닭교자 - 닭고기로 꽉 찬 눈꽃만두, 파닭전 간장에 찍어먹으면 별미~',
        '초계국수 - 시원한 육수에 살얼음까지~ 깔끔하고 상쾌한 국수',
        '계 맛있는 라면 - 진한 국물에 숙주와 닭가슴살을 얹은 라면',
        '만두계란탕 - 부드러운 계란과 만두가 어우러진 깔끔한 계란탕',
        '아이스크림 - 달콤한 바닐라 아이스크림. 주문량이 많으면 뭔가 있을지도~?',
      ],
      sub: [],
    },
    takeout: false,
    profileImage: OCC,
    posterImage: OCC_POSTER,
  },
  {
    id: 20,
    affiliation: '바이오신약융합학부 학생회',
    pubName: '모여봐요 술꾼의 숲',
    menu: {
      main: [
        '보쌈김치 - 보쌈이랑 김치랑 친구했큐룽♪',
        '우삼겹숙주볶음 - 여울’s PICK 우삼숙…★',
        '치즈불닭 - 도루묵씨의 화끈한 치즈불닭',
      ],
      side: [
        '순두부라면 - 라면끓였따우 순둡넜띠',
        '순두부계란탕 - 콩돌밤돌이 끓인 순두부계란탕',
        '콘치즈 - 달콤치즈 옥수수 온천',
        '닭꼬치 - 꼬치 꼬치 묻지 마요, 우리 닭꼬치 맛있으니까-_-',
        '매실빛 노을(매실 베이스) - 과일주(메실) 한잔, 파샵파샵!',
        '새벽의 별똥별(망고 베이스) - 과일주(망고) 한잔, 파샵파샵!',
        '화채 - ‘시원하고 달달해요, 뽀드득!’ 뽀야미의 뽀드득 화채',
        '나쵸&소스 - 빠삭빠삭 마을나쵸',
      ],
      sub: [],
    },
    takeout: true,
    profileImage: BIO,
    posterImage: BIO_POSTER,
  },
  {
    id: 21,
    affiliation: '스마트융합공학부 학생회',
    pubName: "이랏'스융'마세",
    menu: {
      main: [
        '오빠 난 "오뎅? 탕"탕',
        '- 따끈한 국물 한 입에 피로가 풀리는 마법.',
        '탕탕 울리는 맛에, 오늘도 오뎅에게 마음 뺏긴다.',
        '"김치전"나 맛있다',
        '- 비 오는 날엔 나만 찾아줘.',
        '바삭함과 매콤함을 품은 김치전, 자존감 만렙 간식!',
        '심장말고 "불막창"을 바쳐라',
        '- 불타는 입맛을 위한 경건한 선택.',
        '고소하고 쫄깃한 불막창, 이건 진심을 담아 먹어야 해.',
      ],
      side: [
        '쵸코민또 요리모 "대.패.숙.주"',
        '- 지금까지 이런맛은 없었다 이것은 대패인가 숙주인가 "대패숙주볶음"',
        '내가 사장이"라면"',
        '- 사장도 반할 수밖에 없는 한입의 힘! 국룰의 맛!',
        '"주먹밥" 랄프',
        '- 랄프가 만든 왕 큰 "주먹밥"',
        '피곤한 하루, 허기진 마음을 달래줄 힐링 덩어리.',
        '황금연휴 같은 달달한 "연유토스트"',
        '- 입안 가득 퍼지는 달콤함.',
        '빵 위에 눈처럼 내린 연유, 이건 휴식이야. 당 충전 완료.',
        '쟤가 아니라 "계란말이"야',
        '-말랑말랑하고 촉촉한 그 계란말이.',
        '그냥 계란이 아니야, ‘걔’란말이야. 한 입에 반할 걸?',
        '그라"샤~베트"',
        '- 샤르르 녹는 시원한 매력에 감사하게 돼요.',
        '파인애플 향 가득한 얼음의 여신, 디저트의 피날레.',
      ],
      sub: [],
    },
    takeout: true,
    profileImage: SMART,
    posterImage: SMART_POSTER,
  },
  {
    id: 22,
    affiliation: '건축학부 학생회',
    pubName: '홍문으로들었소',
    menu: {
      main: ['제육 볶음', '숙주 대패볶음', '두부 김치'],
      side: ['김치전', '묵사발', '주먹밥', '불라면', '황도'],
      sub: [],
    },
    takeout: false,
    profileImage: ARCHITECTURE,
    posterImage: ARCHITECTURE_POSTER,
  },
  {
    id: 23,
    affiliation: '디자인대학 연합',
    pubName: '디대는 못말려! - 오늘도 과제는 미제출?! 전설의 주점 대작전!',
    menu: {
      main: [
        '닭갈비 - A+보다 짜릿한 닭갈비 18000원',
        '(치즈추가 2000원)',
        '무뼈닭발 - 주먹 돌리기! 봉미선의 분노 무뼈 닭발 18000원',
      ],
      side: [
        '묵사발 - 두목..아 원장님이 말아주는 묵사발 12500원',
        '두부김치 - 와르르 두부김치 12500원',
        '콘치즈 액션빔으로 녹인 콘치즈 7000원',
        '오뎅탕 - 신형만’s 최애 안주 오뎅탕 (8000원)',
        '짜계치 - 부리부리 짜계치 8000원',
        '셀프주먹밥 - 훈이(셀프주먹밥) 3000원',
      ],
      sub: ['닭갈비 + 콘치즈 + 랜덤음료수 25000원', '닭갈비 + 오뎅탕 + 랜덤음료수 26000원'],
    },
    takeout: true,
    profileImage: DESIGN,
    posterImage: DESIGN_POSTER,
  },
  {
    id: 24,
    affiliation: '산업경영공학과 학생회',
    pubName: '응답하라 일구구산',
    menu: {
      main: [
        '🥓 삼겹숙주볶음',
        ': 삼겹은 기름지고, 너는 내 마음을 지져',
        '🌶 로제 떡볶이',
        ': “내 맘은 크림 같았는데, 넌 계속 맵게만 굴더라?”',
        '🍢 꼬소염세트 (꼬치+소세지+염통)',
        ': “심장을 쿡 찌르는 맛이랄까…꼬치에 꽂히는 건 줄 알았는데, 너였어.”',
      ],
      side: [
        '🍜 볶음우동',
        ': “우동처럼 오동통 불어버린 설레는 내 맘“',
        '🍅 연유토마토',
        ': “연유가 토마토에게 스며들듯 나도 너에게 스며들어…“',
        '🍟 감튀 + 팝콘치킨',
        ': “같이 먹는 순간, 추억도 바삭해져.”',
        '🍜 라면',
        ': “그 밤에 먹던 라면 기억나? 아직도 끓고 있어, 내 마음.”',
        '🧀 콘치즈',
        ': “우리 사이도 치즈처럼… 조금만 더 늘어났으면.”',
        '🥠 나쵸 프레첼',
        ': 나의 쵸크쵸크한 프레첼~',
        '염통꼬치',
        ': 염통꼬치 8개',
      ],
      sub: [],
    },
    takeout: false,
    profileImage: INDUSTRIAL,
    posterImage: INDUSTRIAL_POSTER,
  },
  {
    id: 25,
    affiliation: '예체능대학 학생회',
    pubName: '뭉쳐야 예체대',
    menu: {
      main: [
        '돼지 GOAL~비 + 주먹밥 / 양념돼지갈비와 주먹밥 세트 / 21,900원',
        '육회 상쾌 통쾌 / 육회 / 18,900원',
        '닭파닭파 / 왕 닭꼬치 / 3개 : 16,900원 , 6개 : 29,900원',
      ],
      side: [
        '호~오우! 뎅탕 / 오뎅탕 / 8,000원',
        '마이콘 치즈 / 콘치즈 / 8,000원',
        '씩씩한 점보 짜파게티 & 파김치 / 짜파게티2개 + 파김치 / 12,000원',
        '아이슛~!크림 / 3색 아이스크림 / 6,000원',
        '황희찬의 황도 / 후르츠칵테일 + 황도 / 8,000원',
        '음~밥해 주먹밥 / 주먹밥 (김가루+밥) / 4,000원',
        '가르나쵸 / DORITOS 위에 토핑과 소스를 얹어서 만들어주는 과자 나쵸 / 10,000원',
      ],
      sub: [],
    },
    takeout: false,
    profileImage: SPORT,
    posterImage: SPORT_POSTER,
  },
  {
    id: 26,
    affiliation: '차세대반도체융합공학부 학생회',
    pubName: 'śemi ázit',
    menu: {
      main: ['매콤크림감바스우동 - 23,900', '대패삼겹덮밥 - 17,900', '냉모밀 - 15,900'],
      side: [
        '불닭볶음밥 - 7,900',
        '라면 - 4,900',
        '어묵칩 - 4,900',
        'SIGNATURE',
        '술커마(자몽 하이볼 - 4,900 / 패션후르츠 하이볼 - 4,900 / 블루 크림 소다 하이볼 - 5,400)',
        '호떡아이스크림 - 7,900',
      ],
      sub: [],
    },
    takeout: true,
    profileImage: SEMI,
    posterImage: SEMI_POSTER,
  },
] as const;

export const BOOTH_LIST_LIKECOUNT = [
  {
    id: 1,
    name: '차린건 여정도 지만',
    likeCount: 0,
  },
  {
    id: 2,
    name: '폭싹 취EE했수다',
    likeCount: 0,
  },
  {
    id: 3,
    name: '나는 술로',
    likeCount: 0,
  },
  {
    id: 4,
    name: '에바레스트 산악회',
    likeCount: 0,
  },
  {
    id: 5,
    name: '그 시절 우리가 사랑했던 수사',
    likeCount: 0,
  },
  {
    id: 6,
    name: '냥약랜드',
    likeCount: 0,
  },
  {
    id: 7,
    name: '백설공주와 화목한 난쟁이들',
    likeCount: 0,
  },
  {
    id: 8,
    name: '전 어때요',
    likeCount: 0,
  },
  {
    id: 9,
    name: 'Kㅛ통에Bㅏㅂ과 술 Oㅣㅆ어요',
    likeCount: 0,
  },
  {
    id: 10,
    name: '마구먹고 마구마셔',
    likeCount: 0,
  },
  {
    id: 11,
    name: '(주) 로봇산업',
    likeCount: 0,
  },
  {
    id: 12,
    name: '시선',
    likeCount: 0,
  },
  {
    id: 13,
    name: '냥자역학: 주량측정불가',
    likeCount: 0,
  },
  {
    id: 14,
    name: '13주차 술체역학',
    likeCount: 0,
  },
  {
    id: 15,
    name: '냉3 4먹으러 5것지',
    likeCount: 0,
  },
  {
    id: 16,
    name: '그시절 캔마하(CANMAHA)',
    likeCount: 0,
  },
  {
    id: 17,
    name: '나 지피틴데 안 추ㅣㅎㅆ다',
    likeCount: 0,
  },
  {
    id: 18,
    name: '폭주어선',
    likeCount: 0,
  },
  {
    id: 19,
    name: '닭치고 한 잔',
    likeCount: 0,
  },
  {
    id: 20,
    name: '모여봐요 술꾼의 숲',
    likeCount: 0,
  },
  {
    id: 21,
    name: "이랏'스융'마세",
    likeCount: 0,
  },
  {
    id: 22,
    name: '홍문으로들었소',
    likeCount: 0,
  },
  {
    id: 23,
    name: '디대는 못말려! - 오늘도 과제는 미제출?! 전설의 주점 대작전!',
    likeCount: 0,
  },
  {
    id: 24,
    name: '응답하라 일구구산',
    likeCount: 0,
  },
  {
    id: 25,
    name: '뭉쳐야 예체대',
    likeCount: 0,
  },
  {
    id: 26,
    name: 'śemi ázit',
    likeCount: 0,
  },
] as const;
