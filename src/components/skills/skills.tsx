import styles from "./skills.module.scss";
export const Skills = () => {
  const skills = [
    {
      skillArea: "UI Web Technologies",
      platforms: ["HTML", "DHTML", "JavaScript(ES6)", "AJAX", "JSON", "CSS"],
    },
    {
      skillArea: "Mobile App Development",
      platforms: ["React Native"],
    },
    {
      skillArea: "JavaScript Lib",
      platforms: ["React JS", "Node JS"],
    },
    {
      skillArea: "React Framework",
      platforms: ["Next JS"],
    },
    {
      skillArea: "Development Tools",
      platforms: [
        "Jira",
        "CSS",
        "Visual Studio Code",
        "Photoshop",
        "Captivate",
      ],
    },
    {
      skillArea: "Database",
      platforms: ["SQL SERVER", "MongoDB", "MYSQL", "dynamoDb"],
    },
    {
      skillArea: "Cloud technologies",
      platforms: ["Azure", "AWS"],
    },
    {
      skillArea: "Methodologies",
      platforms: ["Agile", "Scrum", "waterfall"],
    },
    {
      skillArea: "IDEs & Tools",
      platforms: [
        "Eclipse IDE",
        "Sublime Text",
        "Notepad++",
        "Dreamweaver",
        "Firebug",
      ],
    },
    {
      skillArea: "Version Control",
      platforms: ["GitHub", "GitLab", "CVS", "SVN/Subversion", "PVCS"],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>Skills</div>
      <ul>
        {skills.map((item) => (
          <li className={styles.skillHeader}>
            {item.skillArea}:
            <ul>
              {item.platforms.map((i) => (
                <li className={styles.skillDetail}>{i}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Skills;
