"use client";

import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-green-200">
      {/* Desktop Layout */}
      <div className="hidden md:block relative min-h-screen">
        <div className="container mx-auto px-4 pt-16">
          <div className="max-w-xl">
            <Typography variant="h1" className="text-5xl font-bold text-blue-gray-800 mb-6">
              Magical Stories
              <br />
              for Young Minds!
            </Typography>
            <Typography variant="lead" className="text-xl text-gray-700 mb-8 max-w-lg">
              Discover enchanting books that inspire imagination and creativity in children of all ages.
            </Typography>
            <Button
              size="lg"
              color="pink"
              className="rounded-full shadow-lg hover:shadow-pink-100/50 hover:scale-105 transition-all duration-300"
            >
              Explore Books
            </Button>
          </div>
        </div>

        {/* Age Groups - Desktop */}
        <div className="absolute top-0 right-0 bottom-0 w-2/3 flex">
          {[
            { age: "0-1", label: "year", image: "3662667" },
            { age: "1-3", label: "years", image: "296301" },
            { age: "3-18", label: "years", image: "8535230" },
          ].map((group, index) => (
            <div
              key={group.age}
              className={`w-1/3 relative flex items-center justify-center group ${
                index === 0
                  ? "bg-pink-100/20"
                  : index === 1
                  ? "bg-green-100/20"
                  : "bg-yellow-100/20"
              }`}
            >
              <div className="text-center">
                <Typography variant="h1" className="text-6xl font-bold text-white">
                  {group.age}
                </Typography>
                <Typography variant="h4" className="text-white mt-1">
                  {group.label}
                </Typography>
              </div>
              <div className="absolute bottom-0 w-48 h-48 overflow-hidden">
                <Image
                  src={`https://images.pexels.com/photos/${group.image}/pexels-photo-${group.image}.jpeg`}
                  alt={`${group.age} years old reading`}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Typography variant="h1" className="text-4xl font-bold text-blue-gray-800 mb-4">
              Magical Stories
              <br />
              for Young Minds!
            </Typography>
            <Typography variant="lead" className="text-lg text-gray-700 mb-6">
              Discover enchanting books that inspire imagination and creativity in children of all ages.
            </Typography>
            <Button
              size="lg"
              color="pink"
              className="rounded-full shadow-lg hover:shadow-pink-100/50 hover:scale-105 transition-all duration-300"
            >
              Explore Books
            </Button>
          </div>
        </div>

        {/* Age Groups - Mobile */}
        <div className="space-y-4 px-4 pb-8">
          {[
            { age: "0-1", label: "year", image: "3662667", color: "pink" },
            { age: "1-3", label: "years", image: "296301", color: "green" },
            { age: "3-18", label: "years", image: "8535230", color: "yellow" },
          ].map((group) => (
            <div
              key={group.age}
              className={`bg-${group.color}-100/20 rounded-lg p-6 flex items-center justify-between`}
            >
              <div className="text-center">
                <Typography variant="h2" className="text-4xl font-bold text-white">
                  {group.age}
                </Typography>
                <Typography variant="h6" className="text-white">
                  {group.label}
                </Typography>
              </div>
              <div className="relative w-24 h-24">
                <Image
                  src={`https://images.pexels.com/photos/${group.image}/pexels-photo-${group.image}.jpeg`}
                  alt={`${group.age} years old reading`}
                  fill
                  className="object-cover rounded-full border-2 border-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero