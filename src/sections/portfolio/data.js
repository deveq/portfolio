import Image1 from "../../assets/windee1.png";
import Image2 from "../../assets/windee2.png";
import Image3 from "../../assets/wantit.png";
import Image4 from "../../assets/bookplate.png";
import Image5 from "../../assets/portfolio.png";
// all, work, study
const data = [
  {
    id: 1,
    category: ["frontend", "work"],
    image: Image1,
    title: "Windee",
    desc: "NFT 마켓 플레이스 회사 자체 개발 프레임워크인 'Frontle'을 사용한 도전적인 첫 프로젝트(SPA)",
    // demo: "http://egatortutorials.com",
    // github: "https://github.com/egattor",
    skills: ["javascript", "frontle"],
    role: [
      "프론트엔드 개발",
      "프레임워크의 생명주기 개선",
      "코드 재사용성을 향상시키기 위한 모듈화",
    ],
    extra: [
      "각 페이지를 class형으로 개발하였고 생명주기의 부재로 data fetch시 의도한 렌더링이 되지 않는 문제점이 있어 개선에 노력하였습니다.",
    ],
    learned:
      "생명주기를 구현해나가는 과정이 힘들었지만 프레임워크의 구조에 대해 배울 수 있는 좋은 경험을 할 수 있었습니다.",
  },
  {
    id: 2,
    category: ["frontend", "work"],
    image: Image2,
    title: "Basic Windee",
    desc: "NFT 마켓 플레이스. 개선된 Frontle을 이용한 두번째 프로젝트",
    demo: "https://test.windee.io",
    // github: "https://github.com/egattor",
    skills: ["javascript", "frontle"],
    role: [
      "프론트엔드 개발",
      "보안향상을 위해 캡슐화 도입",
      "STO 거래소 개발",
      "빌더, 싱글톤 등의 디자인 패턴 도입",
    ],
    extra: [
      "보안성 향상을 위해 캡슐화를 도입하였으며, 비동기 코드에 의해 느려지는 렌더링 시간을 의존성에 따라 효율적으로 진행되도록 수정하였습니다.",
    ],
    learned:
      "각 페이지별로 class 방식으로 개발하였습니다. 취약한 보안을 캡슐화를 통해 개선하였고 navbar처럼 객체 중복생성을 방지해야하는 경우에는 싱글톤을, 다양하게 확장될 가능성이 있는것들은 빌더패턴을 활용하는 등 다양한 디자인패턴을 사용해보며 배울 수 있었습니다.",
  },
  {
    id: 3,
    category: ["frontend", "work"],
    image: Image3,
    title: "Wantit - App",
    desc: "휴대폰 중고거래 플랫폼",
    demo: "https://play.google.com/store/apps/details?id=com.realseller.wantit&hl=ko&gl=US",
    // github: "https://github.com/egattor",
    skills: ["react native", "react"],
    role: [
      "지도, 클러스터링, 채팅 등 전반적인 앱 개발",
      "어드민 페이지 개발",
      "github issue를 이용한 이슈공유 및 코드리뷰",
    ],
    extra: "Github issue활용",
    learned:
      "팀원들간 중복 코드 작성 방지 및 코딩스타일 통일을 위해 코드 리뷰를 진행하였고, 발생한 이슈는 Github issue를 통해 관리하여 개발의 효율을 증대시킬 수 있었습니다.",
  },
  {
    id: 4,
    category: ["backend", "work"],
    image: Image3,
    title: "Wantit - server",
    desc: "Wantit 서비스의 채팅서버 및 웹서버",
    // demo: "http://egatortutorials.com",
    // github: "https://github.com/egattor",
    skills: ["node", "express", "socket.io", "sequelize"],
    role: ["채팅용 소켓서버 개발", "웹 서버 개발"],
    extra: "Wantit 앱개발과 함께 백엔드 개발도 진행하였습니다.",
    // 이게 안되요, 저게 안되요, 500떠요, 404떠요 ->
    // 문의 전 직접 백엔드 코드를 열어본 후 원인을 파악한 다음 전달하거나,
    // 에러발생 시 몇가지 케이스를 만들어 테스트해본 후 결과를 함께 전달하는 방법을 통해 효율 증대시킴
    learned:
      "DB 구조 작성 및 백엔드 구현한 경험을 통해, 이후 백엔드측에 API 요청 시 효율적으로 커뮤니케이션할 수 있는 방법을 배웠습니다.",
  },
  {
    id: 5,
    category: ["frontend", "study"],
    image: Image4,
    title: "BookPlate",
    desc: "도서 문장 기록 및 공유 앱",
    // demo: "http://egatortutorials.com",
    // github: "https://github.com/egattor",
    skills: ["react native", "typescript"],
    role: ["스크린의 트리구조 작성", "페이지 개발", "OCR 네이티브 모듈 작성"],
    extra:
      "타입스크립트로 작성한 사이드 프로젝트로 컴파일 단계에서 오류를 미리 포착하고, 정적인 타입 지정을 통해 함수 및 코드의 명확한 의도를 표현할 수 있어 개발의 효율이 증가하였습니다",
    learned:
      "기존에 JSDoc을 이용하여 함수를 정의할 경우 타입에 대한 재사용성이 높지 못했지만, 타입스크립트를 이용하여 타입 및 인터페이스 선언부를 JSDoc과 분리하여 코드의 가독성을 및 관리의 용이성을 높일 수 있었습니다",
  },
  {
    id: 8,
    category: ["frontend", "study"],
    image: Image5,
    title: "Portfolio web",
    desc: "포트폴리오 웹 사이트",
    // demo: "http://egatortutorials.com",
    // github: "https://github.com/egattor",
    skills: ["react"],
    role: [""],
    extra: "",
    learned: "",
  },
  // {
  //   id: 6,
  //   category: ["frontend", "study"],
  //   image: Image1,
  //   title: "next portfolio",
  //   desc: "Next.js로 만든 포트폴리오 클론코딩",
  //   demo: "https://next-portfolio-deveq.vercel.app/projects",
  //   github: "https://github.com/deveq/next-portfolio.git",
  //   skills: ["next", "tailwind"],
  //   role: [""],
  //   extra: "",
  //   learned: ""
  // },
  // {
  //   id: 7,
  //   category: ["frontend", "study"],
  //   image: Image1,
  //   title: "Animal NFT",
  //   desc: "React로 만든 NFT 마켓",
  //   github: "https://github.com/deveq/animal-nft-web",
  //   skills: ["react", "web3", "solidity"],
  //   role: ["프론트프프프프프프프프프"],
  // },
];

export default data;
