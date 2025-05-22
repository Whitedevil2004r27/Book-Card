
import React from 'react';
import { Book } from '@/lib/data';
import { useToast } from "@/hooks/use-toast";

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
  onViewDetails: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onAddToCart, onViewDetails }) => {
  const { toast } = useToast();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(book);
    toast({
      title: "Added to cart",
      description: `${book.title} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <div 
      className="book-card-shadow book-card-hover bg-white rounded-xl overflow-hidden cursor-pointer transform"
      onClick={() => onViewDetails(book)}
    >
      <div className="relative h-80 overflow-hidden">
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
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
