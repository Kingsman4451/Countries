import React, { useState, useContext } from "react";
import context from "../../context";
import { NavLink } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const { values } = useContext(context.context);

  return (
    <MDBNavbar expand="lg" light bgColor="light" fixed="top">
      <MDBContainer xxl>
        <MDBNavbarBrand>
          <NavLink className="text-dark" to="/">
            Countries
          </NavLink>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page">
                <NavLink className="text-dark" to="/">
                  Home
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Enter country"
              aria-label="Search"
              value={values.search}
              onChange={(e) => { return (values.setSearch(e.target.value), localStorage.setItem("search", e.target.value))}}
            />
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
