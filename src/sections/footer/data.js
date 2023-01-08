import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

import { ReactComponent as Kakao } from "../../assets/kakao.svg";
import { ReactComponent as Velog } from "../../assets/velog.svg";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#skills", title: "Skills" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

// 카톡, 벨로그, 깃허브,
export const socials = [
  {
    id: 1,
    link: "https://open.kakao.com/o/smNXdLXe",
    icon: <Kakao width={15} height={15} />,
    title: "Kakao",
  },
  {
    id: 2,
    link: "https://velog.io/@deveq",
    icon: <Velog width={15} height={15} />,
    title: "Velog",
  },
  {
    id: 4,
    link: "https://github.com",
    icon: <AiFillGithub />,
    title: "Github",
  },
];
