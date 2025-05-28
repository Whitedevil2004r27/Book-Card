
import React, { useState } from 'react';
import { Book } from '@/lib/data';
import { useToast } from "@/hooks/use-toast";
import BookImageManager from './BookImageManager';

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
  onViewDetails: (book: Book) => void;
  onImageUpdate?: (bookId: number, newImageUrl: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ 
  book, 
  onAddToCart, 
  onViewDetails, 
  onImageUpdate 
}) => {
  const { toast } = useToast();
  const [imageError, setImageError] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(book);
    toast({
      title: "Added to cart",
      description: `${book.title} has been added to your cart.`,
      duration: 3000,
    });
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      className="book-card-shadow book-card-hover bg-white rounded-xl overflow-hidden cursor-pointer transform group relative"
      onClick={() => onViewDetails(book)}
    >
      <div className="relative h-80 overflow-hidden">
        {onImageUpdate && (
          <BookImageManager 
            book={book} 
            onImageUpdate={onImageUpdate}
          />
        )}
        
        {!imageError ? (
          <img 
            src={book.coverImage} 
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 text-lg font-medium text-center px-4">{book.title}</p>
          </div>
        )}
        {book.featured && (
          <div className="absolute top-4 left-0 bg-accent text-white px-4 py-1 rounded-r-full font-bold">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold mb-1 line-clamp-1">{book.title}</h3>
        <p className="text-gray-600 mb-2">{book.author}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-dark">${book.price.toFixed(2)}</p>
          <button 
            className="bg-accent hover:bg-accent-dark text-white font-bold px-4 py-2 rounded-lg transition-colors"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
