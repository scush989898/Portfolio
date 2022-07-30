import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JavaScript",
    img: imgJS,
  },
  {
    title: "React",
    img: imgReact,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },

  {
    title: "Node JS",
    img: imgNode,
  },
  { title: "TypeScript", img: SiTypescript },
  { title: "Docker", img: FaDocker },
  { title: "Git", img: FaGitAlt },
  { title: "Python", img: FaPython },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "MongoDb", img: SiMongodb },
];
