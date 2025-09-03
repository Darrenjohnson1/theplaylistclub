'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ViewCounter() {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Get the current count from localStorage or start at 0
    const currentCount = parseInt(localStorage.getItem('viewCount') || '0');
    const newCount = currentCount + 1;
    
    // Update localStorage
    localStorage.setItem('viewCount', newCount.toString());
    setViewCount(newCount);
  }, []);

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 text-sm text-foreground/60">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span>You are visitor number {viewCount.toLocaleString()}</span>
      </div>
      <p className="text-xs text-foreground/40 mt-1">
      If a playlist drops on private and no one’s around to hear it… <br></br>does it make a sound? <br></br><br></br><Link className='hover:underline hover:underline-offset-4' href={"/"}>Join the Club.</Link>
      </p>
    </div>
  );
}
