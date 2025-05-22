
import React from 'react';
import { Book } from '@/lib/data';
import BookCard from './BookCard';

interface FeaturedBooksProps {
  books: Book[];
  onAddToCart: (book: Book) => void;
  onViewDetails: (book: Book) => void;
}

const FeaturedBooks: React.FC<FeaturedBooksProps> = ({ books, onAddToCart, onViewDetails }) => {
  const featuredBooks = books.filter(book => book.featured);
  
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold mb-2">BookVerse Picks</h2>
        <p className="text-gray-600 mb-10 max-w-2xl">Discover our handpicked selection of must-read books that everyone's talking about.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map(book => (
            <BookCard 
              key={book.id}
              book={book}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
