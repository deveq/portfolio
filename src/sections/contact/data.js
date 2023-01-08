import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { ReactComponent as Kakao } from "../../assets/kakao.svg";
import { ReactComponent as Velog } from "../../assets/velog.svg";

const data = [
  {
    id: 1,
    icon: <HiOutlineMail />,
    link: "mailto:deveq@kakao.com",
    title: "email",
  },
  // {
  //   id: 2,
  //   icon: <RiMessengerLine />,
  //   link: "https://www.messenger.com/t/100087217880007",
  // },
  {
    id: 3,
    icon: <Kakao width={24} height={24} />,
    link: "https://open.kakao.com/o/smNXdLXe",
    title: "kakao",
  },
];

export default data;
