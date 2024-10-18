import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/home-page/home-page";
import Summary from "./components/summary/summary";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Navbar from "./components/nav-bar/nav-bar";
import { MainAppContainer } from "./styled";
import Counter from "./components/examples/counter/counter";
import TicTacToe from "./components/examples/tic-tac-toe/tic-tac-toe";
import { navigation } from "./navigation/navigation";
export const RenderRoute = () => {
  return (
    <div>
      <Routes>
        {navigation.map((route, index) => {
          if (route.isPrivate && route.isMenu) {
            return (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((child, i) => (
                    <Route
                      key={i}
                      path={child.path}
                      element={child.element}
                    ></Route>
                  ))}
              </Route>
            );
          }
        })}
      </Routes>
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MainAppContainer>
        <Navbar />
        <RenderRoute />
      </MainAppContainer>
    </div>
  );
}

export default App;
