import { FaServer } from "react-icons/fa";
import { AiFillAppstore, AiFillHtml5 } from "react-icons/ai";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { DiJavascript1 } from "react-icons/di";

// web, app, backend, etc

const data = [
  {
    id: 1,
    icon: <AiFillHtml5 />,
    title: "Frontend Development",
    desc: "React.js, Next.js, Vanilla.js, styled-components, TailwindCSS, Web3.js",
  },
  {
    id: 2,
    icon: <HiDevicePhoneMobile />,
    title: "App Development",
    desc: "React Native, Android, iOS",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Node.js, Express, Socket.io, Sequelize",
  },
  {
    id: 4,
    icon: <DiJavascript1 />,
    title: "Languages",
    desc: "Javascript, Typescript, Java, Kotlin, Objective-C",
  },
];

export default data;
