import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import PlaylistCarousel from "@/components/PlaylistCarousel";
import ViewCounter from "@/components/ViewCounter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:border-l-2 xl:border-r-2 min-h-screen" style={{ borderColor: 'black' }}>
        {/* Hero Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-h-[600px]">
            {/* Left Column - Main Hero */}
            <Card className="bg-secondary-background md:col-span-2 border-border shadow-shadow">
              <CardContent className="flex flex-col justify-center h-full">
                <h1 className="text-4xl md:text-6xl font-heading text-main-foreground mb-6" style={{ fontFamily: 'var(--font-custom)' }}>
                  <span>Playlists </span>
                  <span className="text-teal-500">With a Pulse</span>
                  <span>.</span>
                </h1>
                <CardDescription className="text-lg text-foreground mb-8 max-w-md">
                  Join the community of music lovers sharing curated playlists for every mood, moment, and memory.
                </CardDescription>
                <div className="flex gap-4">
                  <Button size="sm" className="sm:size-lg">
                    Join the Club
                  </Button>
                  <Button variant="neutral" size="sm" className="sm:size-lg">
                    Weekly Picks
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Right Column - Top Card */}
            <Card className="bg-tertiary-background border-border shadow-shadow">
              <CardHeader>
                <CardTitle className="text-black text-xl font-heading" style={{ fontFamily: 'var(--font-custom)' }}>Trending Now</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-3">
                  <div className="bg-white/20 p-3 border border-white/30">
                    <p className="text-black font-base">Summer Vibes 2024</p>
                    <p className="text-black/80 text-sm">by @musiclover</p>
                  </div>
                  <div className="bg-white/20 p-3 border border-white/30">
                    <p className="text-black font-base">Late Night Drive</p>
                    <p className="text-black/80 text-sm">by @nightowl</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="reverse" size="sm" className="w-full sm:size-lg">
                  View All
                </Button>
              </CardFooter>
            </Card>

            {/* Middle Section - Playlist Carousel */}
            <PlaylistCarousel />

            {/* Bottom Row - Three Feature Cards */}
            <Card className="md:col-span-1 bg-white border-border shadow-shadow">
              <CardContent className="flex flex-col justify-center h-full text-center">
                <div className="w-16 h-16 bg-border rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-secondary-background" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl font-heading mb-2" style={{ fontFamily: 'var(--font-custom)' }}>Join 10K+ Users</CardTitle>
                <CardDescription className="">
                  Creating and sharing amazing playlists every day
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="md:col-span-1 bg-teal-200 border-border shadow-shadow">
              <CardContent className="flex flex-col justify-center h-full text-center">
                <div className="w-16 h-16 bg-border rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-secondary-background" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl font-heading mb-2" style={{ fontFamily: 'var(--font-custom)' }}>50K+ Playlists</CardTitle>
                <CardDescription className="">
                  Curated collections for every mood and moment
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="md:col-span-1 bg-teal-500 border-border shadow-shadow">
              <CardContent className="flex flex-col justify-center h-full text-center">
                <div className="w-16 h-16 bg-border rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-secondary-background" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl font-heading mb-2" style={{ fontFamily: 'var(--font-custom)' }}>Community First</CardTitle>
                <CardDescription className="">
                  Connect with music lovers worldwide
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
