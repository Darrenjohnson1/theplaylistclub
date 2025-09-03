'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Heart, Share2 } from 'lucide-react';

interface Playlist {
  id: string;
  title: string;
  creator: string;
  genre: string;
  trackCount: number;
  duration: string;
  coverImage: string;
  likes: number;
}

const samplePlaylists: Playlist[] = [
  {
    id: '1',
    title: 'Summer Vibes 2024',
    creator: '@musiclover',
    genre: 'Pop',
    trackCount: 24,
    duration: '1h 23m',
    coverImage: '/api/placeholder/200/200',
    likes: 1247
  },
  {
    id: '2',
    title: 'Late Night Drive',
    creator: '@nightowl',
    genre: 'Electronic',
    trackCount: 18,
    duration: '1h 5m',
    coverImage: '/api/placeholder/200/200',
    likes: 892
  },
  {
    id: '3',
    title: 'Workout Energy',
    creator: '@fitnessfan',
    genre: 'Hip Hop',
    trackCount: 32,
    duration: '1h 45m',
    coverImage: '/api/placeholder/200/200',
    likes: 2156
  },
  {
    id: '4',
    title: 'Chill Acoustic',
    creator: '@acousticlover',
    genre: 'Folk',
    trackCount: 16,
    duration: '58m',
    coverImage: '/api/placeholder/200/200',
    likes: 743
  },
  {
    id: '5',
    title: 'Party Starters',
    creator: '@djpro',
    genre: 'Dance',
    trackCount: 28,
    duration: '1h 32m',
    coverImage: '/api/placeholder/200/200',
    likes: 1892
  },
  {
    id: '6',
    title: 'Study Focus',
    creator: '@studentlife',
    genre: 'Ambient',
    trackCount: 20,
    duration: '1h 15m',
    coverImage: '/api/placeholder/200/200',
    likes: 567
  }
];

export default function PlaylistCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playlistsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + playlistsPerView >= samplePlaylists.length ? 0 : prevIndex + playlistsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - playlistsPerView < 0 ? Math.max(0, samplePlaylists.length - playlistsPerView) : prevIndex - playlistsPerView
    );
  };

  const visiblePlaylists = samplePlaylists.slice(currentIndex, currentIndex + playlistsPerView);

  return (
    <Card className="bg-secondary-background md:col-span-3 border-border shadow-shadow">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-heading text-main-foreground" style={{ fontFamily: 'var(--font-custom)' }}>
          Featured Playlists
        </CardTitle>
        <div className="flex gap-2">
          <Button
            variant="reverse"
            size="sm"
            onClick={prevSlide}
            className="rounded-full p-2"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="reverse"
            size="sm"
            onClick={nextSlide}
            className="rounded-full p-2"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visiblePlaylists.map((playlist) => (
            <div key={playlist.id} className="group relative">
              <Card className="bg-tertiary-background border-border shadow-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4">
                  {/* Playlist Cover */}
                  <div className="relative mb-4">
                    <div className="w-full h-32 bg-gradient-to-br from-main to-seconday rounded-lg flex items-center justify-center">
                      <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute top-2 right-2 flex gap-1">
                      <Button size="sm" className="h-8 w-8 p-0 bg-white/20 hover:bg-white/30">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="h-8 w-8 p-0 bg-white/20 hover:bg-white/30">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Playlist Info */}
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg text-foreground line-clamp-1" style={{ fontFamily: 'var(--font-custom)' }}>
                      {playlist.title}
                    </h3>
                    <p className="text-sm text-foreground/70">by {playlist.creator}</p>
                    <div className="flex items-center justify-between text-xs text-foreground/60">
                      <span>{playlist.genre}</span>
                      <span>{playlist.trackCount} tracks</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-foreground/60">
                      <span>{playlist.duration}</span>
                      <span>❤️ {playlist.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.ceil(samplePlaylists.length / playlistsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * playlistsPerView)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === Math.floor(currentIndex / playlistsPerView) 
                  ? 'bg-main' 
                  : 'bg-border'
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
