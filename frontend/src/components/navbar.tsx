import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  TextInput,
  Button,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import { SideMenu } from "./sidenav";

export function NavigationBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (!searchQuery.trim()) return;
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50 bg-gray-50 text-black shadow-lg px-4">
        <div className="flex items-center space-x-2">
          {/* Side Menu */}
          <SideMenu />

          {/* Brand Logo */}
          <NavbarBrand href="/home" className="flex items-center space-x-2 ml-4">
            <img src={Logo} className="h-6 sm:h-9" alt="Ecommerce Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Ecommerce-app
            </span>
          </NavbarBrand>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:order-2">
          {/* User Dropdown */}
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </DropdownHeader>
            <Link to="/cart">
              <DropdownItem>
                <div className="flex items-center justify-between w-full">
                  Cart               
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </DropdownItem>
            </Link>

            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <Link to="/login"><DropdownItem>Sign out</DropdownItem></Link>
          </Dropdown>

          <NavbarToggle />
        </div>

        {/* Navbar Collapse for Mobile */}
        <NavbarCollapse>
          <form className="flex gap-2 mt-4 w-full" onSubmit={handleSearch}>
            <TextInput
              id="mobile-search"
              type="text"
              placeholder="Search products..."
              className="flex-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" color="blue">
              Search
            </Button>
          </form>
        </NavbarCollapse>
      </Navbar>

      {/* Add padding for fixed navbar */}
      <div className="pt-20"></div>
    </>
  );
}
