"use client";

import { useCallback, useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import IconTwitter from '@/assets/svg/twitter.svg?react';
import IconDiscord from '@/assets/svg/discord.svg?react';
import IconMenu from '@/assets/svg/menu.svg?react';
import IconClose from '@/assets/svg/closeIcon.svg?react';

const StyledNavElements = styled.div<any>`
  margin-left: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style-type: none; 
 
  @media (max-width: 768px) {
    position: absolute;
    right: 0;
    top: 60px; 
    background-color: #000;
    width: 100%; 
    height: 0px;
    transition: all 0.3s ease-in;
    overflow: hidden;

    ${(props) => props.$active && css`
      height: calc(100vh - 64px);
    `}
  }
`;

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = useCallback(() => {
    setShowNavbar(!showNavbar);
  }, [showNavbar]);

  return (
    <nav
      className="h-[64px] fixed top-0 w-full md:bg-black/70 max-md:bg-black z-[999]"
      style={{
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="h-full flex items-center md:px-12 max-md:px-6 max-md:justify-between">
        <div className="logo">
          <Link href="/">
            <div className="text-gray-50 text-[24px]">
              Serendale
            </div>
          </Link>
        </div>
        <div className="md:hidden justify-items-end text-white border-l border-[#4D4D4D] pl-4" onClick={handleShowNavbar}>
          {showNavbar ? <IconClose className="block" /> : <IconMenu className="block" />}
        </div>
        <StyledNavElements $active={showNavbar}>
          <ul className="w-full h-full flex items-center max-md:flex-col">
            <li>
              <div className="flex gap-5 md:ml-10">
                <a href={""} target="_blank" rel="noreferrer">
                  <IconTwitter className="block cursor-pointer" />
                </a>
                <a href={""} target="_blank" rel="noreferrer">
                  <IconDiscord className="block cursor-pointer" />
                </a>
              </div>
            </li>
          </ul>
        </StyledNavElements>
      </div>
    </nav>
  );
}

export default Header;
