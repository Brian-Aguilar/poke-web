import styled from "styled-components";

const Nav = () => {
  return (
    <NavbarStyle>
      <NavbarMenu>
        <li>Menu</li>
        <h1>Poke Web</h1>
        <li>Buscar</li>
      </NavbarMenu>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.nav`
  background-color: lightcoral;
  padding: 1rem;
  box-shadow: 0 16px 40px 10px rgb(var(--shadow));
`;

const NavbarMenu = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Nav;
