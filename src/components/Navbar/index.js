import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import SearchBox from '../SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAxios from '../../customhooks/useAxios';
import { useHistory } from 'react-router-dom';

const NavBarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  let history = useHistory();

  const [{ fetchedData }] = useAxios(
    {},
    `https://www.themealdb.com/api/json/v1/1/categories.php`,
  );

  const handleClick = (category) => {
    history.push(`/category/${category}`);
  };

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">My Recipe App</NavbarBrand>
      <Nav>
        <SearchBox />
      </Nav>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/random">Surprise me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Categories
            </DropdownToggle>
            <DropdownMenu right>
              {Object.keys(fetchedData).length > 0 &&
                fetchedData.categories.map((category) => (
                  <DropdownItem
                    key={category.idCategory}
                    onClick={() => handleClick(category.strCategory)}
                  >
                    {category.strCategory}
                  </DropdownItem>
                ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
