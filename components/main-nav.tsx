"use client"

import { useState } from "react";

import {FaStaylinked, FaXmark, FaBars} from 'react-icons/fa6'

export const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav>
      <a href="/" className="logo">
        Xplore
        {/* <i className="fab fa-staylinked"></i>kill */}
        <FaStaylinked className='fab fa-staylinked' />kill
      </a>
      <div className="nav-links" style={{right: isOpen ? '0px' : '-200px'}} id="navLinks">
        {/* <!-- Responsive bar open and close --> */}
        <FaXmark
          className="fa fa-times"
          onClick={() => setIsOpen(false)}
        />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/course">Course</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <FaBars
        className="fa fa-bars"
        onClick={() => setIsOpen(true)}
      />
      {/* <!-- Responsive bar open and close --> */}
    </nav>
  );
}