import { AiFillGithub } from "react-icons/ai";
import { ReactComponent as Velog } from "../../assets/velog.svg";
import { ReactComponent as Kakao } from "../../assets/kakao.svg";

const data = [
  {
    id: 1,
    link: "https://open.kakao.com/o/smNXdLXe",
    icon: <Kakao width={15} height={15} />,
    title: "카카오톡 오픈채팅",
  },
  {
    id: 2,
    link: "https://velog.io/@deveq",
    icon: <Velog width={15} height={15} />,
    title: "Velog",
  },
  {
    id: 3,
    link: "https://github.com/deveq",
    icon: <AiFillGithub />,
    title: "Github",
  },
];

export default data;
