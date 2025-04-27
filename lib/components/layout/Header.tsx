import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-primary to-accent text-white shadow-lg border-b border-border mb-6">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl text-black font-extrabold tracking-wider">
                        Profile Explorer
                    </h1>
                </div>

                <Menu as="div" className="relative">
                    <Menu.Button className="focus:outline-none">
                        <FaUserCircle className="text-3xl hover:text-white transition-all duration-300 transform hover:scale-110" />
                    </Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-24 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`w-full text-left px-4 py-2 text-sm ${active ? "bg-gray-100" : ""} text-destructive`}
                                    >
                                        Logout
                                    </button>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </header>
    );
};

export default Header;
