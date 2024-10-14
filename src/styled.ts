import styled from '@emotion/styled';

const MainAppContainer = styled.div`
 flex-grow: 1;
  width: 90%;
  margin: 0 auto;
  max-width: 1120px;
  position: relative;
  z-index: 5;
  
  @media print {
    margin: 0;
  }

    


`;
const NavBar = styled.ul`
  display: flex;
  padding-left: 7.5rem;
  align-items: center;
`;

const NavItem = styled.li`
  list-style-type: none;
  font-weight: bold;
  img {
    height: 2rem;
    width: 11.31rem;
  }
`;

export { MainAppContainer, NavBar, NavItem }