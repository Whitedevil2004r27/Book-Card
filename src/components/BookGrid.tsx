
import React from 'react';
import { Book } from '@/lib/data';
import BookCard from './BookCard';

interface BookGridProps {
  books: Book[];
  onAddToCart: (book: Book) => void;
  onViewDetails: (book: Book) => void;
  onImageUpdate?: (bookId: number, newImageUrl: string) => void;
}

const BookGrid: React.FC<BookGridProps> = ({ 
  books, 
  onAddToCart, 
  onViewDetails, 
  onImageUpdate 
}) => {
  return (
    <section className="py-16 px-6 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold mb-2 dark:text-white">Browse BookVerse</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">Explore our extensive collection of books across various genres.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map(book => (
            <BookCard 
              key={book.id}
              book={book}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
              onImageUpdate={onImageUpdate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookGrid;
