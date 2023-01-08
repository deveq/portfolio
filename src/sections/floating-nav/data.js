import { AiFillHome, AiFillAppstore, AiFillMessage } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";

const data = [
  { id: 1, link: "#", icon: <AiFillHome />, title: "Home" },
  { id: 2, link: "#about", icon: <BsPersonFill />, title: "About" },
  {
    id: 3,
    link: "#skills",
    icon: <MdHomeRepairService />,
    title: "Skills",
  },
  { id: 4, link: "#portfolio", icon: <AiFillAppstore />, title: "Works" },
  { id: 5, link: "#contact", icon: <AiFillMessage />, title: "Contact" },
];

export default data;
