import { Category } from '../types';
import { BookOpen, Compass, Backpack, Moon, BookmarkIcon, Heart, BookOpenText, Rocket } from "lucide-react";

// We'll use the component names as strings for the icon property
export const categories: Category[] = [
  {
    id: '1',
    name: 'Fairy Tales',
    icon: 'BookOpen'
  },
  {
    id: '2',
    name: 'Adventure',
    icon: 'Compass'
  },
  {
    id: '3',
    name: 'Educational',
    icon: 'Backpack'
  },
  {
    id: '4',
    name: 'Bedtime Stories',
    icon: 'Moon'
  },
  {
    id: '5',
    name: 'Picture Books',
    icon: 'BookmarkIcon'
  },
  {
    id: '6',
    name: 'Family',
    icon: 'Heart'
  },
  {
    id: '7',
    name: 'Poetry',
    icon: 'BookOpenText'
  },
  {
    id: '8',
    name: 'Science Fiction',
    icon: 'Rocket'
  }
];

// Helper function to render the appropriate icon component
export const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'BookOpen': return BookOpen;
    case 'Compass': return Compass;
    case 'Backpack': return Backpack;
    case 'Moon': return Moon;
    case 'BookmarkIcon': return BookmarkIcon;
    case 'Heart': return Heart;
    case 'BookOpenText': return BookOpenText;
    case 'Rocket': return Rocket;
    default: return BookOpen;
  }
};