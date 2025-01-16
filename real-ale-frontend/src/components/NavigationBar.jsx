import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing
import logo from '../assets/Real_Ale_API_logo_white.png'

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
                alt="Real Ale API logo"
                src={logo}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Navbar Links */}
              <NavLink
                to="/"
                end // Add the `end` prop to make sure it matches exactly the home path
                className={({ isActive }) =>
                  `inline-flex items-center px-1 py-1 text-sm font-medium text-white hover:text-neon ${isActive ? 'border-indigo-500 text-neon' : ''}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/documentation"
                end // Add the `end` prop to ensure it only matches the exact `/documentation` path
                className={({ isActive }) =>
                  `inline-flex items-center px-1 py-1 text-sm font-medium text-white hover:text-neon ${isActive ? 'border-indigo-500 text-neon' : ''}`
                }
              >
                Documentation
              </NavLink>
              <NavLink
                to="/key"
                end
                className={({ isActive }) =>
                  `inline-flex items-center px-1 py-1 text-sm font-medium text-white hover:text-neon ${isActive ? 'border-indigo-500 text-neon' : ''}`
                }
              >
                API Key
              </NavLink>
              <NavLink
                to="/about"
                end
                className={({ isActive }) =>
                  `inline-flex items-center px-1 py-1 text-sm font-medium text-white hover:text-neon ${isActive ? 'border-indigo-500 text-neon' : ''}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/search"
                end
                className={({ isActive }) =>
                  `inline-flex items-center px-1 py-1 text-sm font-medium text-white hover:text-neon ${isActive ? 'border-indigo-500 text-neon' : ''}`
                }
              >
                Search
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Using NavLink */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pb-0 pt-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50 ${isActive ? `block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50 ${isActive ? 'border-neon text-neon' : ''}`: ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/documentation"
            end
            className={({ isActive }) =>
              `block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50 ${isActive ? `block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50 ${isActive ? 'border-neon text-neon' : ''}`: ''}`
            }
          >
            Documentation
          </NavLink>
          <NavLink
            to="/key"
            end
            className={({ isActive }) =>
              `block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50 ${isActive ? `block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50 ${isActive ? 'border-neon text-neon' : ''}`: ''}`
            }
          >
            API Key
          </NavLink>
          <NavLink
            to="/about"
            end
            className={({ isActive }) =>
              `block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50 ${isActive ? `block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50 ${isActive ? 'border-neon text-neon' : ''}`: ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/search"
            end
            className={({ isActive }) =>
              `block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50 ${isActive ? `block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-neon text-white hover:text-burgundy hover:bg-gray-50 ${isActive ? 'border-neon text-neon' : ''}`: ''}`
            }
          >
            Search
          </NavLink>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
