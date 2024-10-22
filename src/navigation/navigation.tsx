import { BookStore } from "../components/examples/book-store/book-store";
import Counter from "../components/examples/counter/counter";
import { Examples } from "../components/examples/examples";
import { FormInput } from "../components/examples/form-input/form-input";
import TicTacToe from "../components/examples/tic-tac-toe/tic-tac-toe";
import { Todo } from "../components/examples/todo-list/todo-list";
import Home from "../components/home-page/home-page";
import Projects from "../components/projects/projects";
import Skills from "../components/skills/skills";
import Summary from "../components/summary/summary";
export interface MenuItem {
  path: string;
  name: string;
  element: React.ReactNode;
  isMenu: boolean;
  isPrivate: boolean;
  children?: MenuItem[];
}

export const navigation: MenuItem[] = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/login",
    name: "Login",
    element: <Home />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/summary",
    name: "Summary",
    element: <Summary />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/skills",
    name: "Skills",
    element: <Skills />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/projects",
    name: "Projects",
    element: <Projects />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "examples",
    name: "Examples",
    element: <Examples />,
    isMenu: true,
    isPrivate: true,
    children: [
      {
        path: "/examples/react",
        name: "React basic",
        element: <Counter />,
        isMenu: true,
        isPrivate: true,
      },
      {
        path: "/examples/tictac",
        name: "Tictac",
        element: <TicTacToe />,
        isMenu: true,
        isPrivate: true,
      },
      {
        path: "/examples/input",
        name: "Form input",
        element: <FormInput />,
        isMenu: true,
        isPrivate: true,
      },
      {
        path: "/examples/todo",
        name: "Todo list",
        element: <Todo />,
        isMenu: true,
        isPrivate: true,
      },
      {
        path: "/examples/library",
        name: "Book store",
        element: <BookStore />,
        isMenu: true,
        isPrivate: true,
      },
    ],
  },
];
