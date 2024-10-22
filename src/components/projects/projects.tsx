import { useState } from "react";
import Pagination from "./pagination";
import styles from "./projects.module.scss";
export const Projects = () => {
  const projectList = [
    {
      company: "Cigna Healthcare",
      city: "Memphis",
      state: "TN",
      startDate: "08/01/2022",
      endDate: "Current",
      position: "Frontend Developer",
      responsibilities: [
        "Develop mobile app for behavioral health using React Native 0.67.3, React-Redux 7.2.6, Redux 4.1.2, Node.js, and Typescript",
        "Developed various screen such as appointment scheduling, Emergency contact, Appointment Calendar development, and Allocation of timeslots.",
        "Worked with web development team of Evernorth Health on Healthkit Navigation project using React js.",
        "Worked with React.JS state management and component development",
        "Experience with GitLab configuration, git rebase, and squash commit for version control.",
        "Worked with Date() related functions for appointment management module.",
        "Working experience with Figma, Jira, and other development tools",
        "Good experience in React JS for creating interactive UIs using one-way data flow, virtual DOM, JSX, and React Native concepts.",
        "Working experience on cocoa pod installation, pod management, ruby build, rbenv installation, gem installation",
        "Rich experience in Web API, data fetching and updating using async- await ",
        "Working experience with style development using react Native.",
        "Designed and developed various mobile app screens components such as date picker, map view, push notification, sign in/sign out feature, profile management, and navigation using react native",
        "Working knowledge of adding accessibility feature in a mobile app using react native.",
        "Working knowledge of feature flags, translation files, and accessibility in web application.",
      ],
      environments: [
        "React js",
        " React Native",
        "Redux saga",
        " React-Redux",
        "TypeScript",
        " Node JS",
        "Agile",
        "ECMAScript",
        "AWS Lambda",
        "CI/CD",
        "MVC",
        "JSON",
        "GitLab",
      ],
    },
    {
      company: "CBRE ",
      city: "Dallas",
      state: "TX",
      startDate: "08/01/2021",
      endDate: "07/31/2022",
      position: "Frontend Developer",
      responsibilities: [
        "Develop various screens for the front end using React (16.13.1) and used various predefined components from NPM (Node Package Manager) and Redux library.",
        "Created React JS components using JSX, followed FLUX design pattern for unidirectional data flow.",
        "Responsible for creating efficient design and developing User Interaction screens using HTML, CSS, Angular, Node JS.¬",
        "Worked with React.JS, on Redux for the state management of React Application",
        "Created React for reusable components (multi-field form elements, background file uploads.",
        "Experienced in working with ECMA Script 6 features. Used Babel, web pack with es2015, react JSX presets.",
        "Created reusable components, form validation, virtual DOM and flux concepts using ReactJS and actions, action creators, reducers in Redux. ",
        "Experience with the use of Grunt and Gulp in React Project and Bundled and minified the JavaScript with the use of Gulp",
        "Used Reactive Extensions Library for JavaScript (RXJS) for observables, operators, subjects, and scheduler.",
        "Created User Interfaces for Mobile/Tablet/Desktop using HTML and CSS.",
        "Used compass for Sass style sheet language and Grunt to compile the Sass files to single CSS file.",
        "Used AJAX, JSON to send request to the server to check the functionality of the websites and for storing and exchanging information between browsers and servers.",
        "Coded Business Logic component using PHP.",
        "Managed AWS services and infrastructure through Terraform by writing Terraform modules (Terraform scripts).",
        "Worked through cross browser compatibility issues with layout and styles for all new CSS that was implemented.",
      ],
      environments: [
        "UI",
        " React (16.13.1)",
        "HTML5",
        "CSS3",
        "JavaScript",
        " Node JS",
        "Agile",
        " Express.JS",
        "MongoDB",
        "ECMAScript",
        " AWS Lambda",
        " REST API",
        "SASS",
        "Webpack",
        " CI/CD",
        "MVC",
        "JSON",
        "AJAX",
        "GIT",
        "OOD",
        " Notepad++",
      ],
    },
    {
      company: "Emporia State University ",
      city: "Emporia",
      state: "KS",
      startDate: "06/01/2019",
      endDate: "05/31/2021",
      position: "Web Developer",
      responsibilities: [
        "Implemented a Single Page Web Applications (SPA) based front end for displaying user requests, user records history and security settings various users using JavaScript and React JS.",
        "Responsible for setting up React environment which includes setting up a build system with Webpack 3, Babel for ES6 trans piling.",
        "Experienced in working with ECMA Script 6 features. Used Babel, web pack with es2015, react JSX presets.",
        "Created reusable components, form validation, virtual DOM and flux concepts using ReactJS and actions, action creators, reducers in Redux. ",
        "Experience with the use of Grunt and Gulp in React Project and Bundled and minified the JavaScript with the use of Gulp",
        "Used Reactive Extensions Library for JavaScript (RXJS) for observables, operators, subjects and scheduler.",
        "Used Redux together with React.js to implement actions, action dispatcher, Reducers.",
        "Used Redux Async actions to make the app fully asynchronous.",
        "Debug the website using Chrome React Developer's tool and manipulated the nodes using DOM functions",
        "Designed and developed CSS behaviors, CSS styles, CSS fonts, CSS buttons, Pseudo Classes, Pseudo elements in CSS.",
        "Experience in Using SASS and LESS.",
        "Effective use of CSS3featurres, such as creating multiple columns, borders and background etc. and used LESS/SASS Preprocessor.",
        "Follow Test Driven Development (TDD) methodology for developing test cases and unit testing using Jasmine test framework with the Karma test runner.",
        "Used Jest for unit testing the react components and create the snapshots of the components.",
        "Develop a core component of Analytics using with NodeJS Micro Services and consume them via ReactJS services.",
      ],
      environments: [
        "ReactJS",
        " Node.JS",
        "HTML5",
        "DB2",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "SASS",
        "ECMAScript",
        "DOM",
        "Typescript",
        "REST API",
      ],
    },
    {
      company: "Parshwa LLC ",
      city: "Minneapolis",
      state: "MN",
      startDate: "09/01/2018",
      endDate: "05/31/2019",
      position: "UI/Frontend Developer",
      responsibilities: [
        "•	Collaborated with system engineers to ensure UI designs are implemented and tested correctly.",
        "•	Designed and developed the web application using HTML, CSS, Bootstrap, JavaScript, React, Redux and Node JS.",
        "•	Developed multiple POCs to create an interface between Backend to Frontend by using MySQL, Express.JS, React.JS and Node.js.",
        "•	Worked on responsive design and developed a single ISOMORPHIC responsive website that could be served to desktop, Tablets and mobile users using React.js.",
        "•	Implemented React-Router, React Redux architecture, ES6, web pack and Grunt to turn application into Single Page Application",
        "•	Developed responsive interface using Bootstrap and used SASS for CSS.",
        "•	Extensive usage of Bootstrap for layout as well as responsive design and SASS for Responsive design.",
        "•	Wrote code using JavaScript, and Bootstrap.",
        "•	Used React JS for developing reusable components.",
        "•	Designed and implemented database solutions in Azure SQL Data Lakes, Azure SQL",
        "•	Used React.JS library functions for the logical implementation part at client side for all the application.",
        "•	Implemented React UI and maintained the state with Redux architecture implementation.",
        "•	Develop various screens for the front end using React and used various predefined components from NPM (Node Package Manager) and Redux library.",
        "•	Created modular CSS using LESS for reusability and easy to read code.",
        "•	Used Bootstrap front-end framework for faster and easier web development with MySQL database as the backend.",
      ],
      environments: [
        "JavaScript",
        "Redux",
        "React",
        " Node.JS",
        "Agile",
        "Express.JS",
        "SASS",
        "ES6",
        "MVC",
        "OOD",
        "PL/SQL",
        "NPM",
      ],
    },
    {
      company: "Xeon Techno Labs",
      city: "Ahmedabad",
      state: "India",
      startDate: "08/01/2013",
      endDate: "03/31/2018",
      position: "UI/UX Developer",
      responsibilities: [
        "Worked on React JS Virtual Dom and React views, rendering using components which contains additional components called custom HTML tags.",
        "Understand new UI designs and implemented reusable components for different pages. ",
        "Implemented stable React components and stand-alone functions to be added to any future pages. ",
        "Implemented React JS code to handle cross browser compatibility issues in Mozilla, IE 7, 8, 9, Safari and FF",
        "Used React-Router to turn application into Single Page Application.  ",
        "Worked in using React JS components, Forms, Events, Keys, Router, Animations and Flux concept. ",
        "Maintained states in the stores and dispatched the actions using redux. ",
        "Implemented react-navigation and nested views to enhance navigation and create the click-able prototype. ",
        "Used Responsive Mobile Design so that the website is compatible with different device like desktops, laptops, tablets, and smart phones. ",
        "Have written unit tests Enzyme, Mocha, Chai, Karma framework for unit testing and automation tests using nightwatch.js  ",
        "Worked with a team of back-end developers to develop the functionality of the application and to add new features.",
        "Defined text alignment, borders, positioning and many other typographic",
        "Develop various screens for the front end using React Native and used various predefined components from NPM (Node Package Manager) and redux library. ",
      ],
      environments: [
        "UI/UX",
        "HTML",
        "DHTML",
        "CSS",
        "JavaScript",
        "JSON",
        "jQuery",
        "Ajax",
        "SQL",
        "QA",
        "JIRA",
        "LESS",
        "Bootstrap",
        "GIT",
      ],
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const handlePagination = () => {
    if (currentPage >= projectList.length - 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const project = projectList[currentPage];
  
  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>Projects</div>

      <div className={styles.projectContainer}>
        <div className={styles.projectCategories}>
          <div>
            {project.company}- {project.city},{project.state}
          </div>
          <div>
            {project.startDate}-{project.endDate}
          </div>
          <div>{project.position}</div>
          <div>Responsibilities:</div>
        </div>
        <div>
          <ul>
            {project.responsibilities.map((r) => (
              <li>{r}</li>
            ))}
          </ul>
        </div>
        <h3>Environments:</h3>
        <div>
          <ul>
            {project.environments.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.divide}></div>
      </div>
      <Pagination
        length={projectList.length}
        postPerPage={1}
        handlePageClick={handlePagination}
      />
    </div>
  );
};
export default Projects;
