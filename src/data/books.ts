import { Book } from '../types';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Magical Forest Adventure',
    author: 'Elena Ivanova',
    coverImage: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg',
    price: 12.99,
    ageGroup: '3-5',
    pages: 24,
    publisher: 'Bright Stars Publishing',
    year: 2023,
    description: 'Join little fox Mila on her adventure through the magical forest where she meets new friends and learns about the wonders of nature.',
    isFeatured: true,
    category: ['Adventure', 'Nature', 'Friendship']
  },
  {
    id: '2',
    title: 'Counting with Dinosaurs',
    author: 'Alexander Petrov',
    coverImage: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
    price: 10.99,
    ageGroup: '2-4',
    pages: 18,
    publisher: 'Little Learners',
    year: 2022,
    description: 'A fun and engaging way for toddlers to learn to count from one to ten with friendly dinosaurs.',
    isFeatured: true,
    category: ['Educational', 'Numbers', 'Dinosaurs']
  },
  {
    id: '3',
    title: 'Bedtime for Little Bear',
    author: 'Sofia Volkova',
    coverImage: 'https://images.pexels.com/photos/2775558/pexels-photo-2775558.jpeg',
    price: 11.50,
    ageGroup: '1-3',
    pages: 16,
    publisher: 'Sleepy Tales',
    year: 2023,
    description: 'It\'s bedtime for Little Bear, but he\'s not quite ready to sleep. Follow along as his mother helps him prepare for bedtime with a gentle routine.',
    isNewArrival: true,
    category: ['Bedtime', 'Family', 'Animals']
  },
  {
    id: '4',
    title: 'The Brave Little Sailboat',
    author: 'Mikhail Sokolov',
    coverImage: 'https://images.pexels.com/photos/194094/pexels-photo-194094.jpeg',
    price: 13.99,
    ageGroup: '4-6',
    pages: 32,
    publisher: 'Ocean Adventures',
    year: 2021,
    description: 'The story of a little sailboat who dreams of crossing the ocean. A tale of courage, perseverance, and discovery.',
    isNewArrival: true,
    category: ['Adventure', 'Ocean', 'Courage']
  },
  {
    id: '5',
    title: 'Alphabet Animals',
    author: 'Anna Ivanova',
    coverImage: 'https://images.pexels.com/photos/3358707/pexels-photo-3358707.jpeg',
    price: 14.50,
    ageGroup: '3-6',
    pages: 28,
    publisher: 'Bright Stars Publishing',
    year: 2022,
    description: 'Explore the alphabet with a different animal for each letter. Colorful illustrations and fun facts make learning the ABCs a delight.',
    category: ['Educational', 'Animals', 'Alphabet']
  },
  {
    id: '6',
    title: 'The Cloud That Couldn\'t Rain',
    author: 'Dmitry Volkov',
    coverImage: 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg',
    price: 12.75,
    ageGroup: '5-7',
    pages: 36,
    publisher: 'Sky Tales',
    year: 2023,
    description: 'A heartwarming story about a little cloud who struggles to rain until it learns an important lesson about believing in itself.',
    isNewArrival: true,
    category: ['Emotional Growth', 'Nature', 'Self-confidence']
  }
];