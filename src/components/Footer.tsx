import Image from 'next/image';
import React from 'react';
import ViewCounter from './ViewCounter';

// Social media icons
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" fill="currentColor"/>
  </svg>
);

const SpotifyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" fill="currentColor"/>
  </svg>
);

const DiscordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
</svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
</svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 border-b-2 relative " style={{ borderColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:border-l-2 xl:border-r-2" style={{ borderColor: '#000000' }}>
        <div className="py-12 ">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 ">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="Logo" width={32} height={32} />
                <span className="text-black font-bold text-xl uppercase tracking-wide" style={{ fontFamily: 'var(--font-custom)' }}>
                  THE PLAYLIST CLUB
                </span>
              </div>
              <p className="text-foreground/70 max-w-md mb-4">
                Join the community of music lovers sharing curated playlists for every mood, moment, and memory.
              </p>
              
              {/* View Counter */}
              <ViewCounter />
            </div>

            
            {/* <div>
              <h3 className="font-heading text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors hover:underline hover:underline-offset-4">About Us</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors hover:underline hover:underline-offset-4">How It Works</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors hover:underline hover:underline-offset-4">Privacy Policy</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors hover:underline hover:underline-offset-4">Terms of Service</a></li>
              </ul>
            </div>

            
            <div>
              <h3 className="font-heading text-foreground mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors hover:underline hover:underline-offset-4">Help Center</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors hover:underline hover:underline-offset-4">Contact Us</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors hover:underline hover:underline-offset-4">Report Issue</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors hover:underline hover:underline-offset-4">FAQ</a></li>
              </ul>
            </div> */}
          </div>

          {/* Bottom Section */}
          <div className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 ">
              <div className="flex items-center space-x-6">
                <a href="#" className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <DiscordIcon />
                </a>
                <a href="#" className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <TikTokIcon />
                </a>
                <a href="#" className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <InstagramIcon />
                </a>
              </div>
              <p className="text-foreground/60 text-sm">
                © 2025 The Playlist Club. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
