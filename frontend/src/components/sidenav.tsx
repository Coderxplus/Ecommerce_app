import { useState } from "react";
import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";

export function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button to toggle menu */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 bg-gray-800 text-white rounded-lg"
      >
        <svg
          className="w-6 h-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </button>

      {/* Drawer Component */}
      <Drawer open={isOpen} onClose={() => setIsOpen(false)} position="left">
        <DrawerHeader title="Menu" />
        <DrawerItems>
          <ul className="space-y-2">
            {["Home", "Products", "About", "Contact"].map((item, index) => (
              <li
                key={index}
                className="hover:bg-gray-200 rounded-lg transition-colors"
              >
                <a
                  href={`/${item.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </DrawerItems>
      </Drawer>
    </>
  );
}
