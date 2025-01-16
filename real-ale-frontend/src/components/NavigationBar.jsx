import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';


export default function NavigationBar() {
  return (
    <Disclosure as="nav" className="bg-backgroundColor shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Navbar Links */}
              <NavLink
                to="/"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:text-neon"
                activeClassName="border-indigo-500 text-gray-900"
              >
                Home
              </NavLink>
              <NavLink
                to="/documentation"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:text-neon"
                activeClassName="border-indigo-500 text-gray-900"
              >
                Documentation
              </NavLink>
              <NavLink
                to="/key"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:text-neon"
                activeClassName="border-indigo-500 text-gray-900"
              >
                API Key
              </NavLink>
              <NavLink
                to="/about"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:text-neon"
                activeClassName="border-indigo-500 text-gray-900"
              >
                About
              </NavLink>
              <NavLink
                to="/search"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:text-neon"
                activeClassName="border-indigo-500 text-gray-900"
              >
                Search
              </NavLink>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button type="button" className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button> */}
{/*
            Profile Dropdown */}
            {/* <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                </MenuItem>
              </MenuItems>
            </Menu> */}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pb-0 pt-2">
          <NavLink
            to="/"
            className="block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50"
            activeClassName="text-gray-900"
          >
            Home
          </NavLink>
          <NavLink
            to="/documentation"
            className="block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50"
            activeClassName="text-gray-900"
          >
            Documentation
          </NavLink>
          <NavLink
            to="/key"
            className="block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50"
            activeClassName="text-gray-900"
          >
            API Key
          </NavLink>
          <NavLink
            to="/about"
            className="block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50"
            activeClassName="text-gray-900"
          >
            About
          </NavLink>
          <NavLink
            to="/search"
            className="block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50"
            activeClassName="text-gray-900"
          >
            Search
          </NavLink>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
