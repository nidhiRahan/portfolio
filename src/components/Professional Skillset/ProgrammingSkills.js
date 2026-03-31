import classes from "./programmingSkills.module.css";
import {
  CPP,
  JavaScript,
  MongoDB,
  NodeJs,
  Python,
  ReactJS,
  Redux
} from "../asset/svg/svg";
import { useSelector } from "react-redux";

const skills = [
  { name: "C++", Icon: CPP },
  { name: "JavaScript", Icon: JavaScript },
  { name: "React", Icon: ReactJS },
  { name: "Node.js", Icon: NodeJs },
  { name: "MongoDB", Icon: MongoDB },
  { name: "Python", Icon: Python },
  { name: "Redux", Icon: Redux }
];

const ProgrammingSkills = () => {
  const uiColor = useSelector(state => state.uiColor);
  const nonThemeColor = useSelector(state => state.nonThemeColor);

  return (
    <div className={classes.mainCard}>
      <h1 style={{ color: nonThemeColor }}>
        Programming <span style={{ color: uiColor }}>SkillSet</span>
      </h1>

      <div className={classes.skillSetCard}>
        {skills.map(({ name, Icon }, index) => (
          <div
            className={classes.skillItem}
            style={{ borderColor: uiColor }}
            key={index}
          >
            <Icon />
            <span
              className={classes.skillName}
              style={{ color: nonThemeColor }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingSkills;
