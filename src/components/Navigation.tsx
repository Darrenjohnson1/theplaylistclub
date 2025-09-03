import React from 'react';

import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
// Podcast/WiFi-style icon component
const PodcastIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-black"
  >
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path
      d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

// Heart icon component
const HeartIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-black"
  >
    <path
      d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

// Search icon component
const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-black"
  >
    <circle
      cx="11"
      cy="11"
      r="8"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="m21 21-4.35-4.35"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Navigation() {
  return (
    <nav className="w-full bg-white border-t-2 mt-6 border-b-2 relative" style={{ borderColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-l-2 border-r-2" style={{ borderColor: '#000000' }}>
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center pr-4">
            <Link className="flex items-center " href="/">
                          <Image className="mr-2 w-6 h-6 sm:w-8 sm:h-8" src="/logo.png" alt="Logo" width={32} height={32} />
              <div className="flex flex-col sm:flex-row">
                <span className="text-black font-bold text-sm sm:text-base md:text-lg pr-1 uppercase tracking-wide" style={{ fontFamily: 'var(--font-custom)' }}>
                  THE
                </span>
                <span className="text-black font-bold text-sm sm:text-base md:text-lg uppercase tracking-wide" style={{ fontFamily: 'var(--font-custom)' }}>
                  PLAYLIST CLUB
                </span>
              </div>
            
            <div className="w-0.5 h-16 lg:bg-black ml-4"></div>
            </Link>
            
          </div>

          {/* Navigation Links */}
          {/* <div className="flex items-center space-x-8 pr-6">
            <a
              href="#"
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              Subscriptions
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              Channels
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              Topics
            </a>
          </div> */}

          {/* Action Icons */}
          <div className="flex items-center">
            <div className="w-0.5 h-16 bg-black mr-8"></div>
            <div className="flex gap-4">
              <Button variant="neutral" size="sm" className="hidden sm:block sm:h-11 sm:px-8 sm:text-base">
                Weekly Picks
              </Button>
              <Button size="sm" className="sm:h-11 sm:px-8 sm:text-base">
                Join the Club
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full height separators positioned relative to nav */}
    </nav>
  );
}
