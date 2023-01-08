import { BsGithub } from "react-icons/bs";
import { IoCodeSlashOutline } from "react-icons/io5";
import { ReactComponent as Velog } from "../../assets/velog.svg";

const data = [
  {
    id: 1,
    icon: <IoCodeSlashOutline />,
    title: "BOJ",
    desc: "Silver 2",
  },
  {
    id: 2,
    icon: <BsGithub />,
    title: "Github",
    desc: "Total 800+ commits, 2022",
  },
  {
    id: 3,
    icon: <Velog width={20} height={20} />,
    title: "Velog",
    desc: "40+ posts",
  },
];

export default data;
