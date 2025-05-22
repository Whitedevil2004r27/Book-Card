
import React from 'react';
import { Book } from '@/lib/data';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface BookDetailProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (book: Book) => void;
}

const BookDetail: React.FC<BookDetailProps> = ({ book, isOpen, onClose, onAddToCart }) => {
  if (!book) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{book.title}</DialogTitle>
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div className="flex justify-center">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full max-w-[300px] object-cover rounded-lg shadow-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x450?text=' + encodeURIComponent(book.title);
              }}
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">{book.title}</h3>
            <p className="text-xl text-gray-700">by {book.author}</p>
            
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 ${i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">{book.rating} ({book.pages} pages)</p>
            </div>
            
            <p className="text-2xl font-bold text-primary">${book.price.toFixed(2)}</p>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Genre: {book.genre}</p>
              <p className="text-sm font-medium text-gray-500">Published: {book.publicationYear}</p>
            </div>
            
            <p className="text-gray-700">{book.description}</p>
            
            <button 
              onClick={() => {
                onAddToCart(book);
                onClose();
              }}
              className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookDetail;
