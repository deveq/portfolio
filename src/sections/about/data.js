import { BsGithub } from "react-icons/bs";
import { IoCodeSlashOutline } from "react-icons/io5";
import { ReactComponent as Velog } from "../../assets/velog.svg";

const data = [
  {
    id: 1,
    icon: <BsGithub />,
    title: "Github",
    desc: "Total 800+ commits, 2022",
    link: "https://github.com/deveq",
  },
  {
    id: 2,
    icon: <IoCodeSlashOutline />,
    title: "BOJ",
    desc: "Silver 2",
    link: "https://www.acmicpc.net/user/fleflefle1991",
  },
  {
    id: 3,
    icon: <Velog width={20} height={20} />,
    title: "Velog",
    desc: "40+ posts",
    link: "https://velog.io/@deveq",
  },
];

export default data;
