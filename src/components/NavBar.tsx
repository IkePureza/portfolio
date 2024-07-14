"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import IconLogo from "./icons/logo";
import { IconSecondBrain } from "./icons/secondBrain";
import ScrollLink from "./ScrollLink";
import { Button } from "./Button";

const navBarItems = [
  { name: "About", url: "/#about" },
  { name: "Experience", url: "/#experience" },
  { name: "Projects", url: "/#projects" },
  { name: "Contact", url: "#contact" },
];

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="navbar backdrop-blur-sm fixed z-20">
      <div className="navbar-start ml-5">
        <IconLogo></IconLogo>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-52 shadow "
          >
            {navBarItems &&
              navBarItems.map(({ url, name }, i) => (
                <li
                  className="mx-1 relative text-base counter-increment"
                  key={i}
                >
                  <ScrollLink
                    className="p-2 text-sm before:content-counter before:text-xxs before:align-text-top before:mr-2  before:text-cyan-300"
                    href={url}
                  >
                    {name} {i !== navBarItems.length - 1 && <>{","}</>}
                  </ScrollLink>
                </li>
              ))}
            <li className="flex items-center">
              <Button href="https://publish.obsidian.md/pureza-digital-garden/Welcome+to+my+Digital+Garden">
                Second Brain
                <div className="ml-2">
                  <IconSecondBrain />
                </div>
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center justify-center text-center">
          <li className="text-cyan-500 flex items-center">[</li>
          {navBarItems &&
            navBarItems.map(({ url, name }, i) => (
              <li
                className="mx-1 flex items-center text-base counter-increment"
                key={i}
              >
                <ScrollLink
                  className="p-2 text-sm flex items-center before:content-counter before:text-xxs before:align-text-top before:mr-2 before:text-cyan-300"
                  href={url}
                >
                  {name}{" "}
                  {i !== navBarItems.length - 1 && (
                    <span className="ml-1">,</span>
                  )}
                </ScrollLink>
              </li>
            ))}
          <li className="text-cyan-500 mr-5 flex items-center">]</li>
          <li className="flex items-center">
            <Button href="https://publish.obsidian.md/pureza-digital-garden/Welcome+to+my+Digital+Garden">
              Second Brain
              <div className="ml-2">
                <IconSecondBrain />
              </div>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
