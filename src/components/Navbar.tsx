"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, ShoppingCart, BookOpen } from "lucide-react";
import {
  Navbar as MTNavbar,
  Typography,
  IconButton,
  Button,
  Badge,
} from "@material-tailwind/react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MTNavbar className="max-w-none px-4 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <BookOpen className="h-8 w-8 text-pink-300" />
          <Typography variant="h4" className="ml-2 font-bold text-blue-gray-800">
            KidBooks
          </Typography>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-blue-gray-800 hover:text-pink-300 transition-colors duration-300">
            Home
          </Link>
          <Link href="/books" className="text-blue-gray-800 hover:text-pink-300 transition-colors duration-300">
            Books
          </Link>
          <Link href="/categories" className="text-blue-gray-800 hover:text-pink-300 transition-colors duration-300">
            Categories
          </Link>
          <Link href="/about" className="text-blue-gray-800 hover:text-pink-300 transition-colors duration-300">
            About Us
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <IconButton variant="text" className="text-blue-gray-800 hover:text-pink-300">
            <Search className="h-6 w-6" />
          </IconButton>
          <Badge content="0" color="pink" className="border-white">
            <IconButton variant="text" className="text-blue-gray-800 hover:text-pink-300">
              <ShoppingCart className="h-6 w-6" />
            </IconButton>
          </Badge>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-blue-gray-800 hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container mx-auto mt-4 md:hidden">
          <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-lg">
            <Link href="/" className="text-blue-gray-800 hover:text-pink-300 transition-colors duration-300">
              Home
            </Link>
            <Link href="/books" className="text-blue-gray-800 hover:text-pink-300 transition-colors duration-300">
              Books
            </Link>
            <Link href="/categories" className="text-blue-gray-800 hover:text-pink-300 transition-colors duration-300">
              Categories
            </Link>
            <Link href="/about" className="text-blue-gray-800 hover:text-pink-300 transition-colors duration-300">
              About Us
            </Link>
          </div>
        </div>
      )}
    </MTNavbar>
  );
}

export default Navbar