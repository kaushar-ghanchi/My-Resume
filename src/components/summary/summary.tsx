import styles from "./summary.module.scss";
export const Summary = () => {
  const summaryList = [
    "12+ Years’ experience as ReactJS/NodeJS Developer in developing web applications using ReactJS, NodeJS, HTML5, CSS3, XHTML, XML, Bootstrap, Java Script, Ajax and JSON.",
    "5+ Years’ experience as a mobile app developer using React Native + TypeScript, Redux",
    "Thorough understanding of React.js and its core principles.",
    "Experience in design and develop Healthcare applications.",
    "Good understanding and usage of states, props, reducers, actions and other Redux features.",
    "Excellent Experience with popular React.js workflows (Redux).",
    "Experience with newer specifications of ECMAScript.",
    "Familiarity with RESTful APIs.",
    "Experience with common front-end development tools such as Babel, Webpack, NPM, etc.",
    "Ability to understand business requirements and translate them into technical requirements.",
    "Experience with code versioning tools such as Git, SVN, TFS.",
    "Strong Experience working and developing User Interfaces for Mobile/Tablet/Desktop using HTML, CSS, JavaScript, jQuery, bootstrap. ",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>Professional Summary</div>
      <ul>
        {summaryList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Summary;
